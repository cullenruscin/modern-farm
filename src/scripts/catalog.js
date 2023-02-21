
//Takes the harvest array and converts each plant to an html object that will be injected into the page
export const catalog = (harvest) => {

    //Start with an empty string
    let html = ''

    //Add section for each harvested plant
    for (const plant of harvest) {
        html += `<section class="plant">${plant.type}</section>`
    }

    //Return the html (in main.js)
    return html
}