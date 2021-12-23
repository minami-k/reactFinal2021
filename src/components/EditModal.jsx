import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';



const EditModal = ({toggle, modals, taskObj, editList }) => {

    const [title, setTitle] = useState('')
    const [state, setState] = useState("")
    const [url, setUrl] = useState("")
    const [date, setDate] = useState(null);
    const [updatedDate, setUpdatedDate] = useState(null)

    
    const [isEditing, setIsEditing] = useState(false)
    const [editingText, setEditingText] = useState({})


    const handleUpdate = (e) => {
        e.preventDefault()
         editList({ title, state, url, date })
        setTitle('')
   }


     useEffect(() => {
        setTitle(taskObj.title)
        setState(taskObj.state)
        setDate(taskObj.date)
        console.log('clicked efefct');
    }, [])
   return (
         <>
            <Modal isOpen={modals}
                toggle={toggle}>
                <ModalHeader>Editing....</ModalHeader>
                <ModalBody key={taskObj.id} style={{padding: 30}}>
                <TextField 
            error
            required
            id="outlined-basic" 
            label="Title" 
            variant="standard" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            /><br />
            <TextField 
            error
            required
            id="outlined-basic" 
            label="State" 
            variant="standard"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}

            /><br />
            <TextField 
            id="outlined-basic" 
            label="Url" 
            variant="standard"
            name="url"
            value={taskObj.url}
            /><br />
            <DatePicker
            value={date}
            selected={date}
            label="Date"
            inputFormat="MM/dd/yyyy"
            onChange={date => setDate(date)}
            style={{
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                width: '100%',
            }}
          /><br />
              <label>Updated at</label>
            <DatePicker
            selected={updatedDate}
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            onChange={date => setUpdatedDate(date)}
            style={{
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                width: '100%',
            }}/>
            
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
