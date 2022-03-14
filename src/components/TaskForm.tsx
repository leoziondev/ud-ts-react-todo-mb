import styles from './TaskForm.module.css'

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
        <div>
            <label htmlFor="task">Tarefa</label>
            <input type="text" name="task" placeholder="Adiconar tarefa" />
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade</label>
            <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm