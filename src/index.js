import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CustomItemProvider from './Components/ToDo/Context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomItemProvider>
      <App />
    </CustomItemProvider>
  </React.StrictMode>
);

