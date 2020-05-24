/*If we are creating a website with very similar content for example to-do website where the person can have home todo list
work todo list, grocery todo list -- all of these have similar content. only some content of them will be changed. So, if
we dont use templates then in that case we have to write separate HTML file everytime user creates a new todo list. To prevent
that we use templates which keeps the core content intact and the differences between the file can be replaced at run time.
This is why we need templates and templating.*/
/*There are several tools which helps you create a template:
1. EJS -- Embedded JavaScript template
2. Handlebars.js
3. Pug also known as jade
and many more
We will use EJS
*/



const express = require('express');
const bodyParser = require('body-parser');
//To access local modules we provide the complete filename
const date = require(__dirname + "/date.js");
//console.log(date);
const newTodoItems = ["Buy Food","Cook Food","Eat Food"];
const workTodo = [];

const app = express();

app.set('view engine','ejs');   //Tells our app to use ejs as view engine
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  //let currentDay = today.getDay();
  //let day;
  // let arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // res.render('list',{kindOfDay:arr[currentDay]});
  const dat = date.getDate();
  res.render("list",{listTitle:dat,newListItem:newTodoItems});
});

//So everytime we render the page we need to provide both variables

app.post("/",function(req,res){
  newTodoItem = req.body.newItem;
  let listType = req.body.list;
  if(listType=="Work")
  {
    workTodo.push(newTodoItem);
    res.redirect("/work");
  }
  else {
    newTodoItems.push(newTodoItem);
    res.redirect("/");
  }
  //res.render("list",{newListItem:newTodoItem});
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItem:workTodo});
});

app.post("/work",function(req,res){
  let workItem = req.body.newItem;
  workTodo.push(workItem);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("The server started at port 3000");
})
