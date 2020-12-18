import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json';

const app = express();

import HistoriRouter from './routes/history.routes';

app.set('pkg', pkg);

app.use(morgan('dev'));

app.get('/',(req,res) =>{
    res.json({
        autor:app.get('pkg').author 
    })
})

app.use('/histori',HistoriRouter);


export default app;