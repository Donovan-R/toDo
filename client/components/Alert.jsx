import React, { useEffect } from 'react';

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
