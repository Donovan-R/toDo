import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NavShared from '../pages/NavShared';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavShared />}>
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/toDo' element={<Tasks />} />
          <Route path='/error' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
