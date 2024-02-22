import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../redux/features/todo-feature/todoSlice";

const AllTodos = () => {

    const todos = useSelector((state) => state.todos);
    // console.log(todos);

    const dispatch = useDispatch();
    
    return (
        <div className="mt-10">
            <h2 className="text-3xl font-semibold">Total Todo : {todos?.length}  </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {
                    todos.map(todo => (
                        <div key={todo.id} className="bg-zinc-200 rounded p-4 flex flex-col gap-2">
                            <p className="text-xl">Id: {todo.id}</p>
                            <h4 className="text-2xl font-medium">Task: {todo.text}</h4>
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="px-2 py-1 rounded font-medium text-white bg-red-500">Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllTodos;