import React from "react";
export default function Header({item}) {
    return(
        <div className='header'>
            <div className="header_button_top">
                <button>Новинка</button>
                <button >FULL HD</button>
            </div>
            <h1>{item.original_title}</h1>
            <div className="details">
                <p>{item.release_date}| 16 +</p>
                <h4> <img src="/img/download (1).png" alt="" /> 6.9</h4>
                <h4> <img src="/img/Frame 1736.png" alt="" /> 6.518</h4>
            </div>
            <div className="header_button">
                <button> <img src="/img/Group 10.png" alt="" /> Смотреть по подписке</button>
                <button> <img src="/img/Play.png" alt="" /> Добавить в избранное</button>
            </div>
            <div className='info'>
                <h3>They took the American dream for a ride</h3>
                <span><p>Год</p><h2>{item.release_date}</h2></span>
                <span><p>Страна</p><h2>{item.production_countries && item.production_countries.length ? item.production_countries[0].name : ''}</h2></span>
                <span><p>Жанр</p><h2>{item.tagline}</h2></span>
                <span><p>Режисёр</p><h2>{item.belongs_to_collection?.name}</h2></span>
                <span><p>В ролях</p><h2>Кристиан Бэйл,Мэтт Дэймон,Катрин Белф,Джон Бернтал</h2></span>
            </div>
        </div>
    )
}