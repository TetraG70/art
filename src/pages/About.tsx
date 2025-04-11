import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import SDGWheel from '../assets/images/SDG Wheel.jpg';
import SDG11 from '../assets/images/SDG 11.jpg';
import SDG12 from '../assets/images/SDG 12.jpg';
import SDG13 from '../assets/images/SDG 13.jpg';
import SDG14 from '../assets/images/SDG 14.jpg';
import SDG15 from '../assets/images/SDG 15.jpg';
import WasteBackground from '../assets/images/Waste.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeTab, setActiveTab] = useState<'why' | 'impact' | 'vision'>('why');

  // SDG data with local images
  const sdgs = [
    { 
      goal: 11, 
      title: "Sustainable Cities and Communities", 
      description: "Making cities inclusive, safe, resilient and sustainable through public art",
      achievement: "By transforming waste into public art installations, we beautify urban spaces while promoting sustainable community development and cultural expression.",
      logo: SDG11,
      color: "from-[#fd9d24] to-[#fcb712]",
      borderColor: "border-[#fd9d24]"
    },
    { 
      goal: 12, 
      title: "Responsible Consumption and Production", 
      description: "Promoting sustainable waste management through creative reuse",
      achievement: "Our art projects demonstrate practical circular economy solutions by repurposing discarded materials into valuable artistic creations.",
      logo: SDG12,
      color: "from-[#bf8b2e] to-[#dda63a]",
      borderColor: "border-[#bf8b2e]"
    },
    { 
      goal: 13, 
      title: "Climate Action", 
      description: "Raising awareness about environmental protection through art",
      achievement: "Each recycled art piece serves as a visual reminder of climate impacts and the power of individual actions to make a difference.",
      logo: SDG13,
      color: "from-[#407f43] to-[#4c9f38]",
      borderColor: "border-[#407f43]"
    },
    { 
      goal: 14, 
      title: "Life Below Water", 
      description: "Reducing plastic pollution that affects marine ecosystems",
      achievement: "By intercepting plastic waste before it reaches waterways, we directly prevent ocean pollution and protect marine biodiversity.",
      logo: SDG14,
      color: "from-[#0a97d9] to-[#56c2d6]",
      borderColor: "border-[#0a97d9]"
    },
    { 
      goal: 15, 
      title: "Life on Land", 
      description: "Protecting terrestrial ecosystems through waste reduction",
      achievement: "Our projects reduce landfill waste and prevent environmental degradation, helping preserve natural habitats and terrestrial species.",
      logo: SDG15,
      color: "from-[#56be2e] to-[#7cc242]",
      borderColor: "border-[#56be2e]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section - Updated with Waste.jpeg background */}
      <header className="relative h-[70vh] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/90">
          <img 
            src={WasteBackground} 
            alt="Waste background" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">ArtCycle</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto"
          >
            Transforming waste into art through creativity, community, and sustainability
          </motion.p>
        </div>
      </header>

      {/* Rest of the component remains the same */}
      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center border-b border-gray-800 mb-12 mt-12"
      >
        <button
          onClick={() => setActiveTab('why')}
          className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'why' ? 'border-b-2 border-blue-400 text-white' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Why ArtCycle?
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'impact' ? 'border-b-2 border-green-400 text-white' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Impact
        </button>
        <button
          onClick={() => setActiveTab('vision')}
          className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'vision' ? 'border-b-2 border-purple-400 text-white' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Vision & Mission
        </button>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'why' ? (
            <motion.div
              key="why"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <motion.section
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Problem Box - Red */}
                <motion.div 
                  className="bg-gray-800/30 p-6 rounded-xl border-2 border-red-500/50 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-red-300">The Problem We Address</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Urban areas in Africa face a growing plastic waste crisis with limited recycling infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Pollution of streets, rivers, and ecosystems from improper waste disposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Traditional waste management fails to engage communities or change behaviors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Valuable materials that could be repurposed end up in landfills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Public spaces lack meaningful art reflecting local identity and values</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Solution Box - Green */}
                <motion.div 
                  className="bg-gray-800/30 p-6 rounded-xl border-2 border-green-500/50 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-green-300">Our Innovative Solution</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Transform waste into large-scale public art installations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Engage communities in the creative recycling process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Create environmental benefits while beautifying neighborhoods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Celebrate cultural heritage and foster community pride</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-300 mr-2 text-xl">•</span>
                      <span className="text-gray-300">Inspire lasting behavior change through visible sustainability</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.section>

              <motion.section
                className="bg-gray-800/50 p-8 rounded-xl border border-blue-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Why Our Approach Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Behavior Change",
                      description: "Art creates emotional connections that lectures can't achieve",
                      icon: "🧠",
                      color: "bg-blue-600/20 border-blue-400/50"
                    },
                    {
                      title: "Community Ownership",
                      description: "People protect what they help create",
                      icon: "🤝",
                      color: "bg-purple-600/20 border-purple-400/50"
                    },
                    {
                      title: "Dual Impact",
                      description: "Simultaneously cleans environments and beautifies them",
                      icon: "✨",
                      color: "bg-green-600/20 border-green-400/50"
                    }
                  ].map((value, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className={`${value.color} p-6 rounded-lg text-center border`}
                    >
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          ) : activeTab === 'impact' ? (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Potential Impact Areas Section */}
                <motion.div
                  className="bg-gray-800/50 p-8 rounded-xl border border-green-500/30 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-center text-green-300">Potential Impact Areas</h2>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Environmental Impact",
                        icon: "🌱",
                        items: [
                          "Divert thousands of tons of plastic waste from landfills and waterways",
                          "Reduce microplastic pollution in urban ecosystems",
                          "Create green jobs in waste collection and art creation",
                          "Lower carbon footprint through waste repurposing"
                        ]
                      },
                      {
                        title: "Social Impact",
                        icon: "👥",
                        items: [
                          "Engage communities in hands-on environmental action",
                          "Foster intergenerational knowledge sharing through art",
                          "Create public spaces that reflect local identity and values",
                          "Provide skills training in art and sustainability"
                        ]
                      },
                      {
                        title: "Economic Impact",
                        icon: "💰",
                        items: [
                          "Develop circular economy models for waste materials",
                          "Attract eco-tourism through landmark art installations",
                          "Create market opportunities for recycled art products",
                          "Reduce municipal waste management costs"
                        ]
                      }
                    ].map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-700 p-6 rounded-lg border border-gray-600"
                      >
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{outcome.icon}</span>
                          <h3 className="text-xl font-bold text-green-300">{outcome.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {outcome.items.map((item, j) => (
                            <li key={j} className="text-gray-300 flex items-start">
                              <span className="text-green-200 mr-2">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* SDGs Section */}
                <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
                  <div className="md:w-1/3">
                    <img 
                      src={SDGWheel} 
                      alt="UN Sustainable Development Goals" 
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold mb-6 text-green-400">Contributing to Sustainable Development Goals</h2>
                    <p className="text-gray-300 mb-4">
                      ArtCycle directly contributes to multiple United Nations Sustainable Development Goals (SDGs) through our innovative approach to waste transformation and community art.
                    </p>
                    <p className="text-gray-300">
                      By addressing plastic pollution through creative means, we create ripple effects across environmental, social, and economic dimensions of sustainability.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {sdgs.map((sdg, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className={`bg-gradient-to-br ${sdg.color} p-0.5 rounded-xl shadow-lg`}
                    >
                      <div className="bg-gray-800 h-full rounded-xl p-6 flex flex-col group">
                        <div className="flex-grow flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <div className={`border-2 ${sdg.borderColor} rounded-full p-2 bg-gray-900/50`}>
                              <img 
                                src={sdg.logo} 
                                alt={`SDG ${sdg.goal}`}
                                className="h-16 w-16 object-contain"
                              />
                            </div>
                            <span className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                              {sdg.goal}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-white">
                            <span className={`bg-gradient-to-r ${sdg.color} bg-clip-text text-transparent`}>
                              SDG {sdg.goal}:
                            </span> {sdg.title}
                          </h3>
                          <p className="text-gray-300 mb-2">{sdg.description}</p>
                          <p className="text-sm text-gray-400 mt-2 italic">
                            <span className="text-green-300">How we achieve this:</span> {sdg.achievement}
                          </p>
                        </div>
                        <div className={`h-1 bg-gradient-to-r ${sdg.color} rounded-full mt-auto`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          ) : (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <motion.section
                className="space-y-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Vision Section */}
                <motion.div
                  className="bg-gray-800/30 p-8 rounded-xl border-2 border-blue-500/50 shadow-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-blue-300">Vision</h2>
                  <p className="text-xl text-gray-300">
                    To transform urban landscapes into vibrant eco-art galleries that celebrate African heritage, wildlife, and sustainability, inspiring communities to embrace creativity and environmental responsibility.
                  </p>
                </motion.div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                </div>

                {/* Mission Section */}
                <motion.div
                  className="bg-gray-800/30 p-8 rounded-xl border-2 border-green-500/50 shadow-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-green-300">Mission</h2>
                  <p className="text-xl text-gray-300">
                    ArtCycle aims to create large-scale murals using recycled materials, celebrating African heroes, wildlife, and cultural heritage while fostering community engagement, raising environmental awareness, and promoting sustainable artistic practices.
                  </p>
                </motion.div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                </div>

                {/* Core Values Section */}
                <motion.div
                  className="bg-gray-800/30 p-8 rounded-xl border-2 border-purple-500/50 shadow-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-purple-300">Core Values</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <span className="text-purple-300 font-bold text-xl mr-4 mt-1">1.</span>
                      <div>
                        <h3 className="text-xl font-bold text-purple-200 mb-2">Sustainability</h3>
                        <p className="text-gray-300">
                          We use recycled materials to create art that reduces waste and supports environmental conservation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-300 font-bold text-xl mr-4 mt-1">2.</span>
                      <div>
                        <h3 className="text-xl font-bold text-purple-200 mb-2">Community</h3>
                        <p className="text-gray-300">
                          We empower local communities to collaborate and contribute to creative projects that make a positive impact.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-300 font-bold text-xl mr-4 mt-1">3.</span>
                      <div>
                        <h3 className="text-xl font-bold text-purple-200 mb-2">Creativity</h3>
                        <p className="text-gray-300">
                          We embrace innovation in art, turning recycled materials into powerful expressions that inspire change and ignite imaginations.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                </div>

                {/* Slogan Section */}
                <motion.div
                  className="bg-gray-800/30 p-8 rounded-xl border-2 border-green-400/50 shadow-lg text-center"
                  whileHover={{ scale: 1.01 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-green-400">Slogan</h2>
                  <p className="text-4xl font-bold text-green-400 mb-4">
                    "Green Art. Clean Earth. United People."
                  </p>
                  <p className="text-xl text-gray-300">
                    This encapsulates our three pillars: creative expression, environmental action, and community building.
                  </p>
                </motion.div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* "How ArtCycle Works" Button */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/how-it-works" 
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.scrollTo(0, 0)}
          >
            How ArtCycle Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;