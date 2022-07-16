import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export function Post({ author, content, publishedAt }: PostProps) {
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
    const [comments, setComments] = useState(['Post muito bacana, hein?'])
    const [newComment, setNewComment] = useState('')

    function newCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewComment(event.target.value)
    }

    function newCommentIsInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function createComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newComment.length == 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{ publishedAtRelativeToNow }</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type == 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type == 'link') {
                            return <p key={line.content}><a href={line.content}>{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={createComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={newCommentChange}
                    value={newComment} 
                    onInvalid={newCommentIsInvalid}
                    placeholder='Deixe um comentário'
                    required
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}