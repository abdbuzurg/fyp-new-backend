import {Request, Response} from 'express';
import { ClientFeed } from '../entity/ClientFeed';
import { DriverFeed } from '../entity/DriverFeed';
import { errorHandler } from '../utils/errorResponse';

export const search = async(req: Request, res: Response) => {
  try {
    const initialLocation: String = req.body.initialLocation;
    const finalLocation: String = req.body.finalLocation;
    const isClientFeed: boolean = Boolean(req.body.isClientFeed);
    let both: ClientFeed[] | DriverFeed[];
    let basedOnInitialLocation: ClientFeed[] | DriverFeed[];
    let basedOnFinalLocation:  ClientFeed[] | DriverFeed[];
    let result;
    if (isClientFeed) {
      both = await ClientFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation }});
      basedOnInitialLocation = await ClientFeed.find({ where: { destinationFrom: initialLocation } });
      basedOnFinalLocation = await ClientFeed.find({ where: { destinationTo: finalLocation } });   
    } else {
      both = await DriverFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation }});
      basedOnInitialLocation = await DriverFeed.find({ where: { destinationFrom: initialLocation } });
      basedOnFinalLocation = await DriverFeed.find({ where: { destinationTo: finalLocation } });   
    }
    if (both.length > 0) result = [...both];
    else result = [...basedOnInitialLocation, ...basedOnFinalLocation];

    res.send({
      success: true,
      message: "Search completed",
      data: result,
    })
  } catch (error) {
    res.send(errorHandler(error));
  }
}