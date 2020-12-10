import React from "react";
import{useSelector,useDispatch} from "react-redux";
import {morning_Wish,evening_Wish} from "./message.actions";
let Message=()=>{
  let dispatch = useDispatch();
  let messageInfo=useSelector((state)=>{
    return state.messageReduser;
  });
  let mrHandler=()=>{
    dispatch(morning_Wish());
  };
  let evHandler=()=>{
    dispatch(evening_Wish());
  };
  return(
  <div className="contain 3er">
<div className="row">
<div className="col">
<div className="card">
<div className="card-header">
<h4 >
hello people!
</h4>
</div>
<div className="card-body">
  <h1>Counter Value:{messageInfo.message}</h1>
<button className="btn btn-success mr-4" onClick={mrHandler}>GoodMorning!</button>
<button className="btn btn-primary" onClick={evHandler}>GoodEvening!</button>
</div>
</div>
</div>
</div>
  </div>
  );
}
export default Message;