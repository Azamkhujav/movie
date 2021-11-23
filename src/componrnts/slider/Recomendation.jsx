import React, {useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {setrecomend,GetRecomend} from '../../store/counterslice'
export default function Recomendation() {

    let recomend = useSelector(GetRecomend)
    return(
        <div className='slider'>
            <div className="title">
                <h1>Популярный на Alladdin<img src="/img/arrow-ios-right.png" alt="" /></h1>
            </div>
        {
           recomend.length ?
           <OwlCarousel className='owl-theme' smartSpeed={1000} items={6} loop margin={24} nav>
                {
                   recomend.map((item,key)=>{
                       return(
                        <div key={key} className='item'> <Link  to={`/Detail/${item.id}`}>
                            <img src={'https://www.themoviedb.org/t/p/original'+ item.backdrop_path} alt="" />
                            <h2>{item.title}</h2>
                            <p>Покупка</p> 
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