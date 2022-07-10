import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marianapalhano.png',
      name: 'Mariana Palhano',
      role: 'Dungeon Master'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera!'},
      { type: 'paragraph', content: 'Estou procurando jogadores para uma nova campanha de D&D 5e. Irei iniciar a aventura a Maldição de Strahd em Agosto.' },
      { type: 'link', content: 'marianapalhano.com/portfolio' }
    ],
    publishedAt: new Date('2022-07-08 14:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Player'
    },
    content: [
      { type: 'paragraph', content: 'Ansioso pra próxima mesa de Storm Kings Thunder.'},
      { type: 'paragraph', content: 'A campanha está chegando ao final depois de mais de 3 anos de aventuras.' },
      { type: 'link', content: 'dnd.wizards.com/' }
    ],
    publishedAt: new Date('2022-07-10 15:30:00')
  }
];

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return(
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}