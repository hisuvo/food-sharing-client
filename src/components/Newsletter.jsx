import React, { useState } from "react";
import SectionHeader from "../Shared/SectionHeader";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email submission
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900/30 dark:text-gray-50 text-center">
      <SectionHeader title={"NewsLetter"} />
      <div className="max-w-xl mx-auto ">
        <h2 className="text-3xl font-semibold mb-4">
          Join Our Food Sharing Community
        </h2>
        <p className="text-lg  mb-6">
          Get updates, tips, and news about reducing food waste and sharing
          resources.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0"
        >
          <input
            type="email"
            className="px-4 py-3 border dark:bg-transparent border-gray-300 dark:border-gray-50 rounded-lg rounded-r-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-8 py-3 font-semibold rounded rounded-l-none bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-base text-green-600">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
