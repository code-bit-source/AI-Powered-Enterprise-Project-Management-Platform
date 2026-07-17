const express = require('express');
const app = express();

const message = {
    message: 'success 201'
};


app.get('/', (req, res) =>{
    res.send(message);
})

app.listen(3000,()=>{
    console.log(message);
    
    console.log('server is running on port 3000');
    console.log('http://localhost:3000');

})