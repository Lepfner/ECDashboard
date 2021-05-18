import {React, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import OrderList from './SentOrdersList';

function SentOrders() {

    const [orders, setOrders] = useState([]);
    const [greenCheck, setGreenCheck] = useState(false);
    const [redCheck, setRedCheck] = useState(false);

    useEffect(() => {
        const fetchMyOrders = async(e) => {
            const response = await fetch('http://localhost:3000/api/sentorders', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            const content = await response.json();
            setOrders(content)
        }
        fetchMyOrders()
    }, [])

    const order1 = async(e) => {
        setGreenCheck(true);
        await fetch('http://localhost:3000/api/ordercheck', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            greenCheck,
        })
    });
    }

    const order2 = async(e) => {
        setRedCheck(true);
        await fetch('http://localhost:3000/api/orderdelete', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            redCheck,
        })
    });
    }

    return (
    <Router>
    <Switch>
    <div>
        <table className="ml-6 w-skoro text-left">
            <tbody>
            <tr className="border-b-4 border-black">
                <th className="w-1/12">Narudžba broj.</th>
                <th className="w-1/8">Naručitelj</th>
                <th className="w-1/8">Proizvodi</th>
                <th className="w-1/9">Ukupna cijena</th>
                <th className="w-1/8">Način plaćanja</th>
                <th className="w-1/9">Adresa</th>
                <th className="w-1/9">Datum Narudžbe</th>
                <th className="w-1/8">Kontakt informacije</th>
            </tr>
            {orders.map(orderItem => (
                <tr key={orderItem.id}>
                    <th className="w-1/8">{orderItem.orderId}</th>
                    <th className="w-1/8">{orderItem.person}</th>
                    <Link to="/sentorder"><th className="pt-5 w-1/8">Pogledaj proizvode</th></Link>
                    <th className="w-1/8">{orderItem.price} Kn</th>
                    <th className="w-1/8">{orderItem.payment}</th>
                    <th className="w-1/8">{orderItem.adress}</th>
                    <th className="w-1/8">{orderItem.dateOfOrder}</th>
                    <th className="w-1/8">
                    {orderItem.contactMail} <button className="border-none" onClick={order1}>
                    <FontAwesomeIcon color="green" size="2x" className="pt-2" icon={faCheckSquare}/>
                    </button>
                    <button className="border-none" onClick={order2}>
                    <FontAwesomeIcon icon={faMinusSquare} color="red" size="2x" className="pt-2"/>
                    </button>
                    <br/>
                    {orderItem.contactNumber}
                    </th>
                </tr>
            ))}
            
            </tbody>
        </table>
    <Route exact strict path="/sentorder">
        <OrderList/>
    </Route>
    </div>
    </Switch>
    </Router>
    )
}

export default SentOrders;
