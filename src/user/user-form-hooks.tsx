import React, { useState } from 'react';

export const UserFormHooks = () => {
    // Declare a new state variable, which we'll call "count"
    const [firstName, setFirstName] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        alert(`Submit name from hooks ${firstName}`)
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