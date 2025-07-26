import styles from "./Header.module.css"
import EchoLogoPurple from "../assets/echo-logo-purple.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={EchoLogoPurple} alt="Logo Echo" />
        </header>
    )
}   