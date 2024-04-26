import { getDocks, getHaulingShips } from "./database.js"

const docks = getDocks()
const haulers = getHaulingShips();

let sortedDocks = docks.sort(function (a, b) {
    if (a.location < b.location) {
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
        if(itemClicked.dataset.type === 'dock') {
            let dockId = parseInt(itemClicked.dataset.id);
            let haulingShip = "";
            let numHaulingShips = 0;
            for (const hauler of haulers) {
                if(hauler.dockId === dockId && numHaulingShips === 0) {
                numHaulingShips++;
                haulingShip += `${hauler.name}`;
                } else if (hauler.dockId === dockId && numHaulingShips !== 0) {
                    numHaulingShips++;
                    haulingShip += `, ${hauler.name}`;
                }
            }
            if(haulingShip !=="") {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShip}`)
            } else {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
            }
        }
    }
)

export const DockList = () => {

    let docksHTML = "<ul class='list_docks'>"

    for (const dock of sortedDocks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock"
                        data-id="${dock.id}"
                        data-location="${dock.location}"
                        >${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}