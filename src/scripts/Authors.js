import { getAuthors } from "./dataAccess.js";

export const Authors = () => {
    const authors = getAuthors()
    // console.log(authors)

    let html = '<select id="authors">'
    html += '<option value="0">Choose an Author</option>'

    const arrayOfAuthors = authors.map((author) =>{
        return `<option value="${author.id}">${author.name}</option>`
    })

    html += arrayOfAuthors.join("")
    html += "</select>"
    return html
}