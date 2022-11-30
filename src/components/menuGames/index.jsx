import menuData from "../menuData";
import styles from "./styles.module.scss";

import pontinho from "../../assets/icons-menu/pontinhos-menu.png";
import battle from "../../assets/icons-menu/battle-net.png";
import iconDownload from "../../assets/icons-menu/icon-downloads.png";
import iconChat from "../../assets/icons-menu/iconchat.png";

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
                            <img
                                src={pontinho}
                                alt="icone ver todos os jogos"
                            />
                            Ver todos os jogos
                        </button>
                        <button>
                            <img src={battle} alt="icone battle net" />
                            Aplicativo Battle.net
                        </button>
                        <button>
                            <img
                                src={iconDownload}
                                alt="icone botão para download"
                            />
                            Downloads
                        </button>
                        <button>
                            <img src={iconChat} alt="icone do forun" />
                            Fóruns dos jogos
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
