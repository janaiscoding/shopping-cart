import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("button works");
  };
  return (
    <>
      <h1>Here is my Homepage</h1>
      <p>An image of the shop maybe something something cool here</p>
      <button onClick={handleClick}>CLICK</button>
    </>
  );
};

export default Home;
