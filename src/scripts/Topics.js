import { getTopics } from "./dataAccess.js";



export const Topics = () => {
    const topics = getTopics()

    let html = '<div id="topics">'
    const listOfTopics = topics.map(topic => {
        return `<div>
        <input type="radio" name="topic" value="${topic.id}" /> ${topic.name}
        </div>`
    })
    html += listOfTopics.join("")
    return html
}