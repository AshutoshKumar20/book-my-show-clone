import React, { useEffect, useState } from 'react';
import MovieLayoutHoc from '../layout/Movie.layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MoviePage = () => {
    const { id } = useParams();

    const [cast, setcast] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [recommendedMovies, setRecommendedMovies] = useState();

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setcast(getCast.data.results);
        };

        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.cast);
        };

        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.cast);
        };

        requestRecommendedMovies();
    }, [id]);

    return (
        <div>MoviePage</div>
    )
}

export default MovieLayoutHoc(MoviePage);