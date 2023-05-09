import path from 'path';
import url from 'url';
import fs from 'fs';
import express from 'express';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users_data_filepath = path.join(__dirname, '../data/users.json');
const users_data = JSON.parse(fs.readFileSync(users_data_filepath).toString());


let router = express.Router();

// GET list of users
router.get('/users', function(req, res, next) {
  res.json(users_data);
});

// GET user by ID
router.get('/users/:id', function(req, res, next) {
  let users_matched = users_data.filter(u => u.id == req.params.id);
  if (users_matched.length < 1) {
    res.sendStatus(404);
  } else if (users_matched.length > 1) {
    res.sendStatus(500);  // User ID is not unique
  }
  res.json(users_matched[0]);
});


export default router;
