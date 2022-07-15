import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function deleteComment() {
        onDeleteComment(content)
    };

    function likeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marianapalhano.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mariana Palhano</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-07-08 08:13:30">Há 1h</time>
                        </div>
                        <button onClick={deleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={likeComment}>
                        <ThumbsUp />Aplaudir <span>{likeCount}</span>
                    </button>                     
                </footer>
            </div>
        </div>
    )
}