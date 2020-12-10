import React from 'react';
class RegClass extends React.Component{
    constructor(props){
        super(props);
        this.state=
            {
            noProd:1,
        };
    }
        noProdHandler = () =>{
            this.setState(
                {noProd :this.state.noProd + 1}
                );
            
        };
    render(){
return (
        <div>
            <h1>HEllo im from Reg class component{this.state.noProd}</h1>
            <button onClick={this.noProdHandler}>Clck ME!</button>
        </div>
    );
}
}

export default RegClass;