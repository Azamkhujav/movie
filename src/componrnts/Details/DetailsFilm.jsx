import React from "react";
export default function DetailsFilm() {
    return(
        <div className='about'>
            <div className="image_of_film">
                <img src="/img/Rectangle 25.png" alt="" />
            </div>
            <div className="detail_of_film">
                <div className="types">
                    <p>Эксклюзивно</p>
                    <p>18+</p>
                    <h4>FULL HD</h4>
                </div>
                <div className='level'>
                    <span>
                        <img src="/img/🎨 Icon color.png" alt="" />
                        <img src="/img/🎨 Icon color.png" alt="" />
                        <img src="/img/🎨 Icon color.png" alt="" />
                        <img src="/img/🎨 Icon color.png" alt="" />
                        <img src="/img/🎨 Icon Color (1).png" alt="" />
                    </span>
                    <h3>6.7  КиноПоиск</h3>
                </div>
                <h1>Однашды в... Голливуде</h1>
                <h2>1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер
                 Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.</h2>
                 <div className="header_button">
                    <button> <img src="/img/Group 10.png" alt="" /> Смотреть по подписке</button>
                    <button> <img src="/img/Play.png" alt="" /> Добавить в избранное</button>
                </div>
            </div>
        </div>
    )
    
}