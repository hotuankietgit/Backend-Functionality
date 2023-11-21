import  express, {Request, Response} from "express";
import {router} from './src/routes';
import DB from './src/config/db.config';



const app = express();
const PORT = 8012;

DB();
app.use('/',router);
app.get('/mytest', (req: Request, res: Response) => {
    res.json({data:"A done"})
})

app.listen(PORT,():void => {
    console.log(`Server is running on ${PORT}`);
})