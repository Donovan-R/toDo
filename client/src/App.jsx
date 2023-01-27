import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NavShared from '../pages/NavShared';
import ProtectedRoute from '../pages/ProtectedRoute';

const getToken = () => {
  localStorage.getItem('token') ? localStorage.getItem('token') : '';
};

const App = () => {
  const [alert, setAlert] = useState({ msg: '', type: '', show: false });
  const [token, setToken] = useState(getToken);

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
        <Route
          path='/'
          element={<NavShared token={token} setToken={setToken} />}
        >
          <Route
            index
            element={
              <Login alert={alert} showAlert={showAlert} setToken={setToken} />
            }
          />
          <Route
            path='/register'
            element={
              <Register
                alert={alert}
                showAlert={showAlert}
                setToken={setToken}
              />
            }
          />
          <Route
            path='/todo'
            element={
              <ProtectedRoute token={token}>
                <Tasks alert={alert} showAlert={showAlert} token={token} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
