import { getRecipients } from "./dataAccess.js";



export const Recipients = () => {
    const recipients = getRecipients()

    let html = '<select id="recipients">'
    html += '<option value="0">Choose a Recipient</option>'

    const arrayOfRecipients = recipients.map((recipient) =>{
        return `<option value="${recipient.id}">${recipient.name}</option>`
    })

    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}