import {combineReducers} from "redux";
import {counterReduser} from "../component/Counter/counter.reduser";
import {messageReduser} from "../component/wish/message.reduser";
let rootReduser=combineReducers({
    counterReduser,messageReduser
});
export default rootReduser;