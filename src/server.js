const express = require("express");
const app = express();
const route = require('./route');

app.set('port', process.env.PORT || 3050);

//MiddleWare
app.use(express.json());

// app.use('/',(req,res)=>{
//     res.send("Node Express Started");
// });
app.use('/api',route);

app.listen(app.get('port'),()=>{
    console.log("Server Started on Port : "+app.get('port'));
});
