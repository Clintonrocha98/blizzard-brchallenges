import iconLogar from "../../assets/logar-icon.png";
import styles from "./styles.module.scss";

function ButtonsHeader({className}) {
    return (
        <>
            <div className={`${styles.warrapButton} ${className}`}>
                <button className={styles.criarContaBtn}>Crir conta</button>
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
