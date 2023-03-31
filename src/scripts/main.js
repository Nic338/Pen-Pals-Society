import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics } from "./dataAccess.js";
import { PenPals } from "./PenPals.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
    .then(() => fetchRecipients())
    .then(() => fetchTopics())
    .then(() => fetchLetters())
    .then(() => {
        mainContainer.innerHTML = PenPals()
    })
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})