import './ItemCreator.css';
import { useState } from 'react' ; 

var ItemCreator = (props) => {
    const [newItem , addItem] = useState('ok'); 
    const [name, setName] = useState(''); 
    const [calorie, setCalorie] = useState(''); 
    var itemNameHandler = (event) => {
        setName(event.target.value);
    };
    var calorieHandler = (event) => {
        setCalorie(event.target.value);
    };

    var submitHandler = (event) => {
        if(name.length > 0 && calorie.length > 0){
           
        var newItem = {
            key : Math.random().toString(), 
            itemName : name , 
            calorieAmount : calorie 
        }
        console.log(newItem);
        setName('') ; 
        setCalorie(''); 
        props.addItemList(newItem) ; 
         
    }

    }; 
    return (
        <div className="item-creator-container">
        <input type="text" onChange={itemNameHandler} className="item-name"
        placeholder="ItemName" value={name}
        />
        <input type="number" onChange={calorieHandler} className="calorie" 
        placeholder="Calorie" value={calorie} />
        <input type="submit" onClick={submitHandler} value="Add Item" className="submit" />
        
        </div>
        
    );
}

export default ItemCreator;