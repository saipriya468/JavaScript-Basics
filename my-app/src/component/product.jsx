import React from 'react';
import Service from './service';
/*class Product extends React.Component{
    message = "Hello";
    Prod_obj = {
        name:"Car",
        id:49,
        avail:true
    };
    render(){

return (
    <div>
            <Service one={this.message} two={this.Prod_obj}/>
    </div>
);
}
}*/function Product(){
    var message="Hello world",
     Prod_obj={
        name:"iphone",
        num:33,
    };

    return(

        <div>
<Service one={message} two={Prod_obj}/>
        </div>
    )
}
export default Product;