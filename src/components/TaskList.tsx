import { ITask } from "../interfaces/Task"

import styles from './TaskList.module.css'

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
        {taskList.length > 0 
        ? (
            taskList.map((task) => (
                <div className={styles.cardTask} key={task.id}>
                    <div className={styles.content}>
                        <h4>{task.task}</h4>
                        <p><small>Dificuldade: {task.difficulty}</small></p>
                    </div>
                    <div className={styles.actions}>
                        <i className="bi bi-pencil"></i>
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