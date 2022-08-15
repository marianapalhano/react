import './Task.module.css';
import { Circle, PlusCircle, Trash, CheckCircle } from 'phosphor-react';

interface TaskProps {
    id: number,
    description: string,
    completed: boolean
}

export function Task({ id, description, completed }: TaskProps) {
    return (
        <li>
            <a><Circle size={18} /></a>
            <span>{description}</span>
            <a><Trash size={18} /></a>
        </li>
    )
}