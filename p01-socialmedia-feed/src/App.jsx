import { Post } from './Post';

export function App() {

  return (
    <>
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