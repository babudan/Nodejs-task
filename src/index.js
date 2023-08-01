const express = require('express');
const route = require('./route/route.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);
//----------handling wrong api edge case--------------------------------------------
app.use((req, res, next) => {
    res.status(404).send({ status: false, error: "path not found" });
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});