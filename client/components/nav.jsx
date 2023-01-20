import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
// import logo from '.././public/logo.jpg';

const Navbar = () => {
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

  return (
    <>
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
              <li>
                <a href='/'>se connecter</a>
              </li>
              <li>
                <a href='/toDo'>to do App</a>
              </li>
              <li>
                <a href='/'>se déconnecter</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
