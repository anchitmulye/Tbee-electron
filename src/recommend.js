function getRecommend(){
	const id = localStorage.getItem("login_id")
	//console.log(id)

	if(id==""|| id == null){
		document.getElementById("error").innerHTML = "Please login to see the details" 
	}

	else{

		var Datastore = require('nedb')
		db = new Datastore({ filename: './database/database.db' , autoload: true});
		db.loadDatabase(function (err) {    // Callback is optional
		  // Now commands will be executed
		});

		db.findOne({ _id: id }, function (err, doc) {

			var movieList = doc.movie
			if(movieList[0] == null){
				document.getElementById("error").innerHTML = "Please watch and rate movies first"
			}
			else{

				axios.get('https://api.themoviedb.org/3/movie/' + movieList[0].m_id+ '/recommendations?api_key=91c710c1fcf49e9478ec4a5f59dba38d&page=1')

				.then(function(response) {
					var object = response.data;
					//console.log(object);

					var aMovie = object.results[0];
					window.localStorage.setItem("re_1", aMovie.id)
					document.getElementById("re_1").src = "http://image.tmdb.org/t/p/w92"+ aMovie.poster_path;
					var bMovie = object.results[1];
					window.localStorage.setItem("re_2", bMovie.id)
					document.getElementById("re_2").src = "http://image.tmdb.org/t/p/w92"+ bMovie.poster_path;
				})

				axios.get('https://api.themoviedb.org/3/movie/' + movieList[1].m_id +'/recommendations?api_key=91c710c1fcf49e9478ec4a5f59dba38d&page=1')

				.then(function(response) {
					var object = response.data;
					//console.log(object);

					var aMovie = object.results[5];
					window.localStorage.setItem("re_3", aMovie.id)
					document.getElementById("re_3").src = "http://image.tmdb.org/t/p/w92"+ aMovie.poster_path;
					var bMovie = object.results[6];
					window.localStorage.setItem("re_4", bMovie.id)
					document.getElementById("re_4").src = "http://image.tmdb.org/t/p/w92"+ bMovie.poster_path;
				})

				axios.get('https://api.themoviedb.org/3/movie/' + movieList[3].m_id +'/recommendations?api_key=91c710c1fcf49e9478ec4a5f59dba38d&page=1')

				.then(function(response) {
					var object = response.data;
					//console.log(object);

					var aMovie = object.results[8];
					window.localStorage.setItem("re_5", aMovie.id)
					document.getElementById("re_5").src = "http://image.tmdb.org/t/p/w92"+ aMovie.poster_path;
					var bMovie = object.results[10];
					window.localStorage.setItem("re_6", bMovie.id)
					document.getElementById("re_6").src = "http://image.tmdb.org/t/p/w92"+ bMovie.poster_path;
				})

				axios.get('https://api.themoviedb.org/3/movie/' + movieList[5].m_id +'/recommendations?api_key=91c710c1fcf49e9478ec4a5f59dba38d&page=1')

				.then(function(response) {
					var object = response.data;
					//console.log(object);

					var aMovie = object.results[5];
					window.localStorage.setItem("re_7", aMovie.id)
					document.getElementById("re_7").src = "http://image.tmdb.org/t/p/w92"+ aMovie.poster_path;
					var bMovie = object.results[8];
					window.localStorage.setItem("re_8", bMovie.id)
					document.getElementById("re_8").src = "http://image.tmdb.org/t/p/w92"+ bMovie.poster_path;
				})

			}
		})
	}
}