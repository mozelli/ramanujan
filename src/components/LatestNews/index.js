import { useEffect, useState } from "react";


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
    <div className="section">
      <h5>Latest News</h5>
      {
        posts.map((post) => {
          return (
            <h1 key={post?.id}>{post?.title}</h1>
          )
        })
      }
    </div>
    
  )
}

export default LatestNews;