import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import FarmerForm from '@/components/FarmerForm';
import SuccessStories from '@/components/SuccessStories';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FarmerPhotoSlider from '@/components/FarmerPhotoSlider';
import SoilComparison from '@/components/SoilComparison';
import OurVision from '@/components/OurVision';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="space-y-20">
        <Hero />
        <ProductShowcase />
        <SoilComparison />
        {/* <OurVision /> */}
        <FarmerPhotoSlider />
        <FarmerForm />
        <SuccessStories />
        <TrustBadges />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;