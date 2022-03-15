import { useState } from 'react';
import { ITask } from './interfaces/Task';

import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import styles from './App.module.css'
import Modal from './components/Modal';

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const handleDeleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")

    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }  

  return (
    <div className={styles.bodyWrapper}>
      <Modal children={<TaskForm taskList={taskList} task={taskToUpdate} btnText="Editar tarefa" />} />
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
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
