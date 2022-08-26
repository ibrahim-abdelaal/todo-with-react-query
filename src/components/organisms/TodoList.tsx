import { FC } from 'react';
import { Todo } from '../../models/interfaces';
import { TodoItem } from '../molecules/TodoItem';

export const TodoList: FC<{ todos: Todo[], onDelete: Function, onCheck: Function }> = ({ todos, onDelete, onCheck }) => (
  <div className='h-full border border-transparent rounded-xl mt-5 bg-slate-600 mb-48'>
    {todos && todos.map((todo: Todo) => (
      <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} />
    ))}
  </div>
);