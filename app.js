
const express = require('express');

//use module for bring code from another file to this. 
const date = require(__dirname +"/date.js");



const app = express();
const port = 3000;
const items = [];
const workItems = [];


app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

//Important!!
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    //Date
    // to use the function we need to:
    //1. write the container's name from this page.
    //2. Call the function (common way)
    const currentDate = date.getDate();

    
    res.render("list", { 
        // here, we connect the html variables with Js variables. 
        //key (html)    value(js) 
        listName: currentDate, 
        newListItemsHtml: items
    });


});

app.get('/work', (req, res) => {

    
    res.render("list", { 
        //this cotains the variables to combine. 
        listName: "work", 
        newListItemsHtml: workItems 
    });
});

app.get('/about', (req, res) => {

    //we will send this page. 
    res.render('about');
})
app.post('/', (req, res) => {
    
    //we get the data from html 
    const item = req.body.newItem;

    //
    if(req.body.list === "work") {

        workItems.push(item);

        res.redirect('/work');

    } else {
        items.push(item);

        res.redirect('/');
    }
    
    
});


app.listen(port, () => {
    console.log(`Listening for changes in ${port} port`)
});