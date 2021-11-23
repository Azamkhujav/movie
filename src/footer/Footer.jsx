import React from "react";
import { useSelector } from "react-redux";
export default function Footer() {
const menu = useSelector(state => state.counter.menu);
    return(
        <div className="footer">
            <div className='footer_menu'>
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
                    <img src="/img/Vector.png" alt="" />
                    <img src="/img/Vector (1).png" alt="" />
                    <img src="/img/Vector (2).png" alt="" />
                </div>
            </div>
            <div className='contact'>
                <p>© 2020 Alladdin</p>
                <div className="our_contact">
                    <p>Пользовательское соглашение</p>
                    <p>FAQ</p>
                    <p>Контакты</p>
                </div>
                <div className="signIn">
                    <img src="/img/image 15.png" alt="" />
                    <img src="/img/image 16.png" alt="" />
                </div>
            </div>
        </div>

    )
    
}