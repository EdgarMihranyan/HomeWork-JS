import { resolve } from 'path';
import express from 'express';
import { writeFile, existsSync, readFile } from './utils/fs-promise.js';

const checkNames = async (name) => {
     if (name[0] === name[0].toLowerCase() || name.length < 4) {
          throw new Error('Name error');
     }
     // eslint-disable-next-line no-plusplus
     for (let i = 0; i < name.length; i++) {
          if (!(name[i].toUpperCase() >= 'A' && name[i].toUpperCase() <= 'Z')) {
               throw new Error('Name error');
          }
     }
     return name;
};
const checkProperty = async (user) => {
     const typeUser = {
          username: true,
          fNname: true,
          lName: true,
          age: true,
          password: true,
     };
     const result = Object.keys(typeUser).join('') === Object.keys(user).join('');
     if (!result) throw new Error('User property\'s not a found');
};
const checkAge = async (age) => {
     if (!(parseFloat(age) && age <= 150 && age > 0)) {
          throw new Error('Age error');
     }
     return age;
};
const createUser = async (path, users, user) => {
     const isUniqueUser = users.find((u) => u.username === user.username);
     if (isUniqueUser) {
          throw new Error('User exists');
     }
     users.push(user);
     writeFile(path, JSON.stringify(users));
};
const deleteUserByIndex = async (path, users, index) => {
     if (index >= users.length) {
          throw new Error('User not exists');
     }
     const deletedUser = users[index];
     const newUsers = users.filter((_, i) => i !== index);
     writeFile(path, JSON.stringify(newUsers));
     return deletedUser;
};
const updateUserByIndex = async (path, users, index, updProp) => {
     if (index >= users.length) {
          throw new Error('User not exists');
     }
     const updUser = users[index];
     Object.keys(updProp).forEach((key) => {
          if (key in updUser) {
               updUser[key] = updProp[key];
          } else {
               throw new Error('This property not a found');
          }
     });
     // eslint-disable-next-line no-param-reassign
     users[index] = updUser;
     writeFile(path, JSON.stringify(users));
     return updUser;
};

const tryParsFile = async (path) => {
     const users = JSON.parse(await readFile(path));
     if (!Array.isArray(users)) {
          const res = await writeFile(path, JSON.stringify([]));
          return res;
     }
     return false;
};

const validateFile = async (path) => {
     if (!existsSync(path)) {
          const res = await writeFile(path, JSON.stringify([]));
          return res;
     }
     try {
          await tryParsFile(path);
     } catch (err) {
          const res = await writeFile(path, JSON.stringify([]));
          return res;
     }
     return false;
};
const app = express(); // Important
const path = resolve('users.json');
// aaaaa
const port = 3000;

app.use(express.json()); // Important

app.get('/users/', async (req, res) => {
     try {
          await validateFile(path);
          const users = JSON.parse(await readFile(path));
          res.send(JSON.stringify(users));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }));
     }
});
app.get('/users/:index/', async (req, res) => {
     try {
          await validateFile(path);
          const users = JSON.parse(await readFile(path));
          const index = +req.params.index;
          res.send(JSON.stringify(users[index]));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }));
     }
});
app.post('/users/', async (req, res) => {
     try {
          const user = req.body;
          await checkProperty(user);
          await checkNames(user.fNname);
          await checkNames(user.lName);
          await checkAge(user.age);
          await validateFile(path);
          const users = JSON.parse(await readFile(path));
          await createUser(path, users, req.body);
          res.status(201).send(JSON.stringify(req.body));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }));
     }
});
app.delete('/users/:index/', async (req, res) => {
     try {
          await validateFile(path);
          const users = JSON.parse(await readFile(path));
          const index = +req.params.index;
          const deletedUser = await deleteUserByIndex(path, users, index);
          res.status(200).send(JSON.stringify(deletedUser));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }));
     }
});
app.patch('/users/:index/', async (req, res) => {
     try {
          const user = req.body;
          console.log('halala');
          await checkProperty(user);
          await checkNames(user.fNname);
          await checkNames(user.lName);
          await checkAge(user.age);
          await validateFile(path);
          await validateFile(path);
          const users = JSON.parse(await readFile(path));
          const index = +req.params.index;
          const updUser = await updateUserByIndex(path, users, index, user);
          res.status(201).send(JSON.stringify(updUser));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }));
     }
});

app.listen(port, () => {
     // eslint-disable-next-line no-console
     console.log(`Example app listening on port ${port}!`);
});
