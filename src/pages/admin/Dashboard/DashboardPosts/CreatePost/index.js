import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from "../../../../../Firebase";
import { v4 as uuiidv4 } from "uuid";

import "./styles.css";

function CreatePost() {
  const editor = useRef(null);
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('sem categoria');
  const [tags, setTags] = useState([]);
  const [singleTag, setSingleTag] = useState('');
  const [statePublishButton, setStatePublishButton] = useState({label: "Publicar!", status: false});
  const [stateSketchButton, setStateSketchButton] = useState({label: "Rascunho", status: false});
  const [imgUrl, setImgUrl] = useState("");
  const [loadImageProgress, setLoadImageProgress] = useState(0);

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
      if(name !== tag) {
        newTagsArray.push(tag);
        return true;
      } else return false;
    })
    setTags(newTagsArray);
  }

  function uploadImage(event) {
    event.preventDefault();
    const file = event.target[0]?.files[0];

    if(!file)
      return;

    const splitName = file.name.split(".");
    const imgName = `${uuiidv4()}.${splitName[1]}`;
    const storageRef = ref(storage, `images/${imgName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setLoadImageProgress(progress);
      },
      error => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgUrl(url)
        })
      }
    )
  }

  function createPost(status) {
    if(status === "Publicado") {
      setStatePublishButton({label: "Enviando...", status: true});
    } else {
      setStateSketchButton({label: "Enviando...", status: true});
    }

    axios.post('http://localhost:3333/posts/create', {
      title,
      category: "no-category",
      tags,
      status,
      content,
      featuredImgURL: imgUrl
    })
    .then((response) => {
      if(response.status === 201) {
        if(status === "Publicado") {
          setStatePublishButton({label: status, status: false});
        } else {
          setStateSketchButton({label: "status", status: false});
        }
        console.log("Post created!");
        navigate("/dashboard/posts/list");
      }
    })
    .catch((error) => {
      console.log("Create post failed.");
      console.log(error);
    })
  }

  return (
    <div className="section display">
      <div className="title">
        <h5>Criar nova publicação</h5>
      </div>
      <div className="row workspace">
        <div className="col l10 editor">
          <div className="col l12 postTitle">
            <input 
              type="text" 
              defaultValue={ title } 
              onBlur={ (event) => setTitle(event.target.value) } 
              id="title" 
              className=""
              placeholder="Digite o título do post..." />
          </div>
          <div className="col l12 bodyBuilder">
            <JoditEditor
              ref={editor}
              value={content}
              config={{placeholder: "Comece a escrever aqui...", readonly: false}}
              tabIndex={1} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </div>
          <div className="col l12 imageUpload">
            <form onSubmit={uploadImage}>
              <div className="col l6">
                <div className="row uploadButton">
                  <div className="col l6">
                    <input 
                      type="file" 
                      id="featuredImage" 
                    />
                    <label htmlFor="featuredImage">Imagem destacada</label>
                  </div>
                  <div className="col l6">
                    <button type="submit" className="btn">Salvar</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col l12 imagePreview">
                    {!imgUrl && <progress value={loadImageProgress} max="100" />}
                    {imgUrl && <img src={imgUrl} className="responsive-img" />}
                  </div>
                </div>
                
              </div>
            </form>
            
          </div>
        </div>
        <div className="col l2 details">
          <div className="col l12 category">
            <label htmlFor="category">Categoria</label>
            <select 
              className="browser-default"
              onChange={(event) => setCategory(event.target.value)}
              >
                <option value="none" disabled>{ category }</option>
                <option value="Casa">Casa</option>
                <option value="Jardim">Jardim</option>
            </select>
          </div>
          <div className="col l12 tags">
            <div className="row inputTag">
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
            </div>
            <div className="row">
              <div className="col l12">
                <button className="btn" onClick={ addTag }>Adicionar tag</button>
              </div>
            </div>
            <div className="row">
              <div className="col l12">
                {
                  tags.map((tag, index) => {
                    return (
                      <div className="chip" key={tag}>
                        { tag }
                        <i className="close material-icons" onClick={() => removeTag(tag)}>
                          close
                        </i>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="coll12 actions">
            <div className="row">
              <div className="col l12">
                <button 
                  className="btn publish" 
                  onClick={() => createPost('Publicado')} 
                  disabled={statePublishButton.status}>
                    { statePublishButton.label }
                </button>
              </div>
              <div className="col l12">
                <button 
                  className="btn example amber grey-text text-darken-3" 
                  onClick={() => createPost('Rascunho')}
                  disabled={ stateSketchButton.status }
                  >
                    { stateSketchButton.label }
                </button>
              </div>
              <div className="col l12">
                <button 
                  className="btn cancel deep-orange darken-3" 
                  onClick={() => createPost()}>
                    Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default CreatePost;