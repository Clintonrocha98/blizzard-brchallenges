import styles from "./styles.module.scss";

import img1 from "../../assets/icons-section-games/1.webp";
import img2 from "../../assets/icons-section-games/2.webp";
import img3 from "../../assets/icons-section-games/3.webp";
import img4 from "../../assets/icons-section-games/4.webp";
import img5 from "../../assets/icons-section-games/ver-jogos.webp";

import img7 from "../../assets/icons2.webp";

import { useEffect, useState } from "react";

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
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("https://api.brchallenges.com/api/blizzard/games")
            .then((response) => response.json())
            .then((data) => {
                setGames(data);
            });
    }, []);
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
                    <div className={styles.warrapGrid}>
                        {games.map((game, index) => (
                            <div key={index} className={styles.card}>
                                <img
                                    src={game.image}
                                    alt={`${"logo do jogo" + game.name}`}
                                    className={styles.poster}
                                />
                                <img
                                    loading="lazy"
                                    src={game.logo}
                                    alt={"logo do jogo" + game.name}
                                    className={styles.logo}
                                />
                                <div className={styles.description}>
                                    <p className={styles.fristP}>{game.name}</p>
                                    <p className={styles.secondP}>
                                        {game.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className={`${styles.card} ${styles.lastCard}`}>
                            <img src={img7} alt="logo blizzard" />
                            <span>
                                <svg
                                    width="11"
                                    height="10"
                                    viewBox="0 0 11 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.949951"
                                        y="0.137573"
                                        width="3.225"
                                        height="3.225"
                                        fill="#C4C4C4"
                                    />
                                    <rect
                                        x="0.949951"
                                        y="6.58759"
                                        width="3.225"
                                        height="3.225"
                                        fill="#C4C4C4"
                                    />
                                    <rect
                                        x="7.3999"
                                        y="0.137573"
                                        width="3.225"
                                        height="3.225"
                                        fill="#C4C4C4"
                                    />
                                    <rect
                                        x="7.3999"
                                        y="6.58759"
                                        width="3.225"
                                        height="3.225"
                                        fill="#C4C4C4"
                                    />
                                </svg>
                                Ver todos jogos
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
