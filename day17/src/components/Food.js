import './Food.css';


function Food(props){

    return (
        <div className="food-info">
            <h1 className="food-name">{props.name}</h1>
            <p className="food-calorie">
                You have consumed {props.amount}cal today 
            </p>

        </div>
    ) ; 
    
}

export default Food ; 