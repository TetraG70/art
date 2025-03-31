import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 py-16 overflow-hidden relative">
      {/* Floating Materials Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const materials = [
            { emoji: "👖", color: "text-blue-400", size: "text-3xl" }, // Denim
            { emoji: "🥤", color: "text-yellow-400", size: "text-4xl" }, // Bottle caps
            { emoji: "🌳", color: "text-green-400", size: "text-3xl" }, // Timber
            { emoji: "🔩", color: "text-gray-300", size: "text-3xl" } // Metal
          ];
          const material = materials[i % 4];
          
          return (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                rotate: Math.random() * 360
              }}
              animate={{ 
                opacity: [0, 0.3, 0],
                x: Math.random() * 1000 - 500,
                y: Math.random() * 1000 - 500,
                rotate: Math.random() * 720
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className={`absolute ${material.color} ${material.size}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {material.emoji}
            </motion.div>
          );
        })}
      </div>

      {/* Header */}
      <motion.div 
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Story</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          From discarded materials to breathtaking art – a journey of creativity and sustainability
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-400 via-green-400 to-blue-500 -translate-x-1/2"></div>
          
          {/* Timeline Items */}
          {[
            {
              year: "Early Years",
              title: "🎨 Artistic Awakening",
              description: "Discovered artistic talent when first joining school in Mombasa",
              stats: "",
              side: "left"
            },
            {
              year: "2023",
              title: "👖 Historic Denim Portraits",
              description: "Created Dedan Kimathi and Nelson Mandela portraits",
              stats: "400 scrap jeans trousers used",
              side: "right"
            },
            {
              year: "2024",
              title: "🧒 Thunguma Children's Project",
              description: "Nelson Mandela portrait with community participation",
              stats: "6,732 plastic bottle tops | 50+ children involved",
              side: "left"
            },
            {
              year: "2024",
              title: "🌳 Wangari Maathai Tribute",
              description: "Light and shadow portrait using timber offcuts",
              stats: "Furniture manufacturing leftovers",
              side: "right"
            },
            {
              year: "2025 (Proposed)",
              title: "🔩 Crown Metal Caps Project",
              description: "Large-scale community mural",
              stats: "10,000+ metal caps | 50+ participants",
              side: "left"
            },
            {
              year: "2025 (Proposed)",
              title: "♻️ ArtCycle Nairobi Expressway",
              description: "Urban art transformation initiative",
              stats: "1,000,000+ bottle tops | 500+ youths",
              side: "right"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 ${item.side === "left" ? "md:pr-[50%] pl-10" : "md:pl-[50%] pr-10 md:text-right"}`}
              initial={{ x: item.side === "left" ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={`p-6 bg-gray-900/50 rounded-xl border ${item.side === "left" ? "border-yellow-400/30" : "border-blue-400/30"} shadow-lg backdrop-blur-sm`}>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-3">{item.description}</p>
                {item.stats && <div className="text-sm text-yellow-400">{item.stats}</div>}
                <div className="mt-2 text-xs text-gray-400">{item.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-4xl mx-auto mt-28 p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8">
            By <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Numbers</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "400+", label: "Jeans Repurposed", emoji: "👖" },
              { value: "6,732", label: "Bottle Caps", emoji: "🥤" },
              { value: "50+", label: "Children Empowered", emoji: "🧒" },
              { value: "1M+", label: "Future Caps Target", emoji: "♻️" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700 text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-2xl mx-auto mt-28 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Eco-Art</span> Movement
        </h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Help us transform waste into meaningful art that inspires communities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full font-medium"
          >
            🥤 Donate Bottle Caps
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full font-medium"
          >
            🎨 Volunteer for Projects
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;