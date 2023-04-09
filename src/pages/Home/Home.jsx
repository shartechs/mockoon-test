import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  console.log(useParams());

  return <div>Home</div>;
};

export default Home;
