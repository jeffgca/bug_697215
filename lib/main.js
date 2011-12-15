const tabs = require("tabs");
const data = require("self").data;

//console.log(data.url("compact.xrmhC5EAhEY.css"));

let panel = require("panel").Panel({
  //contentURL: "https://news.google.ca/"
  contentURL: data.url("reddit.html"),
  height: 350,
  width: 500
});

require("widget").Widget({
    id: "some-id",
    label: "anchored",
    contentURL: "http://www.mozilla.org/favicon.ico",
    panel: panel
});
