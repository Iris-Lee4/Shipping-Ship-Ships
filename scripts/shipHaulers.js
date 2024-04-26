import { getHaulingShips, getShippingShips } from "./database.js"

const haulers = getHaulingShips();

const shippingShips = getShippingShips();

let sortedHaulers = haulers.sort(function (a, b) {
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

        // Was a hauler list item clicked?
        if(itemClicked.dataset.type === 'hauler') {
            // Start a counter variable at 0
            let shipCount = 0;
             // Get the id of the hauler clicked
            let haulerId = itemClicked.dataset.id;
            // Iterate all of the shipping ships
            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (ship.haulerId === parseInt(haulerId)) {
                // Increase the counter by 1
                    shipCount ++;
                }
            }
            window.alert(`This hauler is carrying ${shipCount} shipping ships`)
        }
    }
)

export const haulersList = () => {

    let haulersHTML = "<ul class='list_haulers'>"

    for (const hauler of sortedHaulers) {
        haulersHTML += `<li data-type="hauler"
                        data-id="${hauler.id}"
                        >${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}