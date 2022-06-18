const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;



app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/html/index2.html'))
});


app.get('/events',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/html/events.html'))
});

app.get('/brochure',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/html/brochure.html'))
});

app.get('/about',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/html/about.html'))
});






app.listen(port,() =>{
	console.log('listening on port : ',port);
});