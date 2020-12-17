import { User } from './models/User';

const user = new User({ id: 1 });

// user.set({ name: 'new name', age: 120});

user.set({ name: 'no id user', age: 0});
user.save();
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
