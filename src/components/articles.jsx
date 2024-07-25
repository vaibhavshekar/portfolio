import React from "react";
import Articlecontainer from "./article_prop";

const Article = () => {
    const article = [
        {
            Articlename: "Mamba: Revolutionizing Sequence Modeling /n Beyond Transformers and RNNs",
            Articleimage: "article 1.png"
        }
    ];
    return (
        <div class="projects">
            <div class="wrapper projects__wrapper">
                <div class="projects__grid">
                    <h2 class="projects__headline header-xl">Article</h2>
                    <a href="#contact" class="projects__contact underline">Contact me</a>
                    {article.map((project, index) => (
                        <Articlecontainer
                            key={index}
                            articlename={project.Articlename}
                            articleimage={project.Articleimage} // Pass projectimage prop
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Article;