import React from "react";
import { motion } from "framer-motion";
import Header from '../components/Header';
import {
  Users,
  Code2,
  GraduationCap,
  Rocket,
  HeartHandshake,
  MapPin,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Network,
  Star,
  ArrowRight,
  CheckCircle2,
  Target,
  BookOpen,
  Zap,
  Building2,
  Briefcase,
  Users2,
  Award,
  Calendar,
} from "lucide-react";
import Footer from "../components/Footer";

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

const CommunityPage = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Developers & Designers",
      description: "Build real-world projects, contribute to open-source, and collaborate with other builders.",
      color: "emerald"
    },
    {
      icon: GraduationCap,
      title: "Students & Learners",
      description: "Learn in-demand digital skills through events, bootcamps, and peer learning.",
      color: "blue"
    },
    {
      icon: Rocket,
      title: "Founders & Startups",
      description: "Validate ideas, access mentors, and connect with partners and investors.",
      color: "purple"
    },
    {
      icon: HeartHandshake,
      title: "Mentors & Volunteers",
      description: "Give back by teaching, mentoring, and supporting the next generation.",
      color: "orange"
    },
  ];

  const activities = [
    "Tech Meetups & Community Hangouts",
    "Hackathons & Innovation Challenges",
    "Study Groups & Learning Circles",
    "Mentorship & Career Guidance",
    "Community Projects & Open Source",
    "Online Sessions & Twitter/X Spaces",
  ];

  const steps = [
    { number: "01", title: "Join JDN", description: "Sign up and introduce yourself" },
    { number: "02", title: "Choose Your Interest", description: "Pick your focus area" },
    { number: "03", title: "Attend Events", description: "Participate in community activities" },
    { number: "04", title: "Collaborate", description: "Work on projects with others" },
    { number: "05", title: "Grow & Lead", description: "Advance and mentor others" },
  ];

  return (

    

    <div className="min-h-dvh bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden">
      
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-35 pb-24 px-4 sm:px-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            {/* Header */}
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-800"
            >
              <Sparkles className="w-4 h-4" />
              JDN Community
            </motion.div>

            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight"
            >
              Where <span className="text-emerald-500">Jigawa's Builders</span><br />
              Connect & Grow Together
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-12"
            >
              JDN is a people-powered tech community bringing together developers,
              students, founders, and partners to build a stronger digital future
              for Jigawa and beyond.
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
                <Users className="group-hover:rotate-12 transition-transform" size={20} />
                Join the Community
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 py-4 px-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-bold rounded-2xl border-2 border-gray-200 dark:border-gray-700 transition-all"
              >
                <HeartHandshake className="group-hover:scale-110 transition-transform" size={20} />
                Become a Volunteer
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0f1a] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Community Members", value: "2.8K+", icon: Users },
              { label: "Cities & LGAs", value: "12+", icon: MapPin },
              { label: "Events Hosted", value: "50+", icon: Calendar },
              { label: "Mentors & Leads", value: "30+", icon: Users2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= COMMUNITY PILLARS (Matches Home Page Services) ================= */}
      <section className="py-24 px-4 sm:px-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader 
            center 
            tag="Community Pillars" 
            title="Who Makes Up Our Community"
            description="Four core groups driving Jigawa's digital transformation"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                {/* Icon - Matching Home Page */}
                <div className="mb-6 w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <pillar.icon className="text-emerald-600 dark:text-emerald-400" size={28} />
                </div>
                
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {pillar.description}
                </p>
                
                {/* Action Link - Matching Home Page */}
                <motion.a 
                  href="#"
                  className="inline-flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (Matches Home Page Layout) ================= */}
      <section className="py-24 px-4 sm:px-10 bg-gray-50 dark:bg-[#0a0f1a] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader 
            center 
            tag="Getting Started" 
            title="How the Community Works"
            description="Five simple steps to becoming an active member of JDN"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -4 }}
                className="group text-center p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ACTIVITIES (Matches Home Page Cards) ================= */}
      <section className="py-24 px-4 sm:px-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader 
            center 
            tag="Community Activities" 
            title="What Happens in Our Community"
            description="Regular activities and events that keep our community engaged and growing"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-emerald-400 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Star className="text-emerald-600 dark:text-emerald-400 group-hover:rotate-12 transition-transform" size={18} />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {activity}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA (Matches Home Page CTA Exactly) ================= */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-white">
                    You Don't Need Permission to Belong
                  </h2>
                </div>
                
                <p className="text-emerald-50 opacity-90 text-lg lg:text-xl font-medium leading-relaxed">
                  Whether you're just starting or already building — there's a place
                  for you in Jigawa Digital Network.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl"
                >
                  Join the Community
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="px-10 py-5 bg-emerald-700/30 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl"
                >
                  Attend an Event
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

export default CommunityPage;