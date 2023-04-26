import React from "react";
import { Link, useParams } from "react-router-dom";

function MoveDesc(props) {

    const id = useParams().id.substring(1);
    
    const movie = { borderRadius : 15 }
    return (
        <div className="movieCardDescription">
          <Link className="link_home" to="/"> Retour à l'accueil </Link>
          {props.data.filter((film) => film.title === id).map((film) => {
            return (
                    <div key={props.data.id} className="container">
                        <iframe style={movie} width="100%" height={300} src={film.postURL} title={film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="movie-description">
                            <h3> {film.title} </h3>
                            <p> {film.description} </p>               
                        </div>
                    </div>
        )})}     
        </div>
            
    );
}

export default MoveDesc ;

