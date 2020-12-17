import { User } from './models/User';

const user = new User({ name: 'myname', age: 100});

user.set({ name: 'new name', age: 999})

console.log(user.get('name'));
