import { Router } from 'express'
import * as DriverFeedController from '../controllers/DriverFeedController';
import Auth from '../middlewares/Auth'

const driverFeedRouter = Router();

driverFeedRouter.get("/:pagination", Auth, DriverFeedController.getAll);
driverFeedRouter.post("/", Auth, DriverFeedController.create);
driverFeedRouter.put("/:id", Auth, DriverFeedController.update);
driverFeedRouter.delete("/:id", Auth, DriverFeedController.deleteFeed);
driverFeedRouter.get("/history/", Auth, DriverFeedController.history);

export default driverFeedRouter;