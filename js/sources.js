$(document).ready(function(){

"use strict";

var url = 'http://newsapi.org/v2/sources?' + //All the news sources
          'apiKey=86c5da9ffa9649cebfa35b01066a3331';
var req = new Request(url); //Make a request
var newssrc = ""; // Variable for the sources received from the API

fetch(req)
    .then((response) => {
			return response.json();
		})
		.then((data) =>{
			if (data.status === "ok") {
				for (let i=0; i < data.sources.length; i++){
					newssrc = "<strong><a href=news.html?source=" + data.sources[i].id + "> "; // Passing the souce ID to the next page
					newssrc += data.sources[i].name + "</a></strong><br>"; // Source title
					newssrc += data.sources[i].description + "<br>";       // Description
					newssrc += data.sources[i].url + "<br></div>";         // URL
					document.getElementById("show-data").innerHTML += newssrc + "<br>";
				}
			} else {
				document.getElementById("show-data").innerHTML = "News sources could not be fetched. Please try again";
			}
		});
});
