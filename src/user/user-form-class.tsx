import React from 'react';
import axios from "axios"

type Props = {};
type State = { firstName: string };

export class UserFormClass extends React.Component<Props, State> {
    constructor() {
        super({});
        this.state = {
            firstName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ firstName: event.target.value });
    }

    async handleSubmit(event: any) {
        event.preventDefault();
        const response = await axios({
            method: "post",
            url: "http://localhost:3001/users",
            data: {
                firstName: this.state.firstName
            }
        })
        alert(`Submit name ${this.state.firstName} from class responded with ${JSON.stringify(response.data)}`)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.firstName} onChange={this.handleChange}></input>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}