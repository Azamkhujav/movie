import React from "react";
import Header from "../componrnts/Header/Header";
import Continue from "../componrnts/Continue/Continue";
import NewFilm from "../componrnts/slider/NewFilm";
import DetailsFilm from "../componrnts/Details/DetailsFilm";
import PopularFilm from "../componrnts/slider/PopularFilm";
import NotOutFilms from "../componrnts/slider/NotOutFilms";
import { Image } from "../componrnts/slider/style";

export default function  Mainpage () {
    return(
        <div>
            <Image img="/img/Group.png" >
                <Header/>
                <Continue/>
            </Image>
                <NewFilm/>
                <DetailsFilm/>
                <PopularFilm/>
                <NotOutFilms/>
        </div>

    )
}