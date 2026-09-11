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
              preparing every student to succeed in KCSE and beyond.
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
                The Kenyan National Curriculum
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                Bishop Alexander Muge Girls Secondary School follows the Kenya national secondary
                school curriculum as prescribed by the Kenya Institute of Curriculum Development
                (KICD), leading to the Kenya Certificate of Secondary Education (KCSE) at Form Four.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-5">
                Students progress through Form 1 to Form 4, studying a broad range of compulsory
                and elective subjects across sciences, humanities, languages, and applied disciplines.
                The KCSE examination is administered by the Kenya National Examinations Council (KNEC).
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Beyond examination preparation, our teaching approach emphasises comprehension,
                critical reasoning, and the ability to apply knowledge — skills that serve students
                throughout higher education and professional life.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Programme Structure
              </h3>
              {[
                {
                  form: "Form 1",
                  description: "Foundation year. Students are introduced to secondary school subjects, routines, and expectations. Focus on building strong fundamentals across all subject areas.",
                },
                {
                  form: "Form 2",
                  description: "Consolidation year. Students deepen subject knowledge and begin making more focused choices about elective combinations.",
                },
                {
                  form: "Form 3",
                  description: "Preparation year. Intensive engagement with the full KCSE syllabus. Internal assessments and mock examinations guide academic progress.",
                },
                {
                  form: "Form 4",
                  description: "Examination year. Final revision, mock examinations, and sitting of the Kenya Certificate of Secondary Education (KCSE).",
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
