import { Routes, Route } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";


import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/HomePage";
import EventPage from "../pages/EventPage";
import LoginPage from "../pages/LoginPage";
import Signup from "../pages/Signup";
import OTPVerification from "../pages/OTPVerification";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main site layout */}
      {/* <Route element={<MainLayout />}>
        
      </Route> */}

      {/* Auth layout */}
      <Route element={<AuthLayout />}>

        <Route path="/" element={
            <PageWrapper>
                <HomePage />
            </PageWrapper>} />

        <Route path="/login" element={
            <PageWrapper>
                <LoginPage />
            </PageWrapper>} />

        <Route path="/signup" element={
            <PageWrapper>
                <Signup />
            </PageWrapper>} />

        <Route path="/verify-otp" element={
            <PageWrapper>
                <OTPVerification />
            </PageWrapper>} />

        <Route path="/events" element={
            <PageWrapper>
                <EventPage />
            </PageWrapper>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={
        <PageWrapper>
            <HomePage />
        </PageWrapper>} />
    </Routes>
  );
};

export default AppRoutes;
