import React from "react";
class Bind extends React.Component{
    constructor(props){
        super(props);
        this.state={
username:"",
        }
    }
        userHandler=(event)=>{
console.log(event.target.value);
this.setState({username:event.target.value})
        }
    
    render()
{
    return(
        <div>
           <input type="text" value={this.state.username} onChange={this.userHandler}/>  
        </div>
    )
};
}
export default Bind;