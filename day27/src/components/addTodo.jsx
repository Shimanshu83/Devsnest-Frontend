import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../reducer/todoAction";
import ListTodo from "./listTodo";
const AddTodo = () => {
    const dispatch = useDispatch();
    const [item, setItem] = useState([]);
    console.log(item);
    return (
        <div class="add-todo-container">
            <h1>Todos list</h1>
            <div class="todo-container">
                <input type="text" value={item} placeholder="enter todo" onChange={(e) => {
                    setItem(e.target.value)
                }}></input>
                <button className="add-todo-btn" onClick={() => {
                    dispatch(addItem({
                        title: item,
                        done: false
                    }))
                }}>Add todo</button>
                <ListTodo/>
            </div>
            
        </div>
    )
}
export default AddTodo;