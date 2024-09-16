import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, MailIcon, BriefcaseIcon, CalendarIcon, GraduationCapIcon, CodeIcon, UserIcon, RocketIcon, TwitterIcon } from 'lucide-react'

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Jane Doe</h1>
                    <nav className="hidden md:flex space-x-4">
                        <a href="#home" className="hover:text-primary transition-colors">Home</a>
                        <a href="#explore" className="hover:text-primary transition-colors">Explore</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </nav>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </Button>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden bg-background/95 backdrop-blur-sm">
                        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                            <a href="#home" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</a>
                            <a href="#explore" className="hover:text-primary transition-colors" onClick={toggleMenu}>Explore</a>
                            <a href="#projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
                            <a href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
                        </div>
                    </nav>
                )}
            </header>

            {/* Hero Section */}
            <section id="home" className="py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-8">
                        <img
                            src="/placeholder.svg?height=200&width=200"
                            alt="Jane Doe"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I&apos;m Jane Doe</h2>
                        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">A passionate full-stack developer creating innovative web solutions.</p>
                        <div className="flex justify-center space-x-4 mb-6">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <GithubIcon />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <TwitterIcon />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <LinkedinIcon />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <MailIcon />
                            </a>
                        </div>
                    </div>
                    <Button asChild>
                        <a href="#contact">Get in touch</a>
                    </Button>
                </div>
            </section>

            {/* Explore Section */}
            <section id="explore" className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Explore My World</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Journey Stages */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                            <div className="relative">
                                {[
                                    { icon: GraduationCapIcon, title: "Education", description: "Graduated with honors in Computer Science" },
                                    { icon: RocketIcon, title: "Career Start", description: "Launched my career as a Junior Developer" },
                                    { icon: BriefcaseIcon, title: "Professional Growth", description: "Advanced to Senior Full Stack Developer" },
                                    { icon: CodeIcon, title: "Continuous Learning", description: "Always exploring new technologies" }
                                ].map((stage, index) => (
                                    <div key={index} className="flex items-center mb-8 last:mb-0">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <stage.icon className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                        <div className="ml-4 flex-grow">
                                            <h4 className="font-semibold text-lg">{stage.title}</h4>
                                            <p className="text-sm text-muted-foreground">{stage.description}</p>
                                        </div>
                                        {index < 3 && (
                                            <div className="absolute left-6 top-12 h-16 w-0.5 bg-primary"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'React', level: 90 },
                                    { name: 'Node.js', level: 85 },
                                    { name: 'TypeScript', level: 80 },
                                    { name: 'Python', level: 75 },
                                    { name: 'SQL', level: 85 },
                                    { name: 'GraphQL', level: 70 },
                                    { name: 'AWS', level: 65 },
                                    { name: 'Docker', level: 60 }
                                ].map((skill) => (
                                    <div key={skill.name} className="bg-background rounded-lg p-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-semibold">{skill.name}</span>
                                            <span className="text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <Progress value={skill.level} className="w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
                        <div className="space-y-8">
                            {[
                                {
                                    degree: "Master of Science in Computer Science",
                                    university: "Tech University",
                                    location: "San Francisco, CA",
                                    period: "Sep 2013 - May 2015",
                                    achievements: [
                                        "Thesis: 'Optimizing Machine Learning Algorithms for Web Applications'",
                                        "GPA: 3.8/4.0",
                                        "Teaching Assistant for 'Advanced Web Development' course"
                                    ]
                                },
                                {
                                    degree: "Bachelor of Science in Software Engineering",
                                    university: "State University",
                                    location: "New York, NY",
                                    period: "Sep 2009 - May 2013",
                                    achievements: [
                                        "Graduated Summa Cum Laude",
                                        "President of the Computer Science Student Association",
                                        "Completed internship at Major Tech Corp."
                                    ]
                                }
                            ].map((edu, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                                <p className="text-primary font-medium">{edu.university}</p>
                                                <p className="text-sm text-muted-foreground">{edu.location}</p>
                                            </div>
                                            <div className="text-sm text-muted-foreground flex items-center">
                                                <CalendarIcon className="w-4 h-4 mr-1" />
                                                {edu.period}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center">
                                                <GraduationCapIcon className="w-4 h-4 mr-2" />
                                                Achievements & Activities
                                            </h4>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Work Experience</h3>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Senior Full Stack Developer",
                                    company: "Tech Innovators Inc.",
                                    location: "San Francisco, CA",
                                    period: "Jan 2020 - Present",
                                    description: "Led development of scalable web applications, mentored junior developers, and implemented best practices in agile environments.",
                                    achievements: [
                                        "Increased application performance by 40% through code optimization",
                                        "Successfully delivered 5 major projects ahead of schedule",
                                        "Implemented CI/CD pipeline, reducing deployment time by 60%"
                                    ]
                                },
                                {
                                    title: "Full Stack Developer",
                                    company: "Digital Solutions Ltd.",
                                    location: "New York, NY",
                                    period: "Mar 2017 - Dec 2019",
                                    description: "Developed and maintained multiple client websites, collaborated with design team, and optimized application performance.",
                                    achievements: [
                                        "Reduced page load time by 25% across all client websites",
                                        "Implemented responsive design, increasing mobile traffic by 30%",
                                        "Developed custom CMS, improving content management efficiency by 50%"
                                    ]
                                },
                                {
                                    title: "Junior Web Developer",
                                    company: "StartUp Ventures",
                                    location: "Austin, TX",
                                    period: "Jun 2015 - Feb 2017",
                                    description: "Assisted in front-end development, learned backend technologies, and participated in code reviews and team meetings.",
                                    achievements: [
                                        "Contributed to the development of 3 successful startup products",
                                        "Improved code quality by implementing unit testing, reducing bugs by 40%",
                                        "Received 'Rookie of the Year' award for exceptional performance and quick learning"
                                    ]
                                }
                            ].map((job, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold">{job.title}</h3>
                                                <p className="text-primary font-medium">{job.company}</p>
                                                <p className="text-sm text-muted-foreground">{job.location}</p>
                                            </div>
                                            <div className="text-sm text-muted-foreground flex items-center">
                                                <CalendarIcon className="w-4 h-4 mr-1" />
                                                {job.period}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{job.description}</p>
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center">
                                                <BriefcaseIcon className="w-4 h-4 mr-2" />
                                                Key Achievements
                                            </h4>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                                {job.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* About Me */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold mb-6 text-center">About Me</h3>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <UserIcon className="w-6 h-6 mr-2" />
                                    Jane Doe
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    I&apos;m a passionate full-stack developer with 5+ years of experience in creating innovative web solutions.
                                    My journey in tech started with a degree in Computer Science and has led me through exciting projects
                                    and continuous learning. When I&apos;m not coding, you can find me hiking, reading sci-fi novels, or
                                    experimenting with new recipes in the kitchen.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "E-commerce Platform",
                                description: "A full-stack e-commerce solution with React and Node.js",
                                image: "/placeholder.svg?height=200&width=400",
                                link: "#"
                            },
                            {
                                title: "Task Management App",
                                description: "A productivity app built with React Native and GraphQL",
                                image: "/placeholder.svg?height=200&width=400",
                                link: "#"
                            },
                            {
                                title: "Data Visualization Dashboard",
                                description: "An interactive dashboard using D3.js and Vue.js",
                                image: "/placeholder.svg?height=200&width=400",
                                link: "#"
                            }
                        ].map((project, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover mb-4 rounded"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <Button variant="outline" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="py-20 bg-muted/50">
                <div className="container mx-auto px-4 max-w-md">
                    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                    <form className="space-y-4">
                        <Input type="text" placeholder="Your Name" required />
                        <Input type="email" placeholder="Your Email" required />
                        <Textarea placeholder="Your Message" required />
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <GithubIcon />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <TwitterIcon />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <LinkedinIcon />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <MailIcon />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                    <p className="text-muted-foreground">&copy; 2023 Jane Doe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}