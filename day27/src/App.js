import "./App.css"
import ListTodo from "./components/listTodo"
import AddTodo from "./components/addTodo"
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
       <AddTodo/>
       </Provider>
    </div>
  );
}

export default App;
