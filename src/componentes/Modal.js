import React from "react";
import ReactDOM from "react-dom";
import '../Styles/Modal.css'

function Modal ({ children }){

    //LLamamo ReactDOM, le enviamos el contenido que queremos teletransportar
    //despues le mandamos a donde l oqueremos teletransoportar
    //en el archivo inde.html debemos agregar un div con id de modal.
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}