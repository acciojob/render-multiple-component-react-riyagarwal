import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1 data-ns-test="project-name"> A Social Service App </h1>
      <p data-ns-test="project-description">
        This app will provide a common ground for all the people in the world who wish to come together for any noble cause.
        Be it working to save the environment by planting trees in their area or organizing awareness programs together.
        It could also be to organize programs for the elderly who live alone in their house.
        The volunteers will also have option to come up with new ideas to serve the society.
        This will help them to:-
        <ul>
          <li>face the societal problems</li>
          <li>come up with new ideas</li>
        </ul>
      </p>
    </div>
  );
};

export default App;
