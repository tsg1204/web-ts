import { User } from './models/User';

const user = new User({ name: 'myname', age: 100});

user.on('change', () => {
  console.log('change 1')
});

user.on('change', () => {
  console.log('change 2')
});

user.on('save', () => {
console.log('save')
});

user.trigger('save');

