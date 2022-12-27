import gameData from "../gameData";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Main({ className }) {
    const [gameContent, setGame] = useState(gameData[0]);

    function setContentMainSection(id) {
        setGame(gameData[id]);
    }
    function mouseEnterInGif(e) {
        e.target.setAttribute("src", gameContent.giff);
    }
    function mouseOutGif(e) {
        e.target.setAttribute("src", gameContent.static);
    }
    function BackgroundGame({ bg }) {
        const background = [
            styles.bg1,
            styles.bg2,
            styles.bg3,
            styles.bg4,
            styles.bg5,
        ];
        return (
            <>
                <div
                    className={`${styles.banner} ${background[bg]}`}
                    loading="auto"
                ></div>
            </>
        );
    }

    return (
        <>
            <main>
                <BackgroundGame bg={gameContent.id}></BackgroundGame>
                <div className={` ${styles.backgroundBlizzard}`}></div>
                <div className={`${className} ${styles.warrapMain}`}>
                    <div className={styles.warrapMain}>
                        <aside className={styles.left}>
                            {gameData.map((game) => (
                                <div key={game.id}>
                                    <input
                                        name="game"
                                        type="radio"
                                        id={game.name}
                                        defaultChecked={
                                            game.id === 0 ? true : false
                                        }
                                    />
                                    <label htmlFor={game.name}>
                                        <img
                                            src={game.icon}
                                            alt={"icone do jogo " + game.name}
                                            onClick={() =>
                                                setContentMainSection(game.id)
                                            }
                                        />
                                    </label>
                                </div>
                            ))}
                        </aside>

                        <div className={styles.warrapTitle}>
                            <h1>{gameContent.title}</h1>
                            <p>{gameContent.description}</p>
                            <button>{gameContent.btntext}</button>
                        </div>
                        <aside className={styles.right}>
                            <div className={styles.logo}>
                                <img
                                    src={gameContent.logo}
                                    alt={gameContent.name + " logo"}
                                    key={gameContent.id}
                                />
                            </div>
                            <div className={styles.trailer}>
                                <p>assista o trailer</p>
                                <img
                                    onMouseEnter={mouseEnterInGif}
                                    onMouseLeave={mouseOutGif}
                                    src={gameContent.static}
                                    alt={gameContent.name + " trailer"}
                                />
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
