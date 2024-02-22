
const AddTodo = () => {
    
    return (
        <div className="w-full max-w-[500px] mx-auto">
            <form >
                <textarea className="p-3 rounded border border-black outline-none focus-visible:border-purple-600 w-full" name="text" id="text"  rows="5"></textarea>
                <button type="submit" className="mt-2 px-3 py-2 bg-purple-700 font-medium text-white rounded">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;