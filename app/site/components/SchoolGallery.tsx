"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { galleryCategories, galleryItems } from "../data/content"

const filters = ["All", ...galleryCategories] as const
type GalleryFilter = (typeof filters)[number]

interface Props {
  targetSection?: string
}

function categoryId(category: GalleryFilter) {
  return `gallery-category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`
}

function categoryFromSection(section?: string): GalleryFilter {
  return filters.find((filter) => categoryId(filter) === section) ?? "All"
}

export default function SchoolGallery({ targetSection }: Props) {
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>(() => categoryFromSection(targetSection))
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)

  const visibleItems = useMemo(
    () => galleryItems.filter((item) => item.published && (activeCategory === "All" || item.category === activeCategory)),
    [activeCategory],
  )

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null)
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => current === null ? null : (current - 1 + visibleItems.length) % visibleItems.length)
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => current === null ? null : (current + 1) % visibleItems.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, visibleItems.length])

  const viewFullGallery = () => {
    setActiveCategory("All")
    setExpanded(false)
    document.getElementById("school-gallery-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const galleryItemsToShow = visibleItems.slice(0, expanded ? visibleItems.length : 9)
  const selectedItem = activeIndex === null ? null : visibleItems[activeIndex]

  return (
    <>
      <section id="school-gallery" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-accent font-semibold">
                  03 — School Gallery
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-muted-foreground mb-3">
                Learning, leading, and belonging
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-5">
                Moments at Bishop Alexander Muge
              </h2>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
                A glimpse into the people and places that make our school community: moments of
                discovery, achievement, leadership, and life together.
              </p>
            </div>
            <button
              type="button"
              onClick={viewFullGallery}
              className="inline-flex w-fit flex-shrink-0 items-center gap-2 rounded border border-primary/20 px-5 py-3 font-sans text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter gallery by category">
            {filters.map((category) => (
              <button
                id={categoryId(category)}
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category)
                  setActiveIndex(null)
                  setExpanded(false)
                }}
                aria-pressed={activeCategory === category}
                className={[
                  "flex-shrink-0 rounded-full border px-4 py-2 font-sans text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeCategory === category
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
                ].join(" ")}
              >
                {category}
              </button>
            ))}
          </div>

          <div id="school-gallery-grid" className="scroll-mt-24">
            {visibleItems.length > 0 ? (
              <>
                <article className="group mb-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(0)}
                    aria-label={`View photograph: ${visibleItems[0].title}`}
                    className="grid w-full text-left md:grid-cols-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  >
                    <div className="relative h-64 overflow-hidden bg-muted sm:h-80 md:col-span-3 md:h-[25rem]">
                      <Image
                        src={visibleItems[0].image}
                        alt={visibleItems[0].alt}
                        fill
                        priority
                        sizes="(max-width: 767px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r" />
                      <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 font-sans text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                        {visibleItems[0].category}
                      </span>
                      <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <circle cx="11" cy="11" r="6.5" />
                          <path strokeLinecap="round" d="m16 16 4 4M11 8.5v5M8.5 11h5" />
                        </svg>
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 md:col-span-2">
                      <span className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Featured moment
                      </span>
                      <h3 className="mb-4 font-serif text-2xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {visibleItems[0].title}
                      </h3>
                      <p className="font-sans text-base leading-relaxed text-muted-foreground">
                        {visibleItems[0].description}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary">
                        Explore photograph
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </article>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {galleryItemsToShow.slice(1).map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index + 1)}
                      aria-label={`View photograph: ${item.title}`}
                      className={[
                        "group relative isolate aspect-[4/3] overflow-hidden rounded-xl bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        !expanded && index >= 5 ? "hidden sm:block" : "",
                      ].join(" ")}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <span className="mb-2 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <circle cx="11" cy="11" r="6.5" />
                          <path strokeLinecap="round" d="m16 16 4 4M11 8.5v5M8.5 11h5" />
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
                {visibleItems.length > 6 && (
                  <div className="mt-10 flex justify-center">
                    {visibleItems.length > 6 && (
                      <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        className="inline-flex items-center gap-2 rounded border border-primary/20 px-6 py-3 font-sans text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
                      >
                        {expanded ? "Show fewer photos" : "View more photos"}
                        <svg
                          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                    {visibleItems.length > 9 && (
                      <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        className="hidden items-center gap-2 rounded border border-primary/20 px-6 py-3 font-sans text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
                      >
                        {expanded ? "Show fewer photos" : "View more photos"}
                        <svg
                          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <p className="rounded-xl border border-border bg-card px-6 py-12 text-center font-sans text-muted-foreground">
                No published photographs in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {selectedItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="School gallery photograph"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {visibleItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex((activeIndex - 1 + visibleItems.length) % visibleItems.length)
                }}
                aria-label="Previous photograph"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-12 sm:w-12"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex((activeIndex + 1) % visibleItems.length)
                }}
                aria-label="Next photograph"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <div
            className="flex w-full max-w-6xl flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[min(68vh,720px)] w-full">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="max-w-2xl text-center text-white">
              <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                {selectedItem.category} · {activeIndex + 1} / {visibleItems.length}
              </p>
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">{selectedItem.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
