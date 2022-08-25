import MailService from "../service/MailService.js";

class MailController {
    async getOne(req, res) {
        try {
            const mailCode = await MailService.findCode(req.query.mailRecipient)
            res.json(mailCode)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new MailController