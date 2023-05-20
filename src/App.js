import { TaskCounter } from './componentes/TaskCounter.js';
import { TaskSearch} from './componentes/TaskSearch.js';
import { TaskList } from './componentes/TaskList.js';
import { TaskItem } from './componentes/TaskItem.js';
import { CreateTaskButton } from './componentes/CreateTaskButton.js';
import './App.css';
import React from 'react';


const defaultTask = [
  {text: 'Primera tarea', completed: true},
  {text: 'segunda tarea', completed: false},
  {text: 'tercera tarea', completed: true},
  {text: 'Cuarta tarea', completed: false},
  {text: 'Quinta tarea', completed: false},
  {text: 'sexta tarea', completed: true}
];

function App() {
  //Estado que contrala la cantidad de tareas y tareas completadas
  const [tasks, setTasks] = React.useState(defaultTask)
  //Estado que contrala lo que se escribe en el buscador
  const [searchValue, setSearchValue] = React.useState('')

  const searchedTaks = tasks.filter(
    (task) =>{
      //Con el toLowerCase pasamoe todo a minusculas y asi el buscador no es afectado de como este escrito
      const taskText = task.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      //Es indispensable que se retorne la busqueda para actualizar las tareas
      return taskText.includes(searchText)
    }
  )

  const completedTask =  tasks.filter(task => task.completed).length
  const totalTask = tasks.length

  const completeTask = (text) => {
    //Crea una copia del estado del array de Tareas.
    const newTasks =  [...tasks]
    const index = newTasks.findIndex(
      (task) => task.text == text
    )
    newTasks[index].completed = true
    setTasks(newTasks)
  }

  const deleteTask = (text) => {
    //Crea una copia del estado del array de Tareas.
    const newTasks =  [...tasks]
    const index = newTasks.findIndex(
      (task) => task.text == text
    )
    newTasks.splice(index,1)
    setTasks(newTasks)
  }



  console.log('desde app.js ' + searchValue)

  return (
    <React.Fragment>
      <TaskCounter total={totalTask} completed={completedTask}/>
      <TaskSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TaskList>
        {searchedTaks.map( task =>(
          <TaskItem  
            key={task.text} 
            text={task.text} 
            completed={task.completed}
            //Encapsulamos las funcion en otra funcion  para poder pasar el parametro de index que necesita
            onComplete={ () => completeTask(task.text)}
            onDelete={ () => deleteTask(task.text)}
          />
        ))}
      </TaskList>

      <CreateTaskButton />
    </React.Fragment>
  );
}

export default App;
