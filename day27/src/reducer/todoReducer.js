const TodoReducer = (state = [], action) => {
    if (action.type === "ADD_TODO") {
        return [...state, action.payload];
    }
    else if (action.type === "DELETE_TODO") {
        return state.filter((item, index) => index != action.payload);
    }
    else if (action.type === "DONE_TODO") {
        var newState = [...state];
        newState[action.payload.index] = action.payload;
        console.log(newState);
        return newState;
    }
    return state;

}
export default TodoReducer;