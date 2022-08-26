import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { HomeTemplate } from '../components/templates/HomeTemplate';
import { Todo } from '../models/interfaces';
import { useGetTodos, useAddTodo, useDeleteTodo, useUpdateTodo } from '../customHooks/useData';
  
const onSuccess = (data: Todo[]) => {
  console.log('fetching...', data);
};

const onError = (error: Error) => {
  console.log({ error });
};

export const HomePage: FC<{}> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { data, status, isLoading, isError, isPreviousData, refetch } = useGetTodos(onSuccess, onError);
  const { mutate: addTodo } = useAddTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  
  useEffect(() => { 
    if (status === 'success') {
      setTodos(data);
    }
  }, [status, data]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {title: inputValue, completed: false};
    addTodo(newTodo);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleChekTodo = (todo: Todo) => {
    const updatedTodo = {...todo, completed: !todo.completed};
    updateTodo(updatedTodo);
  };

  
  if (isLoading) {
    return <h1>Is Loading...</h1>
  };
  
  if (isError) {
    return <h1 className='text-red-600'>Error!</h1>
  };

  return (
    <div className='bg-slate-500 flex justify-center h-full p-5'>
      <HomeTemplate onAdd={handleAddTodo} todos={todos} todoTitle={inputValue} onInputChange={handleInputChange} disableAddButton={!inputValue} onDelete={handleDeleteTodo} onCheck={handleChekTodo} />
    </div>
  );
};