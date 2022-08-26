import { FC } from 'react';
import { Todo } from '../../models/interfaces';
import { DeleteIcon, IconButton } from '../atoms';

export const TodoItem: FC<{ todo: Todo, onDelete: Function, onCheck: Function }> = ({ todo, onDelete, onCheck }) => (
  <div className='flex justify-between m-5'>
    <p onClick={() => onCheck(todo)} className={`text-l text-gray-50 ${todo.completed ? 'line-through text-gray-400' : ''}`}> { todo.title } </p>
    <IconButton children={<DeleteIcon />} onClick={() => onDelete(todo.id)} />
  </div>
);