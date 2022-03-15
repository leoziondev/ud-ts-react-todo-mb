import { ITask } from "../interfaces/Task"

import styles from './TaskList.module.css'

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
    handleEdit(task: ITask): void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
        {taskList.length > 0 
        ? (
            taskList.map((task) => (
                <div className={styles.cardTask} key={task.id}>
                    <div className={styles.content}>
                        <h4>{task.title}</h4>
                        <p><small>Dificuldade: {task.difficulty}</small></p>
                    </div>
                    <div className={styles.actions}>
                        <i
                            className="bi bi-pencil"
                            onClick={() => handleEdit(task)}
                        ></i>
                        <i
                            className="bi bi-trash"
                            onClick={() => handleDelete(task.id)}
                        ></i>
                    </div>
                </div>
            ))
        ) : (
            <p className={styles.noTasks}>Não há tarefas cadastradas</p>
        )}
    </>
  )
}

export default TaskList