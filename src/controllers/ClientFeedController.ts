import { Request, Response } from 'express';
import { errorHandler } from '../utils/errorResponse';
import { ClientFeed } from '../entity/ClientFeed';

export const getAll = async(req: Request, res: Response) => {
  try {
    const all = await ClientFeed.find();
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
      pricing: req.body.pricing,
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
}