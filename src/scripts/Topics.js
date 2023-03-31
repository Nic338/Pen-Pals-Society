import { getTopics } from "./dataAccess.js";



export const Topics = () => {
    const topics = getTopics()

    let html = '<ul id="topics">'
    const listOfTopics = topics.map(topic => {
        return `<li>
        <input type="radio" name="topic" value="${topic.id}" /> ${topic.name}
        </li>`
    })
    html += listOfTopics.join("")
    return html
}