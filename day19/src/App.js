import logo from './logo.svg';
import './App.css';
import Counter  from './components/Counter';

function App() {


  return(
  <div className="container">
    <h1 className="headeing">Five counter component manage thier own state</h1>
    <div className="counter-cont">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>

    </div>
  </div>
  ) ; 
  
}

export default App;
