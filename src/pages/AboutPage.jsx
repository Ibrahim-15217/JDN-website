import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Users,
  GraduationCap,
  Calendar,
  Building2,
  Target,
  Eye,
  Heart,
  Rocket,
  Briefcase,
  Network,
  BarChart3,
  ArrowUpRight,
  Mail,
  Sparkles,
  Zap,
  Cpu,
  Globe,
  Shield,
  Code2,
  Brain,
  TrendingUp,
  Star,
  Award,
  Users2,
  BookOpen,
  Lightbulb,
  MapPin,
  Clock,
  ChevronRight,
  Play,
  MessageCircle,
  ThumbsUp,
  Share2,
  ArrowRight,
  CheckCircle2,
  Quote,
  BookOpen as BookOpenIcon,
} from "lucide-react";

/* ================= ANIMATIONS ================= */
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

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

/* ================= REUSABLE COMPONENTS ================= */
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

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState("story");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "stats", "story", "mission", "programs", "cta"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= ENHANCED DATA ================= */
  const stats = [
    { 
      icon: Users2, 
      value: "2.8K+", 
      label: "Active Members",
      subtext: "Growing community",
      trend: "+15% monthly",
      color: "emerald"
    },
    { 
      icon: GraduationCap, 
      value: "950+", 
      label: "People Trained",
      subtext: "Digital skills",
      trend: "92% completion",
      color: "cyan"
    },
    { 
      icon: Calendar, 
      value: "52+", 
      label: "Events Hosted",
      subtext: "Since 2021",
      trend: "Monthly series",
      color: "teal"
    },
    { 
      icon: Building2, 
      value: "32+", 
      label: "Partners",
      subtext: "Ecosystem allies",
      trend: "Global network",
      color: "blue"
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize digital access and create pathways for inclusive innovation across Jigawa State.",
      points: ["Skill development", "Infrastructure access", "Inclusive growth"],
      gradient: "from-emerald-600 to-cyan-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A Jigawa where technology drives prosperity, connects communities, and inspires global solutions.",
      points: ["Digital leadership", "Economic transformation", "Global impact"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Building with integrity, empathy, and a relentless focus on sustainable community impact.",
      points: ["Integrity first", "Community-centric", "Excellence always"],
      gradient: "from-orange-600 to-amber-600"
    },
  ];

  const programs = [
    {
      icon: Rocket,
      title: "JDN Tech Summit",
      description: "Annual flagship event connecting innovators, investors, and policymakers.",
      metrics: "800+ attendees, 50+ speakers",
      tags: ["Conference", "Networking", "Innovation"]
    },
    {
      icon: Code2,
      title: "Code Jigawa",
      description: "Full-stack development bootcamps with guaranteed internship placements.",
      metrics: "92% job placement rate",
      tags: ["Bootcamp", "Career", "Tech"]
    },
    {
      icon: Brain,
      title: "AI Futures Lab",
      description: "Cutting-edge research in machine learning and AI applications.",
      metrics: "15+ research projects",
      tags: ["Research", "AI/ML", "Innovation"]
    },
    {
      icon: Briefcase,
      title: "Startup Foundry",
      description: "Incubation program supporting early-stage tech startups.",
      metrics: "$1.5M+ raised",
      tags: ["Incubation", "Funding", "Mentorship"]
    },
    {
      icon: Network,
      title: "Community Hubs",
      description: "Physical and digital spaces for collaboration and learning.",
      metrics: "12 hubs across LGAs",
      tags: ["Community", "Learning", "Collaboration"]
    },
    {
      icon: Globe,
      title: "Digital Villages",
      description: "Bridging the urban-rural digital divide through tech access.",
      metrics: "18 villages connected",
      tags: ["Inclusion", "Rural", "Access"]
    },
  ];

  return (
    <div className="min-h-dvh bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden">
      
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative pt-35 pb-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            {/* Animated badge */}
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-800"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-4 h-4" />
              About Jigawa Digital Network
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight"
            >
              Building the <span className="text-emerald-500">Digital Future</span><br />
              of Northern Nigeria
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUpVariant}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-12"
            >
              Jigawa Digital Network is Northern Nigeria's premier innovation ecosystem — 
              accelerating digital transformation through{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">education</span>,{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">collaboration</span>, and{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">sustainable impact</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl transition-all"
              >
                <Users className="w-5 h-5" />
                Join Our Community 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 py-4 px-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-bold rounded-2xl border-2 border-gray-200 dark:border-gray-700 transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section id="stats" className="py-20 bg-gray-50 dark:bg-[#0a0f1a] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            center 
            tag="Our Impact" 
            title="Building Momentum in Jigawa"
            description="Numbers that tell the story of growth, learning, and community building"
          />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredCard(`stat-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group"
              >
                {/* Icon with style */}
                <motion.div
                  animate={hoveredCard === `stat-${index}` ? floatAnimation : {}}
                  className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center ${
                    stat.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400' :
                    stat.color === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400' :
                    stat.color === 'teal' ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400' :
                    'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                  } group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                >
                  <stat.icon size={24} />
                </motion.div>
                
                {/* Value */}
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.label}
                </div>
                
                {/* Subtext */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {stat.subtext}
                </div>
                
                {/* Trend */}
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp size={14} />
                  {stat.trend}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section id="story" className="py-32 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <SectionHeader 
                tag="Our Journey" 
                title="From Vision to Impact" 
                description="What began as a dream is now shaping the digital future of Jigawa State"
              />
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                <p>
                  Founded in 2021 by a small group of technologists and community builders, 
                  Jigawa Digital Network was born from a simple belief: 
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Jigawa's greatest asset is its people.</span>
                </p>
                <p>
                  What began as informal knowledge-sharing sessions has evolved into a 
                  structured ecosystem driving digital transformation across education, 
                  entrepreneurship, and governance.
                </p>
                <p>
                  Today, we're building the infrastructure, skills, and networks needed 
                  for Jigawa to thrive in the digital economy — while staying rooted in 
                  our community's values and aspirations.
                </p>
              </div>

              {/* Milestones grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { year: "2021", event: "JDN Founded", icon: Star },
                  { year: "2022", event: "First Summit", icon: Award },
                  { year: "2023", event: "Bootcamps Launch", icon: Zap },
                  { year: "2024", event: "Hub Expansion", icon: Building2 },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                      <milestone.icon className="text-emerald-600 dark:text-emerald-400" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900 dark:text-white">{milestone.year}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{milestone.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl transition-all"
              >
                Read Our Full Story <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            
            {/* Quote Card */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={viewportSettings}
            >
              <div className="absolute -inset-4 bg-linear-to-tr from-emerald-500/20 to-yellow-500/20 blur-3xl rounded-full opacity-50" />
              <div className="relative h-80 sm:h-[420px] lg:h-[500px] rounded-4xl bg-linear-to-br from-emerald-500 via-emerald-600 to-teal-700 shadow-2xl flex items-center justify-center border-8 border-white dark:border-gray-800">
                <div className="text-center p-6 sm:p-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Quote className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white italic">
                    "Innovation is the bridge between the Jigawa of today and the digital future of tomorrow."
                  </h3>
                  <p className="text-emerald-200 mt-6 font-medium">— JDN Founding Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MISSION/VISION/VALUES ================= */}
      <section id="mission" className="py-32 bg-gray-50 dark:bg-[#0a0f1a] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <SectionHeader 
            center 
            tag="Our Guiding Principles" 
            title="The North Star That Guides Us"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                {/* Icon with style */}
                <div className="mb-6 w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <value.icon className="text-emerald-600 dark:text-emerald-400" size={28} />
                </div>
                
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                  {value.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
                
                {/* Points */}
                <ul className="space-y-3">
                  {value.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section id="programs" className="py-32 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <SectionHeader 
            tag="Flagship Programs" 
            title="Where Innovation Creates Impact"
            description="Comprehensive programs addressing every stage of digital transformation"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredCard(`program-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                {/* Animated icon */}
                <motion.div
                  animate={hoveredCard === `program-${index}` ? floatAnimation : {}}
                  className="mb-6 w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                >
                  <program.icon className="text-emerald-600 dark:text-emerald-400" size={28} />
                </motion.div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                  {program.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {program.description}
                </p>
                
                {/* Metrics */}
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp size={14} />
                  {program.metrics}
                </div>
                
                {/* Interactive button */}
                <motion.a 
                  href="#" 
                  className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="cta" className="py-20 bg-white dark:bg-gray-900">
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
                  Join thousands of members already building, learning, and earning in our community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl"
                >
                  Join Now
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="px-10 py-5 bg-emerald-700/30 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl"
                >
                  Partner With Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;