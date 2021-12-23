import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/BOX'
/* import Item from '@material-ui/core/Item'
 */import Select from '@material-ui/core/Select'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'; 
import { MenuItem } from 'material-ui';
import { ErrorSharp } from '@material-ui/icons'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const Modals = ({ modals, toggle, addList}) => {

    const [state, setState] = useState("")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [date, setDate] = useState(null);
    const [updatedDate, setUpdatedDate] = useState(null)



    const handleSubmit = (e) => {
        e.preventDefault()
        addList({ title, state, url, date, updatedDate })
        setUrl('')
        setTitle('')
        setState('')
    }


    return (
         <>
            <Modal isOpen={modals}
                toggle={toggle}
                
                sx={{
                    width: '50%'
                }}>
                <ModalHeader>Add a new issue</ModalHeader>
                <ModalBody style={{padding: 30}} >
                <TextField 
            required
            error
            id="outlined-basic" 
            label="Title" 
            variant="standard" 
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{width: '100%'}}
            /><br />
{/*             <Select>
                <MenuItem value={0}>Active</MenuItem>
                <MenuItem value={1}>Done</MenuItem>
            </Select>
 */}            <TextField 
            error
            required
            id="outlined-basic" 
            label="State" 
            variant="standard"
            name='state'
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={{width: '100%'}}

            /><br />
            <TextField 
            id="outlined-basic" 
            label="Url" 
            variant="standard"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{width: '100%'}}
            />
            <label>Created at</label>
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
 <Box sx={{display: 'flex', paddingBottom: 30, paddingLeft: 30}}>
 <Button onClick={handleSubmit} disabled={title && state ? false : true} >Save</Button>
 <Button onClick={toggle}>Cancel</Button></Box>
 
 </Modal>
        
         <div>
    </div> 
    </> 
 )
}

export default Modals
