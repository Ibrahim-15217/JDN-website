// import React from "react";
// import { Link } from "react-router-dom";
// import { Calendar, MapPin, ArrowRight } from "lucide-react";

// /**
//  * EVENTS DATA
//  * (Later this can come from API / CMS without changing the UI)
//  */
// export const EVENTS = [
//   {
//     slug: "backend-development-training",
//     title: "Backend Development Training",
//     date: "Nov 12 – 16, 2025",
//     location: "Jigawa Digital Hub",
//     category: "Training",
//     description:
//       "A hands-on intensive training designed to equip developers with real-world backend engineering skills.",
//     about:
//       "This training focuses on building secure, scalable, and production-ready backend systems. Participants will work on practical projects and gain exposure to modern backend tools, best practices, and architecture patterns relevant to startups and enterprises.",
//     highlights: [
//       "RESTful API design and best practices",
//       "Authentication & authorization",
//       "Database modeling and optimization",
//       "Deploying backend services",
//       "Real-world project experience",
//     ],
//     audience: [
//       "Beginner to intermediate developers",
//       "Computer science students",
//       "Startup technical teams",
//       "Anyone transitioning into backend development",
//     ],
//   },
//   {
//     slug: "ui-ux-design-bootcamp",
//     title: "UI/UX Design Bootcamp",
//     date: "Dec 3 – 7, 2025",
//     location: "Innovation Center, Dutse",
//     category: "Design",
//     description:
//       "An immersive bootcamp focused on user-centered design and practical UI/UX workflows.",
//     about:
//       "This bootcamp introduces participants to modern UI/UX design principles, usability testing, and product thinking. You’ll learn how to design interfaces that solve real problems, especially within the African and emerging markets context.",
//     highlights: [
//       "Design thinking fundamentals",
//       "User research & personas",
//       "Wireframing and prototyping",
//       "Usability testing",
//       "Portfolio-ready case study",
//     ],
//     audience: [
//       "Aspiring designers",
//       "Product managers",
//       "Founders",
//       "Frontend developers",
//     ],
//   },
// ];
// /**
//  * EVENTS PAGE
//  */
// const Events = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* ================= HERO SECTION ================= */}
//       <section className="border-b border-gray-200">
//         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
//           <span className="inline-block mb-4 text-sm font-semibold text-emerald-600">
//             JDN EVENTS
//           </span>

//           <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-3xl mb-6">
//             Learn, Connect, and Grow with the JDN Community
//           </h1>

//           <p className="text-lg text-gray-600 max-w-2xl">
//             From hands-on technical trainings to networking meetups and
//             innovation-driven conferences, our events are designed to empower
//             talent, startups, and the digital ecosystem in Jigawa State.
//           </p>
//         </div>
//       </section>

//       {/* ================= EVENTS LIST ================= */}
//       <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {EVENTS.map((event) => (
//             <Link
//               key={event.id}
//               to={`/events/${event.slug}`}
//               className="group border border-gray-200 rounded-2xl p-6 hover:border-emerald-500 transition bg-white"
//             >
//               {/* Category */}
//               <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-600">
//                 {event.category}
//               </span>

//               {/* Title */}
//               <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition">
//                 {event.title}
//               </h3>

//               {/* Meta */}
//               <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
//                 <div className="flex items-center gap-2">
//                   <Calendar size={16} />
//                   {event.date}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin size={16} />
//                   {event.location}
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 mb-6">
//                 {event.description}
//               </p>

//               {/* CTA */}
//               <div className="flex items-center text-emerald-600 font-semibold">
//                 View Event Details
//                 <ArrowRight size={18} className="ml-2 transition group-hover:translate-x-1" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA SECTION ================= */}
//       <section className="bg-emerald-600">
//         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-20 text-center text-white">
//           <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
//             Don’t Miss the Next Opportunity
//           </h2>
//           <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
//             Join Jigawa Digital Network to stay updated on trainings, events,
//             funding opportunities, and community programs.
//           </p>

//           <Link
//             to="/signup"
//             className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-100 transition"
//           >
//             Join the Network
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Events;
