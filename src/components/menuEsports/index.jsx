import { esportsData } from "../menuData/esportsData";
import torneio from "../../assets/icon-torneio.png";
import styles from "./styles.module.scss";

export function MenuEsports() {
    return (
        <>
            <div className={styles.menu}>
                <ul>
                    {esportsData.map((esports) => (
                        <li key={esports.id}>
                            <img
                                src={esports.url}
                                alt={"logo do capeonato" + esports.name}
                            />
                            <p>{esports.name}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.warrapButton}>
                    <div>
                        <button>
                            <img
                                src={torneio}
                                alt="icone de uma taça referente a um campeonato"
                            />
                            Torneios da comunidade
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
