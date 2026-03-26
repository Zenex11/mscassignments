import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <section className="px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Workshops" description="Learn new skills with hands-on sessions" />
        <Card title="Networking" description="Connect with like-minded people" />
        <Card title="Events" description="Participate in exciting activities" />
      </section>

      <Footer />
    </div>
  );
};

export default App;
