import {React, useState, useEffect} from 'react';
import ProductList from './Components/ProductList';
import Settings from './Components/Settings';
import Narudzbe from './Components/Narudzbe';
import Graph from './Components/Reports';
import LoginPage from './App';
import Search from './Components/Search';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStickyNote, faChartLine, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

const MainMenu = () => {

    const [query,setQuery]= useState('');
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [redirect, setRedirect] = useState(false);

    const logout = async(e) => {
        await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        setRedirect(true);
    }

    useEffect(()=>{

        const fetchMyAPI = async(e) => {
            const response = await fetch('http://localhost:3000/api/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            {/*const content = await response.json();
            setName(content.name);*/}
        }

        const fetchMyProducts = async(e) => {
            const response = await fetch('http://localhost:3000/api/products', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            });
            {/*const content = await response.json();
            setItems(content)*/}
        }

        document.getElementById('dashLiviDio').style.backgroundColor = localStorage.hexcolor;

        const fetch = async() =>{
          if(query===''){
            const result = await axios(`https://jsonplaceholder.typicode.com/posts`)
            setItems(result.data)
          }else {
            const result = await axios(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
            setItems(result.data)
          }
        }
        fetchMyAPI()
        fetchMyProducts()
        fetch()
    },[query])

    if (redirect){
        return <Router><Route exact path="/" component={LoginPage}></Route><Redirect to="/"/></Router>
      }

    return (
        <Router>
        <Switch>
        <div>
        <div className="block absolute z-50 w-full h-80px bg-fifth">
            <div>
                <h1 className="pl-pola text-9x1 italic bold text-white pt-3.5 w-min pr-0 absolute font-bold">LOGO</h1>
            </div>
            <Search search={(q)=>setQuery(q)}/>
                <div className="mr-8">
                    <button className="focus:outline-none border-none text-white text-6x1 whitespace-nowrap float-right" onClick={logout}>
                        <p className="inline-block right-0 mr-2">Odjava</p>
                        <FontAwesomeIcon icon={faSignOutAlt} color="white" className="h-5 inline-block right-0 mt-7 mr-8p"/>
                    </button>
                </div>
        </div>
        <div id="dashLiviDio" className="float-left block bg-primary absolute h-auto mt-20 w-14% text-center">
            <Link to="/productList">
            <div>
                <FontAwesomeIcon icon={faShoppingCart} color="white" className="h-5 left-0 ml-10p mt-1 absolute"/>
                <p className="hover:text-red-500 ml-18p text-left duration-500 text-white bold text-6x1 mt-20">Lista proizvoda</p><br/>
            </div>
            </Link>
            <Link to="/narudzbe">
            <div>
                <FontAwesomeIcon icon={faStickyNote} color="white" className="h-5 left-0 ml-11p mt-1.5 absolute"/>
                <p className="hover:text-red-500 ml-18p text-left duration-500 text-white bold text-6x1">Narudžbe</p><br/>
            </div>
            </Link>
            <Link to="/dashboard">
            <div>
                <FontAwesomeIcon icon={faChartLine} color="white" className="h-5 left-0 ml-10p mt-1.5 absolute"/>
                <p className="hover:text-red-500 ml-18p text-left duration-500 text-white bold text-6x1">Izvještaji</p><br/>
            </div>
            </Link>
            <Link to="/settings">
            <div>
                <FontAwesomeIcon icon={faCog} color="white" className="h-5 left-0 ml-10p mt-1 absolute"/>
                <p className="hover:text-red-500 ml-18p text-left duration-500 text-white bold text-6x1 mb-36">Postavke</p><br/>
            </div>
            </Link>
            <p className="text-white hover:text-red-500 duration-700 text-3x1 mt-96 mb-5">Copyright Epic Code 2021</p>
        </div>
        <div className="float-right block absolute mt-20 ml-13p h-91.5% w-87%">
            <Route exact strict path="/dashboard">
                <Graph name={name}/>
            </Route>
            <Route exact strict path="/productList">
                <ProductList items={items}/>
            </Route>
            <Route exact path="/narudzbe" component={Narudzbe}/>
            <Route exact path="/settings" component={Settings}/>
        </div>
        </div>
        </Switch>
        </Router>
    )
}

export default MainMenu