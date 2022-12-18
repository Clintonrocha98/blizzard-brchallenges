import { useState } from "react";
import styles from "./styles.module.scss";
import { MenuGames } from "../menuGames";
import { MenuEsports } from "../menuEsports";
import Arrow from "../../assets/SVG/arrow-svg";
function MenuClick({ style }) {
    const [arrowJogo, NewarrowJogo] = useState(false);
    const [arrowEsport, NewarrowEsport] = useState(false);
    const [menuGame, statusMenuGame] = useState(false);
    const [menuEsports, statusMenuEsports] = useState(false);

    function ClickMenuGames() {
        statusMenuGame(true);
    }
    
    function ClickMenuEsports() {
        statusMenuEsports(true);
    }

    return (
        <>
            <div className={styles.Menu} style={style}>
                <ul>
                    <li onClick={ClickMenuGames}>
                        Jogos <Arrow />
                    </li>
                    {menuGame && !menuEsports ? <MenuGames></MenuGames> : <></>}

                    <li onClick={ClickMenuEsports}>
                        Esports <Arrow />
                    </li>
                    {menuEsports && !menuGame ? (
                        <MenuEsports></MenuEsports>
                    ) : (
                        <></>
                    )}

                    <li>Loja</li>
                    <li>Notícias</li>
                    <li>Suporte</li>
                </ul>
            </div>
        </>
    );
}
function ButtonMenu() {
    const [btnMenu, AttBtn] = useState(false);
    function HandleClick() {
        AttBtn(!btnMenu);
    }
    return (
        <>
            <button onClick={HandleClick} className={styles.buttonMenu}>
                <div
                    className={`${styles.line} ${
                        btnMenu === true ? styles.line1 : ""
                    }`}
                ></div>
                <div
                    className={`${styles.line} ${
                        btnMenu === true ? styles.line2 : ""
                    }`}
                ></div>
                <div
                    className={`${styles.line} ${
                        btnMenu === true ? styles.line3 : ""
                    }`}
                ></div>
            </button>

            <MenuClick
                style={
                    btnMenu === true ? { display: `flex` } : { display: `none` }
                }
            ></MenuClick>
        </>
    );
}
export default ButtonMenu;
