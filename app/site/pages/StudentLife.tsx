import { clubs, sports } from "../data/content"
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

const categoryColors: Record<string, string> = {
  Academic: "bg-primary/10 text-primary",
  Arts: "bg-accent/10 text-accent",
  Community: "bg-green-100 text-green-700",
  Spiritual: "bg-purple-100 text-purple-700",
}

export default function StudentLife({ navigate }: Props) {
  return (
    <div id="main-content">
      {/* Page hero */}
      <div className="relative bg-primary pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">Student Life</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-16 pb-0">
            <div className="pb-16">
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">Student Life</p>
              <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                Life Beyond the Classroom
              </h1>
              <p className="font-sans text-lg text-white/65 leading-relaxed">
                From clubs and competitions to sports and student leadership, school life at
                Bishop Alexander Muge Girls is rich with opportunity to grow, connect, and discover.
              </p>
            </div>
            <div className="hidden lg:block relative overflow-hidden rounded-t-xl">
              <img
                src="/images/academicspaces.jpg"
                alt="Students engaged in activities"
                className="w-full h-56 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }} />
      </div>

      {/* Intro */}
      <section className="bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <SectionLabel number="01" label="School Life" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Confident, Capable, Connected
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                At Bishop Alexander Muge Girls Senior School, we believe education is complete
                only when it extends beyond academic instruction. Our school life programme is designed
                to develop the whole person — intellectually, physically, socially, and spiritually.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Students are encouraged to participate in at least one club, one sport, and one
                community initiative during their time at school. These experiences build the
                confidence, resilience, and interpersonal skills that define a well-rounded graduate.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { label: "Clubs & Activities", count: `${clubs.length}+`, icon: "🎯" },
                { label: "Sports Disciplines", count: `${sports.length}`, icon: "🏃" },
                { label: "School Houses", count: "[TBC]", icon: "🏠" },
                { label: "Annual Events", count: "[TBC]", icon: "📅" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl bg-card border border-border text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-serif text-2xl font-bold text-primary mb-1">{item.count}</div>
                  <div className="font-sans text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section id="clubs-activities" className="scroll-mt-20 bg-card py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="02" label="Clubs & Activities" />
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Something for Every Interest
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Our clubs and activity groups offer students the chance to pursue their interests,
              develop new skills, and contribute meaningfully to school and community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club) => (
              <div key={club.name} className="p-6 rounded-xl border border-border bg-background hover:border-primary/25 hover:shadow-sm transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <span className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[club.category] || "bg-muted text-muted-foreground"}`}>
                    {club.category}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">{club.name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section id="sports" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="03" label="Sports" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Athletics, Teamwork, and Competitive Spirit
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                Sport is an integral part of life at Bishop Alexander Muge Girls Senior School.
                Physical education and competitive sport teach discipline, teamwork, perseverance,
                and the grace of winning and losing that classroom lessons alone cannot provide.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                Our teams compete at school, zone, county, and regional levels in a range of disciplines.
                Students are encouraged to participate regardless of ability, and exceptional athletes
                are given the support and structure to develop their talent further.
              </p>
              <div className="p-5 rounded-lg bg-secondary border border-border">
                <p className="font-sans text-sm font-semibold text-foreground mb-2">Competition Levels</p>
                <div className="flex flex-wrap gap-2">
                  {["School Level", "Zone Level", "County Level", "Regional Level", "National Level"].map((level) => (
                    <span key={level} className="font-sans text-xs px-3 py-1.5 rounded-full border border-border bg-card text-foreground">
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {sports.map((sport) => (
                <div key={sport.name} className="flex gap-5 p-5 rounded-xl border border-border bg-card hover:border-primary/25 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">{sport.name}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{sport.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section id="student-leadership" className="scroll-mt-20 bg-primary py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans text-xs tracking-[0.22em] uppercase text-accent font-semibold">
              04 — Student Leadership
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-white mb-6">
                Tomorrow&apos;s Leaders, Learning Today
              </h2>
              <p className="font-sans text-base text-white/65 leading-relaxed mb-5">
                Student leadership is a significant part of our school culture. Our student council,
                prefect body, and house leadership systems give students real responsibility and the
                opportunity to practise principled, servant leadership.
              </p>
              <p className="font-sans text-base text-white/65 leading-relaxed">
                Student leaders are elected by their peers and appointed through a structured
                process. They work alongside school staff to maintain order, represent student
                interests, and organise school events.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "School Captain", description: "Elected by students to represent the entire student body." },
                { title: "Student Council", description: "Student representatives who raise learner concerns with staff." },
                { title: "House Prefects", description: "Leaders responsible for inter-house activities and house discipline." },
                { title: "Club Leaders", description: "Presidents and secretaries of each club and activity group." },
              ].map((role) => (
                <div key={role.title} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-sans font-semibold text-white mb-2 text-sm">{role.title}</h3>
                  <p className="font-sans text-xs text-white/55 leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
            Want Your Daughter to Be Part of This Community?
          </h2>
          <p className="font-sans text-base text-muted-foreground mb-8 max-w-lg mx-auto">
            Begin the admissions journey today.
          </p>
          <button
            onClick={() => navigate("admissions")}
            className="px-8 py-3.5 bg-primary text-white rounded font-sans font-semibold text-sm hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Admissions Information →
          </button>
        </div>
      </section>
    </div>
  )
}
