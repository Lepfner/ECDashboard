import React from 'react';
import {useState, useEffect} from 'react';

function Settings() {
    useEffect(() => {
        document.getElementById('boja1').style.borderColor = localStorage.hexcolor;
        document.getElementById('boja2').style.borderColor = localStorage.hexcolor;
        document.getElementById('boja3').style.backgroundColor = localStorage.hexcolor;
        document.getElementById('boja4').style.backgroundColor = localStorage.hexcolor;
    });

    const [color, setColor] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');

    function submitHandler()  {
        let color = document.getElementById('colorChanger').value;

        document.getElementById('dashLiviDio').style.backgroundColor = color;
        document.getElementById('boja1').style.borderColor = color;
        document.getElementById('boja2').style.borderColor = color;
        document.getElementById('boja3').style.backgroundColor = color;
        document.getElementById('boja4').style.backgroundColor = color;
        document.getElementById('colorChanger').value = color;

        localStorage.setItem('hexcolor', color);
        document.body.classList.add("hexcolor");
    }
    const submitPass = async(e) => {
        console.log('Promjena lozinke')
        if (pass1 == pass2){
            await fetch('http://localhost:3000/api/changePassword', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    setPass2,
                })
            });
        } else {
            alert(`Lozinke se ne podudaraju!`)
        }
    }

    return (
        <div className="ml-20">
        <div className="block w-full mb-6">
            <h1 className="text-9x1 pl-6 pt-2">Postavke</h1>
        </div>
        <div className="block float-left w-1/2">
            <div className="mt-8">
            <label className="ml-7 text-5x1">Nova lozinka</label><br/>
            </div>
            <div className="mb-5">
            <input onChange={(e)=>setPass1(e.target.value)} id="boja1" className="pl-3 focus:outline-none border w-2/4 h-9 rounded-2x1 border-primary border-solid ml-5" type="password"></input><br/>
            </div>
            <div>
            <label className="ml-7 text-5x1">Ponovno unesi lozinku</label><br/>
            </div>
            <div className="mb-6">
            <input onChange={(e)=>setPass2(e.target.value)} id="boja2" className="pl-3 focus:outline-none border w-2/4 h-9 rounded-2x1 border-primary border-solid ml-5" type="password"></input><br/>
            </div>
            <div>
            <button onClick={submitPass} id="boja3" className="text-4x1 focus:outline-none text-white ml-5 border w-2/4 h-10 rounded-2x1 bg-primary border-solid">Promjeni lozinku</button>
            </div>
        </div>
        <div className="block float-right mt-8 w-1/2 h-1/2">
            <p className="mb-2">Promjena glavne boje pozadine:</p>
            <input type="color" id="colorChanger" className="focus:outline-none" onChange={event => {setColor(event.target.value)}}/><br/>
            <button id="boja4" onClick={submitHandler} className="focus:outline-none mt-64 text-4x1 text-white border w-1/4 h-10 rounded-2x1 bg-primary border-solid">Primjeni</button>
        </div>
        </div>
    )
}

export default Settings;
