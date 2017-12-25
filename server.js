
const express =require('express');
var app =express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{

    res.send({
        name:'Ishanka',
        Age:25
    });
});
app.get('/about',(req,res)=>{

    res.send('About Page.');
});
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});