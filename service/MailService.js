import pop3 from "../utils/pop3.js";

class MailService {
    async findCode(mailRecipient) {
        let findCode
        const listMails = await this.getListMail()

        for (let q = listMails.length; q--; q !== listMails.length-15) {
            const possibleMail = await pop3.RETR(q+1)
            console.log(`Попытка получение письм ${q+1}`)
            if (possibleMail.includes(mailRecipient)) {
                findCode = possibleMail.match(/>[0-9]{4}</)
                findCode = findCode[0].substring(1,5)
                pop3.QUIT()
                break
            }
        }
        return findCode
    }

    async getListMail() {
        return await pop3.UIDL()
    }
}

export default new MailService