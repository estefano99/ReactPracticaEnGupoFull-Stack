import { useState } from 'react';
import Input from './components/Input.js';
import axios from "axios";
import Listado from "./components/Listado.js"

function Landing(){
 const [valueInput,setValueInput] = useState("")
 const [listaSeries,setListaSeries] = useState([])
    const handleChange = function(event){
        setValueInput(event.target.value)
    }
    const handleClick = function(event){
        event.preventDefault()
        axios(`https://api.tvmaze.com/search/shows?q=${valueInput}`)
        .then(function(response){
            setListaSeries(response.data)

        })
    }
    console.log(valueInput)
    return(
         <div>
            <Input handleChange={handleChange} handleClick={handleClick} />
            <Listado listaSeries={listaSeries}/>
        </div>
    )
}

export default Landing;