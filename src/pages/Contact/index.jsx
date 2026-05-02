import React, { useState } from "react";

import AppLayout from "../../components/AppLayout";
import { BsClock, BsEnvelope, BsPhone, BsSend } from "react-icons/bs";
import { BiSolidMapPin } from "react-icons/bi";
import {
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: BsPhone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      description: "Mon-Fri 9AM-6PM",
    },
    {
      icon: BsEnvelope,
      title: "Email",
      details: ["support@ecobazar.com", "sales@ecobazar.com"],
      description: "We reply within 24 hours",
    },
    {
      icon: BiSolidMapPin,
      title: "Address",
      details: ["123 Green Street", "Eco City, EC 12345"],
      description: "Visit our office",
    },
    {
      icon: BsClock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM", "Sun: Closed"],
      description: "Store pickup available",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Customer Support" },
    { value: "orders", label: "Order Issues" },
    { value: "returns", label: "Returns & Refunds" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      }, 3000);
    }
  };

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question or need help? We're here to assist you. Reach out
              to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <BsCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)] ${
                        errors.name ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)] ${
                          errors.email ? "border-red-300" : "border-gray-300"
                        }`}
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)] ${
                        errors.subject ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)] ${
                        errors.message ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[var(--main-color)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--main-color)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <BsSend />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Find Us
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <HiOutlineMapPin className="text-4xl text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      123 Green Street, Eco City, EC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <HiOutlinePhone className="text-[var(--main-color)] text-xl" />
                    <div>
                      <p className="font-medium text-gray-900">Call us now</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineMail className="text-[var(--main-color)] text-xl" />
                    <div>
                      <p className="font-medium text-gray-900">Email support</p>
                      <p className="text-gray-600">support@ecobazar.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineClock className="text-[var(--main-color)] text-xl" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Business hours
                      </p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-[var(--main-color)] p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                <p className="mb-4">
                  Check out our frequently asked questions for quick answers to
                  common inquiries.
                </p>
                <a
                  href="/faq"
                  className="inline-block bg-white text-[var(--main-color)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Contact;
