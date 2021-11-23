import React, {useEffect, useState } from "react";
import Header from "../componrnts/DetailInfo/Header";
import Description from "../componrnts/DetailInfo/Description";
import Recomendation from "../componrnts/slider/Recomendation";
import Compilations from "../componrnts/DetailInfo/Compilations";
import { Image } from "../componrnts/slider/style";
import {setrecomend} from '../store/counterslice'
import { useDispatch } from "react-redux";
export default function DetailInfo(props) {
    let dispatch = useDispatch();
    const [details, setDetails]=useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=c465eca79e548a88a3fa2242e70a32bf&language=en-US&page=1`)
        .then((res)=>res.json())
            .then((res)=>{
             setDetails(res)
        })
        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}/recommendations?api_key=c465eca79e548a88a3fa2242e70a32bf&language=en-US&page=1`)
        .then((res)=>res.json())
            .then((res)=>{
        dispatch(setrecomend(res.results))
        })
        window.scrollTo(0,0);

      },[props.match.params])
      
    return(
        <div>
            <Image img={'https://www.themoviedb.org/t/p/original'+ details.backdrop_path}>
                <Header item={details} />
            </Image>
                <Description item={details} />
                <Recomendation/>
                <Compilations/>
        </div>
        

    )
}