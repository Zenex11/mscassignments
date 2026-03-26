import React from "react";

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

export default Hero;
