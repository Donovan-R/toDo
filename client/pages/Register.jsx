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
        <form action='' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='lastname'>Nom</label>
            <input type='text' className='formInput' />
          </div>
          <div>
            <label htmlFor='firstname'>Prénom</label>
            <input type='text' className='formInput' />
          </div>
          <div>
            <label htmlFor='tel'>Tééléphone</label>
            <input type='tel' className='formInput' />
          </div>
          <div>
            <label htmlFor='adress'>Adresse</label>
            <input type='text' className='formInput' />
          </div>
          <div>
            <label htmlFor='name'>identifiant</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label htmlFor='password'>mot de passe</label>
            <input type='password' name='password' />
          </div>
          <div>
            <button>
              <Link to='/toDo'>S'inscrire</Link>
            </button>
          </div>
        </form>
      </section>
      <span>
        {' '}
        <Link to='/'> page de connexion</Link>
      </span>
    </>
  );
};

export default Register;
