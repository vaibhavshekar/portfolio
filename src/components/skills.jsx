import React from "react";

const Skills = () => {
    return (
        <div class="skills">
            <div class="wrapper skills__wrapper bottom-border">
                <h2 class="visually-hidden">Skills</h2>
                <div class="skills__item">
                    <h3 class="skills__title">HTML</h3>
                    <p class="skills__description">2 Years Experience</p>
                </div>
                <div class="skills__item">
                    <h3 class="skills__title">CSS</h3>
                    <p class="skills__description">2 Years Experience</p>
                </div>
                <div class="skills__item">
                    <h3 class="skills__title">JavaScript</h3>
                    <p class="skills__description">2 Years Experience</p>
                </div>
                <div class="skills__item">
                    <h3 class="skills__title">Visualisation</h3>
                    <p class="skills__description">1 Years Experience</p>
                </div>
                <div class="skills__item">
                    <h3 class="skills__title">Python</h3>
                    <p class="skills__description">4 Years Experience</p>
                </div>
                <div class="skills__item">
                    <h3 class="skills__title">Pandas</h3>
                    <p class="skills__description">4 Years Experience</p>
                </div>
            </div>
            <img class="skills__rings" src="/assets/images/pattern-rings.svg" alt="" width="530" height="129" />
        </div>
    );
};

export default Skills;
