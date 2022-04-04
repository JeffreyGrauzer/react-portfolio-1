import React, { useState } from "react";

function Nav() {
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    const categories = [];
  return (
    <header>
      <h1>
        <a href="/">Jeff Grauzer</a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
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
              className="mx-1" 
              key={category.name}
            >
              <span onClick={() => categorySelected(category.name)} >
                  {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
