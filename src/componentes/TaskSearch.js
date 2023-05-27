import React from 'react'
import '../Styles/TaskSearch.css'

function TaskSearch({searchValue, setSearchValue}){
  return (
      <input 
        placeholder="busca tus tareas" 
        className="TaskSearch" 
        value={searchValue}
        
        //Con el Evento onChange se ejecuta cada vez que se escribe en el buscado
        onChange={(event) =>{
        //Actualizamos el valor del input con el evento onChange en nuestro estado useState.
        setSearchValue(event.target.value)
        console.log("Escribio en el buscador TaskSearch.js")
        console.log(event.target.value)
        }}
      />
    )
}

export {TaskSearch};
  