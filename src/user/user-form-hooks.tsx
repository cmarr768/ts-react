import React, { useState } from 'react';
import axios from "axios"

export const UserFormHooks = () => {
    // Declare a new state variable, which we'll call "count"
    const [firstName, setFirstName] = useState("");

    const handleSubmit = async (evt: any) => {
        evt.preventDefault();
        const response = await axios({
            method: "post",
            url: "http://localhost:3001/users",
            data: {
                firstName
            }
        })
        alert(`Submit name ${firstName} from hooks responded with ${JSON.stringify(response.data)}`)
    }

    return (
        <div>
            <div>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}