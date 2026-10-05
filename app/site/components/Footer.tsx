import Image from "next/image"
import { school } from "../data/content"
import type { NavigateFn } from "../types"
import logo from "@/public/images/schoologo.jpg"

interface FooterProps {
  navigate: NavigateFn
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={logo}
                alt=""
                className="w-20 h-20 rounded-full object-contain bg-white flex-shrink-0"
              />
              <div>
                <div className="font-serif font-semibold text-sm text-white leading-tight">Bishop Alexander Muge</div>
                <div className="text-xs text-white/50 font-sans">Girls Senior School</div>
              </div>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
              Cultivating Kenya&apos;s next generation of principled, capable, and compassionate women leaders.
            </p>
            <div className="text-xs font-sans text-white/40 tracking-widest uppercase">
              Eldoret Diocese · Kenya
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.18em] uppercase text-white/40 mb-5">School</h3>
            <ul className="space-y-3">
              {[
                { label: "About the School", page: "about" as const },
                { label: "Academics", page: "academics" as const },
                { label: "Student Life", page: "student-life" as const },
                { label: "Facilities", page: "facilities" as const },
                { label: "News & Events", page: "news-events" as const },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.18em] uppercase text-white/40 mb-5">Admissions</h3>
            <ul className="space-y-3">
              {[
                "How to Apply",
                "Requirements",
                "Important Dates",
                "FAQs",
                "Contact Admissions",
              ].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => navigate("admissions")}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.18em] uppercase text-white/40 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-sans text-sm text-white/60 leading-relaxed">
                  {school.location.address}<br />{school.location.country}
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="font-sans text-sm text-white/60">{school.contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="font-sans text-sm text-white/60">{school.contact.email}</span>
              </li>
            </ul>
            <button
              onClick={() => navigate("contact")}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded text-sm font-sans text-white/80 hover:border-white/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get in touch
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {year} Bishop Alexander Muge Girls Senior School. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-end">
            <button className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors focus:outline-none focus-visible:underline">
              Privacy Policy
            </button>
            <button className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors focus:outline-none focus-visible:underline">
              Terms of Use
            </button>
            <a
              href="https://mayvensolutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors focus:outline-none focus-visible:underline"
            >
              Website created and managed by <span className="text-white/70">mayvensolutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
