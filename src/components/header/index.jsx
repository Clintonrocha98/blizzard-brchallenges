import styles from "./styles.module.scss";
import { useState } from "react";
import blizzard from "../../assets/logo-blizzard.webp";
import iconLogar from "../../assets/logar-icon.png";
import { MenuGames } from "../menuGames";
import { MenuEsports } from "../menuEsports";
import ButtonMenu from "./button-menu/button-menu";
import Arrow from "../../assets/SVG/arrow-svg";

export function Header({ className }) {
    const [menu, attMenu] = useState(false);
    const [esports, attEsports] = useState(false);

    const [arrowJogo, NewarrowJogo] = useState(false);
    const [arrowEsport, NewarrowEsport] = useState(false);

    function ArrowclickJogo() {
        if (esports) {
            attEsports(!esports);
            NewarrowEsport(!arrowEsport);
        }
        attMenu(!menu);

        NewarrowJogo(!arrowJogo);
    }

    function ArrowclickEsport() {
        if (menu) {
            attMenu(!menu);
            NewarrowJogo(!arrowJogo);
        }
        attEsports(!esports);
        NewarrowEsport(!arrowEsport);
    }
    return (
        <>
            <header>
                <div className={`${className} ${styles.warrapHeader}`}>
                    <div className={styles.warrapImg}>
                        <img
                            loading="lazy"
                            className={styles.logoImg}
                            src={blizzard}
                            alt="icone da blizzard"
                        />
                        <ul>
                            <li
                                onClick={ArrowclickJogo}
                                style={
                                    arrowJogo === true
                                        ? { color: "#00aeff" }
                                        : {}
                                }
                            >
                                Jogos
                                <Arrow
                                    className={
                                        arrowJogo === true ? styles.arrow : ""
                                    }
                                ></Arrow>
                            </li>
                            <li
                                onClick={ArrowclickEsport}
                                style={
                                    arrowEsport === true
                                        ? { color: "#00aeff" }
                                        : {}
                                }
                            >
                                Esports
                                <Arrow
                                    className={
                                        arrowEsport === true ? styles.arrow : ""
                                    }
                                ></Arrow>
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
                        <ButtonMenu></ButtonMenu>
                    
                </div>
            </header>
            {menu === true && esports === false ? (
                <MenuGames></MenuGames>
            ) : (
                <></>
            )}
            {esports === true && menu === false ? (
                <MenuEsports></MenuEsports>
            ) : (
                <></>
            )}
        </>
    );
}
