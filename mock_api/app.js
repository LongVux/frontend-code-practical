import path from 'path';
import url from 'url';
import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import index_router from './routes/index.js';
import api_router from './routes/api.js';


let app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index_router);
app.use('/api', api_router);


export default app;
