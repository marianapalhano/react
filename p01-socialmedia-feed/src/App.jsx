import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {

  return (
    <>
      <Header />
      <Post
        author="Mariana Palhano"
        content="Este é o primeiro post de teste em React com Vanilla JS."
      />
      <Post
        author="Luke Skywalker"
        content="E agora um posto fictício do Lukinho para variar."
      />
    </>
  )
}