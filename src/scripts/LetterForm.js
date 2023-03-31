import { sendLetter } from "./dataAccess.js";
import { Authors } from "./Authors.js";
import { Recipients } from "./Recipients.js";
import { Topics } from "./Topics.js";
export const LetterForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="authorChoice">Author</label>
    ${Authors()}
    </div>
    <div class="field">
        <label class="label" for="letterBody">Letter</label>
        <textarea id="letterBody" rows="15" cols="85"></textarea>
    </div>
    <div class="field">
    <label class="label" for="topicChoice">Topics</label>
    ${Topics()}
    </div>
    <div class="field">
    <label class="label" for="recipientChoice">Recipient</label>
    ${Recipients()}
    </div>
    <button class="button" id="submitLetter">Send Letter</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitLetter") {
        const authorChoice = document.querySelector(`select[id=authors]`).value
        const letterBody = document.querySelector(`textarea[id=letterBody]`).value
        const topicChoice = document.querySelector(`input[name=topic]`).value
        const recipientChoice = document.querySelector(`select[id=recipients]`).value
        

        const dataToSendToAPI = {
            authorId: parseInt(authorChoice),
            recipientId: parseInt(recipientChoice),
            topicId: parseInt(topicChoice),
            message: letterBody,
            date: (Date.now())

        }
        sendLetter(dataToSendToAPI)
    }
})