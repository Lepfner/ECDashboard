import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function EditProduct({post}) {

  useEffect(() => {
    document.getElementById('updatebtn').style.borderColor = localStorage.hexcolor;
    document.getElementById('update2').style.borderColor = localStorage.hexcolor;
    document.getElementById('update3').style.borderColor = localStorage.hexcolor;
    document.getElementById('update4').style.borderColor = localStorage.hexcolor;
    document.getElementById('update5').style.borderColor = localStorage.hexcolor;
    document.getElementById('updatebtn').style.backgroundColor = localStorage.hexcolor;
  });

    const [showComponent, setShowComponent] = useState(true);
    const [nameTerm, setNameTerm] = useState('');
    const [descTerm, setDescTerm] = useState('');
    const [priceTerm, setPriceTerm] = useState('');
    const [catTerm, setCatTerm] = useState('');

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    }

    const updateProduct = async(e) => {
      await fetch('http://localhost:3000/api/updateProduct', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          nameTerm,
          descTerm,
          priceTerm,
          catTerm
          })
      });
    }

    if (showComponent){
      return (
          <div>
            <div className="bg-transparent backdrop-filter absolute z-50 backdrop-blur-lg h-full w-full"></div>
              <div className="fixed top-2/4 left-2/4 bg-white z-50 transform -translate-x-1/2 -translate-y-1/2 w-900 h-500 rounded-6x1 shadow-lg con2">
                <div className="float-left block w-leftCol h-full">
                  <h1 className="text-10x1 pt-2 pl-8">Uredi proizvod</h1><br/>
                  <label className="pl-10">Naziv:</label><br/>
                  <input id="update2" value={post.title} onChange={e => {setNameTerm(e.target.value)}} type="text" className="pl-2 ml-8 outline-none border w-5/6 h-9 rounded-3x1 border-primary border-solid mt-1 mb-8"/><br/>
                  <label className="pl-10">Opis:</label><br/>
                  <textarea id="update3" type="text" onChange={e => {setDescTerm(e.target.value)}} className="resize-none pt-2 pl-2 ml-8 outline-none border w-5/6 h-1/4 rounded-3x1 border-primary border-solid mt-1 mb-8"/><br/>
                  <button id="updatebtn" className="focus:outline-none text-5x1 text-white ml-8 border w-5/6 h-10 rounded-2x1 bg-primary border-solid">Ažuriraj podatke</button>
                </div>
              <div className="float-right block w-rightCol h-full">
                <div className="mt-19">
                <Link to="/listaproizvoda"><button className="ml-100 focus:outline-none font-bold text-10x1 mt-1 top-0 absolute" onClick={toggleComponent}>X</button></Link>
                <label className="pl-2">Cijena:</label><br/></div>
                <input id="update4" value={post.id} type="text" onChange={e => {setPriceTerm(e.target.value)}} className="pl-2 outline-none border w-5/6 h-9 rounded-3x1 border-primary border-solid mt-1 mb-8"/><br/>
                <label className="pl-2">Kategorija:</label><br/>
                <input id="update5" type="text" onChange={e => {setCatTerm(e.target.value)}} className="pl-2 outline-none border w-5/6 h-9 rounded-3x1 border-primary border-solid mt-1 mb-8"/><br/>
            </div>
          </div>
        </div>
      )
    } else {
        return null
    }
    
  }

export default EditProduct;