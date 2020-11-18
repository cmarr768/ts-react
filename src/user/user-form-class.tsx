import React from 'react';

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

    handleSubmit(event: any) {
        event.preventDefault();
        alert('Submit name from class ' + this.state.firstName);
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