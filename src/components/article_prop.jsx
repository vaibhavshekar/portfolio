// Articlecontainer.js
import React from "react";

const Articlecontainer = ({ articlename, articleimage, onArticleClick }) => {
    return (
        <div className="projects__item">
            <picture className="projects__picture">
                <source media="(min-width: 62.5em)" srcSet={`/assets/images/${articleimage}`} />
                <img className="projects__image" src={`/assets/images/${articleimage}`}
                    alt={articlename} width="343" height="253" />
            </picture>
            <h3 className="projects__name">{articlename}</h3>
            <div className="projects__links">
                <a href="#" className="underline" onClick={() => onArticleClick({ articlename, articleimage })}>Read Article</a>
            </div>
        </div>
    );
};

export default Articlecontainer;
