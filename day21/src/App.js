import './App.css';
import ItemCreator from './components/ItemCreator'
import Itemcard from './components/ItemCard'
import {useState} from 'react' ; 
function App() {
  const [item , setItem] = useState([ {
    key : "item1" , 
    itemName : "Apple", 
    calorieAmount : 345
  }]);
  var addItem = (newItem) => {
    
    setItem(
      (prevItem) => {
        return  [
          ...prevItem , 
          newItem  
        ]
      }
    )
   
    
  }


  var deleteH = (newData) => {
    setItem(newData) ; 

  }

  return (
    <div className="main-container">  
    <ItemCreator addItemList = {addItem}/>
    {item.map(
      (item1) =>{
        return <Itemcard id={item1.id}  items = {item} deleteFunc = {deleteH} itemName={item1.itemName} calorieAmount={item1.calorieAmount} />
        
      }
    )}
    </div>
    
  

  );
}

export default App;
