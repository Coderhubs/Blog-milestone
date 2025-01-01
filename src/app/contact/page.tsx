"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ContactForm: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to submit form data, e.g., API call
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-24 mt-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-tight text-zinc-100 lg:text-5xl">Let&apos;s talk!</h2>
          <div className="text-gray-600">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <Image src="/images/doodle.png" 
        alt="" 
        width={400}
        height={400}
        className="p-6 h-52 md:h-64" />
      </div>
      <form onSubmit={handleSubmit} noValidate className="space-y-6 p-10 shadow-lg shadow-slate-900">
        <div>
          <label htmlFor="name" className="text-sm">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 dark:text-gray-50">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
