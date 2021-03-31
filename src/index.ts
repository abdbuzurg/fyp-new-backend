import 'reflect-metadata';
import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createConnection } from 'typeorm';

import allRoutesV1 from "./routes/routers";

( async() => {
  try {
    const app: Application = express();

    await createConnection();

    const port: Number =  3000;
    
    app.use(cors());

    app.use(express.json());

    app.use('/api/v1/', allRoutesV1)

    app.listen(port, () => console.log(`Server created at http://localhost:${port}`));
  } catch (err) {
    console.log(err);
  }
})();