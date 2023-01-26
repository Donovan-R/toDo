import React, { useState, useEffect } from 'react';
import TasksList from '../components/TasksList';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axios from 'axios';
import { FaExclamationTriangle } from 'react-icons/fa';

const Tasks = ({ alert, showAlert }) => {
  const [tasks, setTasks] = useState([]);
  const [taskAdded, setTaskAdded] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem('token');
  const url = 'http://localhost:5000/api/v1/tasks/';

  //* allTasks

  const getAllTasks = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  //* ajout tâche

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (taskAdded && !isEditing) {
      try {
        const { data } = await axios.post(
          url,
          { name: taskAdded },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        const oneTask = {
          task_id: data.task.task_id,
          name: data.task.name,
        };
        setTasks([...tasks, oneTask]);
        showAlert('item ajouté', 'success', true);
      } catch (error) {
        console.log(error);
      }
    }

    //* édition tâche
    else if (taskAdded && isEditing) {
      const newTab = tasks.map((task) =>
        task.task_id === editId ? { ...task, name: taskAdded } : task
      );
      try {
        await axios.put(
          `${url}${editId}`,
          { name: taskAdded },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
      setTasks(newTab);
      showAlert('item modifié', 'success', true);
      setIsEditing(false);
      setEditId(null);

      setTaskAdded('');
    } else {
      showAlert('veuillez saisir une tâche', 'danger', true);
    }
  };

  const editTask = async (id) => {
    setIsEditing(true);
    setEditId(id);
    const newTask = tasks.find((task) => task.task_id === id);
    setTaskAdded(newTask.name);
  };

  //* supprimer une tâche

  const deleteTask = async (id) => {
    try {
      const tasksFiltered = tasks.filter((task) => task.task_id !== id);
      showAlert('item supprimé', 'danger', true);
      setTasks(tasksFiltered);
      await axios.delete(`${url}${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //* supprimer toutes les tâches

  const deletAllTasks = async () => {
    try {
      await axios.delete(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setTasks([]);
      showAlert('liste supprimée', 'danger', true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='toDoSection'>
        <h1>to do or not to do</h1>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className='formCont'>
          <div className='inputToDo'>
            <form action='' onSubmit={handleSubmit}>
              <input
                type='text'
                value={taskAdded}
                onChange={(e) => setTaskAdded(e.target.value)}
              />
              <button className='submitBtn' type='submit'>
                {isEditing ? 'modifier' : 'ajouter'}
              </button>
            </form>
          </div>

          <TasksList
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
          />
          {tasks.length > 1 ? (
            <div className='deleteAll'>
              <button className='deleteAll' onClick={deletAllTasks}>
                Tout supprimer
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <span>
          <Link to='/'>changer de compte</Link>
        </span>
      </section>
    </>
  );
};

export default Tasks;
