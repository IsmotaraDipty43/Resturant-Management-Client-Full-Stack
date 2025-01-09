import React from "react";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber"; // Ensure this is correctly named; 'Navber' might be a typo for 'Navbar'
import Cover from "../Shared/Cover";
import imgcontact from '../../assets/contact/banner.jpg';

const ContactUs = () => {
  return (
    <div>
      <Navber /> {/* Ensure your Navbar component works as intended */}
      <Cover 
        img={imgcontact} 
        title={'Contact Us'} 
        description={
          'Have questions, suggestions, or feedback? Get in touch with us to share your thoughts. We value your input and look forward to connecting with you!'
        }
      />
      <div className="bg-gray-100 mt-20 mb-10 font-sans">
        {/* Header */}
        <header className="bg-red-500 text-white text-center py-5">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">We'd love to hear from you!</p>
        </header>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto mt-10 mb-10 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </form>
        </section>

      
      </div>
      <Footer /> {/* Footer is included and should render correctly */}
    </div>
  );
};

export default ContactUs;
