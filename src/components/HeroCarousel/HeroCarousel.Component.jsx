import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
    const [images, setImages] = useState([
        {
            "adult": false,
            "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 505642,
            "original_language": "en",
            "original_title": "Black Panther: Wakanda Forever",
            "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
            "popularity": 3907.516,
            "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
            "release_date": "2022-11-09",
            "title": "Black Panther: Wakanda Forever",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 2159
        },
        {
            "adult": false,
            "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
            "genre_ids": [
                878,
                12,
                28
            ],
            "id": 76600,
            "original_language": "en",
            "original_title": "Avatar: The Way of Water",
            "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            "popularity": 1751.144,
            "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            "release_date": "2022-12-14",
            "title": "Avatar: The Way of Water",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 4933
        },
        {
            "adult": false,
            "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
            "genre_ids": [
                16,
                12,
                35,
                10751,
                14
            ],
            "id": 315162,
            "original_language": "en",
            "original_title": "Puss in Boots: The Last Wish",
            "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
            "popularity": 4239.37,
            "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
            "release_date": "2022-12-07",
            "title": "Puss in Boots: The Last Wish",
            "video": false,
            "vote_average": 8.6,
            "vote_count": 3130
        },
        {
            "adult": false,
            "backdrop_path": "/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
            "genre_ids": [
                878,
                27,
                35
            ],
            "id": 536554,
            "original_language": "en",
            "original_title": "M3GAN",
            "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
            "popularity": 3138.271,
            "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            "release_date": "2022-12-28",
            "title": "M3GAN",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1180
        },
        {
            "adult": false,
            "backdrop_path": "/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",
            "genre_ids": [
                10752,
                36,
                18
            ],
            "id": 653851,
            "original_language": "en",
            "original_title": "Devotion",
            "overview": "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
            "popularity": 1348.962,
            "poster_path": "/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",
            "release_date": "2022-11-23",
            "title": "Devotion",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 209
        },
    ]);

    const settingsLG = {
        arrows: true,
        slideToshow: 1,
        infinte: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",

    };

    const settings = {
        arrows: true,
        slideToshow: 1,
        infinte: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((images, index) => (
                        <div className="w-full h-56 md:h-80 py-3" key={index}>
                            <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>

                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((images, index) => (
                        <div className="w-full h-96 px-2 py-3" key={index}>
                            <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>

                    ))}
                </HeroSlider>
            </div>
        </>
    );

}

export default HeroCarousel;