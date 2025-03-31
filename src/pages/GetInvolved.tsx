import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

// Type definitions
type InvolvementOption = 'volunteer' | 'donate' | 'partner' | 'workshop';

interface FormData {
  name: string;
  email: string;
  message: string;
  amount?: string;
  organization?: string;
}

interface InvolvementType {
  id: InvolvementOption;
  label: string;
  emoji: string;
  description: string;
  details: {
    title: string;
    benefits: string[];
    additionalInfo: string;
  };
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  borderColor: string;
  textColor: string;
}

interface Event {
  date: string;
  day: string;
  month: string;
  title: string;
  description: string;
  bgColor: string;
}

const GetInvolvedPage: React.FC = () => {
  // State management
  const [selectedOption, setSelectedOption] = useState<InvolvementOption>('volunteer');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Data configuration
  const involvementOptions: InvolvementType[] = [
    {
      id: 'volunteer',
      label: 'Volunteer',
      emoji: '👐',
      description: 'Join our creative team',
      details: {
        title: 'Volunteer Opportunities',
        benefits: [
          'Material collection and sorting',
          'Art creation workshops',
          'Community outreach programs',
          'Exhibition setup and events'
        ],
        additionalInfo: 'No prior experience needed - just enthusiasm for art and sustainability!'
      }
    },
    {
      id: 'donate',
      label: 'Donate',
      emoji: '💚',
      description: 'Support our mission',
      details: {
        title: 'Your Donation Helps',
        benefits: [
          'Community art programs',
          'Recycling initiatives',
          'Youth workshops',
          'Public art installations'
        ],
        additionalInfo: 'All donations are tax-deductible. We\'ll provide a receipt.'
      }
    },
    {
      id: 'partner',
      label: 'Partner',
      emoji: '🤝',
      description: 'Collaborate with us',
      details: {
        title: 'Partnership Benefits',
        benefits: [
          'Custom art programs',
          'Employee engagement',
          'Sustainability initiatives',
          'Community impact'
        ],
        additionalInfo: 'Let\'s create programs that align with your mission.'
      }
    },
    {
      id: 'workshop',
      label: 'Workshop',
      emoji: '🎨',
      description: 'Learn and create',
      details: {
        title: 'Workshop Options',
        benefits: [
          'Recycled art creation',
          'Environmental education',
          'Team-building activities',
          'Youth empowerment'
        ],
        additionalInfo: 'We can host at our studio or come to your location.'
      }
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Volunteering here changed my perspective on waste and creativity.",
      author: "Sarah M.",
      role: "Volunteer",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-400"
    },
    {
      quote: "Our partnership helped us engage employees in sustainability.",
      author: "GreenTech Corp",
      role: "Corporate Partner",
      borderColor: "border-blue-500",
      textColor: "text-blue-400"
    },
    {
      quote: "The workshop inspired our students to think differently about materials.",
      author: "James K.",
      role: "School Teacher",
      borderColor: "border-green-500",
      textColor: "text-green-400"
    }
  ];

  const upcomingEvents: Event[] = [
    {
      date: "15",
      day: "MON",
      month: "JUN",
      title: "Community Art Build",
      description: "Help create our next public installation",
      bgColor: "bg-yellow-500"
    },
    {
      date: "22",
      day: "WED",
      month: "JUN",
      title: "Recycling Workshop",
      description: "Learn creative ways to reuse materials",
      bgColor: "bg-blue-500"
    },
    {
      date: "05",
      day: "FRI",
      month: "JUL",
      title: "Donor Appreciation Day",
      description: "Celebrating our supporters",
      bgColor: "bg-green-500"
    }
  ];

  // Event handlers
  const handleOptionChange = (option: InvolvementOption) => {
    setSelectedOption(option);
    setSubmitStatus(null);
    setFormData({
      name: '',
      email: '',
      message: '',
      ...(option === 'donate' ? { amount: '' } : {}),
      ...(option === 'partner' ? { organization: '' } : {})
    });
  };

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
      setFormData({
        name: '',
        email: '',
        message: '',
        ...(selectedOption === 'donate' ? { amount: '' } : {}),
        ...(selectedOption === 'partner' ? { organization: '' } : {})
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  // Get current involvement type details
  const currentInvolvement = involvementOptions.find(opt => opt.id === selectedOption);

  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 md:px-10 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {['👐', '💚', '🤝', '🎨'].map((emoji, i) => (
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Involved</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Join our movement to transform waste into art
          </p>
        </motion.div>

        {/* Involvement Options */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {involvementOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionChange(option.id)}
              className={`p-4 rounded-xl border transition-all flex flex-col items-center min-h-[120px] ${
                selectedOption === option.id
                  ? 'bg-gradient-to-r from-yellow-500 to-blue-500 text-black border-transparent'
                  : 'bg-gray-900 border-gray-800 hover:bg-gray-800'
              }`}
            >
              <span className="text-3xl mb-2">{option.emoji}</span>
              <span className="font-bold">{option.label}</span>
              <span className="text-sm mt-1 opacity-80">{option.description}</span>
            </button>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">
              {currentInvolvement?.details.title}
            </h2>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 mb-6 bg-green-900/30 border border-green-800 rounded-lg"
              >
                <p className="text-green-400">Thank you! We'll be in touch soon.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                {selectedOption === 'donate' && (
                  <div>
                    <label className="block text-gray-300 mb-2">Amount (USD)</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                      placeholder="50"
                    />
                  </div>
                )}

                {selectedOption === 'partner' && (
                  <div>
                    <label className="block text-gray-300 mb-2">Organization Name</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 mb-2">
                    {selectedOption === 'volunteer' && 'Why do you want to volunteer? *'}
                    {selectedOption === 'donate' && 'Any special instructions?'}
                    {selectedOption === 'partner' && 'Tell us about your organization *'}
                    {selectedOption === 'workshop' && 'What type of workshop are you interested in? *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required={selectedOption !== 'donate'}
                    rows={4}
                    className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-bold w-full transition ${
                    isSubmitting
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-500 to-blue-500 hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    selectedOption === 'volunteer' ? 'Apply to Volunteer' :
                    selectedOption === 'donate' ? 'Make Donation' :
                    selectedOption === 'partner' ? 'Send Partnership Request' :
                    'Request Workshop Info'
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Current Option Details */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">{currentInvolvement?.emoji}</span>
                <span>{currentInvolvement?.label} Information</span>
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="font-medium">{currentInvolvement?.details.title} includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {currentInvolvement?.details.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p className="pt-4 border-t border-gray-800">{currentInvolvement?.details.additionalInfo}</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">What People Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`border-l-4 ${testimonial.borderColor} pl-4 py-2`}>
                    <p className="italic text-gray-300">"{testimonial.quote}"</p>
                    <p className={`${testimonial.textColor} mt-2 font-medium`}>
                      — {testimonial.author}, <span className="text-gray-400">{testimonial.role}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${event.bgColor} text-black rounded-lg p-2 text-center min-w-[50px]`}>
                      <div className="font-bold text-lg">{event.date}</div>
                      <div className="text-xs uppercase">{event.month}</div>
                    </div>
                    <div>
                      <h4 className="font-bold">{event.title}</h4>
                      <p className="text-gray-400 text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;