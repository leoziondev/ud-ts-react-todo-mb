import Footer from "./components/Footer"
import Header from "./components/Header"

import styles from './App.module.css'
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className={styles.bodyWrapper}>
      <Header />
      <main>
        <div>
          <h2>Adicionar nova tarefa</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Minhas tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
