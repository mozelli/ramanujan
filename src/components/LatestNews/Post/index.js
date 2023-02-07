import './styles.css';

const Post = ({ article }) => {
  return (
    <div id="Post">
      <article>
        <div className="row">
          <div className="col s8">
            <span className="category">Category</span>
            <header>
              <h1>{article?.title}</h1>
            </header>
            <span className="authorName">Author Name</span>
            <span className="postDate">07 de fevereiro de 2023, 16:39.</span>
          </div>
          <div className="col s4">
            <div className="imgContainer">
              <img className="responsive-img" src="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406&q=80" alt="" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Post;