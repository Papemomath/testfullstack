package org.example.webservice1.controllers;

import org.example.webservice1.models.Movie;
import org.example.webservice1.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/movie")
@CrossOrigin
public class MovieController {

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    private Repositories repositories;

    @GetMapping("/id")
    public Movie getMovieById(@RequestParam int id){
        return movieRepository.findMovieById(id);
    }

    @GetMapping("/all")
    public List<Movie> getMovieById(){
        return movieRepository.findAll();
    }

    @GetMapping("/films/")
    public Movie getFilmById(@PathVariable int id) {
        return movieRepository.findMovieById(id);
    }

    @GetMapping("/id/{id}")
    public Movie getMovieById2(@PathVariable int id){
        return movieRepository.findMovieById(id);
    }

    @DeleteMapping("id/{id}")
    public String deleteMovie(@PathVariable int id){
        if (!movieRepository.existsById(id)){
            return "Movie not found with the id " + id;
        }
        movieRepository.deleteById(id);
        return "Movie has been delete with succes";
    }

    @PostMapping("/add")
    public Movie createCustomer(@RequestBody Movie movie){
        movieRepository.save(movie);
        return movie;
    }


}
