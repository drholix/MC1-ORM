const { User } = require('./models');

User.create({
  username: 'Hawan',
  password: '123123',
}).then((user) => {
  console.log(user);
});
