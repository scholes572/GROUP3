import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "residential",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to power your home or business with solar? Let's start the conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-amber-400 mb-6">Request a Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500"
                    placeholder="Enter your names"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500"
                    placeholder="name@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500"
                    placeholder="+*************"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500"
                    placeholder="City, Province"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-300 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us about your energy needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+271234567890</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri, 8:00 AM - 5:00 PM SAST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@solaraforge.co.za</p>
                    <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                    <p className="text-gray-300">Johannesburg, Gauteng</p>
                    <p className="text-gray-300">South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Why you should contact us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Free Consultation</h4>
                    <p className="text-gray-300 text-sm">
                      Get expert advice on the best solar solution for your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quick Response</h4>
                    <p className="text-gray-300 text-sm">
                      Our team responds to all inquiries within one business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Send className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Custom Quote</h4>
                    <p className="text-gray-300 text-sm">
                      Receive a tailored quote based on your specific requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720351320133-a9bb8fd0b500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBwb3dlciUyMGdyaWQlMjBlbGVjdHJpY2l0eXxlbnwxfHx8fDE3NzYzMzI5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Energy and power"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Powering South Africa's Future</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/10 to-amber-700/10 backdrop-blur-sm border border-amber-500/30 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-amber-400 mb-6">Serving All of South Africa</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From our facilities in Johannesburg and Upington, we provide installation and
            support services nationwide
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Gauteng",
              "Western Cape",
              "KwaZulu-Natal",
              "Eastern Cape",
              "Northern Cape",
              "Free State",
              "Limpopo",
              "Mpumalanga",
              "North West",
            ].map((province) => (
              <span
                key={province}
                className="px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300"
              >
                {province}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
