// import React from 'react';
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence} from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Star, ArrowUpRight, CheckCircle2, Calendar, BookOpen,Users, Briefcase, Rocket, Quote } from 'lucide-react';

// --- Enhanced Animation Constants ---
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

// --- Reusable Modern Components ---
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

// --- 1. Why It Exists (Split Feature) ---
const WhyItExists = () => (
    <section className="py-32 border-t border-gray-300 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={viewportSettings}>
                    <SectionHeader 
                        tag="Our Purpose" 
                        title="Building the Silicon Valley of Northern Nigeria" 
                        description="Jigawa is moving beyond traditional boundaries. We are architecting a digital ecosystem where talent meets opportunity at the speed of light."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        {['Centralized Hubs', 'Direct Mentorship', 'Gov-Tech Synergy', 'Skill Accelerators'].map((item) => (
                            <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                                <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                                <span className="font-semibold text-gray-700 dark:text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3 py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl transition-all"
                    >
                        Explore Our Journey <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                <motion.div 
                    className="relative group"
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
                >
                    <div className="absolute -inset-4 bg-linear-to-tr from-emerald-500/20 to-yellow-500/20 blur-3xl rounded-full opacity-50" />
                    <div className="relative h-80 sm:h-[420px] lg:h-[500px] rounded-4xl bg-linear-to-br from-emerald-500 via-emerald-600 to-teal-700 shadow-2xl flex items-center justify-center border-8 border-white dark:border-gray-800">
                        <div className="text-center p-6 sm:p-12">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                <Quote className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white italic">"Innovation is the bridge between the Jigawa of today and the digital future of tomorrow."</h3>
                         </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

// --- 2. Services Grid (Bento Style) ---
const ServiceCard = ({ icon, title, description, linkText }) => (
    <motion.div
        variants={fadeUpVariant}
        whileHover={{ y: -10 }}
        className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
    >
        <div className="mb-6 w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {icon}
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">{description}</p>
        <motion.a 
            href="#" 
            className="inline-flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm group-hover:gap-3 transition-all"
        >
            {linkText} <ArrowRight size={16} />
        </motion.a>
    </motion.div>
);

const ServicesGrid = () => {
    const services = [
        { icon: '👤', title: 'Talent Portal', description: 'Curated database of Jigawa\'s finest developers, designers, and digital marketers.', linkText: 'Explore Talent' },
        { icon: '🚀', title: 'Startup Launchpad', description: 'Incubation, mentorship, and seed funding for local visionary founders.', linkText: 'Register Startup' },
        { icon: '🤝', title: 'Co-working Spaces', description: 'State-of-the-art hubs designed for collaboration, creativity, and coding.', linkText: 'Book a Desk' },
        { icon: '🎓', title: 'Academy', description: 'Deep-dive courses in Software Engineering, AI, and Product Design.', linkText: 'Start Learning' },
    ];

    return (
        <section className="py-32 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#0a0f1a]">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
                <SectionHeader 
                    center 
                    tag="Ecosystem" 
                    title={<>Your Digital Gateway to <span className="text-emerald-500">Jigawa</span></>}
                />
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportSettings}
                >
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

 

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const MissionSection = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Empower Local Talent',
      desc: 'Equip Jigawa’s youth with future-ready digital skills through structured learning, mentorship, and hands-on programs.',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Create Digital Opportunities',
      desc: 'Connect trained talent to real opportunities — jobs, startups, freelancing, and government digital initiatives.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Build a Sustainable Tech Ecosystem',
      desc: 'Foster collaboration between government, industry, startups, and the community to drive long-term growth.',
    },
  ];

  return (
    <section className="py-20 border-t border-gray-300 dark:border-gray-700 sm:py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#10b98110,transparent_40%)] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-800">
            Our Mission
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Turning Local Talent into <span className="text-emerald-500">Digital Impact</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Jigawa Digital Network (JDN) exists to unlock the potential of local talent,
            create meaningful digital opportunities, and position Jigawa as a leading
            force in Nigeria’s digital economy.
          </p>
        </motion.div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. Learning Hub (Immersive Dark Section) ---
const LearningHub = () => {
  const courses = [
    {
      tag: 'Course',
      title: 'Applied Data Science',
      desc: 'Build practical data skills using real-world datasets relevant to governance, agriculture, and local industries.',
      img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    },
    {
      tag: 'Workshop',
      title: 'Product & UI/UX Design',
      desc: 'Design digital products that solve real problems for African users, public platforms, and startups.',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=800',
    },
    {
      tag: 'Stories',
      title: 'Founder & Builder Stories',
      desc: 'Learn from local founders, innovators, and JDN program alumni who are building solutions from Jigawa.',
      img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section className="py-32 border-t border-gray-200 dark:border-gray-700 bg-gray-900 dark:bg-[#070a12] relative overflow-hidden">
      {/* Background Aurora Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#065f46_0%,transparent_50%)] opacity-20 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            tag="Talent Development"
            title={<span className="text-white">The Learning Foundation</span>}
            description="JDN’s Learning Hub equips talent with job-ready and startup-ready skills, forming the foundation for digital impact across Jigawa."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-2xl mb-4"
          >
            Explore the Academy
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              className="group bg-gray-800 rounded-[2.5rem] p-4 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="relative h-60 rounded-4xl overflow-hidden mb-6">
                <img
                  src={course.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {course.tag}
                </span>
              </div>

              <div className="px-4 pb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const fadeUp1 = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const TestimonialsSection = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Aisha Bello",
        role: "UI/UX Designer • JDN Member",
        story:
          "JDN gave me structure. I went from learning design on YouTube to building real projects and landing my first paid freelance job.",
        highlight: "First paid freelance job",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        tag: "Design",
      },
      {
        name: "Musa Abdullahi",
        role: "Frontend Developer • Bootcamp Graduate",
        story:
          "The mentorship and community support made the difference. I improved my portfolio and got shortlisted for an internship opportunity.",
        highlight: "Internship shortlist",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        tag: "Engineering",
      },
      {
        name: "Fatima Sadiq",
        role: "Community Volunteer • Event Host",
        story:
          "I started by attending events. Now I help organize sessions and connect beginners to mentors. JDN made tech feel possible for everyone.",
        highlight: "From attendee to organizer",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        tag: "Community",
      },
      {
        name: "Ibrahim Lawan",
        role: "Startup Founder • JDN Programs",
        story:
          "JDN helped me validate my idea, connect with builders, and pitch confidently. The network is the real superpower.",
        highlight: "Startup validation + network",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/71.jpg",
        tag: "Startup",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + total) % total);
  };

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => next(), 5500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

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

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
            <Star size={14} />
            Success Stories
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Real people. Real growth.
            <span className="block text-emerald-600 dark:text-emerald-400">
              Real JDN impact.
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
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
                            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900">
                              {testimonials[active].tag}
                            </span>

                            <div className="flex items-center gap-1">
                              {Array.from({ length: testimonials[active].rating }).map(
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
                            “{testimonials[active].story}”
                          </p>

                          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <span className="text-xs font-black text-gray-900 dark:text-white">
                              Highlight:
                            </span>
                            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                              {testimonials[active].highlight}
                            </span>
                          </div>

                          <div className="mt-8 flex items-center gap-4">
                            <img
                              src={testimonials[active].image}
                              alt={testimonials[active].name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200 dark:border-emerald-800"
                            />
                            <div>
                              <div className="font-black text-gray-900 dark:text-white">
                                {testimonials[active].name}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {testimonials[active].role}
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
                    {testimonials.map((_, i) => (
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

                  <a
                    href="/community"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 transition"
                  >
                    Meet the Community
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* bottom subtle bar */}
              <div className="h-2 bg-linear-to-r from-emerald-500 via-cyan-500 to-teal-500" />
            </div>
          </div>

          {/* Side list (mini cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {testimonials.map((t, i) => (
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
                    <div className="font-black text-gray-900 dark:text-white truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {t.role}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {t.story}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-700 dark:text-emerald-300">
                    {t.tag}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {i + 1}/{total}
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

const TeamSection = () => {
  const team = [
    {
      name: 'Aisha Bello',
      role: 'Program Director',
      specialization: 'Digital Transformation & Policy',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Musa Abdullahi',
      role: 'Technical Lead',
      specialization: 'Software Engineering & Cloud Systems',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Fatima Sadiq',
      role: 'Community Manager',
      specialization: 'Developer Relations & Engagement',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Ibrahim Lawan',
      role: 'Startup Programs Lead',
      specialization: 'Entrepreneurship & Innovation',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-10">

        {/* Header */}
        <motion.div
          variants={fadeUp1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/30 rounded-full">
            Our Team
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            The People Behind JDN
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            JDN is driven by a multidisciplinary team committed to building a sustainable
            digital ecosystem for Jigawa State.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 text-center border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-4 border-emerald-100 dark:border-emerald-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mt-1">
                {member.role}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                {member.specialization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



// --- 4. Modern CTA Section ---
const CTABanner = () => (
    <section className="py-20 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
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
                            Ready to join Jigawa's digital revolution?
                        </h2>
                        <p className="text-emerald-50 opacity-90 text-lg lg:text-xl font-medium leading-relaxed">
                            Join 5,000+ members already building, learning, and earning in the community.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl">
                            Join Now
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 bg-emerald-700/30 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl">
                            Contact Support
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const CoreContent = () => (
    <div className="bg-white dark:bg-gray-900">
        <WhyItExists />
        <ServicesGrid />
        <MissionSection />
        <LearningHub />
        <TeamSection />
        <CTABanner />
    </div>
);

export default CoreContent;