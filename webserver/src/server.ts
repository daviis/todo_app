import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import {todoRouter} from './middleware/router';

/**
 * Configured system variables
 */
dotenv.config();

if(!process.env.PORT){
    console.log("Unable to read configured port. Exiting!");
}

/**
 * Setup webserver object
 */
const app = express();
const port: number = parseInt(process.env.PORT as string, 10);

/**
 * Add middleware 
 *      Note - registration order matters
 */
//app.use(helmet());
//app.use(cors());
//app.use(express.json());
app.use("/", todoRouter);

/**
 * Open listener on the port
 */
app.listen(port, () => {
    console.log(`Now listening for requests on port ${port}.`);
})