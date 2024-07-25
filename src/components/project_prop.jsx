import React from "react";

const ProjectContainer = ({ projectname, projecttags, projecturl, projectimage }) => {
    return (
        <div class="projects__item">
            <picture class="projects__picture">
                <source media="(min-width: 62.5em)" srcSet={`/assets/images/${projectimage}`} />
                <img class="projects__image" src={`/assets/images/${projectimage}`}
                    alt="screenshot of design portfolio website" width="343" height="253" />
            </picture>
            <h3 class="projects__name">{projectname}</h3>
            <p class="projects__tags">
                {projecttags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </p>
            <div class="projects__links">
                <a href={projecturl} class="underline">View Code</a>
            </div>
        </div>
    );
};

export default ProjectContainer;
