import React, { useState } from "react";
function UploadProducts(){
    let [product,setProduct]=useState({
        products:{
            productName:"",
            price:"",
            qty:""
        }
    });
   let nameHandler=(event)=>{
         setProduct({
             productName:event.target.value
             
         });
         console.log(product);
    }
let numHandler=(event)=>{
    setProduct({
        price:event.target.value
    });
    console.log(product);
}
 let textHandler=(event)=>{
     setProduct({
qty:event.target.value
     });
console.log(product);
 }
 const handleSubmit=(event)=>{
     event.preventDefault();
 }
return(
<div>
    <h4>function react hook example</h4>
<form action="" className="container col-md-8" onSubmit={handleSubmit}>
    <div className="form-group">
<input type="text" placeholder="productName" className="form-control" onChange={nameHandler}/>
</div>
<div className="form-group">
    <input type="number" placeholder="price" className="form-control" onChange={numHandler}/>
</div>
<div className="form-group">
    <input type="text " placeholder="QTY" className="form-control" onChange={textHandler}/>
</div>
<div className="form-group">
<input type="submit" value="submit" />
</div>
</form>
</div>
);
};
export default UploadProducts;
