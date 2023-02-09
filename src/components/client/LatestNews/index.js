import { useEffect } from "react";
// import Post from "./Post";

import './styles.css';

const LatestNews = () => {
  // const [posts, setPosts] = useState([]);
  
  const fetchData = async () => {
    try {
      // const response = await fetch("http://localhost:8000/posts");
      // const json = await response.json();
      // json.map((post) => {
      //   if(post.feature) {
      //     console.log("feature")
      //   } else {
      //     // if()
      //   }
      // })
      // setPosts(json);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="section">
      {/* {
        posts.map((post) => {
          return (
            <Post article={post} key={post.id} />
          )
        })
      } */}
    </div>
  )
}

export default LatestNews;