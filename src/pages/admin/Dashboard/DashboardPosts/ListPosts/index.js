import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/posts/list")
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  function formatDate(date) {
    // const year = date.slice(0,4);
    // const month = date.slice(5,7);
    // const day = date.slice(8,10);
    // console.log(date);
    // return `${day}/${month}/${year}`;
    const isoDate = new Date(date);;
    const formatedDate = isoDate.toString();
    return formatedDate;
  }

  return (
    <div className="section" id='ListPosts'>
      <h5>Lista de Posts</h5>
      <div className="row">
        
          {
            posts.map((post) => {
              if(post.status !== "trash") {
                return (
                <div className="col l12" key={post._id}>
                  <article>
                    <div className='col l3'>
                      <h6>{ post.title }</h6>
                      <p className="status">{ post.state }</p>
                    </div>
                    <div className="col l2">
                      <p className="postAuthor center-align">{ post.author }</p>
                    </div>
                    <div className="col l2">
                      <p className="postCategory center-align">{ post.category }</p>
                    </div>
                    <div className="col l2">
                      <p className="postData center-align">{ formatDate(post.createdAt) }</p>
                    </div>
                    <div className="col l1 center-align">
                      <p>Editar</p>
                      <span className="material-icons center-align">edit_document</span>
                    </div>
                    <div className="col l1 center-align">
                      <p>Visualizar</p>
                      <span className="material-icons center-align">search</span>
                    </div>
                    <div className="col l1 center-align">
                      <p>Delete</p>
                      <span className="material-icons center-align">delete</span>
                    </div>
                    
                    {/* <p dangerouslySetInnerHTML={{__html: post.text}}></p> */}
                    <div className="divider"></div>
                  </article>
                </div>
                )
              } else {
                return "";
              }
            })
          }
      </div>
    </div>
  )
}

export default ListPosts;