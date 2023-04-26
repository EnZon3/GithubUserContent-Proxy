const express = require('express');
const app = express();
const { default: fetch, Headers } = require("node-fetch-cjs");

app.get('/:user/:repo/:branch/:file', (req, res) => {
    let user = req.params.user;
    let repo = req.params.repo;
    let branch = req.params.branch;
    let file = req.params.file;
    console.log(`${user}/${repo}/${branch}/${file}`);

    let ghRequest = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${file}`;
    console.log(ghRequest)

    fetch(ghRequest)
        .then(response => response.text())
	    .then(data => res.send(data))
});

app.listen(8080, () => {
    console.log('ready');
});