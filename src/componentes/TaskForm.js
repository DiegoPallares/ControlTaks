import React from "react";
import '../Styles/TaskForm.css'

function TaskForm ({setOpenModal}) {

    const onSubmit = (event) => {
        //Con este preventDefault evitamos que automaticamente los boton recarguen la pagina
        event.preventDefault()
        console.log('Boton Add')
        setOpenModal(false)
    }
    
    const onCancel = () => {
        console.log('Boton Cancelar')
        setOpenModal(false)
    }
    
    return(
        //cuando se oprime el boton de Crear retorna por defecto onSubmit
        <form onSubmit={onSubmit}>
            
            <label>Nueva Tarea</label>
            <textarea
                placeholder="Ir de compras"
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