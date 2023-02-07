import { useEffect, useState } from "react";
import Post from "./Post";

import './styles.css';

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await response.json();
      setPosts(json);
    } catch(error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="latestNews">
      <div className="section">
        <h5>Latest News</h5>
          {
            posts.map((post) => {
              return (
                <Post article={post} key={post.id} />
              )
            })
          }
      </div>
    </div>
  )
}

export default LatestNews;