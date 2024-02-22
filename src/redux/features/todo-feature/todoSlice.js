import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};
const toDoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action, "action");
            const text = action.payload
            const newTodo = {
                id: nanoid(),
                text
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            const removeTodoId = action.payload;
            const restTodos = state.filter(todo => todo.id !== removeTodoId);
            state.todos  = restTodos;
        }
    }


});

export const {addTodo, removeTodo} = toDoSlice.actions;

export default toDoSlice.reducer;