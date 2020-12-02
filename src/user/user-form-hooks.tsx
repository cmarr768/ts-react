import React, { useState } from 'react';
import axios from "axios"

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
        <div>
            <div>
                <input placeholder="First" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input placeholder="Last" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                <input placeholder="Address" type="text" value={address} onChange={e => setAddress(e.target.value)} />
                <input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}