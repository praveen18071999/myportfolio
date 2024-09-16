'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon } from "lucide-react"

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log('Form submitted:', { name, email, message })
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        })
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Form</CardTitle>
                        <CardDescription>Fill out the form below to send me a message</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <Textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                        <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <MailIcon className="h-5 w-5 text-gray-500" />
                            <span>pgangapu@buffalo.edu</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="h-5 w-5 text-gray-500" />
                            <span>+1 (716) 907-8004</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-5 w-5 text-gray-500" />
                            <span>Buffalo, New York</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <LinkedinIcon className="h-5 w-5 text-gray-500" />
                            <a href="https://www.linkedin.com/in/praveen-gangapuram-956659191/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <GithubIcon className="h-5 w-5 text-gray-500" />
                            <a href="https://github.com/praveen18071999" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Profile</a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}