import React from "react";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-300">
      <Header />
      <Navbar />
    </div>
  );
};

export default Home;
