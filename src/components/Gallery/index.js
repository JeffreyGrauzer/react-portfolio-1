import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/cover/climate-cuisine.png";

function Gallery(props) {
    const currentCategory = {
        name: "climate-cuisine",
        description: "App pairing entrees with weather conditions",
    };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Climate-Cuisine Screenshot"
          className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;
