const addItem = (item) => {
    return {
        type:"ADD_TODO",
        payload:item,
    };
};
const deleteItem = (id) => {
    return {
        type:"DELETE_TODO",
        payload:id,
    };
};
const doneItem = (item) =>{
    return {
        type:"DONE_TODO",
        payload:item,
    }
}
export { addItem,deleteItem,doneItem };