import {React, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import UrediProizvod from './UrediProizvod';

const ProizvodBr = ({post}) => {

    const [productState, setProductState] = useState(false);

    useEffect(() => {
        document.getElementById('uredibtn').style.backgroundColor = localStorage.hexcolor;
        document.getElementById('uredibtn').style.borderColor = localStorage.hexcolor;
    })

    const deletebtn = async(e) => {
        setProductState(true);
        await fetch('http://localhost:3000/api/deleteproduct', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            productState,
        })
    });
    }
    
        return (
            <Router>
            <Switch>
                <div className="shadow-xl ml-14 border rounded-2x1 border-solid mt-5 w-5/6 h-44 bg-second">
                    <div className="float-left block w-1/3 h-full"></div>
                    <div key={post.id} className="float-right flex flex-col justify-between w-2/3 h-full">
                        <div>
                            <p className="text-6x1 mt-2">{post.title}</p>
                            <p className="text-4x1 mt-2">Cijena: {post.id}</p>
                        </div>
                        <div>
                            <button onClick={deletebtn} className="focus:outline-none text-4x1 text-white border-orange bg-orange border-solid border rounded-2x1 w-1/5 h-9 mb-2 mr-12">Izbriši</button>
                            <Link to="/urediproizvod"><button id="uredibtn" className="focus:outline-none text-4x1 text-white bg-primary border-primary border-solid border rounded-2x1 w-1/2 h-9">Uredi</button></Link>
                        </div>
                    </div>
                    <Route exact strict path="/urediproizvod">
                        <UrediProizvod key={post.id} post={post}/> 
                    </Route>
                </div>
            </Switch>
            </Router>
            )
        }
export default ProizvodBr
