import { motion } from "framer-motion";
import { FaRecycle, FaArrowRight, FaUsers, FaPaintBrush } from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating recycled materials */}
        {[...Array(15)].map((_, i) => {
          const materials = [
            { icon: "🥤", color: "text-yellow-400" }, // Bottle caps
            { icon: "🧴", color: "text-blue-400" },  // Plastic
            { icon: "📱", color: "text-gray-400" },   // E-waste
            { icon: "🧱", color: "text-red-400" }     // Construction
          ];
          const material = materials[i % 4];
          
          return (
            <motion.span
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                rotate: Math.random() * 360
              }}
              animate={{ 
                opacity: [0, 0.4, 0],
                x: Math.random() * 800 - 400,
                y: Math.random() * 800 - 400,
                rotate: Math.random() * 720
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className={`absolute text-4xl ${material.color}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {material.icon}
            </motion.span>
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 md:px-10">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center space-x-4">
              <FaPaintBrush className="text-green-400 text-5xl" />
              <FaRecycle className="text-yellow-400 text-5xl" />
              <GiMetalBar className="text-blue-400 text-5xl" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              opacity: { duration: 1, delay: 0.3 },
            }}
            style={{
              background: "linear-gradient(45deg, #10b981, #3b82f6, #f59e0b)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 200%",
            }}
          >
            Transforming Waste Into Art
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            We turn <span className="text-yellow-400 font-medium">discarded materials</span> into{' '}
            <span className="text-green-400 font-medium">powerful statements</span> about{' '}
            <span className="text-blue-400 font-medium">sustainable living</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-lg font-bold flex items-center mx-auto"
            >
              Explore Our Projects <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 md:px-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="text-green-400">Featured</span> Works
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Metal Crown Caps:Mt Kenya Hub",
                description: "Community mural using 10,000+ recycled soda bottle caps",
                stats: "200+ participants | 3 months",
                icon: <div className="relative">
                  <FaUsers className="text-blue-400 text-4xl" />
                  <span className="absolute -top-2 -right-2 text-yellow-400 text-xl">👑</span>
                </div>,
                color: "border-yellow-500/30"
              },
              {
                title: "Artcycle:Nairobi Expressway",
                description: "Plastic waste transformed into highway art installations",
                stats: "2.3 tons recycled | 1km span",
                icon: <FaRecycle className="text-green-400 text-4xl" />,
                color: "border-green-500/30"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-gray-900/50 p-8 rounded-2xl border-t-4 ${project.color} shadow-lg backdrop-blur-sm`}
              >
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-400">{project.stats}</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-yellow-400 text-sm flex items-center"
                  >
                    View case study <FaArrowRight className="ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            {[
              { value: "15+", label: "Tons Recycled", icon: <FaRecycle className="text-green-400 mx-auto text-3xl mb-2" /> },
              { value: "40+", label: "Art Projects", icon: <FaPaintBrush className="text-blue-400 mx-auto text-3xl mb-2" /> },
              { value: "10K+", label: "Bottle Caps", icon: <span className="text-yellow-400 text-3xl mb-2 block">🥤</span> },
              { value: "500+", label: "Volunteers", icon: <FaUsers className="text-purple-400 mx-auto text-3xl mb-2" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              >
                {stat.icon}
                <div className="text-3xl font-bold mt-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <FaRecycle className="text-[20rem] animate-spin-slow" />
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Join</span> the Movement?
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Whether you have materials to donate or want to volunteer, we'd love to connect.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-medium"
            >
              Get Involved
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-green-400 text-green-400 rounded-full font-medium"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;