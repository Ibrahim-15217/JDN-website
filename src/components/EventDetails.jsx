import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { EVENTS } from "./EventsContent"; // Import EVENTS data

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EventDetails = () => {
  const { slug } = useParams();

  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Event not found.
      </div>
    );
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // smooth UX

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-green-100">
      
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-15 pt-5">

          <Link
            to="/events"
            className="top-0 left-6 z-20 mb-20 inline-flex items-center gap-2 text-md font-bold text-white hover:text-emerald-500 transition">
            <ArrowLeft size={16} />
            Back
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
              <Sparkles size={14} />
              {event.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {event.title}
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= META ================= */}
      <section className=" border-b-2 border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetaItem
            icon={Calendar}
            label="Date"
            value={`${event.date} ${event.month}`}
          />
          <MetaItem icon={Clock} label="Time" value={event.time} />
          <MetaItem icon={MapPin} label="Location" value={event.location} />
          <MetaItem
            icon={Users}
            label="Status"
            value={event.status}
          />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-black mb-6">
              About This Event
            </h2>

            <p className="text-gray-600 dark:text-green-100 leading-relaxed mb-6">
              This event is part of Jigawa Digital Network’s mission to build a
              sustainable digital ecosystem by empowering talent, encouraging
              innovation, and connecting communities.
            </p>

            <p className="text-gray-600 dark:text-green-100 leading-relaxed mb-10">
              Participants will gain practical exposure, connect with mentors,
              and explore opportunities aligned with Jigawa’s digital growth
              agenda.
            </p>

            <h3 className="text-xl font-bold mb-4">Who Should Attend?</h3>
            <ul className="space-y-3 text-gray-600 dark:text-green-100 list-disc list-inside mb-10">
              <li>Developers & Designers</li>
              <li>Students & Graduates</li>
              <li>Startup Founders</li>
              <li>Tech Enthusiasts</li>
              <li>Policy & Innovation Stakeholders</li>
            </ul>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 h-fit"
          >
            <h3 className="text-xl font-black mb-4">
              Event Summary
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-green-100 mb-8">
              <SummaryRow label="Category" value={event.category} />
              <SummaryRow
                label="Date"
                value={`${event.date} ${event.month}`}
              />
              <SummaryRow label="Time" value={event.time} />
              <SummaryRow label="Location" value={event.location} />
              <SummaryRow label="Status" value={event.status} />
            </div>

            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition flex items-center justify-center gap-3">
              Register for Event
              <ArrowUpRight />
            </button>

            
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-black mb-4">
              Be Part of Jigawa’s Digital Future
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Learn, connect, and grow through JDN programs and initiatives.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Explore More Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= SMALL COMPONENTS ================= */

const MetaItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
      <Icon />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between gap-4">
    <span className="text-gray-500 dark:text-green-100">{label}</span>
    <span className="font-semibold text-gray-800 dark:text-green-100 text-right">{value}</span>
  </div>
);

export default EventDetails;
