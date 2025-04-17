import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import logo2 from '../assets/logo2.jpg';
import './DetailMovie.css';
const API_URL = import.meta.env.VITE_API_URL || ""

function DetailMovie() {
    const {id} = useParams();
    const [tabMovie, setTabMovie] = useState([])
    
    useEffect(() => {
        axios.get(`${API_URL}/movie/id/${id}`)
        .then((res) => setTabMovie(res.data))
        .catch((error) => console.log(error))
    },[])
    
    return (
        <div className='container'>
            <div>
                <img src={logo2} alt="" />
            </div>
            <div className="info" style={{width:"100%"}}>
                <h3>Titre: {tabMovie.titre}</h3>
            </div>
            <div className="info">
                <p><strong>Genre: </strong>{tabMovie.genre}</p>
            </div>
            <div className="info">
                <p><strong>Année: </strong>{tabMovie.year}</p>
            </div>
            <div className="info">
                <strong>Description</strong>
                <p>{tabMovie.description}</p>
            </div>
        </div>
    );
}

export default DetailMovie;