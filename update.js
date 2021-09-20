const { User } = require('./models');
// Kita lakukan query terhadap artikel
// Artikel tersebut memiliki id yang bernilai 1
const query = {
  where: { id: 1 },
};

User.update(
  {
    password: '123123',
  },
  query
)
  .then(() => {
    console.log('berhasil diupdate');
    process.exit();
  })
  .catch((err) => {
    console.error('Gagal mengupdate artikel!');
  });
