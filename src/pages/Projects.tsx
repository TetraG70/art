import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Type definitions
type ProjectCategory = 'material-transformation' | 'community' | 'installations' | 'upcoming';

interface Project {
  id: number;
  title: string;
  year: string;
  materials: string;
  participants: string;
  stats: string;
  description: string;
  story: string;
  images: string[];
  category: ProjectCategory;
}

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

const ProjectsAndStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'stories'>('projects');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Denim Legends Collection",
      year: "2023",
      materials: "400 recycled jeans",
      participants: "Solo artist project",
      stats: "2 historic portraits created",
      description: "My groundbreaking series featuring Dedan Kimathi and Nelson Mandela portraits crafted entirely from discarded denim.",
      story: "The denim collection took 6 months to complete, with each portrait requiring precise color matching from over 400 pairs of jeans. I developed a unique layering technique to create depth and texture, transforming rough fabric scraps into remarkably detailed facial expressions.",
      images: ["denim1.jpg", "denim2.jpg", "denim-process.jpg"],
      category: "material-transformation"
    },
    {
      id: 2,
      title: "Thunguma Children's Mandela",
      year: "2024",
      materials: "6,732 plastic bottle tops",
      participants: "50+ children from Thunguma Home",
      stats: "Community mural spanning 15sqm",
      description: "A collaborative portrait of Nelson Mandela created with children from Thunguma Children's Home using collected plastic bottle caps.",
      story: "This project taught me the power of community art. Over three weekends, the children and I sorted caps by color while discussing Mandela's legacy. Their excitement seeing the portrait emerge from 'trash' was unforgettable. We later exhibited at the National Museum, raising awareness about both recycling and children's creativity.",
      images: ["thunguma1.jpg", "thunguma2.jpg"],
      category: "community"
    },
    {
      id: 3,
      title: "Wangari's Shadow (Timber Installation)",
      year: "2024",
      materials: "Furniture manufacturing offcuts",
      participants: "With carpenters from Kijabe Street",
      stats: "3.2 tons wood repurposed",
      description: "Optical illusion portrait of Wangari Maathai using timber scraps that changes with lighting conditions.",
      story: "Inspired by Maathai's connection to trees, I worked with local carpenters to salvage wood scraps. The portrait reveals different expressions at various times of day, symbolizing how environmental work impacts future generations. The curved wood pieces create stunning shadow plays that visitors can walk through.",
      images: ["wangari1.jpg", "wangari2.jpg"],
      category: "installations"
    },
    {
      id: 4,
      title: "Crown Caps Collective (Upcoming)",
      year: "2025",
      materials: "10,000+ metal bottle caps",
      participants: "50+ community volunteers",
      stats: "Projected 20sqm mural",
      description: "Large-scale community mural using collected metal bottle caps from local bars and restaurants.",
      story: "Currently collecting caps from 30+ establishments across Nairobi. This project will involve workshops teaching metalworking techniques to transform caps into durable art. Our goal is to create Africa's largest bottle cap mural while training participants in sustainable art practices.",
      images: ["caps-collection.jpg"],
      category: "upcoming"
    }
  ];

  const stats: StatItem[] = [
    { value: "7,132+", label: "Bottle Caps Transformed", icon: "🥤" },
    { value: "400+", label: "Jeans Given New Life", icon: "👖" },
    { value: "3.2 Tons", label: "Wood Waste Repurposed", icon: "🌳" },
    { value: "100+", label: "Lives Impacted", icon: "👥" }
  ];

  const toggleExpand = (id: number): void => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const getCategoryEmoji = (category: ProjectCategory): string => {
    switch (category) {
      case 'material-transformation': return '👖';
      case 'community': return '👥';
      case 'installations': return '🌳';
      case 'upcoming': return '🔩';
      default: return '🎨';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">&</span> Stories
        </h1>
        <p className="text-xl md:text-2xl">
          Where sustainable art meets powerful storytelling
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-12 border-b border-gray-800">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-3 font-medium text-lg ${activeTab === 'projects' ? 'border-b-2 border-yellow-400' : 'text-gray-400'}`}
        >
          Project Gallery
        </button>
        <button
          onClick={() => setActiveTab('stories')}
          className={`px-6 py-3 font-medium text-lg ${activeTab === 'stories' ? 'border-b-2 border-blue-400' : 'text-gray-400'}`}
        >
          Creator's Journal
        </button>
      </div>

      {/* Content */}
      {activeTab === 'projects' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-colors"
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-8xl">
                {getCategoryEmoji(project.category)}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <span className="text-yellow-400">{project.year}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="text-sm space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">♻️</span>
                    <span>{project.materials}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    <span>{project.participants}</span>
                  </div>
                  <div className="text-yellow-400">{project.stats}</div>
                </div>
                
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  {expandedProject === project.id ? 'Show less' : 'Read the story'} →
                </button>
                
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-800"
                  >
                    <p className="text-gray-300 mb-4">{project.story}</p>
                    <div className="flex gap-2">
                      {project.images.map((img, i) => (
                        <div key={i} className="w-16 h-16 bg-gray-800 rounded-md"></div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-16">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-b border-gray-800 pb-16"
            >
              <header className="mb-8">
                <span className="text-yellow-400">{project.year}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm capitalize">{project.category.replace('-', ' ')}</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">{project.materials.split(' ')[0]}</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">{project.participants.split(' ')[0]}</span>
                </div>
              </header>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl mb-6">{project.description}</p>
                <p className="mb-6">{project.story}</p>
                
                {/* Image gallery placeholder */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-square bg-gray-900 rounded-lg"></div>
                  ))}
                </div>
                
                <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-3">Project Impact</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span>♻️</span>
                      <span>Materials: {project.materials}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>👥</span>
                      <span>Participants: {project.participants}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>📊</span>
                      <span>Stats: {project.stats}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Stats Callout */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-28 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-gray-800 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Collective</span> Impact
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsAndStories;