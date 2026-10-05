import { departments } from "../data/content"
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

export default function Academics({ navigate }: Props) {
  return (
    <div id="main-content">
      {/* Page hero */}
      <div className="relative bg-primary pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <nav className="flex items-center gap-2 font-sans text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <button onClick={() => navigate("home")} className="hover:text-white/70 transition-colors focus:outline-none focus-visible:underline">Home</button>
            <span>/</span>
            <span className="text-white/70">Academics</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-accent mb-4">Academic Programme</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Learning Designed to Last a Lifetime
            </h1>
            <p className="font-sans text-lg text-white/65 leading-relaxed">
              Our curriculum, departments, and academic support services are built around one goal:
              developing competencies, talents, and career awareness for Senior School and beyond.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent, #F7F3EE)" }} />
      </div>

      {/* Curriculum overview */}
      <section id="curriculum" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel number="01" label="Curriculum" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                CBC Senior School: Grades 10–12
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                Bishop Alexander Muge Girls Senior School is transitioning to the Competency-Based
                Curriculum (CBC) and Competency-Based Education (CBE). Senior School is structured
                across Grades 10, 11, and 12, with learning focused on applying knowledge, developing
                competencies, nurturing talents, and supporting career pathways.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                The transition is phased. The new Grade 10 intake enters Senior School from 2026 and
                progresses to Grade 11 and then Grade 12 as cohorts advance. Current Form 3 and Form 4
                learners belong to the outgoing 8-4-4 cohort and continue toward KCSE under that system.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Subject departments, co-curricular learning, and student guidance support learners
                through both the current transition and their next steps in education and work.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Senior School Progression
              </h3>
              {[
                {
                  form: "Grade 10",
                  description: "Senior School entry from 2026. Learners begin the CBC pathway, exploring their strengths, interests, and learning pathways.",
                },
                {
                  form: "Grade 11",
                  description: "Learners continue building competencies and subject knowledge, with growing focus on their strengths and future pathways.",
                },
                {
                  form: "Grade 12",
                  description: "Learners complete the Senior School phase and prepare for their next education, training, or career steps.",
                },
              ].map((item) => (
                <div key={item.form} className="flex gap-5 p-5 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-primary text-sm">{item.form}</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground mb-1.5">{item.form}</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-lg border border-accent/20 bg-accent/5 p-5">
                <h4 className="font-sans font-semibold text-foreground mb-2">The outgoing 8-4-4 cohort</h4>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Current Form 3 and Form 4 learners continue under the former system, with KCSE
                  applying to that cohort. Form Four is not part of the new Grade 10–12 Senior School structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="scroll-mt-20 bg-card py-20 lg:py-28 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel number="02" label="Subject Departments" />
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Seven Departments. One Standard.
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Each department is led by an experienced Head of Department and staffed by qualified
              subject teachers committed to every student achieving their potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div key={dept.name} className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-sm transition-all">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{dept.name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{dept.description}</p>
                <div className="space-y-1.5">
                  {dept.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular & Support */}
      <section id="academic-support" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div id="co-curricular" className="scroll-mt-20">
                <SectionLabel number="03" label="Co-Curricular Learning" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Learning Beyond the Syllabus
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                Co-curricular activities at Bishop Alexander Muge Girls are not an afterthought.
                They are structured, purposeful, and connected to the skills students develop in
                their academic work.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                From the Science Club and Debate Club to Music, Drama, and Community Service,
                every activity is designed to build competence, confidence, and character in ways
                that complement formal academic learning.
              </p>
              <button
                onClick={() => navigate("student-life")}
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-accent transition-colors focus:outline-none focus-visible:underline"
              >
                Explore Student Life
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              </div>
            </div>

            <div id="guidance-counselling" className="scroll-mt-20">
              <SectionLabel number="04" label="Guidance & Counselling" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Every Student Supported
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                We understand that academic success is closely connected to personal wellbeing.
                Our guidance and counselling service supports students through academic challenges,
                personal difficulties, and important life decisions.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                Our counsellors work alongside teachers and parents to ensure every student has
                the support they need to thrive — whether academically, personally, or in preparing
                for university and career pathways.
              </p>
              <div className="p-5 rounded-lg bg-secondary border border-border">
                <h4 className="font-sans font-semibold text-foreground mb-3">Areas of Support</h4>
                <ul className="space-y-2">
                  {[
                    "Academic performance and study skills",
                    "Personal and social wellbeing",
                    "Career guidance and subject selection",
                    "University and further education pathways",
                    "Peer relationships and school life",
                  ].map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white mb-2">
                Interested in Joining Our School?
              </h2>
              <p className="font-sans text-base text-white/65">
                Find out how your daughter can become part of our academic community.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <button
                onClick={() => navigate("admissions")}
                className="px-6 py-3 bg-accent text-white rounded font-sans font-semibold text-sm hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Admissions →
              </button>
              <button
                onClick={() => navigate("contact")}
                className="px-6 py-3 border border-white/30 text-white rounded font-sans font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
