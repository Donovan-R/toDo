import React, { useState } from 'react';
import TasksList from '../components/TasksList';
import { Link } from 'react-router-dom';

const todos = [
  {
    todo_id: 1,
    taskAdded: 'Faire le front',
    user_id: 1,
  },
  {
    todo_id: 2,
    taskAdded: 'Faire la BDD',
    user_id: 1,
  },
  {
    todo_id: 3,
    taskAdded: 'Faire le back',
    user_id: 1,
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(todos);
  const [taskAdded, setTaskAdded] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskAdded) {
      const oneTask = {
        todo_id: new Date().getTime().toString(),
        taskAdded,
      };
      setTasks([...tasks, oneTask]);
      if (isEditing) {
        const newTab = tasks.map((task) =>
          task.todo_id === editId ? { ...task, taskAdded } : task
        );
        setTasks(newTab);
        setIsEditing(false);
        setEditId(null);
      }
      setTaskAdded('');
    } else {
      <h2>rien</h2>;
    }
  };

  const deleteTask = (id) => {
    const tasksFiltered = tasks.filter((task) =>
      task.todo_id !== id ? task : ''
    );
    setTasks(tasksFiltered);
  };

  const editTask = (id) => {
    setIsEditing(true);
    setEditId(id);
    const newTask = tasks.find((task) => task.todo_id === id);
    setTaskAdded(newTask.taskAdded);
  };

  return (
    <>
      <section className='toDoSection'>
        <h1>to do or not to do</h1>
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
              <button
                className='deleteAll'
                onClick={() => {
                  setTasks([]);
                }}
              >
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
