import { Router } from 'express'
import * as ClientFeedController from '../controllers/ClientFeedController';
import Auth from '../middlewares/Auth'

const clientFeedRouter = Router();

clientFeedRouter.get("/", Auth, ClientFeedController.getAll);
clientFeedRouter.post("/", Auth, ClientFeedController.create);
clientFeedRouter.put("/:id", Auth, ClientFeedController.update);
clientFeedRouter.delete("/:id", Auth, ClientFeedController.deleteFeed);
clientFeedRouter.get("/history", Auth, ClientFeedController.history)

export default clientFeedRouter;