"use strict";

const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const fs = require('fs');

var subreddits = [
//  "joinrobin",
  "joinrhino",
  "joinsquirrel",
  "joinweasel"
];

function checkSubreddit(name) {
  request("https://reddit.com/r/"+name, (err, res, body) => {
    let $ = cheerio.load(body);
    let msg = $("code").text().trim();
    fs.appendFileSync(name+".txt", msg+"\n");
  });
}

async.map(subreddits, checkSubreddit);
