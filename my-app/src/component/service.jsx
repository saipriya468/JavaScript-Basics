import React from 'react';
/*class Service extends React.Component{
    render(){
        const {one,two}=this.props;

        return(
            <div>
<h1>hello one{one}</h1>
        <h3>prod details{two.name}</h3>
</div>
        );
    }
}
*/
function Service(props){
return(
    <div>
<h4>im one {props.one}</h4>
<p>{props.two.id}{props.two.name}</p>
    </div>
)
}


export default Service;

