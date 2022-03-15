import { useState } from 'react';
import { ITask } from './interfaces/Task'

import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import styles from './App.module.css'

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const handleDeleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  return (
    <div className={styles.bodyWrapper}>
      <Header />
      <main>
        <div>
          <h2>Adicionar nova tarefa</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Minhas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={handleDeleteTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
