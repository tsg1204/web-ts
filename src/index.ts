import { UserForm } from './views/UserForm';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 67})
const userForm = new UserForm(document.getElementById("root"), user)

userForm.render();

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
