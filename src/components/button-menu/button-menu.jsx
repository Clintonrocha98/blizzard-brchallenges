import { useState } from "react";
import styles from "./styles.module.scss";
import Arrow from "../../assets/SVG/arrow-svg";
import ButtonsHeader from "../warrapButtonsHeader";
function MenuClick({ style }) {
    return (
        <>
            <div className={styles.Menu} style={style}>
                <ButtonsHeader className={styles.loginButton}></ButtonsHeader>
                <ul>
                    <li>
                        Jogos <Arrow />
                    </li>

                    <li>
                        Esports <Arrow />
                    </li>

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
                    className={`${styles.line} ${btnMenu && styles.line1}`}
                ></div>
                <div
                    className={`${styles.line} ${btnMenu && styles.line2}`}
                ></div>
                <div
                    className={`${styles.line} ${btnMenu && styles.line3}`}
                ></div>
            </button>

            <MenuClick
                style={
                    btnMenu ? { display: `flex` } : { display: `none` }
                }
            ></MenuClick>
        </>
    );
}
export default ButtonMenu;
