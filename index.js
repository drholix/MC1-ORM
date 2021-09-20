const express = require('express');
const app = express();
const port = 3000;

const { User } = require('./models');

app.use(express.json());

app.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.status(200).json(users);
  });
});

app.get('/users/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => {
    res.status(200).json(user);
  });
});

app.post('/users', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(422).json("Can't create");
    });
});

// app.put('/articles/:id', (req, res) => {
//   Article.update(
//     {
//       title: req.body.title,
//       body: req.body.body,
//       approved: req.body.approved,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((article) => {
//       res.status(200).json('Article updated successfully');
//     })
//     .catch((err) => {
//       res.status(422).json("Can't update article");
//     });
// });

// app.delete('/articles/:id', (req, res) => {
//   Article.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then(() => {
//       res.status(200).json('Article deleted successfully');
//     })
//     .catch((err) => {
//       res.status(422).json('Can’t delete article');
//     });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
