function getHistory(){
	const id = localStorage.getItem("login_id")
	//console.log(id)

	if(id=="" || id==null){
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

				document.getElementById("img_1").src = "http://image.tmdb.org/t/p/w92"+ movieList[0].m_poster;
				document.getElementById("title_1").innerHTML = movieList[0].m_name;
				document.getElementById("score_1").innerHTML = movieList[0].m_score;
				document.getElementById("date_1").innerHTML = movieList[0].m_date;

				document.getElementById("img_2").src = "http://image.tmdb.org/t/p/w92"+ movieList[1].m_poster;
				document.getElementById("title_2").innerHTML = movieList[1].m_name;
				document.getElementById("score_2").innerHTML = movieList[1].m_score;
				document.getElementById("date_2").innerHTML = movieList[1].m_date;

				document.getElementById("img_3").src = "http://image.tmdb.org/t/p/w92"+ movieList[2].m_poster;
				document.getElementById("title_3").innerHTML = movieList[2].m_name;
				document.getElementById("score_3").innerHTML = movieList[2].m_score;
				document.getElementById("date_3").innerHTML = movieList[2].m_date;

				document.getElementById("img_4").src = "http://image.tmdb.org/t/p/w92"+ movieList[3].m_poster;
				document.getElementById("title_4").innerHTML = movieList[3].m_name;
				document.getElementById("score_4").innerHTML = movieList[3].m_score;
				document.getElementById("date_4").innerHTML = movieList[3].m_date;

				document.getElementById("img_5").src = "http://image.tmdb.org/t/p/w92"+ movieList[4].m_poster;
				document.getElementById("title_5").innerHTML = movieList[4].m_name;
				document.getElementById("score_5").innerHTML = movieList[4].m_score;
				document.getElementById("date_5").innerHTML = movieList[4].m_date;

				document.getElementById("img_6").src = "http://image.tmdb.org/t/p/w92"+ movieList[5].m_poster;
				document.getElementById("title_6").innerHTML = movieList[5].m_name;
				document.getElementById("score_6").innerHTML = movieList[5].m_score;
				document.getElementById("date_6").innerHTML = movieList[5].m_date;

			}
			
		})


		}
}