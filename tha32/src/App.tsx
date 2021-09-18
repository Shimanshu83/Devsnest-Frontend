
import './App.css';

function App() {
  interface User{
    username:String,
    password:String,
  }
  let user:User={
    username:"rohit",
    password:"jaiswal",
  }
  let a:number=23;

  type Light = "on" | "off" | "none";
  let light:Light = "none";

  function printhello():String {
    return "Hello";
  }
  return (
    <div className="App">
      <h3>{user.username},{user.password}</h3>
      <h3>{a}</h3>
      <h3>{light}</h3>
      <h3>{printhello()}</h3>
    </div>
  );
}

export default App;
