var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var ip=process.env.IP;


//app setup and static dir
app.set('view engine','ejs');
app.use('/public',express.static(process.cwd()+'/public'));


//route
app.get('/',function(req,res){
  res.render('pages/home');
});


//start sever
app.listen(port,ip,function(){
  console.log('Server is listening on port '+port+'...');
});
