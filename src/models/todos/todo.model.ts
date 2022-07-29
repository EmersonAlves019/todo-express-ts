import { getTudoId, todos } from "../../database/todos"
import { Todo } from "../../types/@types"

export const getAllTodos = async (): Promise<Todo[]> => todos

export const getTodoById = async (id: number): Promise<Todo | undefined> => {
 return todos.find(todo => todo.id === id)
}

export const getTodoByText = async (text: string): Promise<Todo | undefined> => {
  return todos.find(todo => todo.text === text)
}

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const newTodo = { ...todo, id: getTudoId() }
  todos.push(newTodo)
  return newTodo
}

export const updateTodo = async (todo: Todo): Promise<Todo> => {

  // const newTodoList = todos.map(item => item.id === todo.id ? todo : item)

  const todoIndex = todos.findIndex(t => t.id === todo.id)

  todos[todoIndex] = todo

  return todo
}

export const deleteTodo = async (id: number): Promise<void> => {
  const todoIndex = todos.findIndex(t => t.id === id)

  todos.splice(todoIndex, 1)
}