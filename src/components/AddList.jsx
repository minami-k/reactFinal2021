import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MuiPickersUtilsProvider, Date } from '@material-ui/pickers';



const AddList = ({addList, cancel}) => {
    const [content, setContent] = useState('')
    const [modal, setModal] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        addList({ content })
        setContent('')
    }
    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const handleCancel = () => setModal(false)


    return (
        <>
            
{/*             <form 
            style={{textAlign:"center" }}  onChange={handleChange}>
            <h1 className='form-cap'>Add new issue</h1>

            <TextField 
            required
            id="outlined-basic" 
            label="Title" 
            variant="standard" 
            /><br />
            <TextField 
            error
            required
            id="outlined-basic" 
            label="State" 
            variant="standard"
            
            /><br />
            <TextField 
            id="outlined-basic" 
            label="Url" 
            variant="standard"
            onChange={handleChange} 
            /><br />
            <TextField 
            id="outlined-basic" 
            label="Created at" 
            variant="standard" 
            onChange={handleChange}
            /><br />
{/*             <DateTimePicker
          label="Date&Time picker"
          value={content}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
 */}     {/*        <TextField 

            id="outlined-basic" 
            label="Updated at" 
            variant="standard" 
            /><br />
            <Button  variant="text" style={{
                fontWeight: 700,
                fontSize: 10,
                marginTop: 20
                }}
                onClick={handleSubmit}>Save</Button>
            <Button  variant="text" style={{
                fontWeight: 700,
                fontSize: 10,
                marginTop: 20
                }}
                onClick={() => cancel(false)}>Cancel</Button>
            </form>
 */}             </>
        
    )
}

export default AddList
