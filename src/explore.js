//const electron = require('electron')
// const path = require('path')
// const BrowserWindow = electron.remote.BrowserWindow
// const axios = require('axios')

function getIMDb(key) {
	//axios.get('https://www.omdbapi.com/?t='+ encodeURI(key)+ '&apikey=4ffbd6ec')
	axios.get('https://api.themoviedb.org/3/search/movie?api_key=91c710c1fcf49e9478ec4a5f59dba38d&query='+encodeURI(key)+'&page=1')

	.then(function(response) {
		var object = response.data;
		//console.log(object)

		if (object.total_results==0){
			//console.log(data.Error)
			document.getElementById("error").innerHTML = "No moive found";
			setTimeout(functionToDisappearInnerHTML, 2000);
			function functionToDisappearInnerHTML() {
			    document.getElementById("error").innerHTML = ""; //Clears the innerHTML
			}
		}

		else{


			//var movies = object.getJSONArray("results");
			var bestMovie = object.results[0];
			window.localStorage.setItem("poster", bestMovie.id)
			document.getElementById("title").innerHTML = bestMovie.title;
			document.getElementById("year").innerHTML = bestMovie.release_date;
			document.getElementById("rated").innerHTML = bestMovie.vote_average;
			document.getElementById("released").innerHTML = bestMovie.overview;
			//document.getElementById("genre").innerHTML = data.Genre;

			if (bestMovie.poster_path=="null" || bestMovie.backdrop_path=="null"){
				document.getElementById("poster").src = "../assets/images/No-image.jpg";
				document.getElementById("back").src = "../assets/images/No-image.jpg";
			}
			else
				//console.log(image);
				document.getElementById("back").src = "http://image.tmdb.org/t/p/w500"+ bestMovie.backdrop_path;
				document.getElementById("poster").src = "http://image.tmdb.org/t/p/w92"+ bestMovie.poster_path;
			
			var secMovie = object.results[1];
			window.localStorage.setItem("1_image", secMovie.id)
			//document.getElementById("1_title").innerHTML = secMovie.title;
			//document.getElementById("1_about").innerHTML = secMovie.vote_average;

			if (secMovie.poster_path=="null"){
				document.getElementById("1_image").src = "../assets/images/No-image.jpg";
			}
			else
				document.getElementById("1_image").src = "http://image.tmdb.org/t/p/w92"+ secMovie.poster_path;

			var thiMovie = object.results[2];
			window.localStorage.setItem("2_image", thiMovie.id)
			// document.getElementById("2_title").innerHTML = thiMovie.title;
			// document.getElementById("2_about").innerHTML = thiMovie.vote_average;

			if (thiMovie.poster_path=="null"){
				document.getElementById("2_image").src = "../assets/images/No-image.jpg";
			}
			else
				document.getElementById("2_image").src = "http://image.tmdb.org/t/p/w92"+ thiMovie.poster_path;


			var fMovie = object.results[3];
			window.localStorage.setItem("3_image", fMovie.id)
			// document.getElementById("3_title").innerHTML = fMovie.title;
			// document.getElementById("3_about").innerHTML = fMovie.vote_average;

			if (fMovie.poster_path=="null"){
				document.getElementById("3_image").src = "../assets/images/No-image.jpg";
			}
			else
				document.getElementById("3_image").src = "http://image.tmdb.org/t/p/w92"+ fMovie.poster_path;

			
			var lMovie = object.results[4];
			window.localStorage.setItem("4_image", lMovie.id)
			// document.getElementById("4_title").innerHTML = lMovie.title;
			// document.getElementById("4_about").innerHTML = lMovie.vote_average;

			if (lMovie.poster_path=="null"){
				document.getElementById("4_image").src = "../assets/images/No-image.jpg";
			}
			else
				document.getElementById("4_image").src = "http://image.tmdb.org/t/p/w92"+ lMovie.poster_path;

			var mMovie = object.results[5];
			window.localStorage.setItem("5_image", mMovie.id)
			// document.getElementById("5_title").innerHTML = mMovie.title;
			// document.getElementById("5_about").innerHTML = mMovie.vote_average;

			if (mMovie.poster_path=="null"){
				document.getElementById("5_image").src = "../assets/images/No-image.jpg";
			}
			else
				document.getElementById("5_image").src = "http://image.tmdb.org/t/p/w92"+ mMovie.poster_path;

			var nMovie = object.results[6];
			window.localStorage.setItem("6_image", nMovie.id)
			// document.getElementById("6_title").innerHTML = nMovie.title;
			// document.getElementById("6_about").innerHTML = nMovie.vote_average;

			if (nMovie.poster_path=="null"){
				document.getElementById("6_image").src = "../assets/images/No-image.jpg";
			}
			else
				document.getElementById("6_image").src = "http://image.tmdb.org/t/p/w92"+ nMovie.poster_path;

			
		}

	})
}

const search = document.getElementById('search')

search.addEventListener('keypress', function(event)
{
	var key = event.which || event.keyCode;
	if (key == 13){
		var tag = document.getElementById('search').value;
	}
	//console.log(key);
	getIMDb(tag);
})