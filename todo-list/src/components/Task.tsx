import styles from './Task.module.css';
import { Circle, Trash, CheckCircle } from 'phosphor-react';

interface TaskProps {
    id: number,
    description: string,
    completed: boolean
}

export function Task({ id, description, completed }: TaskProps) {
    return (
        <li className={styles.task}>
            <a>
                <Circle size={22} className={completed ? styles.hidden : styles.notChecked} />
                <CheckCircle size={22} className={completed ? styles.checked : styles.hidden} weight="fill" />
            </a>
            <span>{description}</span>
            <a><Trash size={20} /></a>
        </li>
    )
}