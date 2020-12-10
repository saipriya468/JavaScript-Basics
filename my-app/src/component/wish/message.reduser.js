import {GOOD_MORNING,GOOD_EVENING} from './message.actions';
let initialState={
message:"Hello!",
};
let messageReduser = (state=initialState,action)=>{
switch(action.type){
  case GOOD_MORNING:
    return {
      message:"gooodMorning",
    }

case GOOD_EVENING:
  return{
    message:"goodevening",
  }
default:
  return state
}
}
export {messageReduser};