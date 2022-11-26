import gameData from "../gameData";
import { useState } from "react";
export function Main() {
    const [gameContent, attGame] = useState(gameData[0]);

    return (
        <>
            <main>
                <aside>
                    <button></button>
                </aside>
                <div>
                    <h1>{gameContent.title}</h1>
                    <p>{gameContent.description}</p>
                    <button>{gameContent.btntext}</button>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </main>
        </>
    );
}
