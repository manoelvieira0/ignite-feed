import { Header } from "./components/Header";
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/SideBar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Manoel Vieira"
            content="Novo post"
          />
          <Post
            author="Manoel Vieira"
            content="Novo post"
          />
        </main>
      </div>
    </div>
  )
}


