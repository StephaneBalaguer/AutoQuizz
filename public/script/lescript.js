    /*-------------------------------LES VARIABLES---------------------------------------------------------*/

    var socket = io.connect('http://localhost:8080');
  
    
    /*-------------------------------LES FONCTIONS---------------------------------------------------------*/

    socket.on("currentQuestion", function (message) {
       console.log("currentQuestion", message);

       let question = JSON.parse(message);
       let choiceA = question["propositions"][0];
       let choiceB = question["propositions"][1];
       let choiceC = question["propositions"][2];
       let choiceD = question["propositions"][3];
       document.getElementById("question").innerHTML = question["question"];
       document.getElementById("ansA").innerHTML = choiceA
       document.getElementById("ansB").innerHTML = choiceB
       document.getElementById("ansC").innerHTML = choiceC
       document.getElementById("ansD").innerHTML = choiceD


    });

