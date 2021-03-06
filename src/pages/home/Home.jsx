import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <Posts posts={posts} />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
