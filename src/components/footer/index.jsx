import styles from "./styles.module.scss";
import logoBattleNet from "../../assets/logo-battle-net.png";
import logo1 from "../../assets/footer-img/1.png";
import logo2 from "../../assets/footer-img/2.png";
import logo3 from "../../assets/footer-img/3.png";
import logo4 from "../../assets/footer-img/4.png";
import linuxIcon from "../../assets/linux.png";
import macIcon from "../../assets/mac.png";
import windowsIcon from "../../assets/windows.png";

export function Footer({ className }) {
    const win = navigator.userAgent.includes("Windows");
    const mac = navigator.userAgent.includes("Mac");
    const linux = navigator.userAgent.includes("Linux");
    let iconBtn = "";
    let textBtn = "";
    if (win) {
        iconBtn = windowsIcon;
        textBtn = "Baixar para Windows";
    }
    if (mac) {
        iconBtn = macIcon;
        textBtn = "Baixar para MacOS";
    }
    if (linux) {
        iconBtn = linuxIcon;
        textBtn = "Baixar para Linux";
    }

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.bg1}>
                    <div className={styles.bg2}>
                        <div className={styles.bg3}></div>
                    </div>
                </div>
                <div className={className}>
                    <div className={styles.warrapFooterContent}>
                        <img src={logoBattleNet} alt="logo da battle.net" />
                        <h2>Baixe agora o battle.net</h2>
                        <p>
                            <img src={logo1} alt="icone" /> Seus jogos em um só
                            lugar
                        </p>
                        <p>
                            <img src={logo2} alt="icone" />
                            Conecte-se aos seus amigos
                        </p>
                        <p>
                            <img src={logo3} alt="icone" /> Compre jogos e itens
                            digitais
                        </p>
                        <button>
                            <img
                                src={iconBtn}
                                alt="Icone do sistema operacional"
                            />
                            {textBtn}
                        </button>
                        <p>
                            <img src={logo4} alt="icone" /> Também disponível
                            como aplicativo móvel
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
