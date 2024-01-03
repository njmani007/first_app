import React from "react";
import "./Home.css";
import Carousel from "react-elastic-carousel";

const Home = () => {
  return (
    <div>
      <Carousel itemsToShow={1}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Carousel>
    </div>
  );
};

export default Home;
