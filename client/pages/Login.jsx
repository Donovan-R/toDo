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
        <form action=''>
          <div>
            <label htmlFor='name'>identifiant</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label htmlFor='mdp'>mot de passe</label>
            <input type='text' name='mdp' id='' />
          </div>
          <div>
            <button className='connectBtn' onClick={(e) => connectClick(e)}>
              <Link to='/toDo'> Se connecter </Link>
            </button>
          </div>
        </form>
      </section>
      <span>
        pas de compte ?<Link to='/register'> c'est par ici</Link>
      </span>
    </>
  );
};

export default Login;
