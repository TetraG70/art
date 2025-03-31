import React, { useState, useEffect } from 'react';
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

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: "",
    description: "",
    materials: "",
    participants: "",
    year: "",
    category: "portraits",
    image: "",
    details: "",
    location: "",
    dimensions: ""
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('artProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Load default projects if none exist
      const defaultProjects: Project[] = [
        {
          id: 1,
          title: "Denim Legends",
          description: "Portraits of Dedan Kimathi & Nelson Mandela using 400 recycled jeans",
          materials: "👖 400 denim pieces",
          participants: "👤 Solo artist project",
          year: "2023",
          category: "portraits",
          image: "denim-legends.jpg",
          details: "This artwork was created over 3 months using discarded jeans from local markets.",
          location: "Nairobi National Museum",
          dimensions: "3m x 2m"
        },
        {
          id: 2,
          title: "Thunguma Mandela",
          description: "Community-created portrait using plastic bottle tops",
          materials: "🥤 6,732 bottle tops",
          participants: "🧒 50+ children involved",
          year: "2024",
          category: "community",
          image: "thunguma-mandela.jpg",
          details: "Community project with children from Kibera slums to create awareness about recycling.",
          location: "Kibera Community Center",
          dimensions: "2.5m x 1.8m"
        },
        {
          id: 3,
          title: "Wangari's Shadow",
          description: "Optical illusion portrait using timber offcuts",
          materials: "🌳 Furniture manufacturing leftovers",
          participants: "👤 Solo artist project",
          year: "2024",
          category: "installations",
          image: "wangari-shadow.jpg",
          details: "Interactive installation that changes appearance based on viewer's perspective.",
          location: "Karura Forest Entrance",
          dimensions: "4m x 3m x 2m"
        },
        {
          id: 4,
          title: "Crown Caps Collective",
          description: "Proposed metal caps mural with community participation",
          materials: "🔩 10,000+ metal caps",
          participants: "👥 50+ community members",
          year: "2025",
          category: "upcoming",
          image: "crown-caps.jpg",
          details: "Upcoming project in collaboration with local schools to collect bottle caps.",
          location: "To be determined",
          dimensions: "Planned: 5m x 3m"
        },
        {
          id: 5,
          title: "ArtCycle Expressway",
          description: "Plastic bottle top installation along Nairobi Expressway",
          materials: "♻️ 1,000,000+ bottle tops",
          participants: "🧑‍🤝‍🧑 500+ youths engaged",
          year: "2025",
          category: "upcoming",
          image: "artcycle.jpg",
          details: "Large-scale public art installation to promote recycling awareness.",
          location: "Nairobi Expressway",
          dimensions: "Planned: 100m stretch"
        }
      ];
      setProjects(defaultProjects);
      localStorage.setItem('artProjects', JSON.stringify(defaultProjects));
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('artProjects', JSON.stringify(projects));
    }
  }, [projects]);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleAddProject = () => {
    if (isEditing && editId !== null) {
      // Update existing project
      setProjects(projects.map(project => 
        project.id === editId ? { ...newProject, id: editId } : project
      ));
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add new project
      const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
      setProjects([...projects, { ...newProject, id: newId }]);
    }
    setNewProject({
      title: "",
      description: "",
      materials: "",
      participants: "",
      year: "",
      category: "portraits",
      image: "",
      details: "",
      location: "",
      dimensions: ""
    });
    setShowAddForm(false);
  };

  const handleEditProject = (project: Project) => {
    setNewProject({
      title: project.title,
      description: project.description,
      materials: project.materials,
      participants: project.participants,
      year: project.year,
      category: project.category,
      image: project.image,
      details: project.details || "",
      location: project.location || "",
      dimensions: project.dimensions || ""
    });
    setIsEditing(true);
    setEditId(project.id);
    setShowAddForm(true);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-black text-white relative overflow-hidden">
      {/* Floating debris background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Creative</span> Projects
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where waste transforms into powerful artistic statements
          </p>
        </motion.div>

        {/* Filter and Add Project Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['all', 'portraits', 'community', 'installations', 'upcoming'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full capitalize transition-all ${activeFilter === filter 
                  ? 'bg-gradient-to-r from-yellow-500 to-blue-500 text-black font-bold' 
                  : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.button
            onClick={() => setShowAddForm(!showAddForm)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-blue-500 text-black font-bold rounded-full"
          >
            {showAddForm ? 'Cancel' : 'Add New Project'}
          </motion.button>
        </div>

        {/* Add Project Form */}
        {showAddForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12 p-6 bg-gray-900 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4">
              {isEditing ? 'Edit Project' : 'Add New Project'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newProject.title}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="Project title"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Category</label>
                <select
                  name="category"
                  value={newProject.category}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <option value="portraits">Portraits</option>
                  <option value="community">Community</option>
                  <option value="installations">Installations</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="Short description"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Year</label>
                <input
                  type="text"
                  name="year"
                  value={newProject.year}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="Year of creation"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Materials</label>
                <input
                  type="text"
                  name="materials"
                  value={newProject.materials}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="e.g. 👖 400 denim pieces"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Participants</label>
                <input
                  type="text"
                  name="participants"
                  value={newProject.participants}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="e.g. 👥 50+ community members"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={newProject.image}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="Image filename or URL"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newProject.location || ""}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="Where the artwork is displayed"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">Details</label>
                <textarea
                  name="details"
                  value={newProject.details || ""}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 min-h-24"
                  placeholder="Additional details about the project"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Dimensions</label>
                <input
                  type="text"
                  name="dimensions"
                  value={newProject.dimensions || ""}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700"
                  placeholder="Artwork dimensions"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setIsEditing(false);
                  setEditId(null);
                  setNewProject({
                    title: "",
                    description: "",
                    materials: "",
                    participants: "",
                    year: "",
                    category: "portraits",
                    image: "",
                    details: "",
                    location: "",
                    dimensions: ""
                  });
                }}
                className="px-5 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-blue-500 text-black font-bold rounded-lg"
                disabled={!newProject.title || !newProject.description}
              >
                {isEditing ? 'Update Project' : 'Add Project'}
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Container */}
              <div className="aspect-square bg-gray-900 rounded-2xl overflow-hidden relative border border-gray-800">
                {/* Image placeholder - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-7xl">
                  {project.category === 'portraits' && '🖼️'}
                  {project.category === 'community' && '👥'}
                  {project.category === 'installations' && '🌳'}
                  {project.category === 'upcoming' && '🚀'}
                </div>
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project.materials.split(' ')[0]}</span>
                      <span>{project.materials.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project.participants.split(' ')[0]}</span>
                      <span>{project.participants.split(' ').slice(1).join(' ')}</span>
                    </div>
                    {project.location && (
                      <div className="flex items-center gap-2">
                        <span className="text-xl">📍</span>
                        <span>{project.location}</span>
                      </div>
                    )}
                    {project.dimensions && (
                      <div className="flex items-center gap-2">
                        <span className="text-xl">📏</span>
                        <span>{project.dimensions}</span>
                      </div>
                    )}
                    <div className="text-yellow-400">{project.year}</div>
                  </div>
                  {project.details && (
                    <div className="mt-4 text-xs text-gray-400 max-h-20 overflow-y-auto">
                      {project.details}
                    </div>
                  )}
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditProject(project);
                      }}
                      className="text-xs px-3 py-1 bg-blue-600 rounded-full hover:bg-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProject(project.id);
                      }}
                      className="text-xs px-3 py-1 bg-red-600 rounded-full hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Visible Title (shows when not hovered) */}
              <motion.div
                className="mt-4"
                animate={{ 
                  opacity: hoveredProject === project.id ? 0 : 1,
                  y: hoveredProject === project.id ? 10 : 0
                }}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.year}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Callout - Now dynamic based on actual projects */}
        <motion.div 
          className="mt-20 p-8 bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-gray-800 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Total <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Impact</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { 
                  value: projects.reduce((acc, proj) => {
                    const capsMatch = proj.materials.match(/\d+/);
                    return acc + (capsMatch ? parseInt(capsMatch[0]) : 0);
                  }, 0) + "+", 
                  label: "Bottle Caps Used", 
                  emoji: "🥤" 
                },
                { 
                  value: projects.reduce((acc, proj) => {
                    const jeansMatch = proj.materials.match(/\d+/);
                    return acc + (jeansMatch ? parseInt(jeansMatch[0]) : 0);
                  }, 0) + "+", 
                  label: "Jeans Repurposed", 
                  emoji: "👖" 
                },
                { 
                  value: projects.reduce((acc, proj) => {
                    const participantsMatch = proj.participants.match(/\d+/);
                    return acc + (participantsMatch ? parseInt(participantsMatch[0]) : 0);
                  }, 0) + "+", 
                  label: "Participants Engaged", 
                  emoji: "🧑‍🤝‍🧑" 
                },
                { 
                  value: projects.filter(p => p.category === 'upcoming').length, 
                  label: "Upcoming Projects", 
                  emoji: "🚀" 
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-gray-800/30 rounded-xl border border-gray-700"
                >
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;