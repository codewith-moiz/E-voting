const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./config/database');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Create express server
const app = express();
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const routes = require('./routes');
const handler = routes.getRequestHandler(nextApp);

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle MongoDB connection errors gracefully
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  console.log('The application will continue, but database functionality will be limited.');
});

// Set up routes
app.get('/', (req, res) => {
  return nextApp.render(req, res, '/homepage');
});

const PORT = process.env.PORT || 3002;

// Start the server
nextApp.prepare().then(() => {
  app.use(handler).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the application at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error preparing Next.js app:', err);
  process.exit(1);
}); 