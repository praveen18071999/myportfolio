import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "lucide-react"
import buffalo from "../../images/Buffalo.png"
import cmr from "../../images/CMR.jpeg"
import inter from "../../images/inter.jpeg"
import school from "../../images/school.png"

// Sample education data
const educationList = [
    {
        degree: "Master of Science in Computer Science",
        institution: "State University of New York at Buffalo",
        location: "Buffalo, NY",
        duration: "2024 - 2026",
        achievements: [
            "Specialized in Artificial Intelligence and Machine Learning",
            "Thesis: 'Deep Learning Approaches for Natural Language Processing'",
            "GPA: 3.6/4.0"
        ],
        image: buffalo
    },
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "CMR College of Engineering & Technology",
        location: "Hyderabad, India",
        duration: "2017 - 2021",
        achievements: [
            "Major in Computer Science and Engineering",
            "Minor in Web Development",
            "GPA: 7.8/10"
        ],
        image: cmr
    },
    {
        degree: "Higher Secondary Education",
        institution: "Sri Chaitanya Junior College",
        location: "Hyderabad, India",
        duration: "2015 - 2017",
        achievements: [
            "Mathematics, Physics, Chemistry",
            "Score: 94.8%"
        ],
        image: inter
    },
    {
        degree: "Secondary Education",
        institution: "HI - Tech Modern High School",
        location: "Hyderabad, India",
        duration: "2014 - 2015",
        achievements: [
            "Score: 8.3/10"
        ],
        image: school
    }
]

export default function education() {
    return (
        <div className="container mx-auto py-12">
            <div className="space-y-8">
                {educationList.map((edu, index) => (
                    <Card key={index} className="relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 p-6 flex items-center justify-center bg-gray-100">
                                <Image
                                    src={edu.image.src}
                                    alt={`${edu.institution} logo`}
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="md:w-3/4">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <GraduationCapIcon className="h-6 w-6 text-primary" />
                                        <CardTitle>{edu.degree}</CardTitle>
                                    </div>
                                    <CardDescription className="text-lg font-medium">{edu.institution}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center">
                                            <CalendarIcon className="h-4 w-4 mr-2" />
                                            {edu.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPinIcon className="h-4 w-4 mr-2" />
                                            {edu.location}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {edu.achievements.map((achievement, achIndex) => (
                                            <Badge key={achIndex} variant="secondary" className="mr-2 mb-2">
                                                {achievement}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}