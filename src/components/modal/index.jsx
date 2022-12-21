import logoBattleNet from "../../assets/footer-img/logo-battle-net.webp";
import styles from "./styles.module.scss";
import IconGoogle from "../../assets/SVG/google-icon-svg";
import AppleIcon from "../../assets/SVG/apple-icon-svg";
import FacebookIcon from "../../assets/SVG/facebook-icon-svg";
import ButtonExitModal from "../../assets/SVG/buttonExitModal-svg";

function ModalLoginPag({ onClose = () => {} }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.modal}>
                    <button onClick={onClose} className={styles.exitButton}>
                        <ButtonExitModal></ButtonExitModal>
                    </button>

                    <img src={logoBattleNet} alt="logo da battle.net" />
                    <input type="text" placeholder="E-mail ou telefone" />
                    <input type="text" placeholder="Senha" />
                    <button>Conectar-se</button>
                    <p>ou conecte-se com</p>
                    <div className={styles.warrapButton}>
                        <button>
                            <IconGoogle></IconGoogle>
                        </button>
                        <button>
                            <AppleIcon></AppleIcon>
                        </button>
                        <button>
                            <FacebookIcon></FacebookIcon>
                        </button>
                    </div>
                    <p>
                        <span>Crie uma conta</span> Battle.net de graça
                    </p>
                    <p>
                        <span>Não consegue logar?</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ModalLoginPag;
