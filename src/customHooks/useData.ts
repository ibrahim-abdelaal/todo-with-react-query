import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Todo } from './../models/interfaces';

const url = 'http://localhost:3500/todos';

const fetchTodos = async() => {
  const response = await axios.get(url);
  return response.data;
};

const addTodo = async(todo: Todo) => {
  return await axios.post(url, todo);
};

const deleteTodo = async(id: number) => {
  return await axios.delete(`${url}/${id}`);
};

const updateTodo = async (todo: Todo) => {
  return await axios.patch(`${url}/${todo.id}`, todo);
};

export const useGetTodos = (onSuccess: ((data: Todo[]) => void) | undefined, onError: ((error: Error) => void) | undefined) => {
  return useQuery('todos', fetchTodos, {  
    onSuccess,
    onError
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodo, {
    onSuccess: ({data}) => {
      queryClient.setQueriesData('todos', (prevTodos:any) => {
        return [...prevTodos, data];
      })
    }
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
};