
const regBtn = document.getElementById('regBtn')

regBtn.addEventListener('click', function(event)
{
	const modalPath = path.join('file://',__dirname, 'register.html')
	let win = new BrowserWindow({ frame: true, transparent: false, width: 850, height: 550})

	win.on('close', function() {win = null})
	win.loadURL(modalPath)
	win.show()
})


const id_user = localStorage.getItem("login_id");
//console.log(id_user)
if (id_user == "" || id_user == null){

	document.getElementById("error").innerHTML = "Please login to see the details" 


}

else{

	var Datastore = require('nedb')
	  , db = new Datastore({ filename: './database/database.db' , autoload: true});
	db.loadDatabase(function (err) {    // Callback is optional
	  // Now commands will be executed
	});

	db.findOne({ _id: id_user }, function (err, doc) {

		document.getElementById("name").innerHTML = doc.u_name;
		document.getElementById("pswd").innerHTML = doc.u_password;
		document.getElementById("gender").innerHTML = doc.u_gender;
		document.getElementById("age").innerHTML= doc.u_age;

	})


}

