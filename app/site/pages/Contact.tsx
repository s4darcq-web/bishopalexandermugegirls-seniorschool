"use client"

import { school } from "../data/content"
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

export default function Contact({ navigate }: Props) {
  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: "Address",
      value: school.location.address,
      sub: `${school.location.region}, ${school.location.country}`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: "Telephone",
      value: school.contact.phone,
      sub: "School office hours",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      value: school.contact.email,
      sub: "General and admissions enquiries",
    },
  ]

  return (
    <div id="main-content">
      {/* Page hero */}
      <div className="relative bg-primary pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">Contact Us</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              We&apos;re Here to Help
            </h1>
            <p className="font-sans text-lg text-white/65 leading-relaxed">
              Reach out to our administration office for enquiries about admissions, school life,
              or any other information about Bishop Alexander Muge Girls Senior School.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }} />
      </div>

      {/* Contact details + form */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <SectionLabel number="01" label="Contact Details" />
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">{item.label}</div>
                      <div className="font-sans text-sm font-semibold text-foreground">{item.value}</div>
                      {item.sub && <div className="font-sans text-xs text-muted-foreground mt-0.5">{item.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="mt-8 p-5 rounded-xl bg-secondary border border-border">
                <h3 className="font-sans font-semibold text-foreground mb-4">Office Hours</h3>
                <dl className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <dt className="font-sans text-sm text-muted-foreground">{day}</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Admissions shortcut */}
              <div className="mt-6 p-5 rounded-xl border border-accent/20 bg-accent/5">
                <h3 className="font-sans font-semibold text-foreground mb-2">Admissions Enquiry</h3>
                <p className="font-sans text-sm text-muted-foreground mb-4">
                  Looking to enrol your daughter? Use our dedicated admissions enquiry form.
                </p>
                <button
                  onClick={() => navigate("admissions")}
                  className="font-sans text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:underline"
                >
                  Admissions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <SectionLabel number="03" label="Location" />
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">Find Us</h2>
          <div className="aspect-video max-h-96 rounded-xl overflow-hidden bg-muted border border-border">
            <iframe
              title="Bishop Alexander Muge Girls Senior School location"
              src={school.location.mapsUrl ?? "https://www.google.com/maps?q=Trans-Nzoia%20Kenya&output=embed"}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
