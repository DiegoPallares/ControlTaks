import '../Styles/CreateTaskButton.css'

function CreateTaskButton({openModal, setOpenModal}){
    return (
        <button className='CreateTaskButton' 

            onClick={() =>{
                setOpenModal(openModal? false : true)
                //setOpenModal(state => !state)
                console.log('Le diste click' + {setOpenModal})
            }}
            // onClick={(event)=> {
            //     console.log('Le diste click' + {setOpenModal})
            // }}
        >+</button>
    );
}

export {CreateTaskButton};