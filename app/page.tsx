"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiLeetcode, SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, ExternalLink, ChevronRight } from "lucide-react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const competitionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Projects", ref: projectsRef },
    { label: "Courses", ref: coursesRef },
    { label: "Competitions", ref: competitionRef },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-teal-100 selection:text-teal-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Buya.dev</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/blog"
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              Blog
            </a>
          </div>

          <Button 
            variant="default" 
            size="sm"
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5"
            asChild
          >
            <a href="mailto:buyanjargal023@gmail.com">Contact</a>
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="section-container flex flex-col items-center justify-center text-center mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl">
          Building <span className="text-gradient">seamless</span> mobile experiences and robust backends.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          I'm Buya, a Software Engineer specialized in mobile and backend development. 
          I transform complex problems into elegant, user-focused applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 h-12 text-base font-semibold transition-slow hover-lift"
            onClick={() => scrollToSection(projectsRef)}
          >
            View My Work <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
          <div className="flex items-center gap-4 ml-0 sm:ml-4">
            <a href="https://github.com/Buya023" target="_blank" className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
              <SiGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/Buyanjargal-tserendendev-21a495227/" target="_blank" className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
              <SiLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / SUMMARY (SUBTLE) */}
      <section ref={aboutRef} className="bg-slate-50 border-y border-slate-100">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A bit about me</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              I thrive at the intersection of mobile performance and backend stability. With a deep passion for problem-solving, I've dedicated myself to master the tools that build the modern web and mobile ecosystems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My approach is simple: write clean code, build for scalability, and always keep the user experience at the forefront. Whether it's optimizing a React Native app or architecting a Node.js API, I'm all about excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Mobile Dev", value: "React Native, Flutter" },
              { label: "Backend", value: "Node.js, Python" },
              { label: "Database", value: "PostgreSQL, MySQL" },
              { label: "Cloud", value: "AWS, Docker" },
            ].map((skill) => (
              <div key={skill.label} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-1">{skill.label}</h3>
                <p className="text-slate-800 font-medium">{skill.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef} className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Portfolio</h2>
            <h3 className="text-4xl font-bold text-slate-900 italic">Selected Projects</h3>
          </div>
          <Button variant="ghost" className="text-teal-600 hover:text-teal-700 font-semibold p-0 h-auto" asChild>
            <a href="https://github.com/Buya023?tab=repositories" target="_blank">
              View all projects <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Flappy Bird",
              src: "/img/flappy.png",
              desc: "A Python PyGame project of the classic game with smooth mechanics.",
              tag: "Game Dev",
            },
            {
              title: "Drum Kit",
              src: "/img/drum.png",
              desc: "Interactive web experience using Vanila JS and Audio APIs.",
              tag: "Web App",
            },
            {
              title: "Dice Game",
              src: "/img/dicee.png",
              desc: "Simplified game logic demonstration with responsive design.",
              tag: "Mini Game",
            },
          ].map((project, idx) => (
            <Card key={idx} className="group border-none shadow-none bg-transparent hover-lift">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-slate-100 border border-slate-100">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-0 mb-2">
                <div className="text-xs font-bold text-teal-600 uppercase mb-2">{project.tag}</div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-slate-600 leading-relaxed">{project.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section ref={coursesRef} className="bg-slate-900 text-white overflow-hidden">
        <div className="section-container relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-3">Learning Path</h2>
            <h3 className="text-4xl font-bold tracking-tight italic">Continuous Improvement</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Full-stack mastery from HTML5/CSS3 to React and Node.js ecosystems.",
                src: "/img/web-dev.png",
              },
              {
                title: "Python Mastery",
                desc: "Deep dive into Python fundamentals, automation, and game development.",
                src: "/img/python.png",
              },
              {
                title: "Data Structures",
                desc: "Optimizing algorithms and data management for high-performance apps.",
                src: "/img/data-structure.png",
              },
            ].map((course, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Image src={course.src} alt={course.title} width={24} height={24} className="opacity-80" />
                </div>
                <h4 className="text-xl font-bold mb-3">{course.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section ref={competitionRef} className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Competitions</h2>
          <h3 className="text-4xl font-bold text-slate-900 italic">Competitive Coding</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "AtCoder",
              logo: "/img/at-coder.png",
              url: "https://atcoder.jp/users/Buya",
              color: "bg-slate-50",
            },
            {
              name: "LeetCode",
              logo: "/img/LeetCode_logo_black.png",
              url: "https://leetcode.com/Buyanjargal/",
              color: "bg-orange-50",
            },
            {
              name: "Codeforces",
              logo: "/img/codeforce-logo.png",
              url: "https://codeforces.com/profile/buya4",
              color: "bg-blue-50",
            },
          ].map((profile) => (
            <a 
              key={profile.name}
              href={profile.url} 
              target="_blank" 
              className={`flex items-center justify-between p-6 rounded-2xl ${profile.color} border border-transparent hover:border-teal-200 hover:shadow-md transition-all group`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src={profile.logo} alt={profile.name} fill className="object-contain" />
                </div>
                <span className="font-bold text-slate-900 text-lg">{profile.name}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">B</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">Buya.dev</span>
            </div>
            
            <div className="flex gap-8">
              <a href="https://github.com/Buya023" target="_blank" className="text-slate-400 hover:text-teal-600 transition-colors">
                <SiGithub className="text-xl" />
              </a>
              <a href="https://linkedin.com/in/Buyanjargal-tserendendev-21a495227/" target="_blank" className="text-slate-400 hover:text-teal-600 transition-colors">
                <SiLinkedin className="text-xl" />
              </a>
              <a href="https://leetcode.com/Buyanjargal/" target="_blank" className="text-slate-400 hover:text-teal-600 transition-colors">
                <SiLeetcode className="text-xl" />
              </a>
              <a href="mailto:buyanjargal023@gmail.com" className="text-slate-400 hover:text-teal-600 transition-colors">
                <Mail className="text-xl" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200/50 pt-8 gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Buya — Designed with precision.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

