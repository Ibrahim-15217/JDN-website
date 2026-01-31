import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Users,
  Handshake,
  ArrowUpRight,
  Send,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  MessageCircle,
  Building2,
  Briefcase,
  Users2,
  Award,
  Zap,
  Star,
  Heart,
  Coffee,
  Lightbulb,
  Shield,
  Network,
  Clock,
  MailCheck,
  PhoneCall,
  MessageSquare,
  Map,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  ChevronRight,
  X,
  HeartHandshake,
  Building,
  Calendar,
  BookOpen,
} from "lucide-react";

/* ================= MATCHING ================= */
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    interest: ""
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const contactChannels = [
    {
      icon: MailCheck,
      title: "Email Us",
      value: "hello@jdn.org",
      description: "General inquiries & partnerships",
      action: "mailto:hello@jdn.org",
      color: "emerald"
    },
    {
      icon: PhoneCall,
      title: "Call Us",
      value: "+234 803 123 4567",
      description: "Mon - Fri, 9AM - 5PM WAT",
      action: "tel:+2348031234567",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+234 903 987 6543",
      description: "Quick responses & support",
      action: "https://wa.me/2349039876543",
      color: "green"
    },
    {
      icon: Map,
      title: "Visit Us",
      value: "JDN Innovation Hub",
      description: "Dutse, Jigawa State",
      action: "https://maps.google.com",
      color: "purple"
    },
  ];

  const teamContacts = [
    {
      name: "Amina Sani",
      role: "Partnerships Director",
      email: "amina@jdn.org",
      focus: "Corporate & Government Partnerships",
      image: "👩🏽‍💼",
      color: "emerald"
    },
    {
      name: "Musa Abdullahi",
      role: "Programs Lead",
      email: "musa@jdn.org",
      focus: "Events & Community Programs",
      image: "👨🏽‍💻",
      color: "blue"
    },
    {
      name: "Fatima Yusuf",
      role: "Community Manager",
      email: "fatima@jdn.org",
      focus: "Membership & Volunteer Coordination",
      image: "👩🏽‍🎓",
      color: "purple"
    },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", url: "#", color: "sky" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "blue" },
    { icon: Instagram, label: "Instagram", url: "#", color: "pink" },
    { icon: Facebook, label: "Facebook", url: "#", color: "indigo" },
    { icon: Youtube, label: "YouTube", url: "#", color: "red" },
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnerships",
      description: "Sponsorships, funding, and resource sharing",
      benefits: ["Brand visibility", "Talent access", "Impact reporting"]
    },
    {
      icon: Briefcase,
      title: "Startup Collaborations",
      description: "Incubation support, mentorship, and ecosystem access",
      benefits: ["Market access", "Mentorship", "Funding opportunities"]
    },
    {
      icon: Users2,
      title: "Community Programs",
      description: "Volunteering, training, and community engagement",
      benefits: ["Skill development", "Networking", "Social impact"]
    },
    {
      icon: Award,
      title: "Government Initiatives",
      description: "Digital transformation projects and policy engagement",
      benefits: ["Scale impact", "Policy influence", "Public-private synergy"]
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-dvh bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden">
      
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 px-4 sm:px-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
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
              <Globe className="w-4 h-4" />
              Contact & Partnerships
            </motion.div>

            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight"
            >
              Let's Build <span className="text-emerald-500">Impact</span> Together
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-12"
            >
              Ready to <span className="font-semibold text-emerald-600 dark:text-emerald-400">collaborate</span>,{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">innovate</span>, and{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">transform</span> Jigawa together?
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
                <MessageCircle className="group-hover:rotate-12 transition-transform" size={20} />
                Send a Message
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 py-4 px-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-bold rounded-2xl border-2 border-gray-200 dark:border-gray-700 transition-all"
              >
                <Users className="group-hover:scale-110 transition-transform" size={20} />
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CHANNELS ================= */}
      <section className="py-24 px-4 sm:px-10 bg-gray-50 dark:bg-[#0a0f1a] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader 
            center 
            tag="Contact Channels" 
            title="Ways to Connect With Us"
            description="Choose the communication method that works best for you"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactChannels.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.action}
                variants={fadeUpVariant}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative block"
              >
                {/* Card */}
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                  {/* Icon */}
                  <div className={`mb-6 w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <channel.icon className={`text-emerald-600 dark:text-emerald-400`} size={28} />
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                    {channel.title}
                  </h3>
                  
                  <div className="text-xl font-black text-gray-900 dark:text-white mb-2">
                    {channel.value}
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                    {channel.description}
                  </p>
                  
                  {/* Action Link */}
                  <motion.span 
                    className="inline-flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm group-hover:gap-3 transition-all"
                  >
                    Contact now <ArrowRight size={16} />
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PARTNERSHIP MODELS ================= */}
      <section className="py-24 px-4 sm:px-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader 
            tag="Partnership Models" 
            title="Ways to Collaborate With JDN"
            description="Explore different partnership opportunities that align with your goals"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6 w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <type.icon className="text-emerald-600 dark:text-emerald-400" size={28} />
                </div>
                
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                  {type.title}
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                  {type.description}
                </p>
                
                {/* Benefits */}
                <div className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                      <span className="font-medium text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Link */}
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

      {/* ================= CONTACT FORM & TEAM SECTION ================= */}
      <section className="py-24 px-4 sm:px-10 bg-gray-50 dark:bg-[#0a0f1a]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Left 2/3 */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeUpVariant}
                id="contact-form"
                className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-10 shadow-xs"
              >
                <div className="mb-10">
                  <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-100 dark:border-emerald-800">
                    Send Message
                  </span>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                    Get in Touch Directly
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and our team will get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
                      What brings you to JDN?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["Partnership", "Sponsorship", "Volunteering", "Other"].map((interest) => (
                        <label
                          key={interest}
                          className={`flex items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.interest === interest
                              ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                              : "border-gray-200 dark:border-gray-600 hover:border-emerald-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="interest"
                            value={interest}
                            checked={formData.interest === interest}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project, partnership idea, or inquiry..."
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group flex items-center justify-center gap-3 py-5 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl transition-all"
                  >
                    <Send className="group-hover:rotate-12 transition-transform" size={20} />
                    Send Message
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Team Contacts - Right 1/3 */}
            <div id="team">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeUpVariant}
                className="sticky top-8"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                    Meet Our <span className="text-emerald-500">Team</span>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Connect directly with our dedicated team members
                  </p>
                </div>

                <div className="space-y-6">
                  {teamContacts.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={viewportSettings}
                      whileHover={{ x: 5 }}
                      className="group p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{member.image}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {member.name}
                          </h3>
                          <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-2">
                            {member.role}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                            {member.focus}
                          </p>
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-12 p-8 rounded-3xl bg-linear-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Follow Our Journey
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-400 transition-all"
                      >
                        <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-emerald-500" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
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
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                  Ready to join Jigawa's digital revolution?
                </h2>
                <p className="text-emerald-50 opacity-90 text-lg lg:text-xl font-medium leading-relaxed">
                  Join thousands of innovators, partners, and community members shaping Jigawa's digital future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl"
                >
                  Start Partnership
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  className="px-10 py-5 bg-emerald-700/30 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl"
                >
                  Schedule Call
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

export default ContactPage;