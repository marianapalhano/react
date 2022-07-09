import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/marianapalhano.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mariana Palhano</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-07-08 08:13:30">Há 1h</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>
                <footer>
                    <ThumbsUp /> Aplaudir <span>20</span>
                </footer>
            </div>
        </div>
    )
}