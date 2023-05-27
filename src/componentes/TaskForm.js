import React from "react";
import '../Styles/TaskForm.css'

function TaskForm ({setOpenModal, Dato, SetDato, onCreate}) {

    const onSubmit = (event) => {
        console.log('Dato Boton Add: ' + Dato)
        console.log('SetDato: ' + SetDato)
        //Con este preventDefault evitamos que automaticamente los boton recarguen la pagina
        event.preventDefault()
        //Esnecesario apra que retorne  y ejecute la funcion de onCreate en App.js
        onCreate(Dato)
        setOpenModal(false)
        
    }
    
    const onCancel = () => {
        console.log('Boton Cancelar')
        setOpenModal(false)
    }
    //Actualiza el estado cada vez que se oprime el text Area.
    const onChange = (event) => {
        SetDato(event.target.value)
        console.log("el valor de SetDato es: " + SetDato)
    }
    
    return(
        //cuando se oprime el boton de Crear retorna por defecto onSubmit
        <form onSubmit={onSubmit}>
            
            <label>Nueva Tarea</label>
            <textarea
                placeholder="Ir de compras"
                onChange={onChange}
            ></textarea>
            <div className="TaskForm-buttonContainer">
                <button 
                    type="button" 
                    className="TaskForm-button TaskForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button type="submit" className="TaskForm-button TaskForm-button--add">Crear</button>
            </div>
            
        </form>
    )
}

export {TaskForm}