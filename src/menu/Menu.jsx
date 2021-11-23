import React from "react";
import { useSelector } from "react-redux";
export default function Menu() {
  const menu = useSelector(state => state.counter.menu);
    return(
        <div className='header_menu'>
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="menu">
                <ul>{
                      menu.map((item,key)=>{
                          return(
                            <li key={key} >{item}</li>
                          )
                      })
                    }
                </ul>
            </div>
            <div className="signIn">
                <img src="/img/bell.png" alt="" />
                <img src="/img/search.png" alt="" />
                <img src="/img/1) Circle.png" alt="" />
            </div>
        </div>
    )
    
}