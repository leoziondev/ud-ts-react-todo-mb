import Footer from "./components/Footer"
import Header from "./components/Header"

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.bodyWrapper}>
      <Header />
      <main>
        <h1>Content</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App
