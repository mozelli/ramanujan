import { useRef, useState } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

import "./styles.css";

function CreatePost() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [singleTag, setSingleTag] = useState('');

  function addTag() {
    const aux = [...tags, singleTag];
    setTags(aux);
    setSingleTag('');
  } 

  function removeTag(name) {
    const newTagsArray = tags.map(tag => {
      if(tag !== name)
        return tag;
      return false;
    })
    setTags(newTagsArray);
  }

  function createPost() {
    axios.post('http://localhost:3333/posts/create', {
      title,
      category,
      tags,
      content
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="section">
      <h5>Nova Postagem</h5>
      <div className="row">
        <div className="col l12 input-field">
          <input 
            type="text" 
            defaultValue={ title } 
            onBlur={ (event) => setTitle(event.target.value) } 
            id="title" 
            className="validate" />
          <label htmlFor="title">Título</label>
        </div>
      </div>
      <div className="row">
        <div className="col l12">
          <JoditEditor
            ref={editor}
            value={content}
            config={{placeholder: "Comece a escrever aqui...", readonly: false}}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          />
        </div>
        {content}
      </div>
      <div className="row">
        <div className="col l12 input-field">
          <input 
            type="text" 
            defaultValue={category}
            onBlur={(event) => setCategory(event.target.value)}
            id="category" 
            className="validate" />
          <label htmlFor="category">Categoria</label>
        </div>
      </div>
      <div className="row">
        <div className="col l12">
          {
            tags.map((tag, index) => {
              return (
                <div className="chip" key={index}>
                  { tag }
                  <i 
                    className="close material-icons" 
                    onClick={() => removeTag(tag)}>
                      close
                  </i>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="row">
        <div className="col l3 input-field">
          <input 
            type="text" 
            defaultValue={ singleTag }
            onBlur={ (event) => setSingleTag(event.target.value) }
            id="tags" 
            className="validate" 
          />
          <label htmlFor="tags">Tags</label>
        </div>
        <button className="btn" onClick={ addTag }>Adicionar tag</button>
      </div>
      <div className="row">
        <div className="col l12">
          <button className="btn" onClick={() => createPost()}>Publicar!</button>
        </div>
      </div>
    </div>

  )
}

export default CreatePost;