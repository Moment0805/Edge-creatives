'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei'

export default function HeroShape() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <>
      <Environment preset="city" />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.5}>
          <torusKnotGeometry args={[1, 0.3, 128, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.1}
            temporalDistortion={0.05}
            transmission={1}
            ior={1.5}
            color="#ffffff"
          />
        </mesh>
      </Float>
    </>
  )
}
