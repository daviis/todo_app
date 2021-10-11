import * as express from 'express';


export const todoRouter = express.Router();

todoRouter.get("/backend", async (req: express.Request, res: express.Response) =>{
    res.send({"express": "The express backend sent this message"});
});