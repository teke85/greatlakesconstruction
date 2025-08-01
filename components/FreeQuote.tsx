"use client";

import type React from "react";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Home,
  Wrench,
  Hammer,
} from "lucide-react";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    area: "",
    postcode: "",
    projectType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    preferredContact: "email",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        area: "",
        postcode: "",
        projectType: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        preferredContact: "email",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h2>
          <p className="text-slate-600 font-playfair mb-4">
            Your quote request has been submitted successfully. We&#39;ll get
            back to you within 24 hours.
          </p>
          <div className="text-sm text-slate-500">
            Redirecting back to form...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-slate-300 font-jost max-w-2xl mx-auto">
              Ready to transform your space? Tell us about your project and
              we&#39;ll provide you with a detailed, no-obligation quote within
              24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-jost font-bold text-slate-800 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4 font-jost">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-800">
                      +44 (7586) 832927
                    </p>
                    <p className="text-sm text-slate-600">Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
                <div className="flex font-jost items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-800">
                      info@greatlakesconstruction.online
                    </p>
                    <p className="text-sm text-slate-600">
                      We respond within 2 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-800">
                      Greater London Area
                    </p>
                    <p className="text-sm text-slate-600">
                      Serving London & Home Counties
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 font-jost pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-4">
                  Our Services
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-slate-600">
                      Kitchen Refurbishment
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wrench className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-slate-600">
                      Bathroom Renovation
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Hammer className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-slate-600">
                      Home Extensions
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-slate-600">
                      Loft Conversions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2 font-jost">
            <div className="bg-white font-jost rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 020 7123 4567"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Address */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Project Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. London"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Area *
                        </label>
                        <select
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Area</option>
                          <option value="central-london">Central London</option>
                          <option value="westminster">Westminster</option>
                          <option value="kensington">Kensington</option>
                          <option value="chelsea">Chelsea</option>
                          <option value="mayfair">Mayfair</option>
                          <option value="belgravia">Belgravia</option>
                          <option value="knightsbridge">Knightsbridge</option>
                          <option value="south-kensington">
                            South Kensington
                          </option>
                          <option value="marylebone">Marylebone</option>
                          <option value="fitzrovia">Fitzrovia</option>
                          <option value="bloomsbury">Bloomsbury</option>
                          <option value="covent-garden">Covent Garden</option>
                          <option value="shoreditch">Shoreditch</option>
                          <option value="islington">Islington</option>
                          <option value="camden">Camden</option>
                          <option value="hampstead">Hampstead</option>
                          <option value="notting-hill">Notting Hill</option>
                          <option value="paddington">Paddington</option>
                          <option value="canary-wharf">Canary Wharf</option>
                          <option value="greenwich">Greenwich</option>
                          <option value="richmond">Richmond</option>
                          <option value="wimbledon">Wimbledon</option>
                          <option value="clapham">Clapham</option>
                          <option value="battersea">Battersea</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. SW1A 1AA"
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Project Type</option>
                        <option value="kitchen-refurbishment">
                          Kitchen Refurbishment
                        </option>
                        <option value="bathroom-renovation">
                          Bathroom Renovation
                        </option>
                        <option value="home-extension">Home Extension</option>
                        <option value="loft-conversion">Loft Conversion</option>
                        <option value="basement-conversion">
                          Basement Conversion
                        </option>
                        <option value="full-house-renovation">
                          Full House Renovation
                        </option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Please provide details about your project, including size, materials, specific requirements, etc."
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="under-15k">Under £15,000</option>
                          <option value="15k-30k">£15,000 - £30,000</option>
                          <option value="30k-60k">£30,000 - £60,000</option>
                          <option value="60k-100k">£60,000 - £100,000</option>
                          <option value="100k-200k">£100,000 - £200,000</option>
                          <option value="over-200k">Over £200,000</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Desired Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3-months">1-3 Months</option>
                          <option value="3-6-months">3-6 Months</option>
                          <option value="6-12-months">6-12 Months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === "email"}
                            onChange={handleInputChange}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-slate-700">
                            Email
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === "phone"}
                            onChange={handleInputChange}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-slate-700">
                            Phone
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="both"
                            checked={formData.preferredContact === "both"}
                            onChange={handleInputChange}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-slate-700">
                            Both
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-sm text-slate-600 text-center mt-3">
                    By submitting this form, you agree to be contacted by London
                    Construction regarding your project.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                24 Hours
              </div>
              <div className="text-slate-300">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                500+
              </div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                15+ Years
              </div>
              <div className="text-slate-300">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
