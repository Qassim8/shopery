import React from "react";
import AppLayout from "../../components/AppLayout";
import {
  BsAward,
  BsCheckCircle,
  BsGlobe,
  BsPeople,
  BsShieldCheck,
  BsTruck,
} from "react-icons/bs";
import { HiOutlineChartBar } from "react-icons/hi2";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const About = () => {
  const stats = [
    { icon: BsPeople, value: "50K+", label: "Happy Customers" },
    { icon: BsGlobe, value: "100+", label: "Countries Served" },
    { icon: HiOutlineChartBar, value: "10K+", label: "Products Delivered" },
    { icon: BsAward, value: "15+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: BsShieldCheck,
      title: "Quality Assurance",
      description:
        "We ensure every product meets the highest quality standards before reaching our customers.",
    },
    {
      icon: BsTruck,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your orders to you as fast as possible.",
    },
    {
      icon: BsCheckCircle,
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our priority. We're here to help with any questions or concerns.",
    },
    {
      icon: HiOutlineOfficeBuilding,
      title: "Sustainable Practices",
      description:
        "Committed to eco-friendly practices and supporting local farmers and producers.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team-1.jpg",
      bio: "Passionate about connecting people with fresh, quality products.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/team-2.jpg",
      bio: "Ensures smooth operations and exceptional customer service.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: "/team-3.jpg",
      bio: "Curates the best selection of products for our customers.",
    },
    {
      name: "David Kim",
      role: "Customer Success",
      image: "/team-4.jpg",
      bio: "Dedicated to making every customer experience amazing.",
    },
  ];

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Ecobazar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about connecting you with fresh, quality products
              from local farmers and producers. Our mission is to make healthy,
              sustainable shopping accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Ecobazar began as a small family business
                  with a simple mission: to provide fresh, locally-sourced
                  products to our community. What started as a weekend farmers'
                  market stall has grown into a trusted online marketplace
                  serving customers across the country.
                </p>
                <p>
                  We believe that everyone deserves access to fresh, healthy
                  food and quality products. That's why we work directly with
                  local farmers, artisans, and producers to bring you the best
                  selection at fair prices.
                </p>
                <p>
                  Today, we're proud to be a leader in sustainable e-commerce,
                  supporting local economies while reducing our environmental
                  impact through eco-friendly packaging and delivery practices.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about-story.jpg"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  e.target.src = "/corn.png"; // Fallback image
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment
              to our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[var(--main-color)] rounded-full flex items-center justify-center mb-6">
                <BsAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality, and sustainably sourced
                products while supporting local communities and promoting
                healthy living. We strive to create a marketplace that benefits
                everyone involved - from farmers and producers to our valued
                customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <BsGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading online marketplace for fresh, local products,
                setting the standard for sustainable e-commerce. We envision a
                world where quality, health, and sustainability are accessible
                to all, creating positive change in communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Ecobazar who work tirelessly to bring
              you the best shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/corn.png"; // Fallback image
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--main-color)] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--main-color)]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Ecobazar for their
              daily needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="inline-block bg-white text-[var(--main-color)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--main-color)] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default About;
