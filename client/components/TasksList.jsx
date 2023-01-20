import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';

const TasksList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className='tasksList'>
      {tasks.map((task, index) => {
        const { todo_id: id, taskAdded } = task;
        if (task) {
          return (
            <div className='taskCard' key={index} id={id}>
              <div className='taskChecked'>
                <p>{taskAdded}</p>
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
        } else {
          return '';
        }
      })}
    </div>
  );
};

export default TasksList;
