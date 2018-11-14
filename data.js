var mysql= require('mysql');
var faker= require('faker');
var express= require('express');
var passport= require('passport');
var bodyParser= require('body-parser');
var localStrategy= require('passport-local');
var app=express();
/*
app.use(require('express-session')({
    secret:"Rusty is the best",
    resave:false,
    saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
*/
var con = mysql.createConnection({
    /*orgid:4,
    coachingName: "abc",
    attendance:6,
    amount:7,
    hw:10,
    offlineTest:5,
    onlineTest:4,
    enq:2,
    fee:3,
    total:64,
   freeRelease: 42*/
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'org'
});
con.connect(function(err){
    if(err) 
    throw err;
    else
   {
       var values= new Array(100); var a=1;
    for (var i=0;i<100;i++)
    {
    var v=['4','MNO',Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1),a++];             
    values[i]=v;
    }
    con.query("INSERT INTO MNO (orgid,name,attendance,announcement,homeWork,offlineTest,onlineTest,enq,fee,total,freeResource,date) VALUES ?",[values],function (err,result){
        if(err)
        throw err;
        else
        console.log("added");
    });
       
   }
    // con.query("CREATE TABLE coaching  (orgid VARCHAR(255),date VARCHAR(255),activity VARCHAR(255),attendance VARCHAR(255),announcement VARCHAR(255),homework VARCHAR(255),offlineTest VARCHAR(255),onlineTest VARCHAR(255),enq VARCHAR(255),fee VARCHAR(255),total VARCHAR(255),freeResource VARCHAR(255))",function(err,result){
    // if(err)
    // throw err;
    // else
    // console.log("table created");        
    // });
    // con.query("create table activity (orgid VARCHAR(255),date VARCHAR(255),act VARCHAR(255))",function(err,result){
    //   if(err) throw err ;
    //   else
    //   {
        //   var values=[
        //       ['4','1','7'],
        //       ['4','2','8'],
        //       ['4','3','9'],
        //       ['4','4','11'],
        //       ['8','1','7'],
        //       ['8','2','10'],
        //       ['8','3','6'],
        //       ['8','4','8'],
        //       ['12','1','7'],
        //       ['12','2','10'],
        //       ['12','3','7'],
        //       ['12','4','8'],
        //       ['4','5','4'],
        //       ['4','6','6'],
        //       ['8','5','9'],
        //       ['8','6','6'],
        //       ['12','5','7'],
        //       ['12','6','4'],
        //       ['4','7','10'],
        //       ['4','8','6'],
        //       ['8','7','9'],
        //       ['8','8','10'],
        //       ['4','7','1'],
        //       ['4','8','9'],
        //       ];
        // con.query("insert into activity (orgid,date,act) VALUES ?",[values],function(err,result){
        //     if(err)
        //     throw err;
        //     else
        //     {
        //         // console.log(result);
        //     }
            
        //
        });   
       
    
/*
passport.serializeUser(con.serializeUser());
passport.deserializeUser(con.deserialzeUser());
*/
 //   var sql="INSERT INTO org(orgid,coachingName ,attendance,announcement,homeWork ,offlineTest ,onlineTest ,enq ,fee ,total , freeResource,signups,studentNo,csm,location,instituteNo,downloads) VALUES ?";
 /*   var values=[
        ['4','abc','6','7','10','5','4','2','3','64','42'],
        ['8','xyz','2','4','3','4','6','4','6','32','30'],
        ['12','pqr','8','8','6','8','5','8','9','68','0']
        ];
   var adr = 'xyz';
    var ad = '8';
    //var sql='SELECT * FROM institutes';
    var sql="CREATE TABLE org(orgid VARCHAR(255),coachingName VARCHAR(255),attendance VARCHAR(255),announcement VARCHAR(255),homeWork VARCHAR(255),offlineTest VARCHAR(255),onlineTest VARCHAR(255),enq VARCHAR(255),fee VARCHAR(255),total VARCHAR(255), freeResource VARCHAR(255)  ,  signups VARCHAR(255),studentNo VARCHAR(255),csm VARCHAR(255),location VARCHAR(255),instituteNo VARCHAR(255),  downloads VARCHAR(255))";

    var values=[
        ['4','abc','6','7','10','5','4','2','3','64','42','446','645','smita','delhi','156','487'],
        ['8','xyz','2','4','3','4','6','4','6','32','30','446','645','mamik','kota','156','487'],
        ['12','pqr','8','8','6','8','5','8','9','68','0','446','645','raunak','kanpur','156','487']
        ];
   
///////////////////////////routes/////////////////////////////
app.get("/",function(req,res){
    con.query("SELECT * FROM org", function(err,result){
       if(err){//console.log(result);
       throw err;
       }
       else{
        console.log(result);
        res.render("index.ejs",{result:result});
         }});
});

app.get("/show/:id",function(req,res){
    //console.log(req.params.id)
    con.query("SELECT * FROM org WHERE orgid=?",[req.params.id],function(err,result){
      if(err) throw err;
      else{
          //console.log(result);
   res.render("show.ejs",{r:result[0]}); 
   //console.log(result);
      }
      
    });
});
    
*/
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server running....");
});