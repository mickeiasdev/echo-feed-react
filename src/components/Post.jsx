import { useState } from "react";

// biblioteca de formatação de datas
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css"

// author: { avatarUrl: ""; name: ""; role: ""; }
// publishedAt: Date;
// content: "";

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([]);

    const [newComment, setNewComment] = useState("");

    const handleNewComment = (event) => {
        event.preventDefault();

        setNewComment(event.target.value);
    }

    const handleSubmitForm = (event) => {
        // previne o comportamento padrão do formulário
        event.preventDefault();

        // aqui você poderia pegar o valor do textarea e adicionar como um novo comentário
        setComments([...comments, newComment]);
        setNewComment("");
    }

    //formata a data de publicação
    //exemplo: 26 de julho às 20:38h
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr });

    // calcula o tempo desde a publicação
    //exemplo: há 1 dia, há 3 horas, há 2 meses
    const publishedTime = formatDistanceToNow(publishedAt, { locale: ptBr, addSuffix: true })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                {/* toISOString() converte a data para o formato ISO 8601 */}
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedTime} atrás
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === "paragraph") {
                        return <p key={index}>{line.content}</p>
                    } else if (line.type === "link") {
                        return (
                            <p key={index}>
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    } else if (line.type === "hashtag") {
                        // quando indentificamos que o tipo é "hashtag", renderizamos um conjunto de links em uma div
                        // com um estilo de flexbox para exibir as hashtags lado a lado
                        return (
                            <div style={{ display: "flex", gap: ".5rem" }} key={index}>
                                {line.content.map((hashtag, index) => (
                                    <p key={index}><a href="#">#{hashtag}</a></p>
                                ))}
                            </div>
                        )
                    } else {
                        console.warn(`Tipo de conteúdo desconhecido: ${line.type}`);
                        return null;
                    }
                })}
            </div>

            <form onSubmit={handleSubmitForm} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                    onChange={handleNewComment}
                    value={newComment}
                    required
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className="commentList">
                {comments.map((comment, index)=> {
                    return (
                        <Comment
                            key={index}
                            content={comment}
                        />
                    )
                })}
            </div>
        </article>
    )
}