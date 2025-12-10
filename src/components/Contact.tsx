import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS send method
    emailjs.send(
      "service_7n7i6kt",      // your service ID
      "template_fpguxf9",     // your template ID
      formData,               // dynamic data sent to email
      "-0a3SuSzUyxpyUaHn"     // your public key
    )
      .then(() => {
        setSubmitted(true);

        // Reset data
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          country: '',
          message: ''
        });

        // Hide success message after 3 sec
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Something went wrong, please try again.");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule a free consultation with our experts. We're here to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left contact info */}
          <div>
            <h3 className="mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600"><a href="tel:919592923602">+91 95929-23602</a></div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600"><a href="mailto:info@hirenest.agency">info@hirenest.agency</a></div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Office Address</div>
                  <div className="text-gray-600">
                    GOLD HOMES, PLOT NO 8 SHOWROOM, <br />Landran Rd, Sector 116, KHARAR, <br />Punjab 140307
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Working Hours</div>
                  <div className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</div>
                  <div className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
            <h3 className="mb-6">Send us a Message</h3>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-green-900 mb-2">Thank You!</h4>
                <p className="text-green-700">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* FULL NAME */}
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Service + Country */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Service Required *</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Service</option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="pr">Permanent Residency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Preferred Country *</label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Country</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="europe">Europe</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Submit Application
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
