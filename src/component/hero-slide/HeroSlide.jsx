import React , {useState , useEffect} from 'react';

import tmdApi , {category , movieType} from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


const HeroSlide = () => {
    const [movieItems , setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
        const params = {page : 1};
        try {
            const response = await tmdApi.getMoviesList(movieType.popular , {params});
            setMovieItems(response.result.slice(0,4));
            console.log(response);
        } catch (error) {
            console.log("error");
        }
    }
    getMovies();
    },[]);

    return (
        <div>
            HeroSlide
        </div>
    );
};


export default HeroSlide;