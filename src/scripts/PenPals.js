import { LetterForm } from "./LetterForm.js"
import { Letters } from "./Letters.js"



export const PenPals = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="letterForm">
    ${LetterForm()}
    </section>

    <section class="letters">
    <h2>Letters</h2>
    ${Letters()}
    </section>
    `
}