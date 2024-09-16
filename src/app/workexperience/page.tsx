import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import hcl from "../../images/hcl.jpeg"
import maq from "../../images/MAQ1.png"
import beingzero from "../../images/beingzero.jpeg"


export default function workexperience() {
    const workExperiences = [
        {
            company: "HCL Technologies",
            position: "Senior Software Engineer",
            duration: "2022 - 2024",
            description: [
                "Built CRM apps using Dynamics 365, JavaScript, .NET, and Power Automate: Developed and implemented tailored CRM applications to meet the unique needs of businesses, leveraging Dynamics 365 as the core platform. Integrated custom JavaScript and .NET components to enhance system functionality, streamline business processes, and improve user experience. Automated workflows and complex tasks using Power Automate to reduce manual efforts and increase efficiency.",
                "Led the development of an application for the Marketing team using Model-driven apps: Spearheaded the end-to-end development of a Model-driven app for the Marketing team, facilitating seamless data management, campaign tracking, and lead scoring. Worked closely with stakeholders to gather requirements and deliver a solution that improved marketing operations, providing real-time insights and automating routine marketing tasks.",
                "Developed automated finance bots using Power Automate Desktop and Power Automate Cloud flows: Designed and implemented finance bots to automate key financial processes such as invoice generation, reconciliation, and report generation. Leveraged the capabilities of both Power Automate Desktop for local process automation and Power Automate Cloud flows for cloud-based tasks. This automation reduced errors, saved time, and improved the accuracy of financial data handling."
            ],
            logo: hcl,
            website: "https://hcltech.com"
        },
        {
            company: "MAQ Software",
            position: "Software Engineer 1",
            duration: "2021 - 2022",
            description: [
                "Developed and maintained multiple web applications using React and Node.js",
                "A collaborative developer with experience working on CRM projects using JavaScript, JQuery, C#, and Power Automate (Cloud and Desktop) to build solutions and applications. Developed a portal using Power Pages with JQuery and JavaScript within Power Apps. Successfully implemented automated workflows using Power Automate, leading to a reduction in manual effort by 20 hours per week. Familiar with software methodologies and best practices, contributing to efficient project execution and process automation."
            ],
            logo: maq,
            website: "https://maqsoftware.com/"
        },
        {
            company: "MAQ Software",
            position: "Software Intern",
            duration: "2020 - 2021",
            description: [
                "Develop custom Power Apps solutions tailored to business requirements.",
                "Integrate Power Apps with various data sources and other Microsoft services",
                "Collaborate with stakeholders to gather requirements and refine application designs.",
                "Implement UI/UX best practices to ensure intuitive user interfaces.",
                "Provide technical support and troubleshooting for Power Apps applications."
            ],
            logo: maq,
            website: "https://maqsoftware.com/"
        },
        {
            company: "Being Zero",
            position: "Software Intern",
            duration: "2020 - 2020",
            description: [
                "Authored 75+ challenging coding problems on advanced topics such as Binary Trees, Graphs, Dynamic Programming, and Algorithms.",
                "Developed a MEAN stack application to scrape data from HackerEarth leaderboards and rate 100+ contestants from over 10 colleges using the ELO rating system.",
                "Built a platform that displays contestants' progress, performance, and statistics by scraping data from multiple competitive programming sites. This platform reduced the time colleges spent identifying top and weak performers, enabling them to make data-driven decisions and tailor training programs based on the platform’s insights."
            ],
            logo: beingzero,
            website: "https://www.beingzero.in/"
        }
    ]
    return (

        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h1>
                <div className="space-y-12">
                    {workExperiences.map((experience, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
                                <div className="flex-shrink-0 w-20 h-20 relative mr-6">
                                    <Image
                                        src={experience.logo.src}
                                        alt={`${experience.company} logo`}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-xl font-semibold text-gray-800">{experience.position}</h2>
                                    <p className="text-gray-600">{experience.company}</p>
                                    <p className="text-sm text-gray-500">{experience.duration}</p>
                                </div>
                                <Link
                                    href={experience.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                >
                                    Visit Website
                                    <ExternalLink className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                                {experience.description.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                            {index < workExperiences.length - 1 && (
                                <div
                                    className="absolute left-10 sm:left-14 top-full w-px h-12 bg-gray-300"
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}