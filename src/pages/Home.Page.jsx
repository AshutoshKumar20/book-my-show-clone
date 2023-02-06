import React, { useEffect, useState } from "react";
import axios from "axios";
//Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

//Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=3c082f1e86484b53546ae4bbf0bd19bf"
            );
            setRecommendedMovies(getPopularMovies.data.results);
        };

        requestPopularMovies();
    }, [])

    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-xl font-bold text-gray-800 sm: ml-0 my-3">
                    The Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider
                    title="Recommended movies"
                    subtitle="List of Recommended Movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay" className="w-full h-full" />
                    </div>
                    <PosterSlider
                        title=" Premiers"
                        subtitle="Brand New Releases Every Friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8 ">
                <PosterSlider
                    title="Online Streaming Events"
                    subtitle=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>
    );
};

export default DefaultLayoutHoc(HomePage);