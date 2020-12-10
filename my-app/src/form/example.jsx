import React from 'react';
class example extends React.Component{
    constructor(props){
    super(props);
    this.state={
name:"",
number:"",
    }
    }
    nameHandler=(event)=>{
        console.log(event.target.value);
this.setState({name:event.target.value});
    }
    numHandler=(event)=>{
        console.log(event.target.value);
        this.setState({number:event.target.value});
    }
    render(){
        return(
            <div>
                <form action="">
                    <label >name</label>
                    <input type="text" placeholder="name" onChange="nameHandler"/>
                   <label> number</label>
                   <input type="number" placeholder="number" onChange="numHandler"/>
                </form>
            </div>
        )
    }
}
export default example;