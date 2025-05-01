import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Image, Play, Star, Users, ExternalLink } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SuccessStories = () => {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Pune, Maharashtra",
      quote: "After using Khad Kranti biochar, my cotton yield increased by 35%. The soil quality has improved dramatically.",
      image: "https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      crop: "Cotton"
    },
    {
      id: 2,
      name: "Sunita Devi",
      location: "Varanasi, Uttar Pradesh",
      quote: "I've been using chemical fertilizers for years with diminishing returns. Switching to this organic biochar has restored my soil's health.",
      image: "https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      crop: "Rice"
    },
    {
      id: 3,
      name: "Prakash Singh",
      location: "Amritsar, Punjab",
      quote: "The water retention in my fields has improved significantly. I'm using 30% less water while getting better wheat crops.",
      image: "https://images.unsplash.com/photo-1569235186275-63273b8e0a1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      crop: "Wheat"
    }
  ];

  // YouTube videos data - to be replaced with real videos later
  const youtubeVideos = [
    { id: 1, videoId: "4EFMR9R2-UU", title: "Farmer Testimonial - Rice Fields" },
    { id: 2, videoId: "Fhpr6w9bqFo?si", title: "Cotton Farm Success Story" },
    { id: 3, videoId: "4Z6FF7btSi0?si", title: "Wheat Farmer Experience" }
  ];

  // Instagram reels data - to be replaced with real embeds later
  const instagramReels = [
    { id: 1, embedId: "Ci5oSeojaof", title: "Cotton Farm Success" },
    { id: 2, embedId: "C9mT-GoSlvj", title: "Rice Farming Results" },
    { id: 3, embedId: "C9y097sSsEC", title: "Soil Improvement Journey" }
  ];

  return (
    <section id="stories" className="section-container">
      <h2 className="section-title text-center animate-fade-up duration-700 delay-100">From Our Farmers</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover how our biochar solution has transformed farms across India
      </p>

      {/* YouTube Video testimonials section */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-biocharGreen mb-6 flex items-center animate-fade-up duration-400 delay-100">
          <Play className="mr-2 h-5 w-5" />
          Farmer Video Testimonials
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video) => (
            <div key={video.id} className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="link" className="text-biocharGreen">
            View More Videos on YouTube
          </Button>
        </div>
      </div>

      {/* Instagram Reels section */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-biocharGreen mb-6 flex items-center">
          <ExternalLink className="mr-2 h-5 w-5" />
          Instagram Reels
        </h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {instagramReels.map((reel) => (
              <CarouselItem key={reel.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg bg-white shadow-lg aspect-[9/16] flex items-center justify-center p-2">
                    <iframe
                      className="instagram-media w-full h-full"
                      src={`https://www.instagram.com/p/${reel.embedId}/embed/`}
                      title={reel.title}
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    ></iframe>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">{reel.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
        <div className="text-center mt-6">
          <a 
            href="https://www.instagram.com/khadkranti/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center text-biocharGreen hover:underline"
          >
            Follow Us on Instagram
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Written testimonials */}
      {/* <div>
        <h3 className="text-xl font-semibold text-biocharGreen mb-6 flex items-center">
          <Users className="mr-2 h-5 w-5" />
          What Farmers Are Saying
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-biocharBrown">{testimonial.crop} Farmer</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default SuccessStories;
