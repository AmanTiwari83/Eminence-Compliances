import React from 'react'
import Heading from '../../common/Heading'

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <Heading
          label="Why Choose Eminence?"
          title={"Why Businesses Trust Our BIS Certification Expertise"}
          description={`At Eminence Global Compliances, we simplify complex regulatory approvals and provide end-to-end BIS certification support for manufacturers, importers, and global brands.`}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {[
            {
              title: "Complete BIS Certification Support",
              desc: "From documentation and application filing to testing and final approval, we manage the entire BIS certification process."
            },
            {
              title: "Expert Regulatory Consultants",
              desc: "Our experienced team provides professional guidance for BIS, CRS, ISI Mark, FMCS, and other compliance approvals."
            },
            {
              title: "Fast & Hassle-Free Approvals",
              desc: "We streamline procedures to reduce delays and help businesses obtain certifications quickly and efficiently."
            },
            {
              title: "Global Manufacturer Assistance",
              desc: "Supporting Indian and international manufacturers with product compliance and market-entry approvals."
            },
            {
              title: "Accurate Documentation & Testing",
              desc: "We ensure all technical documents, test reports, and compliance requirements meet BIS standards."
            },
            {
              title: "Trusted Long-Term Compliance Partner",
              desc: "Beyond certification, we assist with renewals, updates, audits, and ongoing regulatory compliance support."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl border border-primary-800/10
                bg-white p-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Soft hover glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-secondary-500/10 to-transparent
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {/* Number badge */}
              <div
                className="
                  relative z-10 mb-4 flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-secondary-500/10 text-secondary-600
                  font-semibold text-base
                "
              >
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="relative z-10 mb-2 text-lg font-semibold text-primary-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm leading-relaxed text-primary-800/70">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs