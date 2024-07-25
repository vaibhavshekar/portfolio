import React from 'react';

const ArticlePage = ({ title, imageUrl, content }) => {
  return (
    <div className="page-container">
      <h1 className="article-title">"Mamba"</h1>
      <img src="/assets/images/profile-pic1.jpg" alt="mamba"className="article-image" />
      <div className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi fuga deleniti sit perspiciatis, libero aperiam debitis ratione magni enim atque quis voluptatum, exercitationem repellendus laborum cupiditate quasi, hic quaerat?</div>
    </div>
  );
};

export default ArticlePage;