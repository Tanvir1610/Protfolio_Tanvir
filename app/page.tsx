'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const experiences = [
    {
      title: "UI/UX Designer Intern",
      company: "Brain Quest Consultancy & Training",
      location: "Dubai, UAE (Online)",
      period: "Dec 2025 – Jan 2026",
      points: [
        "Designed intuitive and user-centric UI/UX for web and mobile applications using Figma, Wix and Canva",
        "Created wireframes, user flows, and high-fidelity prototypes to improve usability and visual consistency",
        "Collaborated remotely with mentors and developers to translate ideas into practical design solutions",
        "Focused on accessibility, modern design trends, and user experience optimization"
      ]
    },
    {
      title: "UI/UX Developer Intern",
      company: "Renu Sharma Foundation",
      location: "Remote",
      period: "May 2025 – June 2025",
      points: [
        "Developed and maintained responsive UI for web applications using HTML, CSS, and JavaScript",
        "Collaborated with designers and back-end developers for user-friendly features",
        "Optimized website performance and accessibility"
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "CodeAlpha",
      location: "Remote",
      period: "Jul 2024 – Aug 2024",
      points: [
        "Developed and maintained responsive UI for web applications using HTML, CSS, and JavaScript",
        "Collaborated with designers and back-end developers for user-friendly features",
        "Optimized website performance and accessibility"
      ]
    }
  ];

  const projects = [
    {
      name: "Full Stack Developer Portfolio",
      tech: "Next.js, TypeScript, Tailwind CSS, MongoDB",
      description: "Responsive portfolio with dark/light mode and contact form integration",
      github: "https://github.com/Tanvir1610/Protfolio_Tanvir"
    },
    {
      name: "GCET Connection",
      tech: "Next.js, Supabase",
      description: "Social network for GCET students with posts, reels, and messaging",
      github: "https://github.com/Tanvir1610"
    },
    {
      name: "Nutrition Management System",
      tech: "HTML, CSS, JavaScript",
      description: "Web app for managing nutrition records with calculator & animated UI",
      github: "https://github.com/Tanvir1610"
    },
    {
      name: "CodewithTanvir – Learn Coding",
      tech: "Interactive Platform",
      description: "Interactive platform to learn C, C++, Python, Java, JavaScript, HTML & CSS",
      github: "https://github.com/Tanvir1610"
    },
    {
      name: "NeuroLm",
      tech: "AI/ML",
      description: "AI/ML mini-project for Brain Tumor prediction and management",
      github: "https://github.com/Tanvir1610"
    },
    {
      name: "Alpha Athlete",
      tech: "E-commerce",
      description: "E-commerce landing page with dynamic UI and interactivity",
      github: "https://github.com/Tanvir1610"
    }
  ];

  const achievements = [
    "Top 5,000 Finalist — Build With India Hackathon (Finale at Google Office)",
    "Participated in ShlokaDecode by NSUT Delhi (Team Imperials)",
    "Competed in CSS Battle by AIT Pune (Team vhoratanvir1610)",
    "Attended Python Game Dev Workshop by IEEE GCET SB"
  ];

  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "Python"],
    frameworks: ["React.js", "Next.js", "Tailwind CSS"],
    databases: ["PostgreSQL", "Supabase", "MongoDB"],
    tools: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "Canva", "Wix", "Power BI", "WordPress"],
    domains: ["Full-Stack Developer", "Web Development", "Data Engineer", "UI/UX Developer", "Graphic Designer"]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tanvir Vhora</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Building beautiful, responsive, and user-centric web applications
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:vhoratanvir1610@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="https://github.com/Tanvir1610" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors text-gray-900 dark:text-white">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
            <a href="mailto:vhoratanvir1610@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+916354686821" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tanvir-vhora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Tanvir1610" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate Full Stack Developer and UI/UX Designer currently pursuing B.Tech in Information Technology at G H Patel College of Engineering & Technology. 
              With experience in modern web technologies and a keen eye for design, I create engaging digital experiences that solve real-world problems.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mt-6">
              <MapPin className="w-5 h-5" />
              <span>Anand, Gujarat, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.location} | {exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h3>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.name}</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">{project.tech}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Technologies</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Database Management</h4>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Domains</h4>
              <div className="flex flex-wrap gap-2">
                {skills.domains.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Achievements</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-800 dark:text-gray-200">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Technology (B.Tech)</h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Information Technology</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">G H Patel College of Engineering & Technology (GHPCET)</p>
              <p className="text-gray-600 dark:text-gray-400">Anand, Gujarat | 2022 – 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h3>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:vhoratanvir1610@gmail.com" className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-lg">
                <Mail className="w-5 h-5" />
                vhoratanvir1610@gmail.com
              </a>
              <a href="tel:+916354686821" className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-lg">
                <Phone className="w-5 h-5" />
                +91 6354686821
              </a>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://github.com/Tanvir1610" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/in/tanvir-vhora" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2026 Tanvir Vhora. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Tanvir1610" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tanvir-vhora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:vhoratanvir1610@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
