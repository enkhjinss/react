import "../styles/toDo.css";
import "../styles/flex.css";
const ToDo = () => {
    return (
        <main className="flex column align-center">
            <h1>To do list app using vanilla js!</h1>
            <div className="flex">
            <input type="text" className="todoInput" placeholder="add thing to do..." />
                <button>add</button>
            </div>
        </main>
    );
};
export default ToDo;
