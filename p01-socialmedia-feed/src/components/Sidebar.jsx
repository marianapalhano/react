import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

import cover from '../assets/cover.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/marianapalhano.png" />
                <strong>Mariana Palhano</strong>
                <span>Dungeon Master</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}