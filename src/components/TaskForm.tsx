import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { ITask } from '../interfaces/Task'

import styles from './TaskForm.module.css'

interface Props  {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
}

const TaskForm = ({btnText, taskList, setTaskList, task}: Props) => {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, difficulty}
        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)

        console.log(taskList)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'task') {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }

    useEffect(() => {
        if (task) {
          setId(task.id)
          setTitle(task.title)
          setDifficulty(task.difficulty)
        }
      }, [task])

    return (
        <form onSubmit={handleAddTask} className={styles.form}>
            <div>
                <label htmlFor="task">Tarefa</label>
                <input
                    type="text"
                    name="task"
                    placeholder="Adiconar tarefa"
                    onChange={handleChange}
                    value={title}
                />
            </div>
            <div>
                <label htmlFor="difficulty">Dificuldade</label>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={handleChange}
                    value={difficulty}
                />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm