import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert';

const Register = ({ alert, showAlert }) => {
  const [user, setUser] = useState({
    lastname: '',
    firstname: '',
    mobile: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/register',
        user
      );
      localStorage.setItem('token', data.token);
      navigate('/todo');
    } catch (error) {
      showAlert(error.response.data.msg, 'danger', true);
    }
  };

  return (
    <>
      <section className='registerForm'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className='register'>
          <h3>Veuillez renseigner les champs ci-dessous</h3>
          <form onSubmit={handleSubmit} className='formContainer'>
            <div className='formRow'>
              <label htmlFor='lastname'>Nom</label>
              <input
                type='text'
                className='formInput'
                name='lastname'
                value={user.lastname}
                onChange={handleChange}
              />
            </div>
            <div className='formRow'>
              <label htmlFor='firstname'>Prénom</label>
              <input
                type='text'
                className='formInput'
                name='firstname'
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div className='formRow'>
              <label htmlFor='tel'>Téléphone</label>
              <input
                type='tel'
                className='formInput'
                name='mobile'
                value={user.mobile}
                onChange={handleChange}
              />
            </div>
            <div className='formRow'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='formInput'
                name='email'
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className='formRow'>
              <label htmlFor='password'>Mot de passe</label>
              <input
                type='password'
                name='password'
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className='connectBtn'>
              <button>S'inscrire</button>
            </div>
          </form>
        </div>
        <span>
          {' '}
          déjà inscrit ? <Link to='/'> page de connexion</Link>
        </span>
      </section>
    </>
  );
};

export default Register;
