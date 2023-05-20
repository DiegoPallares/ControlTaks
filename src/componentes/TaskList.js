import '../Styles/TaskList.css'
function TaskList(props){
    return (
      <ul className='TaskList'>
        {props.children}
      </ul>
    )
}


export {TaskList};
  