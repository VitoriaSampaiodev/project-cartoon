//import React from "react";
import * as S from "./HeaderStyle"
import Logo from "../../assets/logo.png"
import Jogos from "../../assets/controle.png"
import Relogio from "../../assets/relogio.png"


function Header() {

    return (
        <S.StyleHeader>
            <img src={Logo} alt="Logo da Cartoon" />
            <S.StyleSection>

                <S.StyledDiv>
                    <img src={Jogos} alt="icone controle" />
                    <h2>JOGOS</h2>
                </S.StyledDiv>

                <S.StyledDiv>
                    <img src={Relogio} alt="Icone do Relogio" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.StyledDiv>

            </S.StyleSection>

        </S.StyleHeader>
    )


}

export default Header