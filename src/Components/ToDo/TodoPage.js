import React from 'react'
import MainForm from './Todo components/Mainform';
import TodoItem from './Todo components/TodoItem';
import { useValue } from './Context/context';


const TodoPage = () => {
    const { todos } = useValue();
  const sortedTodos = todos.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  return (
    <>
    <div className="todo-app">
        <MainForm />
        <div className="todo-list">
          {sortedTodos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TodoPage