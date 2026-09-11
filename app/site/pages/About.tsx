import { school, values, leadership } from "../data/content"
import type { NavigateFn } from "../types"

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

export default function About({ navigate }: Props) {
  return (
    <div id="main-content">
      {/* Page hero */}
      <div className="relative bg-primary pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">About</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">About the School</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              A School Shaped by Purpose
            </h1>
            <p className="font-sans text-lg text-white/65 leading-relaxed">
              Learn about our history, the values that define us, the person we are named after,
              and the team that leads our school community today.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }}
        />
      </div>

      {/* School story */}
      <section id="school-history" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel number="01" label="Our Story" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                {school.about}
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                The school operates as a government-aided institution under the Ministry of Education,
                Kenya, following the national curriculum leading to the Kenya Certificate of Secondary
                Education (KCSE) at the end of Form Four.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                We serve students from across the region, providing a structured boarding environment,
                quality academic instruction, and a wide range of co-curricular opportunities that
                prepare graduates for higher education and productive life in Kenya and beyond.
              </p>
            </div>

            <div>
              <SectionLabel number="02" label="Named After" />
              <div className="relative">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-accent/30 rounded" />
                <div className="pl-6">
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Rt. Rev. Alexander Kipsang Muge
                  </h2>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                    {school.namedAfter}
                  </p>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    The school carries forward Bishop Muge&apos;s commitment to the people of the region
                    by providing quality education that opens doors and builds futures for the young
                    women entrusted to our care.
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl bg-secondary border border-border">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">School Profile</p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    { label: "Established", value: school.established },
                    { label: "Type", value: school.type },
                    { label: "Category", value: school.category },
                    { label: "Certificate", value: "KCSE" },
                    { label: "Location", value: `${school.location.region}, Kenya` },
                    { label: "Examining Body", value: "KNEC" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt className="font-sans text-xs text-muted-foreground mb-0.5">{label}</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section id="mission-values" className="scroll-mt-20 bg-card py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" label="Mission, Vision & Values" />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                heading: "Mission",
                text: "To create an intellectual and cultural climate that enhances an all-round excellent performance.",
                icon: (
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                heading: "Vision",
                text: "To produce successful citizens empowered to adapt to the changing times.",
                icon: (
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                heading: "Motto",
                text: "Truth and excellence",
                icon: (
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.heading} className="p-8 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.heading}</h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="flex gap-4 p-5 rounded-lg border border-border hover:border-primary/20 transition-colors">
                <div className="font-sans text-xs text-accent/60 font-semibold tracking-widest mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1.5">{v.title}</h4>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="school-leadership" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="04" label="School Leadership" />
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Our Leadership Team
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              The school is led by an experienced team of educators committed to maintaining high
              standards of teaching, pastoral care, and school administration.
            </p>
          </div>

          <div className="flex justify-center">
            {leadership.map((person) => (
              <div key={person.title} className="group w-full max-w-2xl">
                <div className="rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow p-10 md:p-14 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s8-4.5 8-11a8 8 0 0 0-16 0c0 6.5 8 11 8 11z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01M8.5 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" />
                      </svg>
                    </div>
                  </div>

                  <div className="font-sans text-xs tracking-[0.22em] uppercase text-accent font-semibold mb-3">
                    {person.title}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    {person.name}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
            Ready to Learn More?
          </h2>
          <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
            Explore our academic programme or find out how your daughter can join our school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("academics")}
              className="px-7 py-3 bg-primary text-white rounded font-sans font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore Academics
            </button>
            <button
              onClick={() => navigate("admissions")}
              className="px-7 py-3 bg-accent text-white rounded font-sans font-semibold text-sm hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Admissions Information
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
