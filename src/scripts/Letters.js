import { getAuthors, getRecipients, getLetters, saveCompletion, getTopics } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const Letters = () => {
    const letters = getLetters()
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()

    let convertLetterstoHTML = letters.map(letter => {

        const findRecip = recipients.find((recipient) => {
            return parseInt(letter.recipientId) === recipient.id
        })

        const findAuthor = authors.find((author) => {
            return parseInt(letter.authorId) === author.id
        })

        const findTopic = topics.find((topic) => {
            return parseInt(letter.topicId) === topic.id
        })

        // const topicName = getTopicName(letter.topicId);
        const authEmail = findAuthor.email;

        return `
        <div id="letter">
            Dear ${findRecip.name},
            <br>
            <br>
            ${letter.message}
            <br>
            <br>
            Sincerely,
            <div class="authorName">
                ${findAuthor.name}

                (${authEmail})
                </div>
                <br>
                <div id="topicName">
                ${findTopic.name}
                </div>
                </div>
        `
    })

    let html = convertLetterstoHTML.join("")
    return html
}