import React, { useState } from 'react';
import axios from "axios"
import style from '../css/user-form-hooks.module.css'
import Button from '@material-ui/core/Button'
import { TextField, Grid, Box } from '@material-ui/core'


export const UserFormHooks = () => {
    // Declare a new state variable, which we'll call "count"
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (evt: any) => {
        evt.preventDefault();
        const response = await axios({
            method: "post",
            url: "http://localhost:3001/users",
            data: {
                firstName,
                lastName,
                address,
                email
            }
        })
        alert(`Submit name ${firstName} from hooks responded with ${JSON.stringify(response.data)}`)
    }

    return (
        <div className= {style.formWrapper}>
            <Box mt={5} px={2}>
                <form>
                <h1>React Hooks Form</h1>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={0}
            >
                <TextField variant="outlined" label="First" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <TextField variant="outlined" label="Last" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                <TextField variant="outlined" label="Address" type="text" value={address} onChange={e => setAddress(e.target.value)} />
                <TextField variant="outlined" label="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <div>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </div>
            </Grid>
            </form>
            </Box>
        </div>
    );
}