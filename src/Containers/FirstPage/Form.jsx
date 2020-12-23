import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Form extends Component {
    constructor (props) {
        super(props);
        this.state={
            value: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCahnge = this.handleCahnge.bind(this);
    }
    handleCahnge(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>{this.state.value}</label>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" value={this.state.value} onChange={this.handleCahnge} />
                    <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
                    <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
                    <Button variant="contained" color="primary" type="submit" value="Submit" >Submit</Button>
                    
                </form>
            </div>
        )
    }
}
