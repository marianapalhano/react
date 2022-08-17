import { Header } from "./components/Header"
import { Task } from "./components/Task"

import './global.css';
import styles from './App.module.css';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { FormEvent, useState } from "react";

interface TaskProps {
  id: number,
  description: string,
  completed: boolean
}

// let tasks: TaskProps[] = [];

// tasks = [
//   {
//     id: 1,
//     description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//     completed: false
//   },
//   {
//     id: 2,
//     description: 'Asdfasd urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//     completed: false
//   },
//   {
//     id: 3,
//     description: 'Qwert urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//     completed: true
//   }
// ]

function App() {
  const [tasks, setTasks] = useState([] as TaskProps[]);
  const isTaskListEmpty = tasks.length == 0;

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, {id: 4, description: 'asdf', completed: false}]);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
            <form onSubmit={handleNewTask} className={styles.newTaskForm}>
                <input type="text" placeholder='Adicione uma nova tarefa' name="task" />
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
                {
                  tasks.map(task => {
                    return(
                      <Task
                        id={task.id}
                        description={task.description}
                        completed={task.completed}
                      />
                    )
                  })
                }
                </ul>
                <div className={isTaskListEmpty ? styles.emptyList : styles.notEmptyList}>
                  <ClipboardText size={56} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  Crie tarefas e organize seus itens a fazer
                </div>
            </main>
      </div>
      



    </div>
  )
}

export default App
