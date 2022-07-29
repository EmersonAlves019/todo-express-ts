import { Router } from "express";
import * as todoController from '../controllers/todos/todo.controller';

const todoRouter = Router();

todoRouter.get('/', todoController.getAllTodos);

todoRouter.get('/:id', todoController.getTodoById);

todoRouter.post('/', todoController.createTodo);

todoRouter.put('/:id', todoController.updateTodo);

todoRouter.delete('/:id', todoController.deleteTodo);

export default todoRouter;