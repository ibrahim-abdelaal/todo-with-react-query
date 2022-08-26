import { FC } from 'react';
import { Todo } from '../../models/interfaces';
import { Button, InputField } from '../atoms';
import { TodoList } from '../organisms/TodoList';

export const HomeTemplate: FC<{ todos: Todo[], onAdd: Function, disableAddButton: boolean, onInputChange: Function, todoTitle: string, onDelete: Function, onCheck: Function }> = ({ todos, onAdd, disableAddButton, onInputChange, todoTitle, onDelete, onCheck }) => (
  <div className='h-full'>
    <div className='flex justify-between m-5 bg-slate-400 py-5 px-8 border border-transparent rounded-xl'>
      <InputField type='text' placeholder='Add Todo...' onChange={onInputChange} value={todoTitle}/>
      <Button disabled={disableAddButton} onClick={onAdd} name='Add' />
    </div>
    <TodoList todos={todos} onDelete={onDelete} onCheck={onCheck} />
  </div>
);