import '../Styles/TaskCounter.css'

const validateAllTaskcomplete = (total, completed) => {
    if(total === completed && total === 0){
      return  (<h1 className="TaksCounter" >Crea tu primera tarea</h1>)
    }else if (total === completed && total > 0 ){
      return  (<h1 className="TaksCounter" >Felicidades completastes todos tus pendientes</h1>)
    }else{
      return (<h1 className="TaksCounter">Haz completado <span>{completed}</span> de <span>{total}</span> Tareas</h1>)
    }
}

function TaskCounter({total , completed}){
  
  return (
    validateAllTaskcomplete(total , completed) //? 
   // (<h1 className="TaksCounter" >Felicidades completastes todos tus pendientes</h1>)
    //:
    //(<h1 className="TaksCounter">Haz completado <span>{completed}</span> de <span>{total}</span> Tareas</h1>)
        
    )
}
export {TaskCounter};
  