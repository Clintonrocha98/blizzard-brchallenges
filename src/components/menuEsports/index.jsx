import { esportsData } from "../menuData/esportsData";
import styles from "./styles.module.scss";
import Trophy from "../../assets/SVG/trofeu-svg";

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
                            <p>
                                <span>{esports.name}</span>
                            </p>
                        </li>
                    ))}
                </ul>
                <div className={styles.warrapButton}>
                    <div>
                        <button>
                            <Trophy />
                            Torneios da comunidade
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
