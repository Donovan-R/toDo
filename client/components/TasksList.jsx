import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdColorLens, MdOutlineDeleteForever } from 'react-icons/md';
import Alert from './Alert';

const TasksList = ({ tasks, deleteTask, editTask, alert, showAlert }) => {
  //* barrer les tâches accomplies
  const checkClick = (e) => {
    let text = e.currentTarget.nextElementSibling.firstChild.textContent;
    console.log(<s>{text}</s>);
  };

  return (
    <div className='tasksList'>
      {tasks.map((task, index) => {
        const { task_id: id, name } = task;
        return (
          <div className='taskCard' key={index} id={id}>
            <input type='checkbox' onClick={(e) => checkClick(e)} />
            <div className='taskChecked'>
              <p>{name}</p>
            </div>
            <div className='taskBtns'>
              <button onClick={() => deleteTask(id)}>
                <MdOutlineDeleteForever />
              </button>
              <button className='editBtn' onClick={() => editTask(id)}>
                <FaEdit />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
