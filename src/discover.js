function getDiscover() {

	var year = document.getElementById("sel1").value

	var vote = document.getElementById("sel3").value

	var time = document.getElementById("sel4").value

	//console.log(media)
	//console.log(time)
	
	axios.get('https://api.themoviedb.org/3/discover/movie/?api_key=91c710c1fcf49e9478ec4a5f59dba38d&sort_by=popularity.desc&page=1&vote_average.gte='+vote+'&year='+year+'&with_runtime.gte='+time)

	.then(function(response) {
		var object = response.data;
		//console.log(object);

		var aMovie = object.results[0];
		window.localStorage.setItem("de_1", aMovie.id)
		document.getElementById("de_1").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[1];
		window.localStorage.setItem("de_2", bMovie.id)
		document.getElementById("de_2").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[2];
		window.localStorage.setItem("de_3", cMovie.id)
		document.getElementById("de_3").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[3];
		window.localStorage.setItem("de_4", dMovie.id)
		document.getElementById("de_4").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[4];
		window.localStorage.setItem("de_5", eMovie.id)
		document.getElementById("de_5").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[5];
		window.localStorage.setItem("de_6", fMovie.id)
		document.getElementById("de_6").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[6];
		window.localStorage.setItem("de_7", gMovie.id)
		document.getElementById("de_7").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;

		var aMovie = object.results[7];
		window.localStorage.setItem("de_8", aMovie.id)
		document.getElementById("de_8").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[8];
		window.localStorage.setItem("de_9", bMovie.id)
		document.getElementById("de_9").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[9];
		window.localStorage.setItem("de_10", cMovie.id)
		document.getElementById("de_10").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[10];
		window.localStorage.setItem("de_11", dMovie.id)
		document.getElementById("de_11").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[11];
		window.localStorage.setItem("de_12", eMovie.id)
		document.getElementById("de_12").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[12];
		window.localStorage.setItem("de_13", fMovie.id)
		document.getElementById("de_13").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[13];
		window.localStorage.setItem("de_14", gMovie.id)
		document.getElementById("de_14").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;

	})
}

