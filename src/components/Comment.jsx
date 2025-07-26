import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/mickeiasdev.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mickeias Coelho</strong>
                            <time title="25 de Julho às 20:06:00" dateTime="2025-07-25 20:06:00">
                                Publicado há 1h
                            </time>
                        </div>
                        <button className={styles.deleteButton} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Isso. A gente não é máquina. Se levantar da cama já tá difícil, imagina performar sorrindo…</p>
                </div>
                <footer>
                    <button className={styles.button}>
                        <ThumbsUp size={20} />
                        Gostei <span>37</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}