import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Download, Mail, Phone, Linkedin, Code2, Globe, GraduationCap, Briefcase, ArrowRight, X, Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "R. Mamatha — MCA Student & Aspiring Developer" },
      { name: "description", content: "Portfolio of R. Mamatha — MCA student, Java & web developer based in Hyderabad. Projects, skills, and downloadable resume." },
    ],
  }),
});

const RESUME_URL = "/Mamatha_Resume.pdf";

type Project = {
  t: string;
  d: string;
  tags: string[];
  long: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    t: "Student Management System",
    d: "A Java-based application to manage student records, enrollment and academic data with a clean module structure.",
    long: "A desktop-style Student Management System built with Java that helps administrators manage student records, course enrollment and academic performance. Designed with an object-oriented module structure so each concern (students, courses, grades) is easy to extend.",
    features: [
      "Add, update, search and delete student records",
      "Course enrollment and grade tracking",
      "Modular OOP architecture for easy extension",
      "Persistent data handling with file/DB storage",
    ],
    stack: ["Java", "OOP", "JDBC", "Swing"],
    tags: ["Java", "OOP"],
  },
  {
    t: "Number System Converter",
    d: "A C++ utility that converts numbers between binary, octal, decimal and hexadecimal systems.",
    long: "A lightweight command-line C++ utility that converts numbers between binary, octal, decimal and hexadecimal systems. Built to strengthen fundamentals in number theory, input validation and clean CLI design.",
    features: [
      "Convert across binary, octal, decimal, hexadecimal",
      "Robust input validation and error messages",
      "Menu-driven CLI interface",
      "Lightweight with zero dependencies",
    ],
    stack: ["C++", "STL", "CLI"],
    tags: ["C++", "CLI"],
  },
];

function Index() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">R.Mamatha</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 text-sm font-medium transition shadow-lg shadow-indigo-500/20"
          >
            <Download className="size-4" /> Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40"
          style={{ background: "radial-gradient(600px circle at 20% 20%, oklch(0.45 0.2 270 / 0.35), transparent 60%), radial-gradient(500px circle at 80% 30%, oklch(0.55 0.18 220 / 0.25), transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-28">
          <p className="text-indigo-400 text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">R. Mamatha</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            MCA student, aspiring software developer with a love for Java, C/C++ and the web.
            Currently building practical projects while studying at JNTU Hyderabad.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={RESUME_URL} download className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 font-medium transition shadow-xl shadow-indigo-500/30">
              <Download className="size-5" /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border hover:bg-muted px-6 py-3 font-medium transition">
              View Projects <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About / Education */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-muted-foreground">A snapshot of my academic journey and what drives me.</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border bg-card/50 p-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm <span className="text-foreground font-medium">R. Mamatha</span>, currently pursuing my Master of Computer Applications (MCA) at Jawaharlal Nehru Technological University Hyderabad. I am passionate about software development and continuously improving my technical and problem-solving skills.
              </p>
              <p>
                I have a strong interest in programming, web development, and database management. I enjoy learning new technologies and building projects that enhance my practical knowledge. My goal is to grow as a skilled software professional and contribute to innovative and impactful solutions in the IT industry.
              </p>
            </div>
            {[
              { d: "Pursuing", t: "MCA — 1st Year", s: "JNTU College of Engineering, Science & Technology, Hyderabad" },
              { d: "Graduated", t: "BSc (MPCs)", s: "Sarojini Naidu Vanita Maha Vidyalaya, Gandhi Bhavan, Nampally" },
              { d: "Intermediate", t: "MPC Stream", s: "Telangana State Junior College, Jharasangam" },
              { d: "SSC", t: "Schooling", s: "Telangana State Model School, Jharasangam" },
            ].map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card/50 p-5 flex gap-4">
                <div className="shrink-0 size-10 rounded-lg bg-indigo-500/10 text-indigo-400 grid place-items-center">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{e.d}</p>
                  <h3 className="font-semibold">{e.t}</h3>
                  <p className="text-sm text-muted-foreground">{e.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { i: Code2, n: "C" },
            { i: Code2, n: "C++" },
            { i: Code2, n: "Java" },
            { i: Globe, n: "Web Development" },
          ].map(({ i: Icon, n }) => (
            <div key={n} className="rounded-2xl border border-border p-6 hover:border-indigo-500/50 transition group">
              <Icon className="size-6 text-indigo-400 group-hover:scale-110 transition" />
              <p className="mt-4 font-medium">{n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-3 text-muted-foreground">Click any project to view full details.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <button
              key={p.t}
              type="button"
              onClick={() => setActive(p)}
              className="text-left rounded-2xl border border-border p-6 bg-card/40 hover:bg-card hover:border-indigo-500/50 transition group focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <div className="size-10 rounded-lg bg-indigo-500/10 text-indigo-400 grid place-items-center mb-4">
                <Briefcase className="size-5" />
              </div>
              <h3 className="text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition">
                View details <ArrowRight className="size-4" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 size-9 grid place-items-center rounded-full hover:bg-muted transition"
            >
              <X className="size-5" />
            </button>
            <div className="size-12 rounded-xl bg-indigo-500/10 text-indigo-400 grid place-items-center mb-5">
              <Briefcase className="size-6" />
            </div>
            <h3 id="project-modal-title" className="text-2xl md:text-3xl font-bold tracking-tight">{active.t}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{active.long}</p>

            <h4 className="mt-8 text-sm uppercase tracking-wider text-muted-foreground">Key Features</h4>
            <ul className="mt-3 space-y-2">
              {active.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <span className="mt-2 size-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-sm uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
            <div className="mt-3 flex gap-2 flex-wrap">
              {active.stack.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{s}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {active.github && (
                <a href={active.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border hover:bg-muted px-5 py-2.5 text-sm font-medium transition">
                  <Github className="size-4" /> View Code
                </a>
              )}
              {active.demo && (
                <a href={active.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2.5 text-sm font-medium transition">
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              )}
              {!active.github && !active.demo && (
                <p className="text-sm text-muted-foreground">Links coming soon.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Resume CTA */}
      <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Want the full story?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Grab my resume for the complete overview of my education, skills and projects.
          </p>
          <a
            href={RESUME_URL}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white px-7 py-3.5 font-medium transition shadow-xl shadow-indigo-500/30"
          >
            <Download className="size-5" /> Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-3 text-muted-foreground">Open to internships, collaborations and learning opportunities.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <a href="mailto:ramojimamatha123@gmail.com" className="rounded-2xl border border-border p-6 hover:border-indigo-500/50 transition flex items-center gap-4">
            <Mail className="size-5 text-indigo-400" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="text-sm font-medium break-all">ramojimamatha123@gmail.com</p>
            </div>
          </a>
          <a href="tel:+919553783378" className="rounded-2xl border border-border p-6 hover:border-indigo-500/50 transition flex items-center gap-4">
            <Phone className="size-5 text-indigo-400" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">+91 95537 83378</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mamatharamojipally986" target="_blank" rel="noreferrer" className="rounded-2xl border border-border p-6 hover:border-indigo-500/50 transition flex items-center gap-4">
            <Linkedin className="size-5 text-indigo-400" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">mamatharamojipally986</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-muted-foreground flex justify-between flex-wrap gap-3">
          <p>© {new Date().getFullYear()} R. Mamatha</p>
          <p>Built with care in Hyderabad.</p>
        </div>
      </footer>
    </div>
  );
}
