import { DockList } from "./docks.js";
import { shippingShipsList } from "./shippingShips.js";
import { haulersList } from "./shipHaulers.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
    <article class="details">
    <section class="detail_docks">
    <h2>Docks</h2>
    ${DockList()}
    </section>
    <section class="detail_haulers">
    <h2>Hauling Ships</h2>
    ${haulersList()}
    </section>
    <section class="detail_shippingShips">
    <h2>Shipping Ships</h2>
    ${shippingShipsList()}
    </section>
    </article>
`

mainContainer.innerHTML = applicationHTML;