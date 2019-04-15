const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')
const ipc = electron.ipcRenderer


function getPopular() {
	
	axios.get('https://api.themoviedb.org/3/movie/popular?api_key=91c710c1fcf49e9478ec4a5f59dba38d')

	.then(function(response) {
		var object = response.data;
		//console.log(object);

		var aMovie = object.results[0];
		window.localStorage.setItem("p_1", aMovie.id)
		document.getElementById("p_1").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[1];
		window.localStorage.setItem("p_2", bMovie.id)
		document.getElementById("p_2").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[2];
		window.localStorage.setItem("p_3", cMovie.id)
		document.getElementById("p_3").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[3];
		window.localStorage.setItem("p_4", dMovie.id)
		document.getElementById("p_4").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[4];
		window.localStorage.setItem("p_5", eMovie.id)
		document.getElementById("p_5").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[5];
		window.localStorage.setItem("p_6", fMovie.id)
		document.getElementById("p_6").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[6];
		window.localStorage.setItem("p_7", gMovie.id)
		document.getElementById("p_7").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;

		
	})
}

function getTop(){

	axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=91c710c1fcf49e9478ec4a5f59dba38d')

	.then(function(response) {
		var object = response.data;
		//console.log(object);

		var aMovie = object.results[0];
		window.localStorage.setItem("t_1", aMovie.id)
		document.getElementById("t_1").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[1];
		window.localStorage.setItem("t_2", bMovie.id)
		document.getElementById("t_2").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[2];
		window.localStorage.setItem("t_3", cMovie.id)
		document.getElementById("t_3").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[3];
		window.localStorage.setItem("t_4", dMovie.id)
		document.getElementById("t_4").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[4];
		window.localStorage.setItem("t_5", eMovie.id)
		document.getElementById("t_5").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[5];
		window.localStorage.setItem("t_6", fMovie.id)
		document.getElementById("t_6").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[6];
		window.localStorage.setItem("t_7", gMovie.id)
		document.getElementById("t_7").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;
		
	})

}

function getUpcoming(){

	axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=91c710c1fcf49e9478ec4a5f59dba38d')

	.then(function(response) {
		var object = response.data;
		//console.log(object);

		var aMovie = object.results[0];
		window.localStorage.setItem("u_1", aMovie.id)
		document.getElementById("u_1").src = "http://image.tmdb.org/t/p/w185"+ aMovie.poster_path;
		var bMovie = object.results[1];
		window.localStorage.setItem("u_2", bMovie.id)
		document.getElementById("u_2").src = "http://image.tmdb.org/t/p/w185"+ bMovie.poster_path;
		var cMovie = object.results[2];
		window.localStorage.setItem("u_3", cMovie.id)
		document.getElementById("u_3").src = "http://image.tmdb.org/t/p/w185"+ cMovie.poster_path;
		var dMovie = object.results[3];
		window.localStorage.setItem("u_4", dMovie.id)
		document.getElementById("u_4").src = "http://image.tmdb.org/t/p/w185"+ dMovie.poster_path;
		var eMovie = object.results[4];
		window.localStorage.setItem("u_5", eMovie.id)
		document.getElementById("u_5").src = "http://image.tmdb.org/t/p/w185"+ eMovie.poster_path;
		var fMovie = object.results[5];
		window.localStorage.setItem("u_6", fMovie.id)
		document.getElementById("u_6").src = "http://image.tmdb.org/t/p/w185"+ fMovie.poster_path;
		var gMovie = object.results[6];
		window.localStorage.setItem("u_7", gMovie.id)
		document.getElementById("u_7").src = "http://image.tmdb.org/t/p/w185"+ gMovie.poster_path;
		
	})

}

function getMovie(){
	getPopular();
	getTop();
	getUpcoming();
}

function getDetail(id){

	window.localStorage.setItem("key", id)

	const modalPath = path.join('file://',__dirname, '/detail.html')
	let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 1050, height: 480})

	win.on('close', function() {win = null})
	win.loadURL(modalPath)
	win.show()

}

const signBtn = document.getElementById('signBtn')

signBtn.addEventListener('click', function(event)
{
	const modalPath = path.join('file://',__dirname, '/login.html')
	let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 350, height: 600})

	win.on('close', function() {win = null})
	win.loadURL(modalPath)
	win.show()
})



const outBtn = document.getElementById('signoutBtn')

outBtn.addEventListener('click', function(event)
{
	window.localStorage.setItem("login_status", 0)
	window.localStorage.setItem("login_id", "")
})

// ipc.on('userid', function (event, arg){
// 	var user_id = arg
// 	console.log(user_id);
// 	window.sessionStorage.setItem("id", user_id);
// })