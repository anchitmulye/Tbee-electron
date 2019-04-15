// const electron = require('electron')
// const path = require('path')
// const BrowserWindow = electron.remote.BrowserWindow
// const axios = require('axios')


function getTrending() {

	var media = document.getElementById("sel1").value

	var time = document.getElementById("sel2").value

	//console.log(media)
	//console.log(time)
	
	axios.get('https://api.themoviedb.org/3/trending/' + media + '/' + time + '?api_key=91c710c1fcf49e9478ec4a5f59dba38d')

	.then(function(response) {
		var object = response.data;
		//console.log(object);

		var aMovie = object.results[0];
		window.localStorage.setItem("tr_1", aMovie.id)
		document.getElementById("tr_1").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[1];
		window.localStorage.setItem("tr_2", bMovie.id)
		document.getElementById("tr_2").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[2];
		window.localStorage.setItem("tr_3", cMovie.id)
		document.getElementById("tr_3").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[3];
		window.localStorage.setItem("tr_4", dMovie.id)
		document.getElementById("tr_4").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[4];
		window.localStorage.setItem("tr_5", eMovie.id)
		document.getElementById("tr_5").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[5];
		window.localStorage.setItem("tr_6", fMovie.id)
		document.getElementById("tr_6").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[6];
		window.localStorage.setItem("tr_7", gMovie.id)
		document.getElementById("tr_7").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;

		var aMovie = object.results[7];
		window.localStorage.setItem("tr_8", aMovie.id)
		document.getElementById("tr_8").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[8];
		window.localStorage.setItem("tr_9", bMovie.id)
		document.getElementById("tr_9").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[9];
		window.localStorage.setItem("tr_10", cMovie.id)
		document.getElementById("tr_10").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[10];
		window.localStorage.setItem("tr_11", dMovie.id)
		document.getElementById("tr_11").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[11];
		window.localStorage.setItem("tr_12", eMovie.id)
		document.getElementById("tr_12").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[12];
		window.localStorage.setItem("tr_13", fMovie.id)
		document.getElementById("tr_13").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[13];
		window.localStorage.setItem("tr_14", gMovie.id)
		document.getElementById("tr_14").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;

	})
}

