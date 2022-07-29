import { Todo } from "../types/@types";

export let todos: Todo[] = [
  { id: 1, text: 'Learn TypeScript', description: 'Learn TypeScript and its features' },
  { id: 2, text: 'Learn React' },
  { id: 3, text: 'Learn GraphQL' },
  { id: 4, text: 'Learn Node.js' },
]


let todoId: number = 3

export const getTudoId = () => {
  todoId += 1
  return todoId
}