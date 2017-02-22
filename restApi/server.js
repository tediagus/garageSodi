var express = require("express");
var App = express(); 
var bodyParser = require("body-parser"); 
var jwt    = require('jsonwebtoken');  //gestion du token
var atelier =require("./data/atelier.json");
var user = require("./data/user.json")
var cors = require('cors');

var apiRoutes = express.Router();
/***
 * Configuration 
 */
var port = process.env.PORT || 3000;

App.set("superSecret", "legaragedesodifrance");


//utilisation de body parser afin d'obtenir les informations du POST
App.use(bodyParser.urlencoded ({extended: false}));
App.use(bodyParser.json());
App.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header("Content-Type", "application/json; charset=utf-8");
	next();
})

/*Atelier */
apiRoutes.get("/ateliers", function(req, res){

	res.json(atelier);
});

apiRoutes.get("/atelier/:id", function(req, res){
	if(req.params.id) {
		res.json(atelier[(req.params.id-1)]);
	}
});

apiRoutes.get("/atelier/:id/messages", function(req, res){
	if(req.params.id) {
		res.json(atelier[(req.params.id-1)]);
	}
});


apiRoutes.post("atelier",function(req, res){

});


/* utilisateur */
apiRoutes.post("/login", function(req, res){


console.log(req.body);
	if(req.body.identifiant){

		/**
		 * cette fonction simule un requete de recherche d'un utilisateur
		 */
		function findUser(obj){
			if(obj.identifiant!==undefined && !isNaN(obj.identifiant)){
				return true;
			}else {
				return false;
			}
		}

		var userLogin  = user.filter(findUser);
		
		console.log(userLogin);

		if(userLogin){

			//verificationd du mot de passe 
			if(userLogin.password != req.body.password){
				res.json({success:  false, message: "Impossible de se connecter, le mot de passe est erroné." });
			}else {

				//creaction d'un token
				var token = jsw.sign(userLogin, app.get("superSecret"),{
					expiresInMinutes: 1440 //expires dans 24 heures
				});

				res.json({
					success: true,
					message: "Création du token",
					token: token
				})
			}

		}
	}else {
		res.json({
					success: false,
					message: "Impossible de vous identifier",
					token: token
				})
	}
});


apiRoutes.get("/users", function(req, res){
	//suppression de la cle password
	user.forEach((e)=>{
		delete e.password;
	});
	res.json(user);
});




apiRoutes.get("/", function(req, res){
	res.json({message: "Api de test "});
});


App.use("/api", apiRoutes);

App.listen(port, "0.0.0.0");
console.log( "restAPi : http://localhost:" + port);