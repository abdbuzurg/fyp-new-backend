import { Router } from 'express'
import * as SearchController from '../controllers/SearchController';
import Auth from '../middlewares/Auth'

const searchRouter = Router();

searchRouter.post("/", Auth, SearchController.search);

export default searchRouter;