import apiGames from "../api/api-blizzard-games";
import styles from "./styles.module.scss";

import img1 from "../../assets/icons-section-games/1.webp";
import img2 from "../../assets/icons-section-games/2.webp";
import img3 from "../../assets/icons-section-games/3.webp";
import img4 from "../../assets/icons-section-games/4.webp";
import img5 from "../../assets/icons-section-games/ver-jogos.webp";
import img6 from "../../assets/icons1.webp";
import img7 from "../../assets/icons2.webp";
const icons = [
    {
        id: 0,
        icon: img1,
    },
    {
        id: 1,
        icon: img2,
    },
    {
        id: 2,
        icon: img3,
    },
    {
        id: 3,
        icon: img4,
    },
];
export function SectionGames({ className }) {
    return (
        <>
            <section className={styles.sectionGame}>
                <div className={className}>
                    <div className={styles.headerSection}>
                        <h2>Jogos exclusivos</h2>
                        <div className={styles.warrapIcons}>
                            {icons.map((icon) => (
                                <img
                                    key={icon.id}
                                    src={icon.icon}
                                    alt="icone da plataforma"
                                />
                            ))}
                        </div>
                        <div>
                            <img src={img5} alt="ver todos os jogos" />
                        </div>
                    </div>
                    <div className={styles.warrapCard}>
                        {apiGames.map((game, index) => (
                            <div key={index} className={styles.card}>
                                <div
                                    className={styles.bg}
                                    style={{
                                        backgroundImage: `url(${game.image})`,
                                    }}
                                >
                                    <img
                                        loading="lazy"
                                        src={game.logo}
                                        alt={"logo do jogo" + game.name}
                                    />
                                </div>
                                <p className={styles.fristP}>{game.name}</p>
                                <p className={styles.secondP}>
                                    {game.category}
                                </p>
                            </div>
                        ))}
                        <div className={styles.lastCard}>
                            <img src={img7} alt="logo blizzard" />
                            <img src={img6} alt="logo ver todos os jogos" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
