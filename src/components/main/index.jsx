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
    function handleIcon(e, arr, id) {
        handleClick(id);
        const urlAtual = location.href.slice(0, -1) + arr.icon[0];

        if (id < 3) {
            if (e.target.src === urlAtual) {
                e.target.setAttribute("src", arr.icon[1]);
            } else {
                e.target.setAttribute("src", arr.icon[0]);
            }
        }
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
                                src={game.icon[1]}
                                key={game.id}
                                alt="icone do jogo"
                                onClick={(e) => handleIcon(e, game, game.id)}
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
