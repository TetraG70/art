import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaTiktok, FaFacebook, FaGlobe } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  message: string;
};

interface SocialMedia {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const socialMediaLinks: SocialMedia[] = [
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://x.com/tetrag_arts?s=21', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tetra-g-22416324b', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@tetrag_arts', color: 'hover:text-red-500' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/tetrag_arts', color: 'hover:text-pink-500' },
    { name: 'TikTok', icon: <FaTiktok />, url: 'https://www.tiktok.com/@tetrag_arts', color: 'hover:text-black dark:hover:text-white' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/share/169Q1wwNbp', color: 'hover:text-blue-600' },
    { name: 'Website', icon: <FaGlobe />, url: 'https://eco-art-tetrag70s-projects.vercel.app/', color: 'hover:text-green-500' }
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const floatingEmojis = ['✉️', '📱', '📍', '📝'];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20 pb-16 px-4 md:px-10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingEmojis.map((emoji, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: Math.sin(i * 2) * 100,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">In Touch</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Let's collaborate or discuss your next recycled art project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 mb-6 bg-green-900/30 border border-green-800 rounded-lg"
                >
                  <p className="text-green-400">Thank you! Your message has been sent.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 rounded-lg font-bold w-full transition ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h4 className="text-gray-400">Email</h4>
                      <a href="mailto:contact@tetragarts.com" className="text-lg hover:text-blue-400 transition">
                        contact@tetragarts.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h4 className="text-gray-400">Phone</h4>
                      <a href="tel:+254706003630" className="text-lg hover:text-blue-400 transition">
                        +254 706 003 630
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h4 className="text-gray-400">Location</h4>
                      <p className="text-lg">
                        Tetra G Arts Studio<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialMediaLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`flex items-center gap-3 px-4 py-3 bg-gray-700 rounded-lg transition ${social.color} hover:bg-gray-700`}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;