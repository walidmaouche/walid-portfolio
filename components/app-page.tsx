'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code, Smartphone, Server, Database, Globe, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const skills = [
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Code },
  { name: 'React Native', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'MySql', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'GraphQL', icon: Globe },
  { name: 'Docker', icon: Code },
]

const projects = [
  { 
    name: 'Ethos', 
    description: "A blockchain-based platform for creating and managing digital assets. Ethos Self-Custody Wallet—the fastest, simplest, and most secure way to store your crypto assets. Unlike exchanges or protocols, Ethos ensures that you are always in control of your assets, eliminating the need for third-party custodians. Our wallet offers security that matches or surpasses traditional cold storage solutions while providing the convenience and cost efficiency of using your mobile device's Secure Element, enhanced by our innovative Magic Key technology.",
    techStack: ['React native', 'Node.js', 'Nestjs', 'PostgreSQL', 'Etherjs', 'Web3', 'Blockchain'],
    color: '#FF6B6B',
    image: '/ethos.png?height=300&width=400',
    link: 'https://ethos.io'
  },
  { 
    name: 'Keyu', 
    description: 'Keyu is a cross-platform mobile application developed with React Native that revolutionizes the hotel experience by simplifying the check-in process. Featuring online check-in, mobile key access, and integrated chat support, it ensures guests enjoy a seamless and hassle-free stay. By automating administrative tasks, Keyu empowers hotel staff to focus on delivering exceptional and memorable service.',
    techStack: ['React Native', 'Reactjs', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'typescript', 'stripe'],
    color: '#4ECDC4',
    image: '/keyu.png?height=300&width=400',
    link: 'https://keyu.fr'
  },
  { 
    name: 'Dormakaba', 
    description: 'The Dormakaba Le Cercle app is designed specifically for partner installers. This cross-platform mobile application (iOS and Android) features a dedicated back office for installers, offering training videos, quizzes, and assessments. Additionally, it includes a store where users can purchase rewards using credits earned within the app.',
    techStack: ['React native', 'React', 'Node.js', 'Express', 'PostgreSQL', 'typescript', 'GraphQL', 'Apollo server'],
    color: '#45B7D1',
    image: '/dormakaba.jpeg?height=300&width=400',
    link: 'https://www.dormakaba.com/'
  },
]

const careerJourney = [
  {
    year: 2017,
    title: 'Computer Science Degree',
    description: 'Graduated with honors from the University of Science',
    icon: GraduationCap,
  },
  {
    year: 2019,
    title: 'Full-Stack Developer',
    description: 'Development web app, landingpage, websites and tools',
    icon: Briefcase,
  },
  {
    year: 2021,
    title: 'Full-Stack Web & Mobile Developer',
    description: 'Development mobile app, cross-platform and web applications',
    icon: Smartphone,
  },
  {
    year: 2024,
    title: 'Senior Full-Stack Developer',
    description: 'Advanced to Senior Full-Stack Developer role',
    icon: Code,
  },
]

const Particle = ({ x, y, size, color }: { x: number, y: number, size: number, color: string }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      x, y,
      width: size,
      height: size,
      backgroundColor: color,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
  />
)

const ConstellationBackground = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; color: string }[]>([])
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current as HTMLDivElement
      const { width, height } = element.getBoundingClientRect()
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
      }))
      setParticles(newParticles)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </div>
  )
}

const SkillsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <skill.icon className="w-8 h-8 mb-2 text-blue-400" />
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-gray-800 border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="md:flex h-full">
              <div className="md:w-1/2 h-full">
                <div className="h-full relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.name}`}
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold" style={{ color: project.color }}>
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-gray-900 bg-white border-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 hover:shadow-md"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CareerJourneyItem = ({ item, index }: { item: { year: number, title: string, description: string, icon: any }, index: number }) => {
  return (
    <motion.div 
      className="flex items-center mb-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <item.icon className="w-6 h-6 text-white" />
        </div>
        {index !== careerJourney.length - 1 && (
          <div className="absolute top-12 left-1/2 w-0.5 h-full bg-blue-500 -translate-x-1/2" />
        )}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-blue-400">{item.year}</p>
        <p className="text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  )
}

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 font-sans relative overflow-hidden">
      <ConstellationBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-16 space-y-4 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 rounded-full overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="John Doe"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Walid Maouche
            </motion.h1>
            <motion.p 
              className="text-2xl text-blue-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full-stack JavaScript Developer | Node.js, React.js & React Native 🧑‍💻
            </motion.p>
          </div>
        </header>

        <SkillsSection />

        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl text-white font-bold mb-4">About Me</h2>
                <p className="text-gray-300 mb-4">
                  I&apos;m a passionate full-stack developer with expertise in both front-end and back-end technologies. 
                  With a strong foundation in web and mobile development, I specialize in creating seamless, 
                  end-to-end solutions that deliver exceptional user experiences.
                </p>
                <p className="text-gray-300 mb-4">
                  My skills span across the entire development stack, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  <li>Front-end: React, React Native, Next.js, HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>Back-end: Node.js, Express, Nestjs</li>
                  <li>Databases: MongoDB, PostgreSQL, MySQL</li>
                  <li>APIs: RESTful, GraphQL</li>
                  <li>DevOps: Docker, CI/CD pipelines</li>
                </ul>
                <p className="text-gray-300">
                  I&apos;m always eager to take on new challenges and continuously expand my skill set in this ever-evolving 
                  field of technology. Let&apos;s build something amazing together!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Showcase</h2>
          <ProjectGrid />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Career Journey</h2>
          <div className="max-w-2xl mx-auto">
            {careerJourney.map((item, index) => (
              <CareerJourneyItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => window.open('https://github.com/walidmaouche', '_blank')} variant="outline" size="icon" className="bg-transparent border-white hover:bg-white hover:text-gray-900">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button onClick={() => window.open('https://www.linkedin.com/in/walid-maouche', '_blank')} variant="outline" size="icon" className="bg-transparent border-white hover:bg-white hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button onClick={() => window.open('mailto:walidmaouche24@gmail.com', '_blank')} variant="outline" size="icon" className="bg-transparent border-white hover:bg-white hover:text-gray-900">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>

        <footer className="text-center text-gray-500">
          <p>© {new Date().getFullYear()} Walid Maouche. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}