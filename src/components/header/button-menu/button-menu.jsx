import { useState } from "react";
import styles from "./styles.module.scss";
function MenuClick({ style }) {
    return (
        <>
            <div className={styles.Menu} style={style}>
                <ul>
                    <li>aaaaaaaa</li>
                    <li>aaaaaaaa</li>
                    <li>aaaaaaa</li>
                    <li>aaaaa</li>
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
