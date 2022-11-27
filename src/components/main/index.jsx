import gameData from "../gameData";
import { useState } from "react";
import styles from "./styles.module.scss";
export function Main({ className, children }) {
    const [gameContent, attGame] = useState(gameData[0]);

    function handleClick(id) {
        if (id >= 3) {
            return;
        }

        attGame(gameData[id]);
    }
    function handleEnter(e) {
        e.target.setAttribute("src", gameContent.giff);
    }
    function handleOut(e) {
        e.target.setAttribute("src", gameContent.static);
    }
    return (
        <>
            {children}
            <div
                className={styles.banner}
                style={{ backgroundImage: `url(${gameContent.bg})` }}
            ></div>
            <main className={className}>
                <div className={styles.warrapMain}>
                    <aside className={styles.left}>
                        {gameData.map((game) => (
                            <img
                                src={game.iconoff}
                                key={game.id}
                                alt="icone do jogo"
                                onClick={() =>
                                    handleClick(gameData.indexOf(game))
                                }
                            />
                        ))}
                    </aside>
                    <div className={styles.warrapTitle}>
                        <h1>{gameContent.title}</h1>
                        <p>{gameContent.description}</p>
                        <button>{gameContent.btntext}</button>
                    </div>
                    <aside>
                        <div>
                            <img
                                src={gameContent.logo}
                                alt={gameContent.name + " logo"}
                                key={gameContent.id}
                            />
                        </div>
                        <div>
                            <p>assista o trailer</p>
                            <img
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleOut}
                                src={gameContent.static}
                                alt={gameContent.name + " trailer"}
                            />
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
