const electron = require('electron')
const path = require('path')

const BrowserWindow = electron.remote.BrowserWindow
const ipc = electron.ipcRenderer


const remote = electron.remote
const mainWindow = remote.getCurrentWindow();

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(event)
{
	var window = remote.getCurrentWindow();
	window.close()
})



const loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', function(event)
{

	var validate = check();
	var status = localStorage.getItem("login_status");
	//console.log(validate);
	if (status == 1){
		var window = remote.getCurrentWindow();
		window.close()
	}
	
})


function check(){
	var flag = 0;
	
    //console.log(name);
	//document.getElementById("uname").innerHTML = name;
	

	//ipc.send('update-user', name)

	//const dbPath = path.join('file://',__dirname, '../database/database.db')
	var Datastore = require('nedb')
	  , db = new Datastore({ filename: './database/database.db' , autoload: true});
	db.loadDatabase(function (err) {    // Callback is optional
	  // Now commands will be executed
	});
	const name = document.getElementById("username").value
    const pswd = document.getElementById("password").value

    //console.log(name)
	
	const key = name;    

	db.findOne({ u_name: key }, function (err, doc) {
	  // docs is an array containing documents Mars, Earth, Jupiter
	  // If no document is found, docs is equal to []
	  if(doc==null){
	  	console.log("No user found with the details")
	  }
	  else{

	  	var n = doc.u_name;
		  var p = doc.u_password;
		  
		  if( n == name && p == pswd){
		  	window.localStorage.setItem("login_status", 1);
		  	//console.log(doc._id)
		  	window.localStorage.setItem("login_id", doc._id);
		  	window.localStorage.setItem("user_name",n);
		  	//console.log("Login Successful");
		  }
		  else{
		  	window.localStorage.setItem("login_status", 0)
		  }

		}
	  
});

}

// const updateID = window.localStorage.getItem("user_id")
// ipc.send('update-user-id',updateID)
