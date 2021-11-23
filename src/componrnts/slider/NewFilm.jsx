import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import {newFilm,GetNewFilms} from '../../store/counterslice'
export default function NewFilm() {
  let newfilm = useSelector(GetNewFilms)
  let dispatch = useDispatch()

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c465eca79e548a88a3fa2242e70a32bf&language=en-US&page=1')
        .then((res)=>res.json())
            .then((res)=>{
            dispatch(newFilm(res.results))
        })
  },[])

    return(
        <div className='slider' >
            <div className="title">
                <h1>Новое кино<img src="/img/arrow-ios-right.png" alt="" /></h1>
            </div>
        {
            newfilm.length ?
           <OwlCarousel className='owl-theme' smartSpeed={1000} items={6} loop margin={24} nav>
                {
                  newfilm.map((item,key)=>{
                       return(
                        <div key={key} className='item'> <Link to={`/Detail/${item.id}`}>
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