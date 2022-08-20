import Router from 'express'
import mailController from "../controllers/MailController.js";

const mailRouter = new Router()

mailRouter.get('/mailCode', mailController.getOne)

export default mailRouter