const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const currentlyDate = today.toLocaleDateString("en-US", options);
    console.log(currentlyDate)
    
    res.render("list", { todayHtml: currentlyDate });
});

app.listen(port, () => {
    console.log(`Listening for changes in ${port} port`)
});