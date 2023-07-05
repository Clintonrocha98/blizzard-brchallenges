import { useState } from "react";
import iconLogar from "../../assets/logar-icon.png";
import ModalLoginPag from "../modal";
import styles from "./styles.module.scss";

function ButtonsHeader({ className }) {
    const [modalActive, setModalon] = useState(false);

    return (
        <>
            <div className={`${styles.warrapButton} ${className}`}>
                <button
                    onClick={() => setModalon(true)}
                    className={styles.criarContaBtn}
                >
                    Crir conta
                </button>

                <button
                    className={styles.logarBtn}
                    onClick={() => setModalon(true)}
                >
                    <img
                        src={iconLogar}
                        alt="icone do botão para entrar na conta"
                    />
                    Logar
                </button>
                {modalActive && (
                    <ModalLoginPag
                        onClose={() => {
                            setModalon(false);
                        }}
                    ></ModalLoginPag>
                )}
            </div>
        </>
    );
}
export default ButtonsHeader;
