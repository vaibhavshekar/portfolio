import React from "react";

const MainSec = () => {
    return (
        <div class="hero">
            <div class="wrapper hero__wrapper bottom-border">
                <div class="hero__content">
                    <picture>
                        <source media="(min-width: 62.5em)" srcSet="/assets/images/profile-pic1.jpg" />
                        <source media="(min-width: 37.5em)" srcSet="/assets/images/profile-pic1.jpg" />
                        <img class="hero__image" src="/assets/images/profile-pic1.jpg" alt="picture of Vaibhav" width="174" height="383" />
                    </picture>
                    <img class="hero__rings" src="/assets/images/pattern-rings.svg" alt="" width="530" height="129" />
                    <img class="hero__circle" src="/assets/images/pattern-circle.svg" alt="" width="129" height="129" />
                    <div class="hero__text">
                        <h1 class="hero__headline header-xl">
                            Hey there! <br />
                            <span style={{ fontSize: "90px" }}>Vaibhav Shekar</span> here
                        </h1>
                        <p class="hero__description">
                            Studying in the Amrita Vishwa Vidhyapeetham Coimbatore. I'm a developer passionate about
                            building innovative solutions. Currently, I'm exploring the frontiers of Deep Learning,
                            Neural Networks, and Image Processing.
                        </p>
                        <a href="#contact" class="hero__contact underline">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSec;
