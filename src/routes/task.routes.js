const express = require('express');
const router = express.Router();

const Question = require("../models/task");

/* router.get('/', async (req, res) => {
    const questions = await Question.find();
    console.log(questions);
    res.json("recived");

  }); */

  router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
  });

// GET all Tasks
router.get('/:id', async (req, res) => {
  const questions = await Question.findById(req.params.id);
  res.json(questions);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { question, group } = req.body;
  const questions = new Question({question, group});
  await questions.save();
  res.json({status: 'Task Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { question, group } = req.body;
  const newQuestion = { question, group };
  await Question.findByIdAndUpdate(req.params.id, newQuestion);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Question.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});
 

module.exports = router;