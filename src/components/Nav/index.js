import React, { useEffect, useState } from 'react';

import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props;
  return (
    <header className="flex-row px-1">
      <h1>
        <a href="/">Jeff Grauzer</a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">About me</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>
          {categories.map((category) => (
            <li 
              className={`mx-1 ${
              currentCategory.name === category.name && 'navActive'
              }`}
              key={category.name}
              >
              <span onClick={() => {
               setCurrentCategory(category)
              }}
              >
              {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
