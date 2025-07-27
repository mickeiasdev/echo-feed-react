import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/mickeiasdev.png" hasBorder={false}/>
            
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
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                
                <footer>
                    <button className={styles.button}>
                        <ThumbsUp />Gostei <span>37</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}