import { Request, Response } from 'express';
import { errorHandler } from '../utils/errorResponse';
import { DriverFeed } from '../entity/DriverFeed';

export const getAll = async(req: Request, res: Response) => {
  try {
    const take = 10;
    const pagination = +req.params!.pagination * take;
    const all = await DriverFeed.find({ 
        order: {id: "DESC"}, 
        skip: pagination, 
        take: take
      });
    res.send({
      success: true,
      data: all,
      message: "All the data is provided for Driver"
    });
  } catch (error) {
    res.send(errorHandler(error));
  }
}

export const create = async(req: Request, res: Response) => {
  await DriverFeed.create({
    clientId: req.body.userId,
    destinationFrom: req.body.destinationFrom,
    destinationTo: req.body.destinationTo,
    pricing: req.body.pricing,
    departureDate: new Date(+req.body.departureDate)
  }).save();

  res.send({
    success: true,
    message: "Post has been created"
  })
}

export const update = async(req: Request, res: Response) => {
  try {
    const driverFeed = await DriverFeed.findOne(req.params.id);
    if (!driverFeed){
      throw new Error("The post does not exist");
    }
    driverFeed.departureDate = new Date(+req.body.departureDate);
    driverFeed.pricing = req.body.pricing;
    driverFeed.destinationFrom = req.body.destinationFrom;
    driverFeed.destinationTo = req.body.destinationTo;

    driverFeed.save();

    res.send({
      success: true,
      message: "Post has been updated"
    });
  } catch(error) {
    res.send(errorHandler(error));
  }
}

export const deleteFeed = async(req: Request, res: Response) => {
  await DriverFeed.delete(req.params.id);
  res.send({
    success: true,
    message: "Post has been deleted"
  });
}

export const history = async(req: Request, res: Response) => {
  try{
    const feed = await DriverFeed.find({ where: {
      clientId: req.body.userId
    }});
    const currentDate = new Date().getTime();
    const pastAction = feed.filter((value) => currentDate - new Date(value.departureDate).getTime() > 0);
    const futureAction = feed.filter((value) => new Date(value.departureDate).getTime() - currentDate  > 0);
    const result = {pastAction: pastAction, futureAction: futureAction};
    res.send({
      success: true,
      message: "Fetching complete",
      data: result
    })
  } catch (err) {
    res.send(errorHandler(err));
  }
}

export const getSpecific = async(req: Request, res: Response) => {
  try {
    const specific = await DriverFeed.findOne(req.params.id);
    res.send({
      success: true,
      message: "Specific Post Has been found",
      data: specific
    });
  } catch(error) {
    res.send(errorHandler(error));
  }
}