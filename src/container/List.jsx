import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../components/Modal'
import AddList from '../components/AddList'
import { newListAction } from '../redux/action/actions'
import Button from '@material-ui/core/Button';
import TaskList from '../components/TaskList'
import EditModal from '../components/EditModal'

const List = () => {
    const dispatch = useDispatch()

    const addList = (title) => {
        dispatch(newListAction(title))  
        console.log(title);
    }

    const listArr = useSelector(state => state.list )
    


    const [modals, setModals] = useState(false)
    const [task, setTask] = useState([])

    const toggle = () => {
        setModals(!modals)
    }

    const updatedList = (obj, index) => {
        let tempTask = task
        tempTask[index] = obj
        setTask(tempTask)
    }

    return (
        <div>
            <Button  
      variant="contained" 
      color="secondary" 
      size="small" 
      style={{
        margin: 50
      }}
      onClick={() => toggle()}>+</Button>
                        {listArr && listArr.map(issue => (
                <>
                <Modal addList={addList} toggle={toggle} modals={modals} issue={issue} key={issue.id}/>
                
                <TaskList taskObj={issue} updatedList={updatedList}/>
                <EditModal taskObj={issue} />
                </>
            ))}
           {/*  <AddList  cancel={setModals} addList={addList}/> */}
        </div>
    )
}


export default List

