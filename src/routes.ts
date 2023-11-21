import  express, {Request, Response} from "express";


const router = express.Router()

router.get('/about', (req:Request, res: Response) => {
    res.json({
        message:"about page"
    })
})

export {
    router
}