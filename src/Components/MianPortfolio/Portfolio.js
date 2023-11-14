import React, { useState } from 'react';
import pic1 from "../../images/pic01.jpg";
import pic2 from "../../images/pic02.jpg";
import pic3 from "../../images/pic03.jpg";
import pic4 from "../../images/pic04.jpg";
import pic5 from "../../images/pic05.jpg";
import pic6 from "../../images/pic06.jpg";
import pic7 from "../../images/pic07.jpg";
import pic8 from "../../images/pic08.jpg";
import pic9 from "../../images/pic09.jpg";
import pic10 from "../../images/pic10.jpg";
import pic11 from "../../images/pic11.jpg";
import pic12 from "../../images/pic12.jpg";
import pic13 from "../../images/pic13.jpg";
import pic14 from "../../images/pic14.jpg";
import pic15 from "../../images/pic15.jpg";
import pic16 from "../../images/pic16.jpg";

const imagesData = [
  { id: 1, category: 'Web Designs', imageUrl: pic1, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 2, category: 'Web Designs', imageUrl: pic2, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 3, category: 'Web Designs', imageUrl: pic3, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 4, category: 'Web Designs', imageUrl: pic4, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 5, category: 'UI/UX', imageUrl: pic5, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 6, category: 'UI/UX', imageUrl: pic6, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 7, category: 'UI/UX', imageUrl: pic7, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 8, category: 'UI/UX', imageUrl: pic8, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 9, category: 'UI/UX', imageUrl: pic9, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 10, category: 'Web Designs', imageUrl: pic10, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 11, category: 'Web Designs', imageUrl: pic11, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 12, category: 'Web Designs', imageUrl: pic12, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 13, category: 'Web Designs', imageUrl: pic13, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 14, category: 'Web Designs', imageUrl: pic14, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 15, category: 'Web Designs', imageUrl: pic15, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
  { id: 16, category: 'Web Designs', imageUrl: pic16, title: 'Project-title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
];

const Portfolio = () => {


  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="portfolio" id="portfolio">
      <div className="wrap">
        <h2 className="text-center port">Port<span className="span">Folio</span></h2>
        <div className="links text-center mb-4">
          <span
            className={`category-link ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </span>
          <span
            className={`category-link ${selectedCategory === "Web Designs" ? "active" : ""}`}
            onClick={() => handleCategoryClick("Web Designs")}
          >
            Web Designs
          </span>
          <span
            className={`category-link ${selectedCategory === "UI/UX" ? "active" : ""}`}
            onClick={() => handleCategoryClick("UI/UX")}
          >
            UI/UX
          </span>
        </div>
        <div className="inner">
          <div className="columns">
            {imagesData
              .filter(image => selectedCategory === "All" || image.category === selectedCategory)
              .map(image => (
                <div className={`image fit ${image.category.toLowerCase()}`} key={image.id}>
                  <a href="#">
                    <img src={image.imageUrl} alt="" />
                    <div className="overlay">
                      <h4 className="text-uppercase">{image.title}</h4>
                      <p>{image.description}</p>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Portfolio;
