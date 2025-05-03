import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import {
  Target,
  HeartHandshake,
  Sprout,
  Leaf,
  Users,
  Globe,
  Mail,
  ArrowRight
} from 'lucide-react';

const AboutUs: React.FC = () => {
  // Email configuration
  const emailAddress = "satwikpersonal04@gmail.com";
  const emailSubject = "Getting Involved with Khad Kranti";
  const emailBody = `Hello Khad Kranti Team,\n\nI would like to get involved with your initiative.\n\nName:\nInterest:\nLocation:\n\nThank you!`;
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (

    <div className="relative bg-gradient-to-b from-biocharGreen/20 via-biocharCream/10 to-white">
      <Navbar />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-biocharGreen mb-6">
            About Khad Kranti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing Indian agriculture through sustainable biochar solutions since 2018
          </p>
        </div>
        
        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className=" bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="bg-biocharGreen rounded-full p-4">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-biocharGreen text-center mb-4">Our Vision</h3>
            <p className="text-gray-700 text-center">
              To transform Indian agriculture through sustainable soil solutions that enhance productivity, farmer prosperity, and environmental health.
            </p>
          </div>

          {/* Mission */}
          <div className=" bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="bg-biocharGreen rounded-full p-4">
                <Sprout className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-biocharGreen text-center mb-4">Our Mission</h3>
            <p className="text-gray-700 text-center">
              To provide high-quality biochar solutions accessible to every Indian farmer, supported by education and community building.
            </p>
          </div>

          {/* Impact */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="bg-biocharGreen rounded-full p-4">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-biocharGreen text-center mb-4">Our Impact</h3>
            <p className="text-gray-700 text-center">
              5,000+ farmers supported<br />
              20,000+ acres improved<br />
              30% average yield increase<br />
              50,000+ tons of carbon sequestered
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8 md:p-12 shadow-inner">
          <h3 className="text-2xl md:text-3xl font-bold text-biocharGreen mb-6 text-center">Our Story</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Founded in 2018 by agricultural scientists and environmentalists, Khad Kranti began as a small research project in rural Maharashtra.
              </p>
              <p className="text-gray-700 mb-4">
                After witnessing the devastating effects of chemical fertilizers on soil health and farmer livelihoods, our team developed an affordable biochar solution tailored to Indian soil conditions.
              </p>
              <p className="text-gray-700">
                Today, we've grown into a trusted partner for thousands of farmers across 8 states, with recognition from the Ministry of Agriculture and NITI Aayog.
              </p>
            </div>
            <img
              src="/images/about/c3.jpg"
              alt="Khad Kranti team working with farmers"
              className="rounded-lg shadow-md h-64 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Sustainability Commitment */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-biocharGreen mb-8 text-center">Our Sustainability Commitment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Leaf className="h-6 w-6 text-biocharGreen mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Carbon Negative</h4>
                <p className="text-gray-600">Our process sequesters 3kg of CO₂ for every 1kg of biochar produced</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Users className="h-6 w-6 text-biocharGreen mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Farmer First</h4>
                <p className="text-gray-600">50% of our team comes from farming backgrounds</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <Globe className="h-6 w-6 text-biocharGreen mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Zero Waste</h4>
                <p className="text-gray-600">100% of our byproducts are repurposed or recycled</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-biocharGreen mb-8 text-center">Meet Our Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. XYZ",
                role: "Founder & CEO",
                expertise: "Soil Science",
                photo: "/images/team/dummy.png"
              },
              {
                name: "Member 2",
                role: "COO",
                expertise: "Farm Operations",
                photo: "/images/team/dummy.png"
              },
              {
                name: "Member 3",
                role: "CTO",
                expertise: "Biochar Production",
                photo: "/images/team/dummy.png"
              },
              {
                name: "Member 4",
                role: "Farmer Relations",
                expertise: "Community Outreach",
                photo: "/images/team/dummy.png"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/team/default.jpg';
                  }}
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-biocharGreen mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-biocharGreen rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Movement</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're a farmer, investor, or sustainability advocate, there's a place for you in the Khad Kranti revolution.
          </p>
          <a href={mailtoLink} className="inline-block">
            <button className="flex items-center justify-center gap-2 bg-white text-biocharGreen px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors group">
              <Mail className="w-5 h-5" />
              Get Involved
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
        </div>

        {/* Small Wave Decoration */}
        
        
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
    
  );
};

export default AboutUs;
