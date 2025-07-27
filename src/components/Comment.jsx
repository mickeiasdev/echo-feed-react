import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ id, content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((stateValue) => {
      return stateValue + 1;
    });
  };

  const handleDelete = () => {
    onDeleteComment(id);
  };

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/mickeiasdev.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mickeias Coelho</strong>

              <time
                title="25 de Julho às 20:06:00"
                dateTime="2025-07-25 20:06:00"
              >
                Publicado há 1h
              </time>
            </div>

            <button
              onClick={handleDelete}
              className={styles.deleteButton}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} className={styles.button}>
            <ThumbsUp />
            Apoiar <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
