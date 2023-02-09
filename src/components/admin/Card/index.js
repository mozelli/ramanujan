import { Link } from "react-router-dom";
import "./styles.css";

const Card = ({ title, text, link }) => {
  return (
    <div className="card">
        <div className="card-content">
          <span className="card-title">{ title }</span>
          <p>{ text }</p>
        </div>
        <div className="card-action">
          <Link to={link?.url}>{link?.label}</Link>
        </div>
      </div>
  )
}

export default Card;