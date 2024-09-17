import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"

// Sample project data
const projects = [
    {
        title: "My Portfolio",
        description: "My Portfolio website built with Next.js and Tailwind CSS",
        tags: ["React", "Next.js", "Tailwind.CSS"],
        liveUrl: "",
        githubUrl: "https://github.com/praveen18071999/myportfolio"
    }
]

export default function project() {
    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                                    Live Demo
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <GithubIcon className="mr-2 h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}