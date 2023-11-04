import React, { useState, useEffect } from 'react';
import { useValue } from '../Components/ToDo/Context/context';
import "../Styles/navbar.css"

function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  const { deleteAllTodos } = useValue();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

      const formattedDate = now.toLocaleDateString(undefined, dateOptions);
      const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
      const formattedDateTime = `${formattedDate} ${formattedTime}`;

      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navbar">
      <h1 className='nav-heading'>Todo</h1>
      <div className='datetime'>{currentDateTime}</div>
      <button onClick={() => deleteAllTodos()} className='reset-button'>
        Reset
      </button>
    </div>
  );
}

export default Navbar;