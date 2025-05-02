import express from 'express';
import Reward from '../../../database/models/reward'; // Make sure the import path matches

const router = express.Router();

// Add a new reward
router.post('/add', async (req, res) => {
  try {
    const { userId, score, rewardType } = req.body;
    const reward = await Reward.create({ userId, score, rewardType });
    res.json({ reward });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all rewards
router.get('/', async (req, res) => {
  try {
    const rewards = await Reward.findAll();
    res.json({ rewards });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
