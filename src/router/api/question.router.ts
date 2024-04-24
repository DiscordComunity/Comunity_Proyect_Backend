import express from 'express';
import questionsData from '../../data/question.data';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(questionsData);
});

router.post('/', (_req, res) => {
  res.send('Saving a question!');
});

export default router;
