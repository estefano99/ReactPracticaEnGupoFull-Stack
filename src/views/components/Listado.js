function Listado(props){
    return(
        
                
                    <div >
                        {
                        props.listaSeries.map(function(serie){
                            return(
                                <div>
                                     <h1>{serie.show.name}</h1>
                                     <ul>
                                         <li>
                                         {serie.show.language}
                                         </li>
                                     </ul>
                      </div>
                            )
                        })
                        }
                   
                    </div>
               
            )
    }
    export default Listado