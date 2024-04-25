import { getShippingShips } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul class='list_shipping'>"

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li>${shippingShip.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}