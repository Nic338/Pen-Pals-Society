const applicationState = {
    letters:[],
    authors:[],
    recipients:[],
    completedLetters:[],
    topics:[]
}

const mainContainer = document.querySelector('#container')

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then((letterInfo) => {
        applicationState.letters = letterInfo
    })
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const sendLetter = (userLetterInfo) => {
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userLetterInfo)
    }
    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then((data) => {
        applicationState.authors = data
    })
}
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then(response => response.json())
    .then((data) => {
        applicationState.recipients = data
    })
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}
export const saveCompletion = (letterCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letterCompletion)
    }
    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then((data) => {
        applicationState.topics = data
    })
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}
