const express = require('express');
const app = express();
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
// const authRouter = require('./routes/auth.routes.js');


const message = {
    message: 'success 201'
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// const gettoken = require('./utils/generate_token');
// const generatetoken  =  () =>{
//   const token = gettoken('1234567890');
//   console.log(token);
// }
app.use('/api/auth', require('./routes/auth.routes.js'));
app.get('/', (req, res) =>{
    res.send(message);
})

app.listen(3000,()=>{
    console.log(message);
    connectDB();
    // generatetoken();
    console.log('server is running on port 3000');
    console.log('http://localhost:3000');

})