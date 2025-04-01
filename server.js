const next = require('next');
const express = require('express');
const voter = require('./routes/voter');
const company = require('./routes/company');
const candidate = require('./routes/candidate');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const exp = express();
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

mongoose.connection.on('error', (err) => {
	console.error('MongoDB connection error:', err);
	console.log('The application will continue, but database functionality will be limited.');
});

exp.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
exp.use(bodyParser.json());

exp.use('/company', company);
exp.use('/voter', voter);
exp.use('/candidate', candidate);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

const PORT = process.env.PORT || 3002;

try {
	app.prepare().then(() => {
		exp.get('/', (req, res) => {
			return app.render(req, res, '/homepage');
		});
		
		exp.use(handler);
		
		exp.listen(PORT, function () {
			console.log(`Server running on port ${PORT}`);
		});
	}).catch(err => {
		console.error('Error preparing Next.js app:', err);
		console.log('Starting server without Next.js support...');
		
		exp.listen(PORT, function () {
			console.log(`Server running on port ${PORT} (fallback mode)`);
		});
	});
} catch (err) {
	console.error('Critical error:', err);
	console.log('Starting server without Next.js support...');
	
	exp.listen(PORT, function () {
		console.log(`Server running on port ${PORT} (fallback mode)`);
	});
}
