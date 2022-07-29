import { Request, Response } from "express";
import * as todoService from '../../services/todos/todo.service';
import { HttpStatus } from "../../types/@types";

export const getAllTodos = async (_req: Request, res: Response): Promise<Response> => {
  const todos = await todoService.getAllTodos();

  return res.status(HttpStatus.OK).json({ todos });
}

export const getTodoById = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id

  try {
    const todo = await todoService.getTodoById(Number(id));

    return res.status(HttpStatus.OK).json({ todo });
  } catch (error: any) {

    return res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
  }
}

export const createTodo = async (req: Request, res: Response): Promise<Response> => {
  const todo = req.body

  try {
    const newTodo = await todoService.createTodo(todo);

    return res.status(HttpStatus.CREATED).json({ todo: newTodo });
  } catch (error: any) {

    return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
  }
}

export const updateTodo = async (req: Request, res: Response): Promise<Response> => {
  const todo = req.body
  const id = req.params.id

  try {
    const updatedTodo = await todoService.updateTodo({...todo, id: Number(id)});

    return res.status(HttpStatus.OK).json({ todo: updatedTodo });
  } catch (error: any) {

    return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
  }
}

export const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id

  try {
    await todoService.deleteTodo(Number(id));

    return res.status(HttpStatus.NO_CONTENT).json();
  } catch (error: any) {

    return res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
  }
}