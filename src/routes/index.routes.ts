import { Router } from "express";
import todoRouter from './todo.routes';

const appRoutes = Router();

appRoutes.use('/todos', todoRouter);

export default appRoutes;