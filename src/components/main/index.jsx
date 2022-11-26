import gameData from "../gameData";
import { useState } from "react";
export function Main({ className, children }) {
    const [gameContent, attGame] = useState(gameData[0]);
    function handleClick(id) {
        attGame(gameData[id]);
    }

    return (
        <>
            {children}
            <main className={className}>
                <aside>
                    {gameData.forEach((game) => (
                        <>
                            <button
                                onClick={() =>
                                    handleClick(gameData.indexOf(game))
                                }
                            >
                                <img src={game.iconoff} alt="icone do jogo" />
                                EU TO FICANDO MALUCO
                            </button>
                        </>
                    ))}
                </aside>
                <div>
                    <h1>{gameContent.title}</h1>
                    <p>{gameContent.description}</p>
                    <button>{gameContent.btntext}</button>
                </div>
                <div>
                    <img
                        src={gameContent.logo}
                        alt={gameContent.name + " logo"}
                    />
                </div>
            </main>
        </>
    );
}
