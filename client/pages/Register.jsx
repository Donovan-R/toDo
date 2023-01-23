import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='registerForm'>
        <h2>Veuillez renseigner les champs ci-dessous</h2>
        <form action='' onSubmit={handleSubmit} className='formContainer'>
          <div className='formRow'>
            <label htmlFor='lastname'>Nom</label>
            <input type='text' className='formInput' />
          </div>
          <div className='formRow'>
            <label htmlFor='firstname'>Prénom</label>
            <input type='text' className='formInput' />
          </div>
          <div className='formRow'>
            <label htmlFor='tel'>Téléphone</label>
            <input type='tel' className='formInput' />
          </div>
          <div className='formRow'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='formInput' />
          </div>

          <div className='formRow'>
            <label htmlFor='password'>Mot de passe</label>
            <input type='password' name='password' />
          </div>
          <div>
            <button>
              <Link to='/toDo'>S'inscrire</Link>
            </button>
          </div>
        </form>
        <span>
          {' '}
          <Link to='/'> page de connexion</Link>
        </span>
      </section>
    </>
  );
};

export default Register;
