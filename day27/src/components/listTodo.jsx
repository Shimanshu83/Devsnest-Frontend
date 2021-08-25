import { useSelector } from "react-redux";
import { deleteItem, doneItem } from "../reducer/todoAction";
import { useDispatch } from "react-redux";


const ListTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);
    console.log(todos)
    return (<>
            {todos.map((item, index) => (
                <div className="items" key={index}>
                    {(item.done === true) ? <div style={{ textDecoration: 'line-through', color: 'red',display:"inline-block"}}>{item.title}</div> :
                        <div style={{ textDecoration: 'none', color: 'black', display:"inline-block"}}>{item.title}</div>}
                    <button style={{width:"50px",height:"20px",margin:"10px"}} onClick={() => {
                        dispatch(deleteItem(index));
                    }}>Delete</button>
                    <div className="doneBtn" style={{display:"inline-block"}}>
                        {(item.done === true) ?
                            <button style={{width:"50px",height:"20px"}} onClick={() => dispatch(doneItem({ title: item.title, done: false, index: index }))}>UnDone</button> :
                            <button style={{width:"50px",height:"20px"}} onClick={() => dispatch(doneItem({ title: item.title, done: true, index: index }))}>Done</button>
                        }
                    </div>
                </div>

            ))}
            </>
        
    )

}
export default ListTodo;