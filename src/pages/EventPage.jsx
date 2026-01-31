import React from 'react';
import EventsHeader from '../components/EventsHeader';
import EventsContent from '../components/EventsContent';
import Footer from '../components/Footer';
import EventDetails from '../components/EventDetails';

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <EventsHeader />
      <main className="flex-1">
        <EventsContent />
      </main>
      <Footer />
    </div>
  );
};
export default EventsPage;