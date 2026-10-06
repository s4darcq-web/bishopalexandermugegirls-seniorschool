import { news, events } from "../data/content"
import type { NavigateFn } from "../types"
import SchoolGallery from "../components/SchoolGallery"

interface Props {
  navigate: NavigateFn
  targetSection?: string
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

export default function NewsEvents({ navigate, targetSection }: Props) {
  return (
    <div id="main-content">
      {/* Page hero */}
      <div className="relative bg-primary pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">News & Events</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">School Updates</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              News, Announcements & Events
            </h1>
            <p className="font-sans text-lg text-white/65 leading-relaxed">
              Stay up to date with school news, important announcements, and the school calendar.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }} />
      </div>

      {/* Announcements banner */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>
            <span className="font-sans text-sm font-semibold text-accent">Phased Senior School transition: </span>
            <span className="font-sans text-sm text-muted-foreground">
              The new Grade 10 intake enters the CBC pathway while current Forms 3 and 4 complete the outgoing 8-4-4 cohort and KCSE. Contact the school for placement information.{" "}
              <button onClick={() => navigate("admissions")} className="text-accent font-semibold hover:underline focus:outline-none focus-visible:underline">
                Learn more →
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* News */}
      <section id="latest-news" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="01" label="School News" />
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl font-semibold text-foreground">Latest News</h2>
            <div className="font-sans text-sm text-muted-foreground">
              {news.length} article{news.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-md transition-all">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-xs font-semibold text-accent tracking-wide uppercase px-2.5 py-1 rounded-full bg-accent/10">
                      {item.category}
                    </span>
                    <time className="font-sans text-xs text-muted-foreground" dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state if no news */}
          {news.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              <p className="font-sans text-base">No news articles available at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Events */}
      <section id="upcoming-events" className="scroll-mt-20 bg-card py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="02" label="School Calendar" />
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Upcoming Events
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Key dates, school events, and scheduled activities for the academic year. Contact the
              school office for confirmed dates and additional details.
            </p>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="group flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-border bg-background hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="w-full sm:w-24 flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex flex-col items-center justify-center border border-primary/10">
                    <svg className="w-6 h-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
                    </svg>
                    <span className="font-sans text-xs text-primary font-semibold text-center leading-tight px-1">{event.date.split(" ")[0]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                    <span className="font-sans text-sm text-muted-foreground flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.date}
                      {event.time !== "[PLACEHOLDER]" ? ` · ${event.time}` : ""}
                    </span>
                    <span className="font-sans text-sm text-muted-foreground flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-20">
              <p className="font-sans text-base text-muted-foreground">No upcoming events to display. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      <SchoolGallery key={targetSection ?? "default"} targetSection={targetSection} />

      {/* Contact for updates */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
            Stay Informed
          </h2>
          <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
            For the most current news, announcements, and event dates, contact the school
            administration office directly or follow official school communications.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="px-8 py-3 bg-primary text-white rounded font-sans font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact the School
          </button>
        </div>
      </section>
    </div>
  )
}
