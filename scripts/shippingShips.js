import { getShippingShips, getHaulingShips } from "./database.js"

const shippingShips = getShippingShips()
const haulers = getHaulingShips();

let sortedShippingShips = shippingShips.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.location > b.location) {
        return 1;
    }
    return 0;
});

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if(itemClicked.dataset.type === 'shippingShip') {
            // Get the haulerId value of the shipping ship clicked
            let haulerId = itemClicked.dataset.haulerid;
            // Define a default object for the found hauler
            let haulingShip = "";
             // Iterate the array of hauler objects
            for (const hauler of haulers) {
            // Does the haulerId foreign key match the id of the current hauler?
                if(hauler.id === parseInt(haulerId)) {
                // Reassign the value of `haulingShip` to the current hauler
                haulingShip = hauler.name;
                // Show an alert to the user with this format...
                // Palais Royal is being hauled by Seawise Giant
                window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}`)
                }
            }
        }

    }
)

export const shippingShipsList = () => {
    let shippingShipsHTML = "<ul class='list_shipping'>"

    for (const shippingShip of sortedShippingShips) {
        shippingShipsHTML += `<li data-type="shippingShip"
                                data-id="${shippingShip.id}"
                                data-name="${shippingShip.name}"
                                data-haulerid="${shippingShip.haulerId}"
                                >${shippingShip.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}