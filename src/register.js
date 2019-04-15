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

const subBtn = document.getElementById('subBtn')

subBtn.addEventListener('click', function(event)
{

	insert();
	// var window = remote.getCurrentWindow();
	// window.close()
})

function insert(){
	var name = document.getElementById('username').value
	var age = document.getElementById('age').value
	var pswd = document.getElementById('password').value
	var cpswd = document.getElementById('cpassword').value
	var male = document.getElementById('option-1').value
	var female = document.getElementById('option-2').value

	//console.log(name,age,pswd,cpswd,male,female)

	var Datastore = require('nedb')
//	const dbpath = path.join('./database/database.db')
	db = new Datastore({ filename: './database/database.db' , autoload: true});
	db.loadDatabase(function (err) {    // Callback is optional
	  // Now commands will be executed
	});

	if(pswd==cpswd){
		var input = { u_name: name, u_password: pswd, u_gender: 'male', u_age: age, movie: []};
		db.ensureIndex({ fieldName: 'u_name', unique: true }, function (err) {
		});
		db.ensureIndex({ fieldName: 'movie', unique: true }, function (err) {
		});

		db.insert(input, function(err, doc){

        });

        //console.log("Successful Registration")
	}
}