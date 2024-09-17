'use client'
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import education from "../images/education.jpg"
import project from "../images/projects.jpg"
import experience from "../images/expereince.jpg"
import profile from "../images/profile.jpeg"
import resume from "../images/resume.jpg"
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon, ArrowLeftIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import c from "../images/letter-c.png"
import cplusplus from "../images/cplusplus.png"
import java from "../images/java.png"
import csharp from "../images/csharp.png"
import javascript from "../images/javascript.png"
import jquery from "../images/JQuery.png"
import html from "../images/html.png"
import postman from "../images/postman.png"
import ml from "../images/ml.png"
import mongodb from "../images/mongo.png"
import git from "../images/git.png"
import power from "../images/growth.png"
import ds from "../images/data-science.png"
import docker from "../images/docker.png"
import python from "../images/python.png"
import bootstrap from "../images/bootstrap.png"
import crm from "../images/dynamics.png"
import css from "../images/css.png"
import sql from "../images/sql-server.png"
import react from "../images/react.png"
import angular from "../images/angular.png"

import "./globals.css";


export default function Home() {
  return (
    //<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Portfolio />
    </main>

  );
}

function Portfolio() {


  return (
    <div className="min-h-screen bg-background  text-foreground">
      {/* Hero Section */}
      <section id="home" className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 flex flex-col items-center">
            <Image
              src={profile}
              alt="Praveen Kumar"
              className="rounded-full"
              width={150}
              height={150}
            />
            <div className="flex space-x-4">
              <a href="https://github.com/praveen18071999" className="text-muted-foreground hover:text-primary transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://x.com/praveen18071999" className="text-muted-foreground hover:text-primary transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/praveen-gangapuram-956659191/" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="pgangapu@buffalo.edu" className="text-muted-foreground hover:text-primary transition-colors">
                <MailIcon size={20} />
              </a>
            </div>
          </div>
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Hi, I&apos;m Praveen Kumar</h2>
            <p className="text-lg md:text-xl mb-4 text-muted-foreground">Ex - Senior Software Engineer | Ex - Software Engineer</p>
            <p className="text-lg md:text-xl mb-4 text-muted-foreground">Experienced Software Developer skilled in designing, coding, and testing software applications across various platforms. Proficient in multiple programming languages, including Python, Java, and JavaScript, with a strong understanding of software development methodologies like Agile and Scrum. Adept at collaborating with cross-functional teams to deliver efficient, scalable, and user-focused solutions.</p>
            <Button asChild>
              <a href="/contact">Get in touch</a>
            </Button>
          </div>

        </div>
      </section>
      <ExploreFunction />
      <MoreExploreCards />



    </div>
  )
}

const ExploreFunction = () => {
  const myJourney = [
    { date: "Aug 2024", color: "#14b8a6", title: "Masters", description: "Left HCLTech and joined masters at State University of New York at Buffalo." },
    { date: "Jun 2022", color: "#a8a29e", title: "Senior Software Engineer", description: "Joined HCL Tech as a Senior Software Engineer." },
    { date: "Jun 2021", color: "#a8a29e", title: "Graduated", description: "Graduated with a Bachelor of Technology in Computer Science and Engineering." },
    { date: "Nov 2021", color: "#a8a29e", title: "Software Engineer", description: "Promoted to Software Engineer 1 at MAQ Software." },
    { date: "Nov 2020", color: "#a8a29e", title: "Software Intern", description: "Started My career as Software Intern at MAQ Software" },
    { date: "June 2017", color: "#a8a29e", title: "Started Bachelors", description: "Started my Bachelors in Computer Science and Engineering at CMR College Of Engineering & Technology, Hyderabad." }
  ]


  const allSkills = [
    {
      programmingLanguages:
        [{ logo: c, alt: "C Language" },
        { logo: cplusplus, alt: "C++ Language" },
        { logo: javascript, alt: "JavaScript" },
        { logo: python, alt: "Python" },
        { logo: jquery, alt: "JQuery" },
        { logo: csharp, alt: "CSharp" },
        { logo: java, alt: "Java" },
        { logo: html, alt: "HTML" },
        { logo: css, alt: "CSS" },
        { logo: bootstrap, alt: "Bootstrap" },
        { logo: git, alt: "Git" },
        { logo: ds, alt: "Data Science" },
        { logo: docker, alt: "Docker" },
        { logo: mongodb, alt: "MongoDB" },
        { logo: sql, alt: "SQL" },
        { logo: postman, alt: "PostMan" },
        { logo: ml, alt: "Machine Learning" },
        { logo: react, alt: "React Framework" },
        { logo: power, alt: "Power BI" },
        { logo: crm, alt: "Dynamics CRM" },
        { logo: angular, alt: "Angualr Framework" }
        ]
    }
  ]
  return (
    <section id="explore" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore My World</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="container">
            <h3 className="text-2xl font-semibold text-center mb-6">My Journey</h3>

            <div className="flex flex-col items-center space-y-4">
              {myJourney.map((stage, index) => (
                <div key={index} className="w-full max-w-md shadow-lg">
                  <Card className="lg:w-full md:w-80 sm:w-20">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: stage.color }}>
                      </div>
                      <div>
                        <CardTitle>{stage.title}</CardTitle>
                        <CardDescription>{stage.date}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{stage.description}</p>
                    </CardContent>
                  </Card>
                  {index < myJourney.length - 1 && (
                    <div className="flex justify-center my-2">
                      <ArrowLeftIcon className="w-6 h-6 text-gray-400 transform rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Skills */}
          <div className="container">
            <h3 className="text-2xl font-semibold text-center mb-6">Skills</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">
              {allSkills.map((skill, index) => (
                skill.programmingLanguages.map((languages, i) => (
                  <div key={i + index} className="rounded-lg p-1">
                    <Image src={languages.logo.src} className="rounded-full" alt={languages.alt} width={80} height={80} ></Image>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>)
}

const MoreExploreCards = () => {
  const cardsData = [
    { redirect: "/workexperience", title: "Work Experience", description: "Dive into my professional journey and explore the diverse roles and responsibilities I've undertaken over the past 4 years.Get an insight into my professional background, including the companies I've worked for, the roles I've excelled in, and the achievements I've earned.", image: experience },
    { redirect: "/education", title: "Education", description: "My educational journey has been a cornerstone in shaping my career and personal growth.", image: education },
    { redirect: "/project", title: "Projects", description: "Explore the projects which I have developed with the latest technologies. Each project showcases my ability to apply theoretical knowledge to practical scenarios, demonstrating my problem-solving skills and technical proficiency. From web development to machine learning, my projects span a wide range of domains and technologies.", image: project },
    { redirect: "https://drive.google.com/file/d/1keEwhTrtb_o2vBSofv92L9vngh4mbEFC/view?usp=sharing", title: "Resume", description: "Look at my resume and my acheivements, feel free to download.", image: resume }
  ]
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center justify-center p-6">Explore More</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-10">
        {cardsData.map((card, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <Link href={card.redirect}>
              <Image className="rounded-t-lg" src={card.image.src} width={500} height={500} alt="" />
            </Link>
            <div className="p-5">
              <Link href={card.redirect}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
              <Link href={card.redirect} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div></>
  )
}