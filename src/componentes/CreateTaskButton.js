import '../Styles/CreateTaskButton.css'

function CreateTaskButton(){
    return (
        <button className='CreateTaskButton' 
            onClick={(event)=> {
                console.log('Le diste click')
            }}
        >+</button>
    );
}

export {CreateTaskButton};