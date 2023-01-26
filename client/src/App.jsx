import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NavShared from '../pages/NavShared';

const App = () => {
  const [alert, setAlert] = useState({ msg: '', type: '', show: false });

  const showAlert = (msg = '', type = '', show = false) => {
    setAlert({
      msg,
      type,
      show,
    });
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavShared />}>
          <Route
            index
            element={<Login alert={alert} showAlert={showAlert} />}
          />
          <Route
            path='/register'
            element={<Register alert={alert} showAlert={showAlert} />}
          />
          <Route
            path='/todo'
            element={<Tasks alert={alert} showAlert={showAlert} />}
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
