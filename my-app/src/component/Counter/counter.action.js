const INCR = "INCR";
const DECR ="DECR";
let incr_Action=()=>{
    return{
        type:"INCR",
        payload:"incrCounter"
    }
}
let decr_Action=()=>{
    return{
        type:"DECR",
        payload:"decrCounter"
    }
}
export {INCR,DECR,incr_Action,decr_Action};