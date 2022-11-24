import styles from "./styles.module.scss";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <img src="" alt="" />
                </div>
                <ul>
                    <li>
                        <a href="#">
                            Jogos
                            <VscChevronDown />
                        </a>
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
