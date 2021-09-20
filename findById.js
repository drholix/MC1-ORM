const { User } = require('./models');

User.findOne({
  where: { id: 1 },
}).then((user) => console.log(user));
