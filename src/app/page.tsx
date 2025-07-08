"use client";

import React from "react";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-black font-sans">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Appointment Scheduler</h1>
      <p className="text-lg mb-4 max-w-xl text-center">
        Easily view availability and schedule your appointments online.
      </p>
      <div className="w-full max-w-3xl bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Availability</h2>
        <p>Availability calendar and scheduling UI will go here.</p>
      </div>
    </section>
  );
}
