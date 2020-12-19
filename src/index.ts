import { UserList } from './views/UserList';
import { UserForm } from './views/UserForm';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserEdit } from './views/UserEdit';

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
})

users.on('change',() => {
  const root = document.getElementById("root");
  new UserList(root, users).render()
})

users.fetch();

// const user = User.buildUser({ name: 'NAME 2', age: 167})
// const userEdit = new UserEdit(document.getElementById("root"), user)

// userEdit.render();

// console.log(userEdit);

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();
// user.set({ name: 'new name', age: 120});

// const user = new User({ name: 'myname', age: 100});

// user.on('change', () => {
//   console.log('change 1')
// });

// user.on('change', () => {
//   console.log('change 2')
// });

// user.on('save', () => {
// console.log('save')
// });

// user.trigger('save');
// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20
// })

// axios.get('http://localhost:3000/users/1')
