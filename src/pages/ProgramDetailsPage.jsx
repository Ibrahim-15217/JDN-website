import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Rocket,
  Briefcase,
  Users,
  Calendar,
  Clock,
  MapPin,
  BadgeCheck,
  X,
  ChevronDown,
} from "lucide-react";

/* -------------------- Animations -------------------- */
const viewport = { once: true, amount: 0.2 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

/* -------------------- DATA (same IDs as ProgramsPage) -------------------- */
const PROGRAMS = [
  {
    id: "academy",
    icon: GraduationCap,
    title: "JDN Academy",
    short: "Structured training tracks with mentorship and real projects.",
    hero:
      "A structured learning experience designed to turn beginners into confident builders — with mentorship, hands-on projects, and career direction.",
    category: "Academy",
    duration: "8–16 Weeks",
    cohort: "Monthly",
    mode: "Hybrid",
    location: "Dutse + Online",
    schedule: "Weekends + Evenings",
    highlights: [
      "Hands-on projects (portfolio-ready)",
      "Mentorship + peer support",
      "Weekly code reviews",
      "Career guidance and interview prep",
      "Community access + events",
    ],
    requirements: [
      "Laptop (recommended)",
      "Strong willingness to learn",
      "Basic English communication",
      "No prior experience required (for beginner track)",
    ],
    curriculum: [
      { week: "Week 1–2", topic: "Foundations & Tools", desc: "Mindset, tools setup, Git/GitHub, basic workflows." },
      { week: "Week 3–6", topic: "Core Skills", desc: "Deep dive into track (Frontend / UIUX / Data / Cloud / Cybersecurity)." },
      { week: "Week 7–10", topic: "Projects", desc: "Build real solutions aligned with Jigawa problems." },
      { week: "Week 11+", topic: "Capstone & Career", desc: "Capstone demo day + CV/LinkedIn + interview training." },
    ],
    mentors: [
      { name: "JDN Mentor Team", role: "Mentors & Instructors", spec: "Software, Design, Data, Cloud, Cybersecurity" },
      { name: "Industry Guests", role: "Speakers", spec: "Career talks + real-world guidance" },
    ],
    faqs: [
      { q: "Is JDN Academy free?", a: "Some cohorts are sponsored. Some may require a small fee. Apply to see cohort info." },
      { q: "Can I join as a complete beginner?", a: "Yes. We have beginner-friendly tracks and support." },
      { q: "Will I get a certificate?", a: "Yes — after completing required milestones and projects." },
    ],
  },

  {
    id: "internship",
    icon: Briefcase,
    title: "Internship & Placement",
    short: "Get matched with internships and entry-level opportunities.",
    hero:
      "We help community members move from learning to earning — through internships, gigs, and entry-level job placements with partner organizations.",
    category: "Career",
    duration: "Ongoing",
    cohort: "Rolling",
    mode: "Remote/Hybrid",
    location: "Nigeria + Remote",
    schedule: "Flexible",
    highlights: [
      "Talent profiling + portfolio review",
      "CV + LinkedIn optimization",
      "Mock interviews and coaching",
      "Access to internship opportunities",
      "Real work experience support",
    ],
    requirements: [
      "Portfolio (or projects) recommended",
      "Commitment to learning and delivery",
      "Professional communication",
    ],
    curriculum: [
      { week: "Step 1", topic: "Profile & Assessment", desc: "We assess your skills and recommend next steps." },
      { week: "Step 2", topic: "Portfolio Upgrade", desc: "Improve your GitHub + projects + resume." },
      { week: "Step 3", topic: "Matching", desc: "We connect you with suitable internship/gig roles." },
      { week: "Step 4", topic: "Support", desc: "We support delivery, growth, and reporting." },
    ],
    mentors: [
      { name: "Career Coaches", role: "Coaching", spec: "CV, LinkedIn, interviews" },
      { name: "Partner Companies", role: "Hiring", spec: "Internships, gigs, junior roles" },
    ],
    faqs: [
      { q: "Do you guarantee a job?", a: "No guarantee — but we provide strong support, preparation, and opportunities." },
      { q: "Can I join without experience?", a: "Yes — but you’ll need to build projects first. JDN Academy helps." },
    ],
  },

  {
    id: "startup",
    icon: Rocket,
    title: "Startup Launchpad",
    short: "Validate, build MVP, mentorship, pitch support.",
    hero:
      "For founders and builders ready to create solutions — validate your idea, build your MVP, and prepare for pitching and growth.",
    category: "Startups",
    duration: "10 Weeks",
    cohort: "Quarterly",
    mode: "Hybrid",
    location: "Dutse + Remote",
    schedule: "Cohort-based",
    highlights: [
      "Idea validation & market research",
      "MVP building support",
      "Mentorship from founders",
      "Pitch deck + storytelling",
      "Partner access + funding pathways",
    ],
    requirements: [
      "A problem you want to solve",
      "Commitment to weekly sessions",
      "Team optional (solo founders allowed)",
    ],
    curriculum: [
      { week: "Week 1", topic: "Problem & Market", desc: "Define target users, pain points, and competition." },
      { week: "Week 2–4", topic: "Product", desc: "Design prototype, user testing, product roadmap." },
      { week: "Week 5–8", topic: "Build MVP", desc: "Build and test MVP with mentor guidance." },
      { week: "Week 9–10", topic: "Pitch & Launch", desc: "Pitch training + demo day + go-to-market basics." },
    ],
    mentors: [
      { name: "Startup Mentors", role: "Mentorship", spec: "Product, Growth, Funding" },
      { name: "Tech Leads", role: "Build Support", spec: "Engineering + MVP review" },
    ],
    faqs: [
      { q: "Can students apply?", a: "Yes. If you have a real idea and commitment, you can apply." },
      { q: "Do you provide funding?", a: "Not directly — but we connect founders to partners and funding opportunities." },
    ],
  },

  {
    id: "community",
    icon: Users,
    title: "Community Programs",
    short: "Meetups, hackathons, challenges and networking.",
    hero:
      "JDN community programs bring builders together to learn, network, collaborate and create impact — online and offline.",
    category: "Community",
    duration: "Ongoing",
    cohort: "Weekly",
    mode: "Physical + Online",
    location: "Jigawa + Online",
    schedule: "Weekly / Monthly",
    highlights: [
      "Hackathons & build challenges",
      "Meetups and networking",
      "Tech talks and DevRel sessions",
      "Mentorship circles",
      "Community recognition",
    ],
    requirements: [
      "Anyone can join",
      "Respect community rules",
      "Willingness to collaborate",
    ],
    curriculum: [
      { week: "Monthly", topic: "Community Meetups", desc: "Networking, talks, learning and announcements." },
      { week: "Quarterly", topic: "Hackathons", desc: "Build solutions around Jigawa and Africa." },
      { week: "Ongoing", topic: "Challenges", desc: "Weekly/Monthly build challenges + leaderboards." },
    ],
    mentors: [
      { name: "Community Leads", role: "Leadership", spec: "Programs & engagement" },
      { name: "Volunteer Mentors", role: "Mentorship", spec: "Multiple tracks" },
    ],
    faqs: [
      { q: "Is the community free?", a: "Yes. Community membership is open." },
      { q: "Where do meetups happen?", a: "Some are in Jigawa. Others are hosted online." },
    ],
  },
];

/* -------------------- UI Helpers -------------------- */
const Pill = ({ children }) => (
  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900">
    {children}
  </span>
);

const ApplyModal = ({ open, onClose, program }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    level: "Beginner",
    message: "",
  });

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b1220] shadow-2xl"
          >
            <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-gray-800 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                  Application
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                  Apply for: {program?.title || "JDN Program"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  Fill the form and our team will reach out to you.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                <input
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                <input
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Phone (WhatsApp)"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring--emerald-500/40"
                  value={form.level}
                  onChange={(e) => update("level", e.target.value)}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <textarea
                rows={4}
                className="mt-4 w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
                placeholder="Tell us about your goals..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert("Application submitted (demo). Connect backend later.");
                    onClose();
                  }}
                  className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-lg shadow-emerald-500/20 transition"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* -------------------- Main Component -------------------- */
