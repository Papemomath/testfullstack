import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieInfo.css";
const API_URL = import.meta.env.VITE_API_URL || ""

function MovieInfo() {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_URL}/movie/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!movie) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="movie-info">
            <h1>{movie.titre}</h1>
            <p><strong>Genre :</strong> {movie.genre}</p>
            <p><strong>Année :</strong> {movie.year}</p>
            <p><strong>Description :</strong> {movie.description}</p>
        </div>
    );
}

export default MovieInfo;
