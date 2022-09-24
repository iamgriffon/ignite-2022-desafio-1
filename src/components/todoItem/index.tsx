import { ChangeEvent, useEffect, useState } from 'react';
import { ToDoProps } from '../../App';
import './styles.css'

interface todoItemProps {
  task: ToDoProps;
  onDelete: (param: ToDoProps) => void;
}

export function ToDoItem({task, onDelete}: todoItemProps) {
  
  function deleteTodo(){
    onDelete(task)
  }

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='todoWrapper'>
      <input type="checkbox" className='checkBox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <input type="text" className={isChecked ? 'selected' : 'todoText'}  readOnly value={task.task} />
      <button onClick={deleteTodo}>Delete Todo</button>
    </div>
  )
}