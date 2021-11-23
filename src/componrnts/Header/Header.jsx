import React from "react";
import Transfer from "./Transfer";
export default function Header() {
    return(
        <div className='header'>
            <div className="header_button_top">
                <button>Новинка</button>
                <button >FULL HD</button>
            </div>
            <h1>Ford против Ferrari</h1>
            <div className="details">
                <p>2019 | 16 +</p>
                <h4> <img src="/img/download (1).png" alt="" /> 6.9</h4>
                <h4> <img src="/img/Frame 1736.png" alt="" /> 6.518</h4>
            </div>
            <div className="header_button">
                <button> <img src="/img/Group 10.png" alt="" /> Смотреть по подписке</button>
                <button> <img src="/img/Play.png" alt="" /> Добавить в избранное</button>
            </div>
            <Transfer/>
        </div>
    )
    
}