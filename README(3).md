# Projet Todo App full-stack

```js
const todos = [
  {
    todo_id: 1,
    name: 'Faire le front',
    user_id: 1,
  },
  {
    todo_id: 2,
    name: 'Faire la BDD',
    user_id: 1,
  },
  {
    todo_id: 3,
    name: 'Faire le back',
    user_id: 1,
  },
];
```

## FRONT

- Créer un projet React (`client`)

### Structure du front

- App.jsx
- main.jsx
- /components
  - Alert.jsx
  - Navbar.jsx
  - TodoList.jsx
  - Todo.jsx
- /pages
  - Register.jsx
  - Login.jsx
  - Todos.jsx

### Étapes

- Router
- Forumlaire d'enregistrement
- Formulaire de connexion
- Formulaire pour ajouter une tâche
- Afficher les tâches
- Supprimer toutes les tâches
- Supprimer une tâche
- Éditer une tâche

## BACK

- Créer un projet Express JS (`server`)

### Structure du back

- .env
- app.js
- /db
  - index.jx
- /controllers
  - auth
  - todos
- /routes
  - auth
  - todos
- /errors
- /middleware
  - not-found.js
  - authentication.js

### BDD

- Faire un MCD/MLD
- Créer une base de données `todo_app`
- Créer une table `users`
- Créer une table `todos`

### Étapes

- Installer les librairies nécessaires
- Setup un serveur
- Initialiser les contrôleurs
- Créer les routes
- Faire un middleware pour gérer les erreurs
- Faire les variables d'environnements dans `.env`
