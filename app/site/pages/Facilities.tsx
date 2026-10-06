import { facilities } from "../data/content"
import type { NavigateFn } from "../types"
import Image from "next/image"

interface Props {
  navigate: NavigateFn
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-sans text-xs tracking-[0.22em] uppercase text-accent font-semibold">
        {number} — {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

export default function Facilities({ navigate }: Props) {
  return (
    <div id="main-content">
      {/* Page hero */}
      <div className="relative bg-primary pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">Facilities</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">Campus & Facilities</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              A Campus Built for Learning
            </h1>
            <p className="font-sans text-lg text-white/65 leading-relaxed">
              Our school provides the physical environment students need to study effectively,
              develop their talents, and live comfortably in a structured boarding setting.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }} />
      </div>

      {/* Intro */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="01" label="Overview" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Environment Shapes Learning
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                At Bishop Alexander Muge Girls Senior School, we believe the physical environment
                has a direct impact on how students learn, how they feel, and how they grow.
                Our campus facilities are maintained to support both academic rigour and student wellbeing.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                We continually work to improve our facilities in line with the needs of our students
                and the school&apos;s long-standing commitment to a supportive learning environment.
              </p>
              <p className="font-sans text-sm text-muted-foreground italic">
                Note: Facility listings reflect confirmed information. Official school confirmation
                of specific facilities, capacities, and equipment to be provided by administration.
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              <img
                src="/images/classes.png"
                alt="School campus aerial view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities by category */}
      {facilities.map((category, i) => (
        <section
          key={category.category}
          className={[
            "py-20 lg:py-28 border-t border-border",
            i % 2 === 0 ? "bg-card" : "bg-background",
          ].join(" ")}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel number={String(i + 2).padStart(2, "0")} label={category.category} />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Items */}
              <div className={i % 2 !== 0 ? "order-last lg:order-first" : ""}>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                  {category.category} Facilities
                </h2>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex gap-5 p-5 rounded-lg border border-border bg-background hover:border-primary/20 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-foreground mb-1.5">{item.name}</h3>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo */}
              <div className={i % 2 !== 0 ? "" : "order-last"}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={`${category.category} facilities`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-muted py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Want to See Our Campus in Person?
              </h2>
              <p className="font-sans text-base text-muted-foreground">
                Arrange a visit or attend our Annual Open Day to tour the school grounds.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <button
                onClick={() => navigate("contact")}
                className="px-6 py-3 bg-primary text-white rounded font-sans font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Arrange a Visit
              </button>
              <button
                onClick={() => navigate("admissions")}
                className="px-6 py-3 border border-border bg-card text-foreground rounded font-sans font-semibold text-sm hover:border-primary/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Admissions →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
