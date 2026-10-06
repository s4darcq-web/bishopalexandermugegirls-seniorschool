import { school, values, news, events } from "../data/content"
import type { NavigateFn } from "../types"
import Image from "next/image"
import academicSpaces from "@/public/images/academicspaces.jpg"

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

export default function Home({ navigate }: Props) {
  return (
    <div id="main-content">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row" aria-label="Hero">
        {/* Left: Green identity panel */}
        <div className="relative z-10 flex flex-col justify-center lg:w-[45%] bg-primary px-8 sm:px-12 lg:px-16 xl:px-20 py-24 lg:pt-18 lg:pb-0 min-h-[50vh] lg:min-h-screen">
          {/* School name */}
          <p className="font-sans text-xs tracking-[0.22em] uppercase text-white/50 mb-6">
            Bishop Alexander Muge Girls Senior School
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl text-white leading-[1.1] font-semibold mb-6">
            Cultivating
            <br />
            <em className="italic text-accent/90 not-italic" style={{ fontStyle: "italic" }}>Leaders.</em>
            <br />
            Shaping Futures.
          </h1>

          {/* Description */}
          <p className="font-sans text-base lg:text-lg text-white/65 leading-relaxed max-w-md mb-10">
            A girls&apos; boarding school in Kenya nurturing academic excellence, practical
            competencies, principled character, and the full potential of every young woman.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("about")}
              className="px-6 py-3.5 border-2 border-white/30 rounded text-white font-sans font-semibold text-sm hover:border-white/60 hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore the School
            </button>
            <button
              onClick={() => navigate("admissions")}
              className="px-6 py-3.5 bg-accent rounded text-white font-sans font-semibold text-sm hover:bg-accent/90 transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Admissions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Diocese label */}
          <p className="font-sans text-xs tracking-widest uppercase text-white/30 mt-16 hidden lg:block">
            Eldoret Diocese · Kenya
          </p>
        </div>

        {/* Right: Photography */}
        <div className="relative lg:w-[55%] h-64 sm:h-80 lg:h-auto lg:min-h-screen bg-primary/80 overflow-hidden">
          <Image
            src="/images/studenthero.jpg"
            alt="Teacher leading a classroom session at Bishop Alexander Muge Girls Senior School"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 75vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-[27.5%] hidden lg:flex flex-col items-center gap-2 text-white/30">
          <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ── Identity ─────────────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel number="01" label="School Identity" />
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-6">
                Who We Are
              </h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                {school.about}
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                We develop young women who are not only academically prepared but morally grounded,
                professionally ambitious, and equipped to contribute meaningfully to Kenyan society and beyond.
              </p>
              <button
                onClick={() => navigate("about")}
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-accent transition-colors group focus:outline-none focus-visible:underline"
              >
                Read our full story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Values grid */}
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={v.title} className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                    <div className="font-sans text-xs text-accent font-semibold tracking-widest uppercase mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-serif font-semibold text-foreground mb-1.5">{v.title}</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Academics ────────────────────────────────────────────── */}
      <section className="bg-card py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="02" label="Academic Experience" />
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                An Education Designed for the Whole Person
              </h2>
            </div>
            <div>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                As the phased transition introduces CBC Senior School, the new Grade 10 intake will
                progress to Grades 11 and 12. Subject departments and student guidance support learners
                through both the established and emerging pathways.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "—",
                title: "New Senior School Pathway",
                body: "The emerging CBC/CBE pathway begins with the new Grade 10 intake and progresses to Grades 11 and 12.",
                cta: "View Curriculum",
              },
              {
                num: "—",
                title: "Subject Departments",
                body: "Seven subject departments each led by experienced, qualified heads of department committed to quality teaching and student progress.",
                cta: "Explore Departments",
              },
              {
                num: "—",
                title: "Guidance & Counselling",
                body: "A dedicated counselling service supports students through academic challenges, personal growth, and career planning throughout their school journey.",
                cta: "Learn More",
              },
            ].map((item) => (
              <div key={item.title} className="group relative">
                <div className="p-8 rounded-xl bg-secondary border border-border h-full flex flex-col hover:border-primary/30 transition-colors">
                  <div className="w-8 h-1 bg-accent rounded mb-6" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{item.body}</p>
                  <button
                    onClick={() => navigate("academics")}
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary hover:text-accent transition-colors group-hover:gap-2.5 focus:outline-none focus-visible:underline"
                  >
                    {item.cta}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Life photo strip ──────────────────────────────── */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel number="03" label="Student Life" />
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
                Education Extends Beyond the Classroom
              </h2>
              <p className="font-sans text-base text-white/65 leading-relaxed mb-6">
                At Bishop Alexander Muge Girls, school life is rich with opportunity. Students participate
                in clubs, sports, competitions, leadership programmes, and community initiatives that shape
                their character as much as their studies do.
              </p>
              <p className="font-sans text-base text-white/65 leading-relaxed mb-10">
                From the debate podium to the athletics track, every activity is an opportunity to discover
                strengths, build friendships, and develop the confidence that lasts a lifetime.
              </p>
              <button
                onClick={() => navigate("student-life")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded text-white font-sans font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Student Life
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-primary/40">
                  <Image
                    src={academicSpaces}
                    alt="Students in a classroom learning environment"
                    fill
                    sizes="(max-width: 1023px) 50vw, 27vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-primary/40">
                  <img
                    src="/images/administrativeblock.png"
                    alt="School campus buildings"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="aspect-square rounded-lg overflow-hidden bg-primary/40">
                  <img
                     src="/images/studentfocus.jpg"
                    alt="Students engaged in collaborative learning"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-primary/40">
                  <img
                   src="/images/classes.png"
                    alt="Modern school facilities"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admissions CTA ───────────────────────────────────────── */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-white/70 mb-2">Phased CBC Senior School Transition</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white">
                Grade 10 Senior School Admissions
              </h2>
              <p className="font-sans text-base text-white/75 mt-2">
                The new Grade 10 intake enters the emerging pathway; current Forms 3 and 4 remain in
                the outgoing 8-4-4 cohort. Contact the school for placement guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                onClick={() => navigate("admissions")}
                className="px-7 py-3.5 bg-white text-accent rounded font-sans font-bold text-sm hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Admissions Information
              </button>
              <button
                onClick={() => navigate("contact")}
                className="px-7 py-3.5 border-2 border-white/40 text-white rounded font-sans font-semibold text-sm hover:border-white/70 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact the School
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Facilities ───────────────────────────────────────────── */}
      <section className="bg-card py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="04" label="Campus & Facilities" />
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              An Environment That Supports Learning
            </h2>
            <div>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                Our campus provides the facilities students need to learn, grow, and thrive — from
                well-equipped laboratories to sports grounds and boarding accommodation.
              </p>
              <button
                onClick={() => navigate("facilities")}
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-accent transition-colors focus:outline-none focus-visible:underline"
              >
                View all facilities
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Academic Spaces",
                items: ["Classrooms", "Science Labs", "Computer Lab", "Library"],
                img: academicSpaces,
              },
              {
                title: "Sports & Recreation",
                items: ["Athletics Grounds", "Volleyball Courts", "Netball Courts"],
                img: "/images/sportsground.png",
              },
              {
                title: "Boarding & Welfare",
                items: ["Dormitories", "Dining Hall", "Welfare Facilities"],
                img: "/images/schooldormitories.jpg",
              },
              {
                title: "Administration",
                items: ["Principal's Office", "Staffrooms", "Chapel"],
                img: "/images/administration.png",
              },
            ].map((f) => (
              <button
                key={f.title}
                onClick={() => navigate("facilities")}
                className="group text-left rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {typeof f.img === "object" ? (
                    <Image
                      src={f.img}
                      alt={f.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-foreground mb-3">{f.title}</h3>
                  <ul className="space-y-1">
                    {f.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events ─────────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="05" label="News & Events" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">
              What&apos;s Happening
            </h2>
            <button
              onClick={() => navigate("news-events")}
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-accent transition-colors flex-shrink-0 focus:outline-none focus-visible:underline"
            >
              All news & events
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* News items */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {news.map((item) => (
                <article key={item.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-md transition-all">
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    {item.id === 1 ? (
                      <Image
                        src={academicSpaces}
                        alt={item.title}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-sans text-xs text-accent font-semibold tracking-wide uppercase">
                        {item.category}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("en-KE", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-serif font-semibold text-foreground mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Upcoming events sidebar */}
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-foreground mb-0.5">{event.title}</h4>
                      <p className="font-sans text-xs text-muted-foreground">{event.date}</p>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("news-events")}
                className="mt-6 w-full py-3 border border-border rounded-lg font-sans text-sm font-semibold text-primary hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Full Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact teaser ──────────────────────────────────────── */}
      <section className="bg-muted py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Get in Touch
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Whether you are a prospective parent, current student, or visitor, we welcome you
                to reach out to our school office with any questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <button
                onClick={() => navigate("contact")}
                className="px-6 py-3 bg-primary text-white rounded font-sans font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact the School
              </button>
              <button
                onClick={() => navigate("admissions")}
                className="px-6 py-3 bg-card border border-border text-foreground rounded font-sans font-semibold text-sm hover:border-primary/30 hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Admissions Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
