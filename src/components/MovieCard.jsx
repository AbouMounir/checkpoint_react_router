import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
    const movie = { borderRadius : 15, width : "100%" }
    return (
        <div className="movieCard">
            <Link to={`/Home/:${props.film.title}`}>
                <img style={movie} src={props.film.rating} alt="" />
            </Link>
            <div className="box-description">
                <img className="logo" src={props.film.logoURL} alt="" />
                <div className="description">
                    <h4>{props.film.title}</h4>
                </div>               
            </div>
        </div>
    );
}

export default MovieCard;

