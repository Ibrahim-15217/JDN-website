import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from "../components/Footer";
import {
  MapPin,
  Clock,
  Bookmark,
  BookmarkCheck,
  Plus,
  Users,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Search,
  CalendarDays,
  Globe,
  TrendingUp,
  Star,
  ChevronRight,
  Filter,
  Target,
  BookOpen,
  Zap,
  CheckCircle2,
  Quote,
  Building2,
} from "lucide-react";

// ================= MATCHING HOME PAGE ANIMATIONS =================
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

// ================= REUSABLE HOME PAGE COMPONENTS =================
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

// ================= EVENT DATA =================
export const EVENTS = [
  {
    id: 1,
    slug: "jdn-agritech-summit",
    title: "Jigawa Innovation Summit: Future of Agri-Tech",
    description: "A flagship summit exploring how technology is reshaping agriculture and food systems in Northern Nigeria.",
    category: "Summits",
    date: "24",
    month: "OCT",
    time: "10:00 AM",
    location: "Grand Social Hub, Dutse",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
    featured: true,
    status: "Almost Full",
    tags: ["Agriculture", "Innovation", "Summit"]
  },
  {
    id: 2,
    slug: "uiux-design-week",
    title: "Global UI/UX Design Week",
    description: "Hands-on sessions focused on user-centered design for modern digital products.",
    category: "Workshops",
    date: "12",
    month: "NOV",
    time: "02:00 PM",
    location: "Virtual (Live Session)",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964",
    featured: false,
    status: "Online",
    tags: ["Design", "Workshop", "Virtual"]
  },
  {
    id: 3,
    slug: "code-jam-jigawa",
    title: "Code-Jam: Building for Jigawa",
    description: "A collaborative hackathon solving real local challenges using technology.",
    category: "Hackathons",
    date: "05",
    month: "DEC",
    time: "08:00 AM",
    location: "Tech Loft, Kazaure",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
    featured: false,
    status: "Open for Registration",
    tags: ["Hackathon", "Coding", "Collaboration"]
  },
  {
    id: 4,
    slug: "digital-skills-bootcamp",
    title: "Digital Skills Bootcamp",
    description: "An intensive bootcamp covering web, mobile, and cloud fundamentals.",
    category: "Workshops",
    date: "18",
    month: "JAN",
    time: "09:00 AM",
    location: "JDN Innovation Hub, Dutse",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070",
    featured: false,
    status: "Open for Registration",
    tags: ["Bootcamp", "Learning", "Development"]
  },
  {
    id: 5,
    slug: "women-in-tech-meetup",
    title: "Women in Tech Community Meetup",
    description: "A networking and mentorship event celebrating women shaping the tech ecosystem.",
    category: "Meetups",
    date: "02",
    month: "FEB",
    time: "04:00 PM",
    location: "Startup Hub, Dutse",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070",
    featured: false,
    status: "Open for Registration",
    tags: ["Women", "Networking", "Community"]
  },
  {
    id: 6,
    slug: "ai-for-public-sector",
    title: "AI for Public Sector Forum",
    description: "Exploring how AI can improve governance, services, and policy delivery.",
    category: "Summits",
    date: "20",
    month: "MAR",
    time: "11:00 AM",
    location: "Government House Hall, Dutse",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    featured: false,
    status: "Open for Registration",
    tags: ["AI", "Government", "Forum"]
  },
  {
    id: 7,
    slug: "startup-founders-roundtable",
    title: "Startup Founders Roundtable",
    description: "An invite-only discussion with founders building scalable solutions from Jigawa.",
    category: "Meetups",
    date: "10",
    month: "APR",
    time: "03:00 PM",
    location: "JDN Conference Room",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    featured: false,
    status: "Limited Seats",
    tags: ["Startup", "Founders", "Roundtable"]
  },
  {
    id: 8,
    slug: "youth-tech-career-day",
    title: "Youth Tech Career Day",
    description: "Guidance, mentorship, and exposure for young people entering tech careers.",
    category: "Workshops",
    date: "28",
    month: "MAY",
    time: "10:00 AM",
    location: "Federal University Dutse",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    featured: false,
    status: "Open for Registration",
    tags: ["Youth", "Career", "Mentorship"]
  },
];

// ================= CONSTANTS =================
const CATEGORIES = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "summits", label: "Summits", icon: TrendingUp },
  { id: "workshops", label: "Workshops", icon: BookOpen },
  { id: "hackathons", label: "Hackathons", icon: Zap },
  { id: "meetups", label: "Meetups", icon: Users },
];

const STATUS_CONFIG = {
  "Almost Full": {
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Users,
  },
  "Limited Seats": {
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    icon: Users,
  },
  "Online": {
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    icon: Globe,
  },
  "Open for Registration": {
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    icon: Sparkles,
  },
};

