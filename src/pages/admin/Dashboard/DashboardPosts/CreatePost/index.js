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
    if(!tags.includes(singleTag)) {
      const aux = [...tags, singleTag];
      setTags(aux);
      setSingleTag('');
    }
  } 

  function removeTag(name) {
    let newTagsArray = [];
    tags.filter(tag => {
      if(name !== tag)
        newTagsArray.push(tag);
    })
    setTags(newTagsArray);
  }

  function createPost(status) {
    axios.post('http://localhost:3333/posts/create', {
      title,
      category,
      tags,
      status,
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
        <div className="col l10">
          {/* Title */}
          <div className="col l12 input-field">
            <input 
              type="text" 
              defaultValue={ title } 
              onBlur={ (event) => setTitle(event.target.value) } 
              id="title" 
              className="validate" />
            <label htmlFor="title">Título</label>
          </div>
          {/* Editor */}
          <div className="col l12">
            <JoditEditor
              ref={editor}
              value={content}
              config={{placeholder: "Comece a escrever aqui...", readonly: false}}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </div>
          <div className="col l12 buttons">
            <button className="btn publish" onClick={() => createPost('published')}>Publicar!</button>
            <button className="btn example amber grey-text text-darken-3" onClick={() => createPost('sketch')}>Rascunho</button>
            <button className="btn cancel deep-orange darken-3" onClick={() => createPost()}>Cancelar</button>
          </div>
        </div>
        <div className="col l2">
          {/* Category */}
          <div className="col l12 input-field">
            <select 
              defaultValue={category}
              onChange={(event) => setCategory(event.target.value)}
              id="category">
                <option value="" disabled>Escolha...</option>
                <option value="Casa">Casa</option>
                <option value="Jardim">Jardim</option>
            </select>
            <label htmlFor="category">Categoria</label>
          </div>

          {/* Tags */}
          <div className="col l12 input-field">
            <input 
              type="text" 
              defaultValue={ singleTag }
              onBlur={ (event) => setSingleTag(event.target.value) }
              id="tags" 
              className="validate" 
            />
            <label htmlFor="tags">Tags</label>
          </div>
          
          <div className="col l12 input-field">
            <button className="btn" onClick={ addTag }>Adicionar tag</button>
          </div>
          
          <div className="col l12">
            {
              tags.map((tag, index) => {
                return (
                  <div className="chip" key={tag}>
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
      </div>
      <div className="row">
        
      </div>
    </div>

  )
}

export default CreatePost;