import express from 'express'
import cors from 'cors'
import env from 'dotenv'


env.config()

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cors())

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Mail and databases microservice started`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()