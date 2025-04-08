import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Coastline from '../assets/images/Coastline.jpg';
import Bottles from '../assets/images/Bottles.jpg';
import Expressway from '../assets/images/Expressway.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Carousel images - Updated with new images
  const carouselImages = [
    {
      image: Expressway,
      alt: "Nairobi Expressway",
      credit: "Nairobi Expressway"
    },
    {
      image: Bottles,
      alt: "Recycled plastic bottles art",
      credit: "Plastic Bottle Art"
    },
    {
      image: Coastline,
      alt: "Kenyan coastline",
      credit: "Kenyan Coastline"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Navigation handlers
  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleHowItWorksClick = () => {
    navigate('/how-it-works');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <header className="relative h-screen overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black"
            >
              <img 
                src={carouselImages[currentImageIndex].image} 
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">ArtCycle</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Transforming the Nairobi Expressway into Africa's largest Eco-Art Gallery
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAboutClick}
              className="px-6 py-3 border border-white rounded-full font-medium"
            >
              About ArtCycle
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHowItWorksClick}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium"
            >
              How ArtCycle Works
            </motion.button>
          </motion.div>
        </div>
      </header>
    </div>
  );
};

export default Home;