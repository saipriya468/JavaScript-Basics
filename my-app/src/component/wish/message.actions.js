const GOOD_MORNING = "GOOD_MORNING";
const GOOD_EVENING = "GOOD_EVENING";
let morning_Wish =()=>{
  return{
type:"GOOD_MORNING",
payload:"wishGoodMorning"
}
}
let evening_Wish=()=>{
  return{
    type:"GOOD_EVENING",
    payload:"wishGoodEvening"
  }
}
export {GOOD_MORNING,GOOD_EVENING,morning_Wish,evening_Wish};