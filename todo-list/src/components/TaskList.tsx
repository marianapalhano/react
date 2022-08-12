import styles from './TaskList.module.css';
import { Circle, PlusCircle, Trash, CheckCircle, ClipboardText } from 'phosphor-react';

export function TaskList() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.newTaskForm}>
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button>Criar<PlusCircle size={18} /></button>
            </form>
            <main>
                <header>
                    <div>
                        <strong>Tarefas Criadas</strong><span>5</span>
                    </div>
                    <div>
                        <strong className={styles.completedCounter}>Concluídas</strong><span>2 de 5</span>
                    </div>
                </header>
                <ul>
                    <li>
                        <a><Circle size={18} /></a>
                        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                        <a><Trash size={18} /></a>
                    </li>
                    <li>
                        <a><Circle size={18} /></a>
                        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                        <a><Trash size={18} /></a>
                    </li>
                </ul>

                <div className={styles.emptyList}>
                    <ClipboardText size={56} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </div>
            </main>
        </div>
    )
}