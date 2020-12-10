import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {incr_Action,decr_Action} from "./../Counter/counter.action";
let Counter=()=>{
  let dispatch=useDispatch();

let counterInfo = useSelector((state)=>{
  return state.counterReduser
});
  let incrHandler=()=>{
    dispatch(incr_Action());
  }
  let decrHandler = () => {
    dispatch(decr_Action());
  };

return(
    <>
    <div className="contaner">

       <div className="row">
         <div className="col">
           <div className="card">
<div className="card-header">
    <h4>Counter example</h4>
</div>
<div className="card-body">
<h1>conter value:{counterInfo.counter}</h1>   
<br/><br/>
<button className="btn btn-success mr-5"  onClick={incrHandler}>+</button>
<button className="btn btn-primary" onClick={decrHandler}> - </button>

</div>
</div>
           </div>
         </div>
       </div>
    
    </>    
    
);
};
export default Counter;