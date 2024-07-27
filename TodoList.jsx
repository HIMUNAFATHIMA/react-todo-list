import React, { useState } from 'react';
import './index.css'; // Import your CSS file if you have one

const TodoList = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  // State to store the current input value
  const [input, setInput] = useState('');

  // Handler to add a new item to the list
  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, { text: input, completed: false }]);
      setInput(''); // Clear the input field
    }
  };

  // Handler to toggle the completion status of an item
  const handleToggleComplete = (index) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(newItems);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item.completed ? 'completed' : ''}
            onClick={() => handleToggleComplete(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
