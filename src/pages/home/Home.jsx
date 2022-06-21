import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;