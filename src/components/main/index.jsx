import gameData from "../gameData";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Main({ className }) {
    const [gameContent, setGame] = useState(gameData[0]);

    function setContentMainSection(id) {
        if (id >= 3) return;

        if (id === 1) setDiablo(true);
        if (id === 2) setHearth(true);
        if (id === 3) setWow(true);

        setGame(gameData[id]);
    }
    function mouseEnterInGif(e) {
        e.target.setAttribute("src", gameContent.giff);
    }
    function mouseOutGif(e) {
        e.target.setAttribute("src", gameContent.static);
    }

    return (
        <>
            <div
                className={styles.banner}
                style={{ backgroundImage: `url(${gameContent.bg})` }}
            >
                <main className={className}>
                    <div className={styles.warrapMain}>
                        <aside className={styles.left}>
                            <input
                                name="game"
                                type="radio"
                                id="diablo"
                                defaultChecked
                            />
                            <label htmlFor="diablo">
                                <img
                                    src={gameData[0].icon}
                                    key={gameData[0].id}
                                    alt="icone do jogo"
                                    onClick={() =>
                                        setContentMainSection(gameData[0].id)
                                    }
                                />
                            </label>

                            <input name="game" type="radio" id="hearth" />
                            <label htmlFor="hearth">
                                <img
                                    src={gameData[1].icon}
                                    key={gameData[1].id}
                                    alt="icone do jogo"
                                    onClick={() =>
                                        setContentMainSection(gameData[1].id)
                                    }
                                />
                            </label>

                            <input name="game" type="radio" id="wow" />
                            <label htmlFor="wow">
                                <img
                                    src={gameData[2].icon}
                                    key={gameData[2].id}
                                    alt="icone do jogo"
                                    onClick={() =>
                                        setContentMainSection(gameData[2].id)
                                    }
                                />
                            </label>

                            <img
                                src={gameData[3].icon}
                                key={gameData[3].id}
                                alt="icone do jogo"
                            />
                            <img
                                src={gameData[4].icon}
                                key={gameData[4].id}
                                alt="icone do jogo"
                            />
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
                </main>
            </div>
        </>
    );
}
