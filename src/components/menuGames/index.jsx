import menuData from "../menuData";
import styles from "./styles.module.scss";

import Dots from "../../assets/SVG/pontinhos-menu-games-svg";
import DownloadIcon from "../../assets/SVG/download-icon-svg";
import ForumIcon from "../../assets/SVG/forum-icon-svg";
import BattleNetIcon from "../../assets/SVG/battle-net-icon-svg";

export function MenuGames() {
    return (
        <>
            <div className={styles.menu}>
                <ul>
                    {menuData.map((menu) => (
                        <li key={menu.id}>
                            <img
                                src={menu.url}
                                alt={"logo do jogo" + menu.name}
                            />
                            <p>{menu.name}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.warrapButton}>
                    <div>
                        <button>
                            <Dots />
                            Ver todos os jogos
                        </button>
                        <button>
                            <BattleNetIcon />
                            Aplicativo Battle.net
                        </button>
                        <button>
                            <DownloadIcon />
                            Downloads
                        </button>
                        <button>
                            <ForumIcon/>
                            Fóruns dos jogos
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
