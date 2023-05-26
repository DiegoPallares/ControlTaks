import {CompleteIcon} from '../componentes/CompleteIcon'
import {DeleteIcon} from '../componentes/DeleteIcon'
import '../Styles/TaskItem.css'
function TaskItem(props){
    return(
      <li className="TaskItem">
        <CompleteIcon
          //complete lo traemos desde App.js, es la variable si esta completa la tareas. y se envia para tener los colores
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p 
          className={`TaskItem-p ${props.completed? "TaskItem-p--complete" : '' }`}>{props.text}
        </p>
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    )
  }
  export {TaskItem}