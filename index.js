import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import mailRouter from "./router/mailRouter.js";
import aliRouter from "./router/aliRouter.js";

env.config()

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cors())
app.use('/mail', mailRouter)
app.use('/ali', aliRouter)
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Mail and databases microservice started`, `Порт: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}


start()