export default function ProgramDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const program = useMemo(() => PROGRAMS.find((p) => p.id === id), [id]);

  const [applyOpen, setApplyOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  if (!program) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-28">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="p-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">
              Program not found
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The program you’re trying to access doesn’t exist.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 font-bold"
              >
                Go Back
              </button>
              <Link
                to="/programs"
                className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-black"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* HERO */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#10b9811a,transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,#22c55e12,transparent_50%)] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Programs
            </Link>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900 text-xs font-black tracking-widest uppercase">
              <BadgeCheck className="w-4 h-4" />
              {program.category}
            </span>
          </div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-8 max-w-4xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-black tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                JDN Program Details
              </div>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.05]">
              {program.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {program.hero}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setApplyOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-lg shadow-emerald-500/20 transition"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 font-black hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Program meta */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { label: "Duration", value: program.duration, icon: Clock },
              { label: "Cohort", value: program.cohort, icon: Calendar },
              { label: "Mode", value: program.mode, icon: Users },
              { label: "Location", value: program.location, icon: MapPin },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-bold">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
                <p className="mt-2 text-lg font-black text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights + Requirements */}
      <section className="py-20 bg-gray-50 dark:bg-[#070a12] border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                What you’ll gain
              </h2>

              <div className="space-y-3">
                {program.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Requirements
              </h2>

              <div className="space-y-3">
                {program.requirements.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                      {r}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900">
                <p className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
                  Schedule: <span className="font-black">{program.schedule}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300 text-xs font-black tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              Curriculum
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              How the program works
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-3xl">
              A clear learning/build timeline so every participant knows what to expect.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {program.curriculum.map((c) => (
              <motion.div
                key={c.week}
                variants={fadeUp}
                className="p-7 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800"
              >
                <Pill>{c.week}</Pill>
                <h3 className="mt-4 text-xl font-black text-gray-900 dark:text-white">
                  {c.topic}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 bg-gray-50 dark:bg-[#070a12] border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              Mentors & Support
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-3xl">
              You won’t learn alone — our mentors and community leaders guide your progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.mentors.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="p-7 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800"
              >
                <p className="text-lg font-black text-gray-900 dark:text-white">{m.name}</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {m.role}
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-400 font-medium">
                  Specialization: <span className="font-black">{m.spec}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
              FAQ
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-3xl">
              Quick answers before you apply.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {program.faqs.map((item, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setFaqOpen(isOpen ? -1 : idx)}
                  className="text-left p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-black text-gray-900 dark:text-white">{item.q}</p>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed overflow-hidden"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="relative overflow-hidden rounded-[2.8rem] p-10 sm:p-14 lg:p-16 bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 shadow-2xl"
          >
            <div className="absolute -top-28 -right-28 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1]">
                  Join {program.title} today.
                </h2>
                <p className="mt-4 text-emerald-50/95 text-base sm:text-lg font-semibold leading-relaxed">
                  Build skills, create impact, and grow with Jigawa’s digital ecosystem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setApplyOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black shadow-xl text-center"
                >
                  Apply Now
                </button>
                <Link
                  to="/programs"
                  className="px-3 py-4 rounded-2xl bg-emerald-900/25 border border-white/20 backdrop-blur-md text-white font-black text-center"
                >
                  Explore Other Programs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} program={program} />
    </div>
  );
}
