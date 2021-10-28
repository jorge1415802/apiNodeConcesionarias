const app = require("./src/server")
require('dotenv').config();

const main = async() => {
    app.listen(process.env.PORT,() => {
        console.log(`Server on port ${process.env.PORT}`);
    });
}

main();


