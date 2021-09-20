const { User } = require('./models');

User.destroy({
  where: {
    password: '123123',
  },
}).then(() => console.log('sudah dihapus'));
