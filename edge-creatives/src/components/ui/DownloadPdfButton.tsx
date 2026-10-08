'use client'

import { useState } from 'react'

interface DownloadPdfButtonProps {
  filename: string
  targetId: string
}

export default function DownloadPdfButton({ filename, targetId }: DownloadPdfButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      const element = document.getElementById(targetId)
      if (!element) throw new Error('Target element not found')

      // Dynamic import to avoid SSR issues with canvas and jspdf
      const html2canvas = (await import('html2canvas')).default
      const jsPDF = (await import('jspdf')).default

      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL('image/jpeg', 1.0)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const imgHeight = (canvas.height * pdfWidth) / canvas.width
      
      // Generate watermark Data URL
      const watermarkData = await new Promise<string>((resolve) => {
        const img = new window.Image()
        img.onload = () => {
          const wCanvas = document.createElement('canvas')
          // Use high resolution for watermark canvas
          wCanvas.width = pdfWidth * 4
          wCanvas.height = pageHeight * 4
          const ctx = wCanvas.getContext('2d')
          if (ctx) {
            ctx.globalAlpha = 0.04 // 4% opacity for subtle watermark
            const drawWidth = wCanvas.width * 0.7 // 70% of width
            const drawHeight = (img.height * drawWidth) / img.width
            ctx.translate(wCanvas.width / 2, wCanvas.height / 2)
            ctx.rotate(-Math.PI / 6) // -30 degrees
            ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight)
            resolve(wCanvas.toDataURL('image/png'))
          } else {
            resolve('') // Fallback
          }
        }
        img.onerror = () => resolve('') // Fallback if image fails to load
        img.src = '/logo black.svg'
      })

      let heightLeft = imgHeight
      let position = 0

      // Add first page
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight)
      if (watermarkData) {
        pdf.addImage(watermarkData, 'PNG', 0, 0, pdfWidth, pageHeight)
      }
      heightLeft -= pageHeight

      // Add subsequent pages if content overflows
      while (heightLeft > 0) {
        position -= pageHeight
        pdf.addPage()
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight)
        if (watermarkData) {
          pdf.addImage(watermarkData, 'PNG', 0, 0, pdfWidth, pageHeight)
        }
        heightLeft -= pageHeight
      }

      pdf.save(`${filename}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-900 rounded-full px-5 py-2 text-sm font-medium transition-colors disabled:opacity-50"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {isGenerating ? 'Generating...' : 'Download PDF'}
    </button>
  )
}
