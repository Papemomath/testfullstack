package org.example.webservice1.repository;

import org.example.webservice1.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer>{
    public Movie findMovieById(int id);
    public Movie findMovieByTitre(String name);
    public List<Movie> findAllMovieByGenre(String genre);
}
