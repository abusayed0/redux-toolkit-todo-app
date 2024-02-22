import { useDispatch, useSelector } from "react-redux";

const AllTodos = () => {

    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <div className="mt-10">
            <h2 className="text-3xl font-semibold">Total Todo : {todos?.length}  </h2>
        </div>
    );
};

export default AllTodos;