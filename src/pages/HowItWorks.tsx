import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Collection from '../assets/images/Collection.jpeg';
import Processing from '../assets/images/Processing.jpg';
import Creation from '../assets/images/Creation.jpeg';
import Installation from '../assets/images/Installation.jpeg';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // Process steps data
  const processSteps = [
    {
      title: "Material Collection",
      description: "Community-driven waste collection system",
      details: [
        "Partnering with local businesses and schools for collection drives",
        "Specialized recycling bins in high-traffic areas across the city",
        "Incentive programs to encourage community participation",
        "Monthly neighborhood clean-up events"
      ],
      icon: "🔄",
      color: "bg-blue-500",
      image: Collection // Updated to use local image
    },
    {
      title: "Material Processing",
      description: "Transforming waste into art-ready materials",
      details: [
        "Thorough cleaning and sanitization process",
        "Sorting by material type, color, and quality",
        "Shredding,melting and molding PET bottles into boards",
        "Quality control checks for durability",
        "Storage in organized material libraries"
      ],
      icon: "🏭",
      color: "bg-purple-500",
      image: Processing // Updated to use local image
    },
    {
      title: "Artistic Creation",
      description: "From materials to masterpiece",
      details: [
        "Artist-led design workshops with community input",
        "Digital mockups and material planning",
        "Artwork done in sections;on boards of 1.5m x 1.2m by community members",
        "Professional artist refinement",
        "Weather-resistant treatments and finishes"
      ],
      icon: "🎨",
      color: "bg-pink-500",
      image: Creation // Updated to use local image
    },
    {
      title: "Installation & Exhibition",
      description: "Bringing art to the public",
      details: [
        "Site preparation and safety measures",
        "Different art sections transported from different community working area to the site",
        "Each section istalled and arranged to form one complete artwork",
        "Artwork cover the top half of the wall,while the bottom half is left with the existing potted plants",
        "Community unveiling event with local media coverage",
      ],
      icon: "🏗️",
      color: "bg-green-500",
      image: Installation // Updated to use local image
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Environmental Impact",
      description: "Diverting tons of waste from landfills",
      icon: "🌍",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Community Engagement",
      description: "Bringing people together through art",
      icon: "👥",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Economic Opportunities",
      description: "Creating jobs and skill development",
      icon: "💼",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  // Function to handle navigation to top of new page
  const handleGetInvolvedClick = () => {
    navigate('/get-involved');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-[80vh] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/90">
          <img 
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="ArtCycle process" 
            className="w-full h-full object-cover opacity-50"
            loading="lazy" // Added lazy loading
          />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">ArtCycle</span> Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            From waste collection to stunning public art - our step-by-step creative process
          </motion.p>
        </div>
      </header>

      {/* Process Navigation */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">4-Step</span> Process
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {processSteps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`py-4 px-2 rounded-lg transition-all ${activeStep === index ? `${step.color} shadow-lg` : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <div className="text-2xl mb-2">{step.icon}</div>
              <h3 className="text-sm font-medium">{step.title}</h3>
            </motion.button>
          ))}
        </div>

        {/* Process Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl p-8 border border-blue-500/30 relative overflow-hidden"
            >
              <div 
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${processSteps[activeStep].color} opacity-10 blur-xl`}
              />
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-6">{processSteps[activeStep].icon}</div>
                <div>
                  <h2 className="text-2xl font-bold">{processSteps[activeStep].title}</h2>
                  <p className="text-blue-300">{processSteps[activeStep].description}</p>
                </div>
              </div>

              <div className="space-y-3 pl-4">
                {processSteps[activeStep].details.map((detail, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden"
          >
            <img 
              src={processSteps[activeStep].image} 
              alt={processSteps[activeStep].title}
              className="w-full h-full object-cover"
              loading="lazy" // Added lazy loading
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="text-sm text-gray-300">
                {processSteps[activeStep].title} process in action
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Timeline */}
        <motion.div
          className="relative mb-16 bg-gray-800/50 p-8 rounded-xl border border-purple-500/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-purple-400">ArtCycle</span> Process Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-6 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 md:left-1/2 md:-translate-x-1/2"></div>
            
            <div className="space-y-12 pl-12 md:pl-0">
              {processSteps.map((step, index) => (
                <div key={index} className="relative md:flex justify-center">
                  <div 
                    className={`absolute -left-2 w-5 h-5 rounded-full border-2 ${activeStep === index ? 'bg-blue-400 border-blue-300' : 'bg-gray-800 border-gray-600'} md:left-1/2 md:-translate-x-1/2 transition-colors duration-300`}
                  />
                  <div className={`md:w-5/12 md:px-6 ${index % 2 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveStep(index)}
                      className={`bg-gray-700 p-6 rounded-lg border ${activeStep === index ? 'border-blue-400' : 'border-transparent'} transition-all cursor-pointer`}
                    >
                      <div className="text-2xl mb-2">{step.icon}</div>
                      <h3 className="font-bold mb-1">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Benefits</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 overflow-hidden relative group"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Button */}
      <section className="py-16 text-center">
        <motion.button
          onClick={handleGetInvolvedClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-medium text-lg"
        >
          Get Involved
        </motion.button>
      </section>
    </div>
  );
};

export default HowItWorks;