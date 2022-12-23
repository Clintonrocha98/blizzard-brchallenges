import styles from "./styles.module.scss";
import { useState } from "react";
import blizzard from "../../assets/logo-blizzard.webp";
import { MenuGames } from "../menuGames";
import { MenuEsports } from "../menuEsports";
import ButtonMenu from "../button-menu/button-menu";
import Arrow from "../../assets/SVG/arrow-svg";
import ButtonsHeader from "../warrapButtonsHeader";

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
                                style={arrowJogo ? { color: "#00aeff" } : {}}
                            >
                                Jogos
                                <Arrow
                                    className={arrowJogo ? styles.arrow : ""}
                                ></Arrow>
                            </li>
                            <li
                                onClick={ArrowclickEsport}
                                style={arrowEsport ? { color: "#00aeff" } : {}}
                            >
                                Esports
                                <Arrow
                                    className={arrowEsport ? styles.arrow : ""}
                                ></Arrow>
                            </li>
                            <li>Loja</li>
                            <li>Notícias</li>
                            <li>Suporte</li>
                        </ul>
                    </div>
                    <div className={styles.buttonsHeader}>
                        <ButtonsHeader></ButtonsHeader>
                    </div>

                    <ButtonMenu></ButtonMenu>
                </div>
            </header>
            {menu && !esports ? <MenuGames></MenuGames> : null}
            {esports && !menu ? <MenuEsports></MenuEsports> : null}
        </>
    );
}
