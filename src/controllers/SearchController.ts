import {Request, Response} from 'express';
import { ClientFeed } from 'src/entity/ClientFeed';
import { DriverFeed } from 'src/entity/DriverFeed';
import { errorHandler } from 'src/utils/errorResponse';
import { Driver } from 'typeorm';

export const search = async(req: Request, res: Response) => {
  try {
    const initialLocation: String = req.body.initialLocation;
    const finalLocation: String = req.body.finalLocation;
    const isClientFeed: boolean = Boolean(req.body.isClientFeed);
    let result;
    if (isClientFeed) {
      const both = await ClientFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation }});
      const basedOnInitialLocation = await ClientFeed.find({ where: { destinationFrom: initialLocation } });
      const basedOnFinalLocation = await ClientFeed.find({ where: { destinationTo: finalLocation } });   
      result = { ...both, ...basedOnInitialLocation, ...basedOnFinalLocation};
    } else {
      const both = await DriverFeed.find({ where: { destinationFrom: initialLocation, destinationTo: finalLocation }});
      const basedOnInitialLocation = await DriverFeed.find({ where: { destinationFrom: initialLocation } });
      const basedOnFinalLocation = await DriverFeed.find({ where: { destinationTo: finalLocation } });   
      result = { ...both, ...basedOnInitialLocation, ...basedOnFinalLocation}
    }
    res.send({
      success: true,
      message: "Search completed",
      data: result,
    })
  } catch (error) {
    res.send(errorHandler(error));
  }
}