import * as todoModels from '../../models/todos/todo.model';
import { Todo } from '../../types/@types';


export const getAllTodos = async (): Promise<Todo[]> => {
  return todoModels.getAllTodos();
};

export const getTodoById = async (id: number): Promise<Todo> => {
  const todo = await todoModels.getTodoById(id);

  if (!todo) throw new Error('Todo not found');

  return todo;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const todoExists = await todoModels.getTodoByText(todo.text);

  if (todoExists) throw new Error('Todo already exists');

  if (!todo.text) throw new Error('Todo text is required');

  return todoModels.createTodo(todo);
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const todoExists = await todoModels.getTodoById(todo.id);

  if (!todoExists) throw new Error('Todo not found');

  if (!todo.text) throw new Error('Todo text is required');

  return todoModels.updateTodo(todo);
};

export const deleteTodo = async (id: number): Promise<void> => {
  const todoExists = await todoModels.getTodoById(id);

  if (!todoExists) throw new Error('Todo not found');

  return todoModels.deleteTodo(id);
}