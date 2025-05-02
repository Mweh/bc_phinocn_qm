import express from 'express';
import { sequelize } from './database';
import rewardRoutes from './features/rewardSystem/routes/reward.routes'; // Import your reward routes

const app = express();

app.use(express.json()); // Middleware to parse JSON

// Use your routes
app.use('/api/rewards', rewardRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sync with the database
sequelize.sync().then(() => {
  console.log('Database synced successfully!');
}).catch((error) => {
  console.error('Error syncing the database:', error);
});
