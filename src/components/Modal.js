import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'; 


const Modals = ({show, cancel, issue, modals, toggle, save, addList}) => {

    const [id, setId] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    

    const handleChange = (e) => {
        setContent(e.taget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addList({ title, content, id })
        setId('')
        setTitle('')
        setContent('')
    }




    return (
         <>
            <Modal isOpen={modals}
                toggle={toggle}>
                <ModalHeader>Add a new issue</ModalHeader>
                <ModalBody>
                <TextField 
            required
            id="outlined-basic" 
            label="Title" 
            variant="standard" 
            name={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}

            /><br />
            <TextField 
            error
            required
            id="outlined-basic" 
            label="State" 
            variant="standard"
            name='state'
            value={content}
            onChange={(e) => setContent(e.target.value)}

            /><br />
            <TextField 
            id="outlined-basic" 
            label="Url" 
            variant="standard"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
                <Button onClick={handleSubmit} >Save</Button>
                <Button onClick={toggle}>Cancel</Button>
            </Modal>
        
         <div>
    </div> 
    </> 
 )
}

export default Modals
