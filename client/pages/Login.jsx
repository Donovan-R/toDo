import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const connectClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='loginForm'>
        <h2>veuillez vous identifier</h2>
        <form action='' className='formContainer'>
          <div className='formRow'>
            <label htmlFor='email'>email</label>
            <input type='email' name='email' />
          </div>
          <div className='formRow'>
            <label htmlFor='mdp'>mot de passe</label>
            <input type='text' name='mdp' id='' />
          </div>
          <div className='formRow'>
            <button className='connectBtn' onClick={(e) => connectClick(e)}>
              <Link to='/toDo'> Se connecter </Link>
            </button>
          </div>
        </form>
        <span>
          pas de compte ?<Link to='/register'> c'est par ici</Link>
        </span>
      </section>
    </>
  );
};

export default Login;
