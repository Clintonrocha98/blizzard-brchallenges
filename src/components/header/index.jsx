import styles from "./styles.module.scss";
import { useState } from "react";

export function Header() {
    let [Arrow, Newarrow] = useState();

    function Arrowclick() {
        if (Arrow === '') {
            Arrow = '';
        }
        Newarrow(Arrow);
    }
    return (
        <>
            <header className={styles.header}>
                <div>
                    <img src="" alt="" />
                </div>
                <ul>
                    <li onClick={Arrowclick}>
                        <a href="#">Jogos</a>
                        <img src={Arrow} alt="arrow" />
                    </li>
                    <li>
                        <a href="#">Esports</a>
                    </li>
                    <li>
                        <a href="#">Loja</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Suporte</a>
                    </li>
                </ul>
            </header>
        </>
    );
}
