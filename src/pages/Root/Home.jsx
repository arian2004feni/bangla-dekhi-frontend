import React from "react";
import Hero from "../../Sections/Home/Hero";
import About from "../../Sections/Home/About";
import FeaturedPackages from "../../Sections/Home/FeaturedPackages";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <div className="bg-base-200">
        <FeaturedPackages />
      </div>
    </>
  );
};

export default Home;
