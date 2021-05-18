import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

function Search({search}) {
    const [text, setText] = useState('');
    const onSearch = (q)=>{
        setText(q)
        search(q)
    }
    return (
        <div className="ml-14%">
                <input onChange={(e)=>onSearch(e.target.value)} type="text" placeholder="Pretraga..." className="placeholder-white bg-second text-white pl-4 outline-none pr-4 text-8x1 mt-3 absolute rounded-2x1 w-2/6 h-14"></input>
                <FontAwesomeIcon icon={faSearch} color="white" className="mt-7 absolute ml-ikona1 h-6"/>
            </div>
    )
}

export default Search