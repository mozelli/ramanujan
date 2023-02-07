import './styles.css';

const Post = ({ article }) => {
  if(article?.feature) {
    return (
      <div id='Post'>
        <article>
          <div className="row">
            <div className="col s12">
              <header>
                <h1 className='feature'>{article?.title}</h1>
              </header>
              <span className="authorName feature">Author Name</span>
            </div>
            <div className="col s12">
              <img className="responsive-img feature" src={article?.imgPath} alt={article?.title} />
            </div>
          </div>
        </article>
      </div>
    )
  }
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
              <img className="responsive-img" src={article?.imgPath} alt={article?.title} />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Post;