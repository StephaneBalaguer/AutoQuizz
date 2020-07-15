	// Connexion à socket.io

    var doc = prompt("Serveur Address ? ( empty is local )", "localhost - 192.168.1.44 - thisismyip.com"); 
	if (doc == null) {
    	doc = "localhost"
	}
	var socket = io.connect('http://'+doc+':8080');
        // On demande le pseudo, on l'envoie au serveur et on l'affiche dans le titre
        var pseudo = "ADMIN";
        var nomJ = pseudo;
        document.title = pseudo + ' - ' + document.title;
        function START() {
        	socket.emit('start',"droite");
        }


