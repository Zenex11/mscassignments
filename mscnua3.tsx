import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Club</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Events</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Welcome to Our Club</h2>
      <p className="text-gray-600 mb-6">Join a community of passionate people</p>
      <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
        Join Now
      </button>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>© 2026 Club. All rights reserved.</p>
    </footer>
  );
};

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