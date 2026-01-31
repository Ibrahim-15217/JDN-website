import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  Search,
  Filter,
  BadgeCheck,
  Calendar,
  Users,
  Rocket,
  GraduationCap,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- Animations -------------------- */
const springTransition = { type: "spring", stiffness: 100, damping: 20 };

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const viewportSettings = { once: true, amount: 0.2 };

/* -------------------- Page Data -------------------- */
const PROGRAMS = [
  {
    id: "academy",
    category: "Academy",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "JDN Academy",
    desc: "Structured training tracks in Software Engineering, UI/UX, Data, Cloud & Cybersecurity — with mentorship and projects.",
    tags: ["Beginner → Advanced", "Projects", "Mentorship"],
    duration: "8–16 Weeks",
    cohort: "Monthly",
    mode: "Hybrid",
    highlight: true,
  },
  {
    id: "internship",
    category: "Career",
    icon: <Briefcase className="w-5 h-5" />,
    title: "Internship & Placement",
    desc: "Get matched with internships, freelance gigs and junior roles through our partner network and talent portal.",
    tags: ["Placement", "Portfolio", "Hiring"],
    duration: "Ongoing",
    cohort: "Rolling",
    mode: "Remote/Hybrid",
  },
  {
    id: "startup",
    category: "Startups",
    icon: <Rocket className="w-5 h-5" />,
    title: "Startup Launchpad",
    desc: "For founders: validate ideas, build MVP, mentorship, pitch prep, and access to partners + early funding pathways.",
    tags: ["Mentors", "Pitch", "MVP"],
    duration: "10 Weeks",
    cohort: "Quarterly",
    mode: "Hybrid",
    highlight: true,
  },
  {
    id: "community",
    category: "Community",
    icon: <Users className="w-5 h-5" />,
    title: "Community Programs",
    desc: "Hackathons, meetups, build challenges, tech talks, DevRel sessions and networking with builders.",
    tags: ["Meetups", "Hackathons", "Networking"],
    duration: "Ongoing",
    cohort: "Weekly",
    mode: "Physical + Online",
  },
  {
    id: "govtech",
    category: "Partnerships",
    icon: <Building2 className="w-5 h-5" />,
    title: "GovTech Collaboration",
    desc: "We work with government agencies to build digital public services, platforms, and citizen-facing solutions.",
    tags: ["Public Service", "Digital", "Impact"],
    duration: "Project Based",
    cohort: "As Needed",
    mode: "On-site",
  },
  {
    id: "events",
    category: "Community",
    icon: <Calendar className="w-5 h-5" />,
    title: "Events & Workshops",
    desc: "High-quality workshops, masterclasses, and sessions with experts — built around real industry needs.",
    tags: ["Workshops", "Experts", "Hands-on"],
    duration: "1–3 Days",
    cohort: "Monthly",
    mode: "Physical/Online",
  },
];

const CATEGORIES = ["All", "Academy", "Career", "Startups", "Community", "Partnerships"];

