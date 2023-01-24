const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');

setUpAndStartServer = async () => {
    const app = express();

    app.use(express.static("public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
};

setUpAndStartServer();