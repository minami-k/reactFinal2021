import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../components/Modal'
import AddList from '../components/AddList'
import { newListAction, updateListAction } from '../redux/action/actions'
import Button from '@material-ui/core/Button';
import TaskList from '../components/TaskList'
import EditModal from '../components/EditModal'

const List = () => {
    const [modals, setModals] = useState(false)

    const dispatch = useDispatch()

    const listArr = useSelector(state => state.list )

    const addList = (element) => {
        dispatch(newListAction(element))  
        console.log(element);
    }

    const editList = (id, updated) => {
        dispatch(updateListAction({id, updated}))
        console.log(id);
    }
    
    const toggle = () => {
        setModals(!modals)
    }
    return (
        <div>
            <Button  
      variant="contained" 
      size="large" 
      style={{
        margin: 'auto',
        marginTop: 30,
        display: 'block',
        backgroundColor: '#607d8b',
        color: 'white',
        fontSize: 30,
        paddingRight: 20,
        paddingLeft: 20
      }}
      onClick={() => toggle()}>+</Button>
                        {listArr && listArr.map(issue => (
                <>
                 <div key={issue.id}></div>
                <Modal addList={addList} toggle={toggle} modals={modals} />
                
                <TaskList taskObj={issue}  editList={editList} />
                </>
            ))}
        </div>
    )
}


export default List

