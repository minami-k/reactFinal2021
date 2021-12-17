import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import EditModal from './EditModal'
import BOX from '@material-ui/core/BOX'


const TaskList = ({taskObj, updatedList}) => {
    const [modals, setModals] = useState(false)


    const toggle = () => {
        setModals(!modals)
        console.log('clicked');
    }

    const updatedTask = (obj, index) => {
        updatedList(obj, index)

    }


    return (
        <div>
            <form>
                <BOX sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <BOX sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 2,
        m: 1,
        borderRadius: 1,
        fontSize: '1rem',
        fontWeight: '700',
        width: 300 ,
        border: 1 
      }} 
      
    >
          <h4>{taskObj.title}</h4>
          <p>{taskObj.content}</p>
          <i  class="far fa-edit" onClick={() => toggle()}></i> 
          <EditModal taskObj={taskObj} modals={modals} toggle={toggle} updatedTask={updatedTask} />
          </BOX></BOX> </form>
            
        </div>
    )
}

export default TaskList
