import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import axios from 'axios';
import { AiOutlineEye } from 'react-icons/ai';
import { GoEyeClosed } from 'react-icons/go';

const Login = ({ alert, showAlert, setToken }) => {
  const [passwordType, setPasswordType] = useState('password');

  const changePasswordType = (e) => {
    e.preventDefault();
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
    return;
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const connectClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/login',
        user
      );

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', user.email);
      setToken(data.token);
      navigate('/todo');
    } catch (error) {
      showAlert('invalide', 'danger', true);
      localStorage.removeItem('token');
    }
  };

  return (
    <>
      <section className='loginForm'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <div className='login'>
          <h2>veuillez vous identifier</h2>
          <form action='' className='formContainer'>
            <div className='formRow'>
              <label htmlFor='email'>email</label>
              <input
                type='email'
                name='email'
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className='formRow'>
              <label htmlFor='password'>mot de passe</label>
              <input
                type={passwordType}
                name='password'
                id=''
                value={user.password}
                onChange={handleChange}
              />
              <span
                className='showPassword'
                onClick={(e) => changePasswordType(e)}
              >
                {passwordType === 'password' ? (
                  <AiOutlineEye />
                ) : (
                  <GoEyeClosed />
                )}
              </span>
            </div>
            <div className='connectBtn'>
              <button onClick={connectClick}>Se connecter</button>
            </div>
          </form>
          <span>
            pas de compte ?<Link to='/register'> c'est par ici</Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Login;
