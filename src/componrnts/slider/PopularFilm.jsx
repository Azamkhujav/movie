import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import {productList, GetPopularFilms} from '../../store/counterslice'
export default function PopularFilm() {
  const popularfilms = useSelector(GetPopularFilms);
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log('ss');
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c465eca79e548a88a3fa2242e70a32bf&language=en-US&page=1')
            .then((res)=>res.json())
            .then((res)=>{
              dispatch(productList(res.results))
            })
    },[])

    return(
        <div className='slider' >
            <div className="title">
                <h1>Популярный на Alladdin<img src="/img/arrow-ios-right.png" alt="" /></h1>
            </div>
            {
               popularfilms.length ?
                    <OwlCarousel  className='owl-theme' smartSpeed={1000} items={6} loop margin={24} nav>
                    {
                        popularfilms.map((item,key)=>{
                            return(
                            <div key={key} className='item'><Link to={`/Detail/${item.id}`}>
                                <img src={'https://www.themoviedb.org/t/p/original'+item.backdrop_path} alt="" />
                                <h2>{item.title}</h2>
                                <p>Бесплатно</p>
                                </Link> 
                            </div>
                            )
                        })
                    }
                </OwlCarousel>: ''
            }

        </div>
    )
    
}