const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static('static'));

app.get('/',(req,res)=>{
	res.render('home')
});

app.get('/events',(req,res)=>{
	res.render('events')
});

app.get('/register',(req,res)=>{
	res.render('register')
})


app.listen(port,() =>{
	console.log('listening on port : ',port);
});