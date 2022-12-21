import { useState } from "react";
import iconLogar from "../../assets/logar-icon.png";
import ModalLoginPag from "../modal";
import styles from "./styles.module.scss";

function ButtonsHeader({ className }) {
    const [modalActive, attModal] = useState(false);
    function handleClick() {
        attModal(true);
    }
    return (
        <>
            <div className={`${styles.warrapButton} ${className}`}>
                <button onClick={handleClick} className={styles.criarContaBtn}>
                    Crir conta
                </button>
                <ModalLoginPag
                    style={
                        modalActive ? { display: `flex` } : { display: `none` }
                    }
                ></ModalLoginPag>
                <button className={styles.logarBtn}>
                    <img
                        src={iconLogar}
                        alt="icone do botão para entrar na conta"
                    />
                    Logar
                </button>
            </div>
        </>
    );
}
export default ButtonsHeader;
