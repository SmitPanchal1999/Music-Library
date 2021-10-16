var express = require('express');
var session=require('express-session')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors=require('cors');
var app = express();
var Users = require('./Model/login');
var Songs = require('./Model/songs');

app.use(session({secret: "session "}));

mongoose.connect('mongodb://localhost:27017/music1',function (err,response){
if (err) { console.log('Database is not  connected'); }else{
    console.log('Database is connected');
  }
} 
);
app.use(cors());
app.set('port',process.env.port || 3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
   });


   app.delete('/delsong/:songname',function(req,res){

    console.log("in deldest method");
    console.log(req.params.songname);
    song=req.query.data;
    Songs.find({"songname":req.params.songname},function(err,dest){
      if(err)
      {
        res.sendStatus({status:400})
        console.log("song not found")
      }
      else{
        console.log(dest)
        Songs.remove({"songname":req.params.songname,"deleted":null},function(err){
          if(err)
          {
            console.log("Song not delete")
            res.send(400)
          }
          else
          {
            console.log("song removed")
            res.send({"message":"song remove"}) 
          }})
      }
    })
  });

   app.post('/addSongs',function(req,res){
        console.log("In add song")     
        songname=req.body.songname;
        
        album=req.body.album;
        console.log(songname);
        
        artist=req.body.artist;
        location=req.body.location;
        var song=new Songs();
        song.Songname = songname;
        song.album=album;
        console.log(song.Songname);
        
        song.artist=artist;
        song.location=location;
        song.save(function(err,result){
            if(err)
            {
                console.log("error occur");
                console.log(err);
                res.send({success:'',status:500})
            }else{
                console.log("song added");
                res.send({success:'',status:200})
            }
        });
    });

   app.post('/register',function(req,res){
    name=req.body.username;
    pass=req.body.password;
    email=req.body.email;
    
    console.log(req.body.username + req.body.email);
    var user=new Users();
    user.username=name;
    user.email=email;
    user.password=pass;
    user.save(function(err,result){
      if(err)
      {
        console.log("error occur");
        console.log(err);
        res.send({success:'',status:500})
      }else{
        console.log("user added");
        res.send({success:'',status:200})

      }

    });
  });

  app.post('/login',function(req,res){
    console.log("in login");
    //console.log(req.body.username);
    //console.log(req.body.password);
    name=req.body.username;
    password=req.body.password;
    Users.findOne({"username":name},function(err,user)
    {
        if(err)
        {
            console.log(err);
            alert("file");
        }
        else{}
        if(user){
            
        if(user.username==name){
            //console.log(user.username);
           
            req.session.user=name
            req.session.save()
           
            console.log(req.session.user,"correct crediantials.....");
         return res.send({status:'success',uname:name});
        }}
        else{
            console.log("worng");
            return res.send({username:req.session.user,status:'fail'});
        }   
    });
    
    
    /*
    app.post('/songadd',function(req,res){
        console.log("In add song")        
        songname=req.body.songname;
        album=req.body.album;
        artist=req.body.artist;
        location=req.body.location;
        var song=new Songs();
        song.songname = songname;
        song.album=album;
        song.artist=artist;
        song.location=location;
        song.save(function(err,result){
          if(err)
          {
            console.log("error occur");
            console.log(err);
            res.send({success:'',status:500})
          }else{
            console.log("song added");
            res.send({success:'',status:200})
    
          }
    
        });
      });*/
    
 });
