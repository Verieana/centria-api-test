$(document).ready(function(){

"use strict";

var params = new URLSearchParams(document.location.search.substring(1)); //GET parameters
var newssrc = params.get("source"); // News source from previous page
var url = 'https://newsapi.org/v2/everything?' // All news
	      + 'sources=' + newssrc + '&'          // from the souce the user clicked
				+ 'apiKey=86c5da9ffa9649cebfa35b01066a3331';
var req = new Request(url); //Make a request
var news = ""; // Variable for the news received from the API

fetch(req)
    .then((response) => {
			return response.json();
		})
		.then((data) =>{
			if (data.status === "ok") {
				for (let i=0; i < data.articles.length; i++){
					news = "<div class='w3-container w3-cell'> <img src='";
					news += data.articles[i].urlToImage + "' style='width:200px'></div>"; // Article thumbnail
					news += "<div class='w3-container w3-cell'>";
					news += "<h4>" + data.articles[i].title + "</h4></br>";								// Article title
					news += data.articles[i].description + "</br>";												// Article description
					news += "<p class='w3-small'>" + data.articles[i].author + ", ";			// Article author
					news += data.articles[i].publishedAt.slice(0, 10) + "</br></p></div>";// Article published date
					document.getElementById("show-data").innerHTML += news + "</br>";
				}
			} else {
				document.getElementById("show-data").innerHTML = "News articles could not be fetched. Please try again";
			}
		});
});
