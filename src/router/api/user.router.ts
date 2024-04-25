import express from 'express';
import usersData from '../../../data/user.data';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(usersData);
});

router.post('/', (_req, res) => {
  res.send('Saving a user!');
});

export default router;
