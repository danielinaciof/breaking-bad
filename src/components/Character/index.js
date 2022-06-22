import './styles.scss'
import { Link } from "react-router-dom";
export function Character({id, image, name}){
   
    return(
        <article className="card">
        <Link to={`character/${id}`}>
            <div className="card-image"
                style={{backgroundImage:`url(${image})`
            }}
                >
                     </div>
            <div className="card-character">{name}</div>
        </Link>
    </article>
    )
}