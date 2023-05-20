import '../Styles/TaskCounter.css'

const validateAllTaskcomplete = (total, completed) => {
    if(total === completed){
      return true
    }else{
      return false
    }
}

function TaskCounter({total , completed}){
  
  return (
    validateAllTaskcomplete(total , completed) ? 
    (<h1 className="TaksCounter" >Felicidades completastes todos tus pendientes</h1>)
    :
    (<h1 className="TaksCounter">Haz completado <span>{completed}</span> de <span>{total}</span> Tareas</h1>)
        
    )
}
export {TaskCounter};
  