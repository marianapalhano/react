import styles from './Sidebar.module.css';

import cover from '../assets/cover.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} />
            <div className={styles.profile}>
                <strong>Mariana Palhano</strong>
                <span>Dungeon Master</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}