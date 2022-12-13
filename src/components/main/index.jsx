import gameData from "../gameData";
import { useState } from "react";
import styles from "./styles.module.scss";

export function Main({ className }) {

    const [gameContent, attGame] = useState(gameData[0]);

    const [btn1, attBtn1] = useState(0);
    const [btn2, attBtn2] = useState(1);
    const [btn3, attBtn3] = useState(1);

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
    function handleIcon(e, id) {
        handleClick(id);

        if (
            e.target.src === location.href.slice(0, -1) + gameData[0].icon[1] &&
            e.target.src !== location.href.slice(0, -1) + gameData[1].icon[1] &&
            e.target.src !== location.href.slice(0, -1) + gameData[2].icon[1]
        ) {
            attBtn1(0);
            attBtn2(1);
            attBtn3(1);

            e.target.setAttribute("src", gameData[0].icon[0]);
        }
        if (
            e.target.src !== location.href.slice(0, -1) + gameData[0].icon[1] &&
            e.target.src === location.href.slice(0, -1) + gameData[1].icon[1] &&
            e.target.src !== location.href.slice(0, -1) + gameData[2].icon[1]
        ) {
            attBtn1(1);
            attBtn2(0);
            attBtn3(1);

            e.target.setAttribute("src", gameData[1].icon[0]);
        }
        if (
            e.target.src !== location.href.slice(0, -1) + gameData[0].icon[1] &&
            e.target.src !== location.href.slice(0, -1) + gameData[1].icon[1] &&
            e.target.src === location.href.slice(0, -1) + gameData[2].icon[1]
        ) {
            attBtn1(1);
            attBtn2(1);
            attBtn3(0);

            e.target.setAttribute("src", gameData[2].icon[0]);
        }
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
                            <img
                                loading="lazy"
                                src={gameData[0].icon[btn1]}
                                key={gameData[0].id}
                                alt="icone do jogo"
                                onClick={(e) => handleIcon(e, gameData[0].id)}
                            />
                            <img
                                loading="lazy"
                                src={gameData[1].icon[btn2]}
                                key={gameData[1].id}
                                alt="icone do jogo"
                                onClick={(e) => handleIcon(e, gameData[1].id)}
                            />
                            <img
                                loading="lazy"
                                src={gameData[2].icon[btn3]}
                                key={gameData[2].id}
                                alt="icone do jogo"
                                onClick={(e) => handleIcon(e, gameData[2].id)}
                            />
                            <img
                                loading="lazy"
                                src={gameData[3].icon[1]}
                                key={gameData[3].id}
                                alt="icone do jogo"
                            />
                            <img
                                loading="lazy"
                                src={gameData[4].icon[1]}
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
                                    loading="lazy"
                                    src={gameContent.logo}
                                    alt={gameContent.name + " logo"}
                                    key={gameContent.id}
                                />
                            </div>
                            <div className={styles.trailer}>
                                <p>assista o trailer</p>
                                <img
                                    loading="lazy"
                                    onMouseEnter={handleEnter}
                                    onMouseLeave={handleOut}
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
