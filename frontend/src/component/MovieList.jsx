import React, { useEffect, useState } from 'react';
import './MovieList.css';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || ""

function MovieList() {


    const [tabMovies, setTabMovie] = useState([])
    const [searchCritere, setSearchCritere] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleSearchCritere = () => {
        setSearchCritere(inputValue);
        setInputValue('');
    }


    useEffect(() => {
        axios.get(`${API_URL}/movie/all`)
        .then((res) => setTabMovie(res.data))
        .catch((error) => console.log(error))
    },[])

    const findmovieBy = tabMovies.filter((movie) => 
        movie.titre.toLowerCase().startsWith(searchCritere.toLowerCase()) ||
        movie.genre.toLowerCase().startsWith(searchCritere.toLowerCase()) || 
        movie.year.toString().startsWith(searchCritere.toLowerCase()) 
        )
    
    const navigate = useNavigate()
    const handleDetail = (id) => {
        navigate(`/view/${id}`)
    }

    return (
        <div className='container'>

            <div className="search-bar" style={{display:"flex",margin:"10px"}}>
                <input style={{marginRight:"10px"}} type="text" 
                    placeholder="Rechercher un film par tire, genre, année" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="form-control"
                />
                <button onClick={handleSearchCritere}>Search</button>

            </div>
            
            <table>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Années</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        findmovieBy.length > 0 ? 
                        findmovieBy.map((data,i) => (
                            <tr key={i} onClick={() => handleDetail(data.id)}>
                                <td>{data.id}</td>
                                <td>{data.titre}</td>
                                <td>{data.genre}</td>
                                <td>{data.year}</td>
                            </tr>
                        )) :
                        <tr>
                            <td colSpan={4}>Aucun résultat</td>
                        </tr> 
                    }
                </tbody>
                </table>
                    
        </div>
    );
}

export default MovieList;