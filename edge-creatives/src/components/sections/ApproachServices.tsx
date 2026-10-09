export default function ApproachServices() {
  return (
    <section className="w-full bg-white text-[#0A0A0A]">

      {/* ─── Approach ─── */}
      <div className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#0A0A0A]/10">

        <div className="md:col-span-4">
          <h2 className="text-[56px] md:text-[64px] font-normal leading-none tracking-tight">
            Approach
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-5 text-[15px] leading-relaxed text-[#0A0A0A]/75">
          <p>
            We live in a time where everyone has a platform and everyone is using it. Every brand is talking, every business is posting, every product is promising something. The result isn&apos;t connection, it&apos;s clutter. In a market this saturated, volume is no longer an advantage. Being loud gets you noticed for a moment; being clear gets you remembered. Most brands default to noise because silence feels like invisibility, but the brands that last are the ones that knew exactly what they stood for and meant it. That&apos;s what Edge Studio is built around—helping brands find the truest version of themselves and express it with enough clarity that it cuts through without ever needing to shout. Not aggression, not provocation. Just precision. The point where identity stops being vague and starts being undeniable.
          </p>
          <p>
            We sit at the intersection of strategy and craft, building brand identities, visual systems, and web experiences for businesses that are serious about how they show up. Our process begins long before anything is drawn or designed. It begins with questions. What is this business actually about beneath the elevator pitch? Who does it genuinely serve? We stay with those questions until the answers are clear, because great design built on a weak foundation is just beautiful confusion. And once the brand is built, we make sure the business behind it runs just as sharply—mapping workflows, connecting tools, and building systems that remove friction so teams can focus on what actually matters. Every project is an opportunity to make something specific, considered, and built to last. That&apos;s what Edge Studio is here to do.
          </p>
        </div>

      </div>

      {/* ─── Services ─── */}
      <div className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10">

        <div className="md:col-span-4">
          <h2 className="text-[56px] md:text-[64px] font-normal leading-none tracking-tight">
            Services
          </h2>
        </div>

        {/* 3-column services grid inside right col */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Strategy */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[15px] font-medium text-[#0A0A0A]">Strategy</h3>
            <ul className="flex flex-col gap-1.5 text-[14px] text-[#0A0A0A]/60 leading-relaxed">
              <li>Brand/Message Discovery</li>
              <li>Design Research and Insight</li>
              <li>Stakeholder Workshops</li>
            </ul>
          </div>

          {/* Automation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[15px] font-medium text-[#0A0A0A]">Automation</h3>
            <ul className="flex flex-col gap-1.5 text-[14px] text-[#0A0A0A]/60 leading-relaxed">
              <li>Workflow Mapping and Audit</li>
              <li>Process Automation Design</li>
              <li>Tool Integration and Setup</li>
              <li>Custom Dashboard and Internal Design</li>
              <li>Ongoing System Optimisation</li>
            </ul>
          </div>

          {/* Design */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[15px] font-medium text-[#0A0A0A]">Design</h3>
            <ul className="flex flex-col gap-1.5 text-[14px] text-[#0A0A0A]/60 leading-relaxed">
              <li>Logo Design and Animation</li>
              <li>Art Direction</li>
              <li>Motion Design</li>
              <li>Brand Conscious UI/UX</li>
              <li>Interaction Design</li>
              <li>Website Design and development</li>
              <li>Experience Design</li>
              <li>Packaging Design</li>
              <li>Graphic Design</li>
              <li>Merchandise/Collateral Design</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  )
}
