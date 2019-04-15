const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')

const remote = electron.remote

let doc = {}

function detail(){

	var id = localStorage.getItem("key");
	var movie = localStorage.getItem(id)
	//document.getElementById("title").innerHTML = localStorage.getItem(id);
	getData(movie);
	getTrailer(movie);


}

function getData(id){

	//console.log(id);

	axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=91c710c1fcf49e9478ec4a5f59dba38d')

	.then(function(response) {
		var object = response.data;
		//console.log(object);
		var txt;
		txt = "Genre: ";
		document.getElementById("genre").innerHTML = txt.bold()
		for (var i = 0; i < object.genres.length; i++) {
			document.getElementById("genre").innerHTML = document.getElementById("genre").innerHTML + object.genres[i].name + "    ";
		}

		document.getElementById("otitle").innerHTML = object.original_title ;
		if(object.original_language!= "en"){
		document.getElementById("title").innerHTML =  "(" + object.title + ")";
		}

		txt = "Release Date: ";
		document.getElementById("date").innerHTML = txt.bold()  + object.release_date;

		txt = "Runtime(min.): ";
		document.getElementById("time").innerHTML = txt.bold() + object.runtime;

		txt = "Average Vote: ";
		document.getElementById("star").innerHTML = txt.bold() + object.vote_average;

		document.getElementById("poster").src = "http://image.tmdb.org/t/p/w185"+ object.poster_path;
		
		txt = "Story: ";
		document.getElementById("story").innerHTML = txt.bold() + object.overview;

		var d = new Date();
		var date = d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear();

		var doc = {m_id: object.id, m_name: object.title, m_genre: object.genres, m_poster: object.poster_path, m_rewatch: 0, m_score: 0,m_date: date};
		//window.sessionStorage.setItem("movie", )
		window.sessionStorage.setItem('movie', JSON.stringify(doc));

	})
}

function getTrailer(id){

	//console.log(id);

	axios.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=91c710c1fcf49e9478ec4a5f59dba38d')

	.then(function(response) {
		var obj = response.data;
		var object = obj.results;
		var key = 'Trailer';

		// iterate over each element in the array
		for (var i = 0; i < object.length; i++){
		  // look for the entry with a matching `code` value
		  if (object[i].type == key){
		    var path = object[i].key;
		    //console.log(path);
		    document.getElementById("trailer").src = "https://www.youtube.com/embed/" + path;
		  }
		}
		
	})
}

const closeBtn = document.getElementById('close')

closeBtn.addEventListener('click', function(event)
{
	var window = remote.getCurrentWindow();
	window.close()
})


const watchBtn = document.getElementById('watchBtn')

watchBtn.addEventListener('click', function(event){
	const id = localStorage.getItem("login_id")

	//var input = window.sessionStorage.getItem("movie")
	var input = JSON.parse(sessionStorage.movie);
	var score = document.getElementById("message").innerText;
	input.m_score = score;
	if (score > 8){
		input.m_rewatch = 1;
	}
	//console.log(input)

	var Datastore = require('nedb')
	db = new Datastore({ filename: './database/database.db' , autoload: true});
	db.loadDatabase(function (err) {    // Callback is optional
	  // Now commands will be executed
	});

	db.update({ _id: id }, { $push: { movie: input } }, {}, function () {
	  // Now the fruits array is ['orange', 'pear']
	});

})