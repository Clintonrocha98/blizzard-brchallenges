import styles from "./styles.module.scss";
import { useState } from "react";
import iconsDown from "../../assets/iconDown.png";
import iconsUp from "../../assets/iconUp.png";
import blizzard from "../../assets/logo-blizzard.png";
import iconLogar from "../../assets/logar-icon.png";
import { MenuGames } from "../menuGames";

export function Header({ className }) {
    const [menu, attMenu] = useState(false);
    const [arrowJogo, NewarrowJogo] = useState(false);
    const [arrowEsport, NewarrowEsport] = useState(false);

    function ArrowclickJogo() {
        attMenu(!menu);
        NewarrowJogo(!arrowJogo);
    }

    function ArrowclickEsport() {
        NewarrowEsport(!arrowEsport);
    }
    return (
        <>
            <header>
                <div className={`${className} ${styles.warrapHeader}`}>
                    <div className={styles.warrapImg}>
                        <img
                            className={styles.logoImg}
                            src={blizzard}
                            alt="icone da blizzard"
                        />
                        <ul>
                            <li onClick={ArrowclickJogo}>
                                Jogos
                                <img
                                    src={
                                        arrowJogo === true ? iconsUp : iconsDown
                                    }
                                    alt="arrow"
                                />
                            </li>
                            <li onClick={ArrowclickEsport}>
                                Esports
                                <img
                                    src={
                                        arrowEsport === true
                                            ? iconsUp
                                            : iconsDown
                                    }
                                    alt="arrow"
                                />
                            </li>
                            <li>Loja</li>
                            <li>Notícias</li>
                            <li>Suporte</li>
                        </ul>
                    </div>
                    <div className={styles.warrapButton}>
                        <button className={styles.criarContaBtn}>
                            Crir conta
                        </button>
                        <button className={styles.logarBtn}>
                            <img
                                src={iconLogar}
                                alt="icone do botão para entrar na conta"
                            />
                            Logar
                        </button>
                    </div>
                </div>
            </header>
            {menu === true ? <MenuGames></MenuGames> : <></>}
        </>
    );
}
