import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mariana Palhano"
            content="Este é o primeiro post de teste em React com Vanilla JS."
          />
          <Post
            author="Luke Skywalker"
            content="E agora um posto fictício do Lukinho para variar."
          />
        </main>
      </div>
    </>
  )
}