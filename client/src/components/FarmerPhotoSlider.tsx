import React from 'react';
import { Card } from "@/components/ui/card";

const FarmerPhotoSlider: React.FC = () => {
  const farmerPhotos = [
    {
      id: 1,
      image: "/images/farmers/f1.jpg"
    },
    {
      id: 2,
      image: "/images/farmers/f4.jpg"
    },
    {
      id: 3,
      image: "/images/farmers/f2.jpg"
    },
    {
      id: 4,
      image: "/images/farmers/f5.jpg"
    },
    {
      id: 5,
      image: "/images/farmers/f6.jpg"
    },
    {
      id: 6,
      image: "/images/farmers/f3.jpg"
    }
  ];

  return (
    
    <section className="py-7 bg-biocharSoftGreen overflow-hidden">
      {/* <h2 className="text-white text-center text-2xl font-bold mb-4 animate-fade-up duration-700 delay-100">Happy Farmers</h2> */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {farmerPhotos.map((photo) => (
            <div key={photo.id} className="flex-shrink-0 mx-2">
              <Card className="w-64 h-64 overflow-hidden">
                <img
                  src={photo.image}
                  alt="Farmer"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {farmerPhotos.map((photo) => (
            <div key={`duplicate-${photo.id}`} className="flex-shrink-0 mx-2">
              <Card className="w-64 h-64 overflow-hidden">
                <img
                  src={photo.image}
                  alt="Farmer"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default FarmerPhotoSlider;
