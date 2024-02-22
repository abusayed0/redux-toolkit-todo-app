import AddTodo from "./components/add-todo/AddTodo"
import AllTodos from "./components/all-todos/AllTodos"


function App() {


  return (
    <div className="mt-16 max-w-[1440px] mx-auto p-3 md:p-5 lg:p-10">
      <AddTodo />
      <AllTodos/>
    </div>
  )
}

export default App
