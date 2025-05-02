import express from 'express';
import { sequelize } from './database'; // Make sure sequelize is properly exported
import rewardRoutes from './features/rewardSystem/routes/reward.routes'; // Correct path for reward routes

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use reward routes for the /api/rewards path
app.use('/api/rewards', rewardRoutes);

// Test route for 'Hello World!'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

// Sync database and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });
