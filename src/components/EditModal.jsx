import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'; 


const EditModal = ({toggle, updatedTask, addList, modals, taskObj}) => {

    const [modal, setModal] = useState(false)
    const [content, setContent] = useState([])
    const [editing, setEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let tempTask = {}
        tempTask({ content })
        updatedTask(tempTask)
    }

    useEffect(() => {
        setContent(taskObj.content)
    }, [])
    return (
         <>
            <Modal isOpen={modals}
                toggle={toggle}>
                <ModalHeader>Editing....</ModalHeader>
                <ModalBody>
                <TextField 
            error
            required
            id="outlined-basic" 
            label="Title" 
            variant="standard" 
            value={taskObj.title}
            onChange={handleChange}
            /><br />
            <TextField 
            error
            required
            id="outlined-basic" 
            label="State" 
            variant="standard"
            value={taskObj.content}
            /><br />
            <TextField 
            id="outlined-basic" 
            label="Url" 
            variant="standard"
            
            /><br />
            <TextField 
            id="outlined-basic" 
            label="Created at" 
            variant="standard" 
            
            /><br />
            <TextField 

            id="outlined-basic" 
            label="Updated at" 
            variant="standard" 
            />
            
                </ModalBody>
                <Button onClick={handleUpdate} >Update</Button>
                <Button onClick={toggle}>Cancel</Button>
            </Modal>
        
         <div>
    </div> 
    </> 
 )
}

export default EditModal
