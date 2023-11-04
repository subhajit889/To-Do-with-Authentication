import React from 'react';
import { useValue } from '../Context/context';


const MainForm = () => {
  const { todoText, setTodoText, addTodo } = useValue();
  
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') addTodo();
        }}
      />
      <button onClick={addTodo}>
        Add To-Do
      </button>
    </div>
  );
};

export default MainForm;
