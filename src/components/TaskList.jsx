import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import EditModal from './EditModal'
import BOX from '@material-ui/core/BOX'


const TaskList = ({taskObj, editList}) => {
    const [modals, setModals] = useState(false)
    const toggle = () => {
        setModals(!modals)
        console.log('clicked');
    }

    return (
        <div>
            <form>
                <BOX sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <BOX sx={{
        bgcolor: '#b0bec5',
        color: 'white',
        p: 2,
        m: 1,
        borderRadius: 1,
        fontSize: '1rem',
        fontWeight: '700',
        width: '70%' ,
        border: 1,
        display: 'inline',
        margin: 'auto',
        marginTop: 30,
        
      }} 
      
    >
          <h4 style={{fontSize: 15}}>Title: {taskObj.title}</h4>
          <p>
          State: {taskObj.state}<br />
          URL: {taskObj.url}<br />
          Created at: {taskObj.date}<br />
          Updated at: {taskObj.updatedDate}
          </p>
          <i  class="far fa-edit" onClick={() => toggle()}></i>    
          <EditModal taskObj={taskObj} modals={modals} toggle={toggle} editList={editList}  />
          
          </BOX></BOX> </form>
            
        </div>
    )
}

export default TaskList
