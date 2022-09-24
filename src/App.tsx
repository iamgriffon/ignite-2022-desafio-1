import { ChangeEvent, useState } from "react"
import { ToDoItem } from "./components/todoItem";
import { v4 as uuidv4 } from 'uuid';
import './App.css'

export interface ToDoProps {
  id: string,
  task: string
}

function App() {
  const [todoList, setTodoList] = useState<ToDoProps[]>([]);
  const [todo, setTodo] = useState('');

  function handleAddTodo(todo: string){
    const newTodo = {
      id: uuidv4(),
      task: todo
    };

    let newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList)
    console.log(todoList)
  }

  function handleDeleteTodo(toBeDeleted: ToDoProps){
    let newTodoList = todoList.filter(todo => todo.id !== toBeDeleted.id);
    setTodoList(newTodoList)
    console.log(newTodoList)
  }

  function handleChangeTodo(event: ChangeEvent<HTMLInputElement>){
    const todoText = event.target.value;
    setTodo(todoText)
    console.log('XD', todoText)
  }

  return (
    <div>
      <form className="wrapper" onSubmit={event => event.preventDefault()}>
        <input type="text" className="todoInput" value={todo} onChange={event => handleChangeTodo(event)} />
        <button className="addButton"  onClick={() => handleAddTodo(todo)}>Adicionar Todo</button>
      </form>

      <div>
        {todoList.length >= 1 && todoList.map(todo => (
          <ToDoItem key={todo.id} task={todo} onDelete={() => handleDeleteTodo(todo)}  />
        ))}
      </div>
    </div>
  )
}

export default App
