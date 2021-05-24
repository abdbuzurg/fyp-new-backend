import { Router } from 'express'
import * as ClientFeedController from '../controllers/ClientFeedController';
import Auth from '../middlewares/Auth'

const clientFeedRouter = Router();

clientFeedRouter.get("/pagination/:pagination", Auth, ClientFeedController.getAll);
clientFeedRouter.post("/", Auth, ClientFeedController.create);
clientFeedRouter.put("/:id", Auth, ClientFeedController.update);
clientFeedRouter.delete("/:id", Auth, ClientFeedController.deleteFeed);
clientFeedRouter.get("/history", Auth, ClientFeedController.history);
clientFeedRouter.get("/count", Auth, ClientFeedController.getCount);
clientFeedRouter.get("/:id", Auth, ClientFeedController.getSpecific);

export default clientFeedRouter;