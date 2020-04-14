const express = require('express');
const path = require('path');

// App initialization
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

// Start the app
app.listen(process.env.PORT || 5000, function() {
    console.log("Server started")
})