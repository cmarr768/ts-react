import React from 'react';
import axios from "axios"
import Button from '@material-ui/core/Button'
import style from '../css/user-form-class.module.css'


type Props = {};
type State = { firstName: string, lastName: string, address: string, email: string };

export class UserFormClass extends React.Component<Props, State> {
    constructor() {
        super({});
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            email: ""
        };
    }

    handleFirstNameChange = (event: any) => {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange = (event: any) => {
        this.setState({ lastName: event.target.value });
    }

    handleAddressChange = (event: any) => {
        this.setState({ address: event.target.value });
    }


    handleEmailChange = (event: any) => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = await axios({
            method: "post",
            url: "http://localhost:3001/users",
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                email: this.state.email
            }
        })
        alert(`Submit name ${this.state.firstName} from class responded with ${JSON.stringify(response.data)}`)
    }

    render() {
        return (
            <div className={style.classFormWrapper}>
                <div>
                    <h1>React Class Form</h1>
                    <label>First Name</label>
                    <input name="First Name" type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                    <label>Last Name</label>
                    <input name="Last Name" type="text" value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                    <label>Address</label>
                    <input name="Address" type="text" value={this.state.address} onChange={this.handleAddressChange}></input>
                    <label>Email</label>
                    <input name="Email" type="text" value={this.state.email} onChange={this.handleEmailChange}></input>
                
                
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                    </div>
            </div>
        );
    }
}