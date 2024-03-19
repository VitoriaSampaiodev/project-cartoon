import React, { useState } from "react";


//primeira forma (section) com os componentes
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

import * as S from "./MainStyle"

//segunda forma vamos usar o método map

import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninassuper.png"
import TomJerry from "./ImagensMain/tomejerry.png"




function Main() {

    const [galeria, setGaleria] = useState([
            Gumball, Meninas, TomJerry

    ])

    return (
        <S.MainStyle>

            <S.StyledSection>
                <img src={Scooby} alt="Scooby" />
                <img src={Ben10} alt="Ben10" />
                <img src={Looney} alt="Looney" />

            </S.StyledSection>

            <S.StyledSection2>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}

            </S.StyledSection2>
            


        </S.MainStyle>


    )
}

export default Main