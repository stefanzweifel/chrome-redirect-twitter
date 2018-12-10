'use strict';

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {
            redirectUrl: "https://mobile.twitter.com" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
        };
    },
    {
        urls: [
            "*://twitter.com/*",
            "*://www.twitter.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

