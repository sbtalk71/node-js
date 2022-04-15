const express=require('express');
const app=express();
const PORT=5000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.set('views',__dirname+'/views/');

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials/'
}));

app.get("/",(req,res)=>{
    res.render('index',{name:'Shantanu',message:'Good Evening'});
});
console.log(__dirname);

app.listen(PORT,()=>{
    console.log("Server started on PORT no "+PORT);
});
