"use client"

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

export default function Admissions({ navigate }: Props) {
  return (
    <div id="main-content">
      <div className="relative bg-primary pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">Admissions</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">Admissions</p>
              <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                Join Our School Community
              </h1>
              <p className="font-sans text-lg text-white/65 leading-relaxed">
                For admissions of Grade 10 or student transfer, contact or visit the school for more information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
              <a
                href="mailto:bamugegirls@gmail.com?subject=Admissions%20Enquiry"
                className="px-6 py-3.5 bg-accent text-white rounded font-sans font-semibold text-sm text-center hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Submit an Enquiry
              </a>
              <button
                onClick={() => navigate("contact")}
                className="px-6 py-3.5 border border-white/30 text-white rounded font-sans font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }} />
      </div>

      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="01" label="Admissions Information" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Grade 10 and Student Transfer
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                For admissions of Grade 10 or student transfer, contact the school office or visit the
                school for more information about the process and current availability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:bamugegirls@gmail.com?subject=Admissions%20Enquiry"
                  className="px-6 py-3 bg-primary text-white rounded font-sans font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Email the School
                </a>
                <button
                  onClick={() => navigate("contact")}
                  className="px-6 py-3 border border-border rounded font-sans font-semibold text-sm text-foreground hover:border-primary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Visit or Contact
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Admissions Office
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-sans text-xs uppercase text-muted-foreground mb-1">Email</div>
                  <div className="font-sans text-sm font-semibold text-foreground">bamugegirls@gmail.com</div>
                </div>
                <div>
                  <div className="font-sans text-xs uppercase text-muted-foreground mb-1">Phone</div>
                  <div className="font-sans text-sm font-semibold text-foreground">+254748426865 / +254723708281</div>
                </div>
                <div>
                  <div className="font-sans text-xs uppercase text-muted-foreground mb-1">Location</div>
                  <div className="font-sans text-sm font-semibold text-foreground">Trans-Nzoia, Kenya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
