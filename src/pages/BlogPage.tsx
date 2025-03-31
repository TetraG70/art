import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  materials: string;
  participants: string;
  year: string;
  category: string;
  image: string;
  details?: string;
  location?: string;
  dimensions?: string;
}

const BlogPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = () => {
      const savedProjects = localStorage.getItem('artProjects');
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      } else {
        // Default projects if none exist
        setProjects([
          {
            id: 1,
            title: "Denim Legends",
            description: "Portraits using 400 recycled jeans",
            materials: "👖 400 denim pieces",
            participants: "👤 Solo artist",
            year: "2023",
            category: "portraits",
            image: "denim-legends.jpg",
            details: "Created over 3 months using discarded jeans...",
            location: "Nairobi National Museum",
            dimensions: "3m x 2m"
          },
          {
            id: 2,
            title: "Bottle Top Mandela",
            description: "Community-created portrait",
            materials: "🥤 6,732 bottle tops",
            participants: "🧒 50+ children",
            year: "2024",
            category: "community",
            image: "thunguma-mandela.jpg",
            details: "Collaborative project with children from Kibera...",
            location: "Kibera Community Center",
            dimensions: "2.5m x 1.8m"
          }
        ]);
      }
      setLoading(false);
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-2xl">Loading artworks...</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {['🥤', '👖', '🔩', '🌳'].map((emoji, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: Math.sin(i * 2) * 100,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Artwork <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Stories</span>
          </motion.h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Discover the stories behind each recycled masterpiece
          </p>
        </section>

        {/* Projects List */}
        <section className="pb-32 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
                  id={`project-${project.id}`}
                >
                  {/* Project Header */}
                  <div className="p-6 md:p-8 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {project.year}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-blue-500 text-black rounded-full text-sm font-bold">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-xl text-gray-300">{project.description}</p>
                  </div>
                  
                  {/* Project Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
                    {/* Image placeholder */}
                    <div className="relative group overflow-hidden rounded-xl aspect-square bg-gray-800 flex items-center justify-center text-9xl">
                      {project.category === 'portraits' && '🖼️'}
                      {project.category === 'community' && '👥'}
                      {project.category === 'installations' && '🌳'}
                      {project.category === 'upcoming' && '🚀'}
                    </div>
                    
                    {/* Story Details */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-400">The Story</h3>
                        <p className="text-gray-300 whitespace-pre-line">
                          {project.details || "No story details available yet."}
                        </p>
                      </div>
                      
                      {/* Metadata Grid */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                        <div>
                          <h4 className="text-sm text-gray-400 mb-1">Materials</h4>
                          <p>{project.materials}</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400 mb-1">Participants</h4>
                          <p>{project.participants}</p>
                        </div>
                        {project.location && (
                          <div>
                            <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                            <p>{project.location}</p>
                          </div>
                        )}
                        {project.dimensions && (
                          <div>
                            <h4 className="text-sm text-gray-400 mb-1">Dimensions</h4>
                            <p>{project.dimensions}</p>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-6 border-t border-gray-800">
                        <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                          Share
                        </button>
                        <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-8"
        >
          <a 
            href="#"
            className="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Top
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;