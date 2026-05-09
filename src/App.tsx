/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Layout, 
  User,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Abstract Nexus",
      category: "Digital Design",
      image: "https://picsum.photos/seed/nexus/800/600",
      link: "#"
    },
    {
      title: "Flow State",
      category: "UI/UX Research",
      image: "https://picsum.photos/seed/flow/800/600",
      link: "#"
    },
    {
      title: "Kinetic UI",
      category: "Development",
      image: "https://picsum.photos/seed/ui/800/600",
      link: "#"
    },
    {
      title: "Ethereal Brand",
      category: "Identity",
      image: "https://picsum.photos/seed/brand/800/600",
      link: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Code2 className="w-5 h-5" />, level: "Expert" },
    { name: "UI/UX Design", icon: <Palette className="w-5 h-5" />, level: "Advanced" },
    { name: "Product Strategy", icon: <Layout className="w-5 h-5" />, level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            PERSONA.
          </motion.div>

          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            {["Work", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:opacity-50 transition-opacity"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {["Work", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold uppercase tracking-tighter"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] mb-4 block opacity-60">
            Digital Creator & Developer
          </span>
          <h1 className="text-6xl md:text-9xl font-extrabold font-display tracking-tighter leading-[0.9] mb-8">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">DIGITAL</span> <br />
            EXPERIENCES.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
            Specializing in building refined, performant websites that combine technical precision with aesthetic elegance.
          </p>
          <motion.a 
            href="#work"
            whileHover={{ x: 10 }}
            className="inline-flex items-center space-x-4 font-bold text-lg group"
          >
            <span>View Recent Work</span>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.a>
        </motion.div>

        {/* Decorative background element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 opacity-10 pointer-events-none md:block hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-2 border-dashed border-black rounded-full"
          />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold font-display tracking-tighter">SELECTED WORK</h2>
          </motion.div>
          <div className="hidden md:block text-sm font-medium tracking-widest uppercase opacity-40">
            2023 - 2024
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mt-1">{project.category}</p>
                </div>
                <div className="w-8 h-px bg-gray-300 mt-4"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block opacity-50">The Vision</span>
              <h2 className="text-4xl md:text-7xl font-extrabold font-display tracking-tighter leading-tight mb-8">
                I BELIEVE IN <br />
                PRACTICAL <br />
                PURITY.
              </h2>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Beyond code and design, I focus on the intersection of human psychology and digital interfaces. My goal is to create tools that feel like extensions of the user's intent.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/5 rounded-lg">{skill.icon}</div>
                    <span className="font-medium text-lg">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-40">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-extrabold font-display tracking-tighter mb-8">LET'S <br />TALK.</h2>
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Email</p>
                  <p className="text-xl font-medium">hello@persona.site</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 pt-10">
                {[Github, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border-none px-4 py-3 focus:ring-1 focus:ring-black outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border-none px-4 py-3 focus:ring-1 focus:ring-black outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border-none px-4 py-3 focus:ring-1 focus:ring-black outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-black text-white font-bold py-4 hover:bg-gray-800 transition-colors uppercase tracking-[0.2em] text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 text-center">
        <p className="text-sm font-medium text-gray-400">
          © 2024 PERSONA STUDIO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
