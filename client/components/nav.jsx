import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isOpen) {
      contRef.current.style.height = linksHeight + 'px';
    } else {
      contRef.current.style.height = '0px';
    }
  }, [isOpen]);

  const disconnectClick = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img className='logo' src={logo} alt='logo' /> */}
          <button className='nav-toggle' onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={contRef}>
          <ul className='links' ref={linksRef}>
            {token ? (
              <>
                <li>
                  <Link to='/toDo'>to do App</Link>
                </li>
                <li>
                  <Link to='/' onClick={disconnectClick}>
                    se déconnecter
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to='/'>se connecter</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
