import './ItemCard.css';
import {useState} from 'react' ; 

var ItemCard = (props) => {
    var deleteHandler = () => {
        var newData = props.items.filter(item => item.id !== props.id);
        console.log('working !');
        props.deleteFunc(newData) ;
    }
    
    return (
        <div className="card" >
            <h1 classNmae="card-name">{props.itemName}</h1>
            <p className="calorie-p">{`The amount of calorie is ${props.calorieAmount}`}</p>
            <button className="delete" onClick={deleteHandler} >Delete</button>
        </div>
    ) ; 
}

export default ItemCard;