const TESTIMONIALS = [
  {
    name: "Hauwa M.",
    role: "JDN Academy Graduate",
    text: "JDN gave me structure. I moved from basics to building real projects. The mentorship and community support was everything.",
    tag: "Academy",
    rating: 5,
    highlight: "From basics to real projects",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Musa A.",
    role: "Frontend Developer",
    text: "The internship matching and portfolio reviews helped me land my first tech job. The ecosystem is real.",
    tag: "Career",
    rating: 5,
    highlight: "First tech job",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fatima S.",
    role: "Startup Founder",
    text: "Launchpad mentorship changed our direction completely. We built our MVP and pitched with confidence.",
    tag: "Startup",
    rating: 5,
    highlight: "MVP built & pitched",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const FAQS = [
  {
    q: "Do I need prior experience to join JDN programs?",
    a: "No. Some tracks are beginner-friendly. We also have intermediate and advanced programs depending on your level.",
  },
  {
    q: "Are programs free or paid?",
    a: "Some programs are fully sponsored. Others may require a small fee. The program card usually shows details during application.",
  },
  {
    q: "Can I join remotely?",
    a: "Yes. Many programs support remote or hybrid participation depending on cohort and resources.",
  },
  {
    q: "How do I apply?",
    a: "Click 'Apply Now' on any program and submit the form. Our team will review and contact you.",
  },
];

/* -------------------- UI Helpers -------------------- */
const Pill = ({ children }) => (
  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900">
    {children}
  </span>
);

const SectionHeader = ({ tag, title, description, center = false }) => (
  <motion.div 
    className={`mb-16 ${center ? 'text-center' : 'text-left'}`}
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
  >
    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-800">
      {tag}
    </span>
    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]">
      {title}
    </h2>
    {description && (
      <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

/* -------------------- Modal -------------------- */
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
          className="fixed inset-0 z-999 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b1220] shadow-2xl"
          >
            <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-gray-800 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
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
                  className="py-3 px-5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition font-bold"
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

/* -------------------- Testimonials Section -------------------- */
const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setDirection(1);
    setActive((p) => (p + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      filter: "blur(6px)",
      transition: { duration: 0.25, ease: "easeInOut" },
    }),
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
            <Star size={14} />
            Success Stories
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Real people. Real growth.
            <span className="block text-emerald-600 dark:text-emerald-400">
              Real JDN impact.
            </span>
          </h2>

          <p className="mt-5 text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            From beginners to builders — JDN is helping young talent in Jigawa
            learn skills, connect with mentors, and unlock digital opportunities.
          </p>
        </div>

        {/* Slider */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main testimonial card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-500/10 via-transparent to-transparent blur-xl" />

            <div className="relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-bold border border-gray-200 dark:border-gray-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Testimonials
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-11 h-11 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center justify-center"
                    >
                      <ChevronLeft className="text-gray-700 dark:text-gray-200" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-11 h-11 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center justify-center"
                    >
                      <ChevronRight className="text-gray-700 dark:text-gray-200" />
                    </button>
                  </div>
                </div>

                {/* Animated slide */}
                <div className="mt-8 min-h-60 sm:min-h-[220px] lg:min-h-60">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={active}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="relative"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, info) => {
                        if (info.offset.x < -60) next();
                        if (info.offset.x > 60) prev();
                      }}
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <Quote className="text-emerald-600 dark:text-emerald-400" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900">
                              {TESTIMONIALS[active].tag}
                            </span>

                            <div className="flex items-center gap-1">
                              {Array.from({ length: TESTIMONIALS[active].rating }).map(
                                (_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    className="text-emerald-500"
                                    fill="currentColor"
                                  />
                                )
                              )}
                            </div>
                          </div>

                          <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-relaxed">
                            "{TESTIMONIALS[active].text}"
                          </p>

                          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <span className="text-xs font-bold text-gray-900 dark:text-white">
                              Highlight:
                            </span>
                            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                              {TESTIMONIALS[active].highlight}
                            </span>
                          </div>

                          <div className="mt-8 flex items-center gap-4">
                            <img
                              src={TESTIMONIALS[active].image}
                              alt={TESTIMONIALS[active].name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200 dark:border-emerald-800"
                            />
                            <div>
                              <div className="font-bold text-gray-900 dark:text-white">
                                {TESTIMONIALS[active].name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {TESTIMONIALS[active].role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > active ? 1 : -1);
                          setActive(i);
                        }}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          i === active
                            ? "w-10 bg-emerald-500"
                            : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  <Link
                    to="/community"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 transition"
                  >
                    Meet the Community
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* bottom subtle bar */}
              <div className="h-2 bg-linear-to-r from-emerald-500 via-cyan-500 to-teal-500" />
            </div>
          </div>

          {/* Side list (mini cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className={`text-left p-5 rounded-2xl border transition-all ${
                  i === active
                    ? "border-emerald-400/40 bg-emerald-50 dark:bg-emerald-950/30"
                    : "border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-800"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 dark:text-white truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {t.role}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {t.text}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    {t.tag}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {i + 1}/{TESTIMONIALS.length}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- FAQ -------------------- */
const FAQSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-[#070a12] border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
        <SectionHeader
          tag="FAQ"
          title="Questions? We've got answers."
          description="Everything you need to know before applying."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={idx}
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="text-left p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {item.q}
                  </p>
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
                      className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed overflow-hidden"
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
  );
};

/* -------------------- Main Page -------------------- */
function ProgramsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filtered = useMemo(() => {
    return PROGRAMS.filter((p) => {
      const inCat = category === "All" ? true : p.category === category;
      const inSearch =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase());
      return inCat && inSearch;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
      {/* HERO */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#10b9811a,transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,#22c55e12,transparent_50%)] pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-4 sm:px-10 relative z-10">
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
              <BadgeCheck className="w-4 h-4" />
              JDN Programs
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.05]">
              Learn. Build. Launch.
              <span className="block text-emerald-500">Grow with JDN.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              From beginner learning tracks to startup launch support — JDN programs are designed
              to turn talent into impact across Jigawa State and beyond.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/community"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black shadow-xl shadow-emerald-500/20 transition"
              >
                Join the Community <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition font-bold"
              >
                Partnerships <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Community Members", value: "5,000+" },
              { label: "Programs Delivered", value: "30+" },
              { label: "Mentors & Speakers", value: "120+" },
              { label: "Partner Support", value: "Gov + Private" },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUpVariant}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-800"
              >
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER + SEARCH */}
      <section className="py-10 bg-gray-50 dark:bg-[#0a0f1a] border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mr-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </span>

                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-sm transition border ${
                      category === c
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-800 hover:border-emerald-500/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <SectionHeader
            tag="Explore Programs"
            title={
              <>
                Choose a track that fits your <span className="text-emerald-500">growth</span>
              </>
            }
            description="JDN programs are built for students, job seekers, builders, founders, and partners."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUpVariant}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl p-7 border transition overflow-hidden ${
                  p.highlight
                    ? "bg-linear-to-br from-emerald-50 to-white border-emerald-200 dark:from-emerald-950/30 dark:to-white/5 dark:border-emerald-900"
                    : "bg-gray-50 border-gray-200 dark:bg-white/5 dark:border-gray-800"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                    {p.icon}
                  </div>

                  {p.highlight && (
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500 text-white">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  {p.title}
                </h3>

                <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 dark:text-gray-400 font-bold">Duration</p>
                    <p className="text-gray-900 dark:text-white font-bold mt-1">{p.duration}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 dark:text-gray-400 font-bold">Cohort</p>
                    <p className="text-gray-900 dark:text-white font-bold mt-1">{p.cohort}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 dark:text-gray-400 font-bold">Mode</p>
                    <p className="text-gray-900 dark:text-white font-bold mt-1">{p.mode}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Link
                        to={`/programs/${p.id}`}
                        className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition shadow-lg shadow-emerald-500/20 text-center"
                    >
                        View Details
                    </Link>

                    <button
                        onClick={() => {
                        setSelectedProgram(p);
                        setModalOpen(true);
                        }}
                        className="w-full py-3 rounded-2xl text-center border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 font-bold hover:bg-white dark:hover:bg-white/10 transition"
                    >
                        Apply Now
                    </button>
                 </div>


                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Verified JDN Program
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-gray-500 dark:text-gray-400 font-semibold">
              No programs found. Try another search/category.
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Banner */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportSettings}
            className="relative bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 p-12 lg:p-20 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                  Ready to become part of the JDN ecosystem?
                </h2>
                <p className="text-emerald-50 opacity-90 text-lg lg:text-xl font-medium leading-relaxed">
                  Join builders, students, founders, and partners shaping the digital future of Jigawa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl">
                  Join Now
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-emerald-700/30 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl">
                  Partner with Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Apply Modal */}
      <ApplyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        program={selectedProgram}
      />
    </div>
    
  );
}

export default ProgramsPage;