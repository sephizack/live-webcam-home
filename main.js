const express = require('express')
const app = express()
const fs = require('fs');

var cmdArgs = process.argv.slice(2);

app.use('/public', express.static('public'));
app.set('json spaces', 4);

app.set('views', './views');
app.set('view engine', 'pug');

app.use((req,res) => {
        res.render('home', {
            title: 'Webcam',
            refresh: cmdArgs.length > 0 ? cmdArgs[0] : 5
        });
});

app.listen(7799, () => console.log('Listening on port 7799!'))
