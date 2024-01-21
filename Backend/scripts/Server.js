const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const PORT = 6789;
const cors = require('cors');
const fs = require('fs');
const fs1 = require('fs-extra');
const path = require('path');
const { spawn } = require("child_process");

app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors(({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
})))


app.get("/", (req, res) => {
    res.send("<h1>Helloo!!!!</h1>")
})

function RunFile() {
    const pathtoFileForExecution = path.join('../scripts/', 'CustomFile.js');

    const childProcess = spawn("node", [pathtoFileForExecution]);

    childProcess.stdout.on("data", data => {
        console.log(`Script output: ${data}`);
    });

    childProcess.stderr.on("data", data => {
        console.error(`Script error: ${data}`);
    });

    childProcess.on("close", code => {
        console.log(`Script process exited with code ${code}`);
    });
}


app.post("/Create", async (req, res) => {

    const name = req.body.TokenNameis;
    const unit = req.body.TokenUnitis;

    const FileInput = `
    // SPDX-License-Identifier : UNLICENSED

    pragma solidity ^0.8.20;

   import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Input is ERC20 {
    address payable public Owner;

    constructor() ERC20("${name}", "${unit}") {
        Owner = payable(msg.sender);
        _mint(Owner, 1000 * (10 ** decimals()));
    }
}
    `
    const pathtofile = path.join('../contracts/', 'Input.sol');
    fs.writeFileSync(pathtofile, FileInput);
    RunFile();
    res.status(200).send("ok Done");
});

app.listen(PORT, () => {
    console.log(`Server is On Baby ${PORT}`)
})