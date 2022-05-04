import axios from "axios"
import "bootstrap/scss/bootstrap.scss"
import { useState } from "react"
function Formulario(){
        const [userInput, setUserInput] = useState({pais: "", nombre: "",email: "",mensaje: "" })
        const [showAlert,setShowAlert] = useState(false)
        const [menssageName,setMenssageName] = useState("")

        const handleChange = function(event){
            setShowAlert(false)
            const property = event.target.name
            const value =  event.target.value
            setUserInput({...userInput,[property]:value})
        }
        const handleSubmit = function(event){
            event.preventDefault()
            axios({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: "POST",
                data: userInput
            }).then(result =>{
                 setMenssageName(result.data.nombre) 
                 
                setShowAlert(true)
                setUserInput({pais: "", nombre: "", email: "", mensaje: ""})
            })
        }    
        
    return(
        <form onSubmit={handleSubmit}>

    <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">Paises...</label>
        <select className="form-select" id="inputGroupSelect01" name="pais" placeholder="Ingrese su país" onChange={handleChange}>
        <option selected disabled>Choose...</option>   
        <option value="1">Argentina</option>
        <option value="2">Uruguay</option>
        <option value="3">Chile</option>
    </select>
</div>

<div class="input-group mb-3">
<label for="nombre" className="input-group-text">Nombre</label>
<input class="form-control" type="text" name="nombre" placeholder="Ingrese su nombre" aria-label="default input example" onChange={handleChange}/>
</div>

<div className="input-group mb-3">
  <label for="floatingInput" className="input-group-text">Email address</label>
<input type="email" className="form-control " id="floatingInput" name="email" placeholder="name@example.com" onChange={handleChange}/>
</div>

<div className="input-group mb-3">


  <label for="floatingTextarea" className="input-group-text">Mensaje</label>
  <textarea class="form-control" placeholder="Ingrese su mensaje" name="mensaje"  id="floatingTextarea" onChange={handleChange}></textarea>
</div>
        <div>
        <button type="submit" class="btn btn-primary mb-3 d-flex justify-content-start p-3" >Enviar</button>
        </div>
        {showAlert && <div className="alert alert-success">Mensaje enviado correctamente {menssageName} </div>}

        </form>
    )
}
export default Formulario