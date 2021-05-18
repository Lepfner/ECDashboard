import {React, useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const StandbyOrderList = () => {

  const [showComponent, setShowComponent] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMyStandbyOrderList = async(e) => {
      const response = await fetch('http://localhost:3000/api/standbyorderlist', {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      });
      const content = await response.json();
      setItems(content);
  }
  fetchMyStandbyOrderList()
  }, [])

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  }

    if (showComponent) {
      return (
        <div>
            <div className="fixed top-2/4 left-2/4 bg-white z-50 transform -translate-x-1/2 -translate-y-1/2 w-900 h-500 rounded-6x1 shadow-lg con2">
              <h1 className="text-10x1 pt-2 pl-8">Narudžba br. {items.orderId}</h1><br/>
              <Link to="/narudzbe"><button className="ml-100 focus:outline-none font-bold text-10x1 mt-1 mr-4 top-0 right-0 absolute" onClick={toggleComponent}>X</button></Link>
              {items.map(orderItem =>
                (
                  <p key={orderItem.id} className="mt-4 text-8x1"> - {orderItem.productId} - {orderItem.productName} - {orderItem.productQuantity}</p>
                ))}
              
            </div>
          </div>
      )
  } else {
      return null
  } 
}

export default StandbyOrderList;