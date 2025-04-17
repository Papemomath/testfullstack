import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './MovieAdd.css'

const API_URL = import.meta.env.VITE_API_URL || ""

function MovieAdd() {

    const [ movie, setMovie] = useState ({
        titre:"",
        genre: "",
        year:"",
        description:""
    });

    const navigate = useNavigate()

    const setAttribut = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    const submitNewClient = (e) => {
        e.preventDefault()
        console.log("Vous avez submit")
        axios.post(`${API_URL}/movie/add`, movie)
            .then(console.log(`le film ${movie.titre} à été ajouté`))
            .catch((error) => console.log(error))
    }

    return (
        <div className="containerAll">
            <div className="container mt-5">
            <div className="row justify-content-lg-start">
                <div className="col-md-6">
                    <h2 className="mb-4">Movie Information</h2>
                    <form className="form-detail" onSubmit={(e) => submitNewClient(e)} method="post">
                        <div className="mb-3 ">
                            <label htmlFor="lastname" className="form-label text-start d-block">Titre</label>
                            <input type="text" className="form-control" name="titre" id="titre"
                                   placeholder="Enter your title movie"
                                   required
                                   onChange={(e) => setAttribut(e)}
                                   value={movie.titre}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label text-start d-block">Genre</label>
                            <input type="text" className="form-control" name="genre" id="genre"
                                   placeholder="Enter the genre"
                                   required
                                   onChange={(e) => setAttribut(e)}
                                   value={movie.genre}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-start d-block">Year</label>
                            <input type="number" className="form-control" name="year" id="year"
                                   placeholder="Enter your year"
                                   onChange={(e) => setAttribut(e)}
                                   value={movie.year}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-start d-block">Description</label>
                            <input type="text" className="form-control" name="description" id="description"
                                   placeholder="Enter your description"
                                   onChange={(e) => setAttribut(e)}
                                   value={movie.description}/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width:"800px"}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MovieAdd;