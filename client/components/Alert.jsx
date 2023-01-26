import React, { useEffect } from 'react';

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [removeAlert]);

  return <h2 className={`alert alert-${type}`}>{msg}</h2>;
};

export default Alert;
