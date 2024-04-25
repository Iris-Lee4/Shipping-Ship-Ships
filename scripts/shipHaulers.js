import { getHaulingShips } from "./database.js"


export const haulersList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul class='list_haulers'>"

    for (const hauler of haulers) {
        haulersHTML += `<li>${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}