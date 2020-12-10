import React from 'react';
class Form extends React.Component{
    constructor(props) {
        super(props);
       this.state={
        username:"",
        email:"",
        submit:""
    };
};
userHandler=(event) => {
    console.log("event.target.value");
    this.setState({username:event.target.value});
};
emailHandler = (event) => {
    this.setState({ email: event.target.value });
};
submitMethod=(event) => {
    this.setState({submit:event.target.value});
};
    render(){
        return(
<div>
    <label >username:</label>
<input type="text" value={this.state.username} onChange={this.userHandler}/>
<br/>
<label>email:</label>
<input type="text" name="" id="" value={this.state.email} onchange={this.emailhandler} />
<br/>
<button type="submit" value={this.submit}onClick={this.submitMethod}>Submit</button>
</div>
        )
    };
};
export default Form;