// ================= REUSABLE COMPONENTS =================
const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG["Open for Registration"];
  const Icon = config.icon;
  
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.color}`}>
      <Icon size={14} />
      {status}
    </div>
  );
};

const CategoryFilter = ({ categories, selected, onSelect }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className="flex flex-wrap gap-2"
  >
    {categories.map((cat) => {
      const Icon = cat.icon;
      const isSelected = selected === cat.id;
      
      return (
        <motion.button
          key={cat.id}
          variants={fadeUpVariant}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(cat.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
            isSelected
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          <Icon size={16} />
          {cat.label}
        </motion.button>
      );
    })}
  </motion.div>
);

const EventCard = ({ event, isBookmarked, onToggleBookmark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6 }}
    className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
  >
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Date Badge */}
      <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
        <div className="text-xl font-black text-gray-900 dark:text-white">{event.date}</div>
        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {event.month}
        </div>
      </div>
      
      {/* Bookmark Button */}
      <button
        onClick={() => onToggleBookmark(event.id)}
        className={`absolute top-4 right-4 p-2.5 rounded-xl backdrop-blur-sm transition-colors duration-300 ${
          isBookmarked
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "bg-white/80 text-gray-600 hover:bg-emerald-500 hover:text-white"
        }`}
      >
        {isBookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
      </button>
    </div>
    

    {/* Content Section */}
    <Link to={`/events/${event.slug}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <StatusBadge status={event.status} />
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full px-3 py-1">
            {event.category}
          </span>
        </div>
        
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
          {event.title}
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed text-sm">
          {event.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              {event.time}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span className="truncate max-w-[120px]">{event.location}</span>
            </div>
          </div>
          
          <motion.span
            whileHover={{ x: 5 }}
            className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium"
          >
            Details
            <ArrowUpRight size={16} />
          </motion.span>
        </div>
      </div>
    </Link>
  </motion.div>
);

// ================= MAIN COMPONENT =================
const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set());

  // Find featured event
  const featuredEvent = EVENTS.find(event => event.featured);

  // Filter events based on category and search
  const filteredEvents = useMemo(() => {
    return EVENTS.filter(event => {
      const matchesCategory = selectedCategory === "all" || 
        event.category.toLowerCase() === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleBookmark = (id) => {
    setBookmarkedEvents(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

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
              JDN Events
            </motion.div>

            <motion.h1 
              variants={fadeUpVariant}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight"
            >
              Where{" "}
              <span className="text-emerald-500">Innovation</span>{" "}
              Meets Community
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-12"
            >
              Discover summits, workshops, hackathons, and meetups shaping Jigawa's digital future.
            </motion.p>

            {/* Search Bar - Matching Home Page Style */}
            <motion.div
              variants={fadeUpVariant}
              className="relative mb-10 max-w-2xl"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search events by title, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 dark:text-white"
              />
            </motion.div>

            {/* Category Filters */}
            <CategoryFilter
              categories={CATEGORIES}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED EVENT (Matches Home Page Split Layout) ================= */}
       {/* Featured Event */}
      {featuredEvent && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white text-gray-900 text-sm font-bold rounded-full">
                    <Star size={12} fill="currentColor" />
                    Featured Event
                  </div>
                  <StatusBadge status={featuredEvent.status} />
                </div>
                
                <h2 className="text-xl md:text-4xl font-black text-white mb-4">
                  {featuredEvent.title}
                </h2>
                
                <p className="text-gray-200 text-sm md:text-xl mb-6 line-clamp-2">
                  {featuredEvent.description}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4 md:gap-6 text-gray-200">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={20} />
                      <span className="text-xs md:text-xl font-medium">{featuredEvent.date} {featuredEvent.month}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span className="text-xs md:text-xl font-medium">{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={20} />
                      <span className="text-xs md:text-xl font-medium">{featuredEvent.location}</span>
                    </div>
                  </div>
                  
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm hover:bg-emerald-500 hover:text-white transition-colors">
                        Register Now
                        <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ================= EVENTS GRID (Matches Home Page Bento Style) ================= */}
      <section className="py-24 px-4 sm:px-10 bg-white dark:bg-gray-900">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader 
            tag="Upcoming Events" 
            title={<>Discover <span className="text-emerald-500">Opportunities</span></>}
            description={`${filteredEvents.filter(e => !e.featured).length} events matching your search`}
          />

          {filteredEvents.filter(e => !e.featured).length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filters
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredEvents
                    .filter(event => !event.featured)
                    .map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        isBookmarked={bookmarkedEvents.has(event.id)}
                        onToggleBookmark={toggleBookmark}
                      />
                    ))}
                </AnimatePresence>
              </motion.div>
              
              {/* Host Event CTA - Matching Home Page CTA */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportSettings}
                className="relative mt-20"
              >
                <div className="relative bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 p-12 lg:p-20 rounded-[3rem] overflow-hidden shadow-2xl">
                  {/* Decorative circles */}
                  <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                    <div className="max-w-2xl">
                      <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                        Want to Host an Event?
                      </h2>
                      <p className="text-emerald-50 opacity-90 text-lg lg:text-xl font-medium leading-relaxed">
                        Bring your idea to the JDN community and reach innovators, builders, and leaders across Jigawa State.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                      <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl"
                      >
                        Submit Proposal
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        className="px-10 py-5 bg-emerald-700/30 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl"
                      >
                        View Guidelines
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;