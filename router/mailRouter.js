import Router from 'express'
import mailController from "../controllers/MailController.js";

const mailRouter = new Router()

mailRouter.post('/code', mailController.getOne)

export default mailRouter