import React, { useState } from "react";
import AppLayout from "../../components/AppLayout";
import {
  BsChatDots,
  BsChevronDown,
  BsChevronUp,
  BsEnvelope,
  BsPhone,
  BsSearch,
} from "react-icons/bs";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "orders", label: "Orders & Shipping" },
    { id: "products", label: "Products & Quality" },
    { id: "account", label: "Account & Payments" },
    { id: "returns", label: "Returns & Refunds" },
    { id: "technical", label: "Technical Support" },
  ];

  const faqData = [
    {
      id: 1,
      category: "orders",
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping are also available at checkout. International shipping times vary by destination and can take 7-14 business days. You'll receive a tracking number via email once your order ships.",
    },
    {
      id: 2,
      category: "orders",
      question: "Can I change my shipping address after placing an order?",
      answer:
        "If your order hasn't shipped yet, we can update the shipping address. Please contact our customer service team immediately at support@ecobazar.com or call 1-800-ECO-BAZAR with your order number. Once the order has shipped, we cannot change the delivery address, but you can arrange for pickup at a local post office or have it forwarded.",
    },
    {
      id: 3,
      category: "products",
      question: "Are your products organic and sustainable?",
      answer:
        "Yes! We are committed to providing organic, sustainably sourced products. All our fruits, vegetables, and dairy products come from certified organic farms that follow sustainable farming practices. We work directly with local farmers to ensure the highest quality while supporting eco-friendly agriculture.",
    },
    {
      id: 4,
      category: "products",
      question: "How do you ensure product freshness?",
      answer:
        "Freshness is our top priority. We source products daily from local farms and use temperature-controlled storage and transportation. Our delivery windows are designed to get your groceries to you at the peak of freshness. We also provide detailed storage tips for each product category.",
    },
    {
      id: 5,
      category: "account",
      question: "How do I create an account?",
      answer:
        'Creating an account is easy! Click the "Sign Up" button in the top right corner of our website. You can sign up using your email address or through social media accounts (Google, Facebook, or Apple). Once registered, you\'ll have access to order history, saved addresses, and faster checkout.',
    },
    {
      id: 6,
      category: "account",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers. For recurring deliveries, you can save your payment information securely in your account. All transactions are encrypted and PCI compliant.",
    },
    {
      id: 7,
      category: "returns",
      question: "What is your return policy?",
      answer:
        "We want you to be completely satisfied with your purchase. If you're not happy with any product, you can return it within 7 days of delivery for a full refund. Products must be unopened and in their original packaging. Perishable items cannot be returned for health and safety reasons, but we offer store credit for future purchases.",
    },
    {
      id: 8,
      category: "returns",
      question: "How do I initiate a return?",
      answer:
        'To initiate a return, log into your account and go to "My Orders." Find the order you want to return and click "Return Items." Select the items and reason for return. Our customer service team will review your request and provide return instructions. You can also contact us directly at returns@ecobazar.com.',
    },
    {
      id: 9,
      category: "technical",
      question: "Why can't I log into my account?",
      answer:
        "If you're having trouble logging in, first check that you're using the correct email address and password. Passwords are case-sensitive. If you've forgotten your password, click \"Forgot Password\" on the login page. If you still can't access your account, please contact our support team who can help verify your identity and reset your account.",
    },
    {
      id: 10,
      category: "technical",
      question: "How do I update my account information?",
      answer:
        'You can update your account information by logging into your account and going to "Settings." From there, you can update your personal information, shipping addresses, payment methods, and notification preferences. All changes are saved automatically and will be reflected in future orders.',
    },
    {
      id: 11,
      category: "orders",
      question: "Can I schedule recurring deliveries?",
      answer:
        "Absolutely! We offer flexible recurring delivery options. You can set up weekly, bi-weekly, or monthly deliveries through your account dashboard. Choose your preferred delivery day and time, and we'll automatically process your order. You can modify or cancel recurring deliveries at any time.",
    },
    {
      id: 12,
      category: "products",
      question: "Do you offer product substitutions?",
      answer:
        "Yes, we offer smart substitutions for out-of-stock items. During checkout, you can choose to allow substitutions with similar or upgraded products. Our team carefully selects substitutes that match the quality and nutritional value of your original choices. You'll be notified of any substitutions via email.",
    },
  ];

  const toggleQuestion = (questionId) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our products, orders, and
              services. Can't find what you're looking for? Contact our support
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)]"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-[var(--main-color)] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <BsSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse different
                  categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="px-6 py-3 bg-[var(--main-color)] text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-sm border"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openQuestions.has(faq.id) ? (
                        <BsChevronUp className="text-gray-400 flex-shrink-0" />
                      ) : (
                        <BsChevronDown className="text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {openQuestions.has(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-[var(--main-color)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-green-100 mb-12">
              Our friendly support team is here to assist you with any
              questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <BsChatDots className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Live Chat
                </h3>
                <p className="text-green-100 mb-4">
                  Chat with our support team in real-time during business hours.
                </p>
                <button className="w-full bg-white text-[var(--main-color)] py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Chat
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <BsEnvelope className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Email Support
                </h3>
                <p className="text-green-100 mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <a
                  href="mailto:support@ecobazar.com"
                  className="block w-full bg-white text-[var(--main-color)] py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <BsPhone className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Phone Support
                </h3>
                <p className="text-green-100 mb-4">
                  Call us directly for immediate assistance.
                </p>
                <a
                  href="tel:+15551234567"
                  className="block w-full bg-white text-[var(--main-color)] py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Customer Support
                  </h4>
                  <p className="text-gray-600 mb-1">
                    Email: support@ecobazar.com
                  </p>
                  <p className="text-gray-600 mb-1">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-600">Hours: Mon-Fri 9AM-6PM EST</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Business Inquiries
                  </h4>
                  <p className="text-gray-600 mb-1">
                    Email: business@ecobazar.com
                  </p>
                  <p className="text-gray-600 mb-1">Phone: +1 (555) 765-4321</p>
                  <p className="text-gray-600">For partnership opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default FAQ;
