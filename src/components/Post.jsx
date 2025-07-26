import styles from "./Post.module.css"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Mickeias Coelho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="25 de Julho às 20:06:00" dateTime="2025-07-25 20:06:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Tem dias que tudo parece um filme indie em câmera lenta.</p>
                <p>O céu meio nublado, a playlist triste tocando no fundo e aquele sentimento de que tá tudo meio fora do lugar…</p>
                <p>Mas aí você vê alguém sorrindo na rua, ou escuta um "bom dia" sincero e as coisas se alinham por 5 segundos.</p>
                <p>Pequenas coisas ainda importam. Muito.</p>
                <p>🎶 Trilha do momento:</p>
                <p>
                    <a href="#">https://www.youtube.com/watch?v=8UVNT4wvIGY</a>
                </p>
                <p className={styles.hashtags}>
                    <a href="#">#DiasEstranhos</a>
                    <a href="#">#CoisasPequenas</a>
                    <a href="#">#MoodDaSemana</a>
                    <a href="#">#EstéticaMelancólica</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className="commentList">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}