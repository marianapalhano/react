import styles from './TaskList.module.css';
import { Circle, PlusCircle, Trash, CheckCircle } from 'phosphor-react';

export function TaskList() {
    return (
        <>
            <form className={styles.newTaskForm}>
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button>Criar<PlusCircle size={18} /></button>
            </form>
            <main>
                <header>
                    <strong>Tarefas Criadas</strong>
                    <strong>Concluídas</strong>
                </header>
                <ul>
                    <li><Circle size={18} />Preparar apresentacao<Trash size={18} /></li>
                    <li><Circle size={18} />Estudar ReactJS pela Rocketseat<Trash size={18} /></li>
                </ul>
            </main>
        </>
    )
}