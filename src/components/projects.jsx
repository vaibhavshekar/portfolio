import React from "react";
import ProjectContainer from "./project_prop";

const Projects = () => {
    const projects = [
        {
            projectname: "Captcha Crack",
            projecttags: ["Python", "Tesseract", "TensorFlow"],
            projecturl: "https://github.com/vaibhavshekar/Captcha-Crack",
            projectimage: "captcha-img.jpg"
        },
        {
            projectname: "Chat with CSV",
            projecttags: ["Python", "Langchain", "LLM", "Gen AI", "RAG"],
            projecturl: "https://github.com/vaibhavshekar/Python-Hangman-Game",
            projectimage: "chatbot.png"
        },
        {
            projectname: "Cafe Management System",
            projecttags: ["Python", "Tkinter", "SQL"],
            projecturl: "https://github.com/vaibhavshekar/Cafe-Management-Vaibhav-Shekar",
            projectimage: "cafe-management.jpg"
        },
        {
            projectname: "Hangman Game",
            projecttags: ["Python"],
            projecturl: "https://github.com/vaibhavshekar/Python-Hangman-Game",
            projectimage: "hangman.jpg"
        },
        {
            projectname: "TicketHub (ticketing website)",
            projecttags: ["HTML", "CSS", "JavaScript"],
            projecturl: "https://github.com/vaibhavshekar/UID-Project",
            projectimage: "tickethub.jpg"
        },
        {
            projectname: "Binary classifier",
            projecttags: ["Python", "TensorFlow", "OpenCV"],
            projecturl: "https://github.com/vaibhavshekar/DOG-CAT-Binary-classifier",
            projectimage: "binary-classify.png"
        },
        {
            projectname: "Portfolio",
            projecttags: ["HTML", "CSS", "JavaScript"],
            projecturl: "#", // Placeholder for the private link
            projectimage: "ppf.png"
        }
    ];
    return (
        <div class="projects">
            <div class="wrapper projects__wrapper">
                <div class="projects__grid">
                    <h2 class="projects__headline header-xl">Projects</h2>
                    <a href="#contact" class="projects__contact underline">Contact me</a>
                    {projects.map((project, index) => (
                        <ProjectContainer
                            key={index}
                            projectname={project.projectname}
                            projecttags={project.projecttags}
                            projecturl={project.projecturl}
                            projectimage={project.projectimage} // Pass projectimage prop
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;