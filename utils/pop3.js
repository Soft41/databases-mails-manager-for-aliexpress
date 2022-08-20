import Pop3Command from "node-pop3";
import env from 'dotenv'

env.config()

const pop3 = new Pop3Command({
    user: process.env.POP3_user,
    password: process.env.POP3_password,
    host: process.env.POP3_host,
    port: process.env.POP3_port,
    tls: true
})

export default pop3
