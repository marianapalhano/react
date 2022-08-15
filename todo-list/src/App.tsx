import { Header } from "./components/Header"
import { Task } from "./components/Task"

import './global.css';
import styles from './App.module.css';
import { Circle, PlusCircle, Trash, CheckCircle, ClipboardText } from 'phosphor-react';

interface TaskProps {
  id: number,
  description: string,
  completed: boolean
}

let tasks: TaskProps[] = [];

tasks = [
  {
    id: 1,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: 2,
    description: 'Asdfasd urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: 3,
    description: 'Qwert urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  }
]

function App() {

  return (
    <div>
      <Header />
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
                {tasks.map(task => {
                  if (tasks.length == 0) {
                    return (
                      <div className={styles.emptyList}>
                        <ClipboardText size={56} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        Crie tarefas e organize seus itens a fazer
                      </div>
                    )
                  } else {
                      return(
                        <Task
                          id={task.id}
                          description={task.description}
                          completed={task.completed}
                        />
                      )
                  }
                })}
                </ul>
            </main>
      </div>
      



    </div>
  )
}

export default App
