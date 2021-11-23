import React from "react";
export default function Description({item}) {
    return(
        <div className='description_of_film'>
            <div className="description">
                <h1>Описание</h1>
                <p>{item.overview}</p>
            </div>
            <div className="film_img">
                <img className='btn_img'  src={'https://www.themoviedb.org/t/p/original'+item.poster_path} alt="" />
                <button> <img  src="/img/Group 10.png" alt="" /> Смотреть по подписке</button>
            </div>
        </div>
    )
    
}