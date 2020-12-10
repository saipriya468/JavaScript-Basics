import React from "react";
import { Provider } from "react-redux";
import Counter from "./component/Counter/counter";
import Message from "./component/wish/message";
import store  from "./Redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <br/><br/>
        <Message/>
      </Provider>
    </div>
  );
}
export default App;
