import { TaskCounter } from './componentes/TaskCounter.js';
import { TaskSearch} from './componentes/TaskSearch.js';
import { TaskList } from './componentes/TaskList.js';
import { TaskItem } from './componentes/TaskItem.js';
import { CreateTaskButton } from './componentes/CreateTaskButton.js';
import { Modal } from './componentes/Modal.js'
import { TaskForm } from './componentes/TaskForm.js'
import React from 'react';
import './App.css';

// const defaultTask = [
//   {text: 'Primera tarea', completed: true},
//   {text: 'segunda tarea', completed: false},
//   {text: 'tercera tarea', completed: true},
//   {text: 'Cuarta tarea', completed: false},
//   {text: 'Quinta tarea', completed: false},
//   {text: 'sexta tarea', completed: true}
// ];
// localStorage.setItem('Tasks_V1' , JSON.stringify(defaultTask))

function useLocalStorage (itemName, initialValueStorage) {

  const [item , setItem] = React.useState(initialValueStorage);
  const [loading , setloading] = React.useState(true);
  const [error , seterror] = React.useState(false);

  React.useEffect( () => {
    setTimeout(() =>{
      try {
        // Se crea la  constante asignando el locaslstorage con variable de nombre
        const localStorageItem = localStorage.getItem(itemName)
    
        let parsedItem;
    
          if(!localStorageItem){
            //Guardamos en localStorage con la variable itemName y convertimos a Json Stringify de forma vacio,
            //Para que ya tenga el tipo de datos necesario y no se rompa.
            localStorage.setItem(itemName, JSON.stringify(initialValueStorage))
            //Asignadmo a una array vacio
            parsedItem = initialValueStorage
          }else{
            //Si tiene tareas creada el local storage de tareas la convertimos a json que podra leer
            //en nuestro estado  de useState tasks.
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
    
          setloading(false)
      } catch (error) {
        setloading(false)
        seterror(true)
      }
    }, 2000)
  })
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem, 
    loading, 
    error
  }
}

function App() {
 
  //Estado que contrala la cantidad de tareas y tareas completadas
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error
   } = useLocalStorage('Tasks_V1', [])
  //Estado que contrala lo que se escribe en el buscador
  const [searchValue, setSearchValue] = React.useState('')
  //Estado apra el Modal
  const [openModal, setOpenModal] = React.useState(false)

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

  const addTask = (text) => {
    //Crea una copia del estado del array de Tareas.
    const newTasks =  [...tasks]
    newTasks.push({
      text: text,
      completed: false,
    })
    saveTasks(newTasks)
  }

  const completeTask = (text) => {
    //Crea una copia del estado del array de Tareas.
    const newTasks =  [...tasks]
    const index = newTasks.findIndex(
      (task) => task.text === text
    )

    if(newTasks[index].completed === true){
      newTasks[index].completed = false
    }else{
      newTasks[index].completed = true
    }
    
    saveTasks(newTasks)
  }

  const deleteTask = (text) => {
    //Crea una copia del estado del array de Tareas.
    const newTasks =  [...tasks]
    const index = newTasks.findIndex(
      (task) => task.text === text
    )
    newTasks.splice(index,1)
    saveTasks(newTasks)
  }

  //console.log('desde app.js ' + searchValue)

  return (
    <React.Fragment>
      <TaskCounter total={totalTask} completed={completedTask}/>
      <TaskSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TaskList>
        {loading && <p>Estamos Cargando...</p>}
        {error && <p>Hubo un error</p>}
        {/* {(!loading && searchValue.length === 0)&& <p>Crea tu primera tarea</p>} */}

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

      <CreateTaskButton setOpenModal ={setOpenModal} openModal={openModal}/>

      {openModal && (
        <Modal>
          <TaskForm setOpenModal ={setOpenModal}/>
        </Modal>  
      )}
      
      
    </React.Fragment>
  );
}

export default App;
