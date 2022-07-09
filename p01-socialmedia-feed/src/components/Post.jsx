import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/marianapalhano.png" />
                    <div className={styles.authorInfo}>
                        <strong>MarianaPalhano</strong>
                        <span>Dungeon Master</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:13h" dateTime="2022-07-08 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala, galera!</p>
                <p>Este é o primeiro post de teste em React com Vanilla JS. Estou subindo esse projeto no github.</p>
                <p>Quem quiser conferir vai em <a href="https://github.com/marianapalhano">github.com/marianapalhano</a></p>
                <p><a href="#">#newproject #react</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}