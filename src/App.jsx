import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from  "./pages/HomePage";
import EventDetails from "./components/EventDetails";
import EventsContent from "./components/EventsContent";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage"
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CommunityPage from "./pages/CommunityPage";
import ProgramsPage from "./pages/ProgramsPage";
import ProgramDetailsPage from "./pages/ProgramDetailsPage";
import OTPVerification from "./pages/OTPVerification";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsContent />} />
      <Route path="/events/:slug" element={<EventDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/programs/:id" element={<ProgramDetailsPage />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
    </Routes>
  );
}

export default App;
