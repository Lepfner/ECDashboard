import React from 'react'
import SentOrders from './SentOrders';
import ProcessedOrders from './ProcessedOrders'
import StandbyOrders from './StandbyOrders'

function Narudzbe() {
    return (
        <div className="ml-20">
            <h1 className="text-9x1 pl-6 pt-2">Narudžbe na čekanju</h1>
            <StandbyOrders/>
            <h1 className="text-9x1 pl-6 pt-20">Narudžbe u obradi</h1>
            <ProcessedOrders/>
            <h1 className="text-9x1 pl-6 pt-20">Poslane narudžbe</h1>
            <SentOrders/>
        </div>
    )
}

export default Narudzbe
