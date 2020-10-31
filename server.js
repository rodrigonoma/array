const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('ok');
});

app.listen(3000,()=>{
    console.log('Server is runnig at port 3000');
});