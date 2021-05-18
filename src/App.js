import './App.css';
import './index.css';
import MainMenu from './Dashboard';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {React, useState} from 'react';

//https://www.youtube.com/watch?v=OUP-urBy1k4&list=PLlameCF3cMEtiOUjWPmrrFYyLHLHoYmEO&index=2

const App = () => {
  
  const [nameTerm, setNameTerm] = useState('');
  const [passTerm, setPassTerm] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        nameTerm,
        passTerm
      })
    });
    setRedirect (true);
  }

  if (redirect){
    return <Router><Route exact path="/dashboard" component={MainMenu}></Route><Redirect to="/dashboard"/></Router>
  }

    return (
        <div>
          <div className="background">
            <div className="fixed top-2/4 left-2/4 bg-white z-50 transform -translate-x-1/2 -translate-y-1/2 w-900 h-500 rounded-6x1 shadow-lg">
              <div className="float-left block w-leftCol h-full">
                <h1 className="text-11x1 font-bold mt-7 pl-20 mb-12">PRIJAVA</h1>
                <form onSubmit={submit}>
                <div className="border-r border-solid border-primary">
                  <label className="italic pl-20">Username</label><br/>
                  <input required type="text" className="pl-2.5 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 mb-5 mt-1 bg-fourth outline-none ml-20" onChange={e => {setNameTerm(e.target.value)}}/><br/>
                  <label className="italic pl-20">Password</label><br/>
                  <input required type="password" className="pl-2.5 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 mb-5 mt-1 bg-fourth outline-none ml-20" onChange={e => {setPassTerm(e.target.value)}}/><br/>
                </div>
                <button type="submit" className="ml-40p mt-2.5 bg-primary border-solid border focus:outline-none rounded-5x1 w-30 h-12  text-white">Prijava</button>
              </form>
            </div>
            <div className="float-right block w-rightCol h-full">
              <p className="text-base mt-56 ml-12 italic pr-6">Prijavite se u administracijski sustav pomoću korisničkog imena i lozinke.</p>
            </div>
          </div>
        </div>
        </div>        
    );
}
export default App;