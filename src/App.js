import { TaksCounter } from './componentes/TaskCounter';
import { TaksSearch} from './componentes/TaskSearch.js';
import { TaskList } from './componentes/TaskList';
import { TaskItem } from './componentes/TaskItem';
import { CreateTaskButton } from './componentes/CreateTaskButton';
import './App.css';
import React from 'react';


const defaultTask = [
  {text: 'Primera tarea', completed: true},
  {text: 'segunda tarea', completed: false},
  {text: 'tercera tarea', completed: true},
  {text: 'Cuarta tarea', completed: false},
  {text: 'Quinta tarea', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TaksCounter total={3} completed={5}/>
      <TaksSearch />

      <TaskList>
        {defaultTask.map( task =>(
          <TaskItem  key={task.text} text={task.text} completed={task.completed}/>
        ))}
      </TaskList>

      <CreateTaskButton />
    </React.Fragment>
  );
}


export default App;
