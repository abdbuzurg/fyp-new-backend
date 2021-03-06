import { Request, Response } from 'express';
import { errorHandler } from '../utils/errorResponse';
import { ClientFeed } from '../entity/ClientFeed';

export const getCount = async(req: Request, res: Response) => {
  try {
    const result = await ClientFeed.query("SELECT COUNT(*) FROM client_feed");
    res.send({
      success: true,
      message: "Counting finished",
      data: result
    });
  } catch(err) {
    res.send(errorHandler(err));
  }
}

export const getAll = async(req: Request, res: Response) => {
  try {
    const take = 10;
    const pagination = +req.params!.pagination * take;
    const all = await ClientFeed.find({ 
        order: {id: "DESC"}, 
        skip: pagination, 
        take: take
      });
    res.send({
      success: true,
      data: all,
      message: "All the data is provided for Client"
    });
  } catch (error) {
    res.send(errorHandler(error));
  }
}
export const create = async(req: Request, res: Response) => {
  try {
    await ClientFeed.create({
      driverId: req.body.userId,
      destinationFrom: req.body.destinationFrom,
      destinationTo: req.body.destinationTo,
      pricing: +req.body.pricing,
      carModel: req.body.carModel,
      numberOfSeats: +req.body.numberOfSeats,
      departureDate: new Date(+req.body.departureDate) 
    }).save();

    res.send({
      success: true,
      message: "Post has been created",
    });
  } catch (error) {
    res.send(errorHandler(error));
  }
}
export const update = async(req: Request, res: Response) => {
  try {
    const clientFeed = await ClientFeed.findOne(req.params.id);
    if (!clientFeed){
      throw new Error("Post does not exist");
    }
    clientFeed.destinationFrom = req.body.destinationFrom,
    clientFeed.destinationTo = req.body.destinationTo,
    clientFeed.pricing = req.body.pricing,
    clientFeed.carModel = req.body.carModel,
    clientFeed.numberOfSeats = req.body.numberOfSeats,
    clientFeed.departureDate = new Date(+req.body.departureDate)

    clientFeed.save();

    res.send({
      success: true,
      message: "Post has been updated"
    });
  } catch(error) {
    res.send(errorHandler(error));
  }
}
export const deleteFeed = async(req: Request, res: Response) => {
  await ClientFeed.delete(req.params.id);
  res.send({
    success: true,
    message: "Post has been deleted"
  });
};

export const history = async(req: Request, res: Response) => {
  try{
    const feed = await ClientFeed.find({ where: {
      driverId: req.body.userId
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
    const specific = await ClientFeed.findOne(req.params.id);
    res.send({
      success: true,
      message: "Specific Post Has been found",
      data: specific
    });
  } catch(error) {
    res.send(errorHandler(error));
  }
}