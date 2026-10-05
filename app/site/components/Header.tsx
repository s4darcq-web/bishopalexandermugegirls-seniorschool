"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import type { Page, NavigateFn } from "../types"
import logo from "@/public/images/schoologo.jpg"

interface HeaderProps {
  currentPage: Page
  navigate: NavigateFn
}

const navItems = [
  { label: "Home", page: "home" as Page },
  {
    label: "About",
    page: "about" as Page,
    children: [
      { label: "School History", page: "about" as Page, section: "school-history" },
      { label: "Mission & Values", page: "about" as Page, section: "mission-values" },
      { label: "Leadership", page: "about" as Page, section: "school-leadership" },
    ],
  },
  {
    label: "Academics",
    page: "academics" as Page,
    children: [
      { label: "Curriculum", page: "academics" as Page, section: "curriculum" },
      { label: "Departments", page: "academics" as Page, section: "departments" },
      { label: "Co-Curricular", page: "academics" as Page, section: "co-curricular" },
      { label: "Guidance & Counselling", page: "academics" as Page, section: "guidance-counselling" },
    ],
  },
  {
    label: "Student Life",
    page: "student-life" as Page,
    children: [
      { label: "Clubs & Activities", page: "student-life" as Page, section: "clubs-activities" },
      { label: "Sports", page: "student-life" as Page, section: "sports" },
      { label: "Student Leadership", page: "student-life" as Page, section: "student-leadership" },
    ],
  },
  { label: "Facilities", page: "facilities" as Page },
  {
    label: "News & Events",
    page: "news-events" as Page,
    children: [
      { label: "Latest News", page: "news-events" as Page, section: "latest-news" },
      { label: "Upcoming Events", page: "news-events" as Page, section: "upcoming-events" },
      {
        label: "School Gallery",
        page: "news-events" as Page,
        section: "school-gallery",
        children: [
          { label: "Academics", page: "news-events" as Page, section: "gallery-category-academics" },
          { label: "Sports", page: "news-events" as Page, section: "gallery-category-sports" },
          { label: "Clubs & Societies", page: "news-events" as Page, section: "gallery-category-clubs-societies" },
          { label: "Student Life", page: "news-events" as Page, section: "gallery-category-student-life" },
          { label: "Leadership", page: "news-events" as Page, section: "gallery-category-leadership" },
          { label: "Events & Celebrations", page: "news-events" as Page, section: "gallery-category-events-celebrations" },
          { label: "Campus & Facilities", page: "news-events" as Page, section: "gallery-category-campus-facilities" },
        ],
      },
    ],
  },
  { label: "Contact", page: "contact" as Page },
]

export default function Header({ currentPage, navigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isHome = currentPage === "home"

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const solid = !isHome || scrolled

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const go = (page: Page, section?: string) => {
    navigate(page, section)
    setOpenDropdown(null)
    setMobileOpen(false)
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded font-sans text-sm"
      >
        Skip to main content
      </a>

      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          solid
            ? "bg-white border-b border-border shadow-sm"
            : "bg-transparent border-b border-white/10",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => go("home")}
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              aria-label="Bishop Alexander Muge Girls Senior School — Home"
            >
              <Image
                src={logo}
                alt=""
                className="w-14 h-14 rounded-full object-contain bg-white flex-shrink-0"
              />
              <div className="hidden sm:block">
                <div
                  className={[
                    "font-serif font-semibold text-sm leading-tight",
                    solid ? "text-primary" : "text-white",
                  ].join(" ")}
                >
                  Bishop Alexander Muge
                </div>
                <div
                  className={[
                    "font-sans text-xs tracking-wide",
                    solid ? "text-muted-foreground" : "text-white/70",
                  ].join(" ")}
                >
                  Girls Senior School
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => go(item.page)}
                      className={[
                        "flex items-center gap-1 px-3 py-2 rounded text-sm font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        solid
                          ? currentPage === item.page
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                          : currentPage === item.page
                          ? "text-white"
                          : "text-white/80 hover:text-white",
                      ].join(" ")}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={[
                          "w-3.5 h-3.5 transition-transform",
                          openDropdown === item.label ? "rotate-180" : "",
                        ].join(" ")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-lg py-1 z-50"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children.map((child) => (
                          <div key={child.label}>
                            <button
                              onClick={() => go(child.page, child.section)}
                              className="w-full text-left px-4 py-2.5 text-sm font-sans text-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              {child.label}
                            </button>
                            {"children" in child && child.children && (
                              <div className="ml-4 mb-1 border-l border-border pl-2">
                                {child.children.map((nestedChild) => (
                                  <button
                                    key={nestedChild.label}
                                    onClick={() => go(nestedChild.page, nestedChild.section)}
                                    className="w-full text-left px-3 py-2 text-xs font-sans text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                                  >
                                    {nestedChild.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => go(item.page)}
                    className={[
                      "px-3 py-2 rounded text-sm font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      solid
                        ? currentPage === item.page
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                        : currentPage === item.page
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                )
              )}
              <button
                onClick={() => go("admissions")}
                className="ml-3 px-4 py-2 rounded text-sm font-sans font-semibold bg-accent text-white hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Admissions
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className={[
                "xl:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                solid ? "text-foreground" : "text-white",
              ].join(" ")}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex flex-col xl:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="" className="w-18 h-18 rounded-full object-contain bg-white flex-shrink-0" />
              <div>
                <div className="font-serif text-sm font-semibold text-white leading-tight">Bishop Alexander Muge</div>
                <div className="text-xs text-white/60 font-sans">Girls Senior School</div>
              </div>
            </div>
            <button
              className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => go(item.page)}
                  className="w-full text-left px-4 py-3.5 rounded-lg text-white font-sans font-medium text-base hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.label}
                </button>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-0.5 border-l border-white/20 pl-4">
                    {item.children.map((child) => (
                      <div key={child.label}>
                        <button
                          onClick={() => go(child.page, child.section)}
                          className="w-full text-left px-3 py-2.5 rounded text-white/70 font-sans text-sm hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          {child.label}
                        </button>
                        {"children" in child && child.children && (
                          <div className="ml-3 border-l border-white/20 pl-2">
                            {child.children.map((nestedChild) => (
                              <button
                                key={nestedChild.label}
                                onClick={() => go(nestedChild.page, nestedChild.section)}
                                className="w-full text-left px-3 py-2 rounded text-white/50 font-sans text-xs hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                              >
                                {nestedChild.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => go("admissions")}
              className="w-full py-3.5 rounded-lg bg-accent text-white font-sans font-semibold text-base hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Admissions — Apply Now
            </button>
          </div>
        </div>
      )}
    </>
  )
}
