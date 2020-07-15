    /*-------------------------------LES VARIABLES---------------------------------------------------------*/

    var socket = io.connect('http://localhost:8080');
    var qua = document.getElementById("quatre");
    var tro = document.getElementById("troise");
    var deu = document.getElementById("deuxes");
    var une = document.getElementById("unesss");
    var qua_bg = document.getElementById("quatre_bg");
    var tro_bg = document.getElementById("troise_bg");
    var deu_bg = document.getElementById("deuxes_bg");
    var une_bg = document.getElementById("unesss_bg");

    var qua_bo = document.getElementById("quatre_bo");
    var tro_bo = document.getElementById("troise_bo");
    var deu_bo = document.getElementById("deuxes_bo");
    var une_bo = document.getElementById("unesss_bo");

    /*-------------------------------LES FONCTIONS---------------------------------------------------------*/

    function joue_son() {
        son = document.getElementById("br");
        son.load();
        son.play();
    }

    function joue_ecoule() {
        son = document.getElementById("ecoule");
        son.load();
        son.play();
    }

    function droite_main() {
        son = document.getElementById("main");
        son.load();
        son.play();
        document.getElementById("qui_a_la_main").innerHTML = 'G';
        document.getElementById("m_quatre").innerHTML = 'G';
        document.getElementById("m_troise").innerHTML = 'D';
        document.getElementById("m_deuxes").innerHTML = 'G';
        document.getElementById("m_unesss").innerHTML = 'D';
        var per = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                qua.style.transform = 'translate(-' + per + '%,0%)';
                tro.style.transform = 'translate( ' + per + '%,0%)';
                deu.style.transform = 'translate(-' + per + '%,0%)';
                une.style.transform = 'translate( ' + per + '%,0%)';

                qua_bg.style.transform = 'translate(-' + per + '%,0%)';
                tro_bg.style.transform = 'translate( ' + per + '%,0%)';
                deu_bg.style.transform = 'translate(-' + per + '%,0%)';
                une_bg.style.transform = 'translate( ' + per + '%,0%)';

                qua_bo.style.transform = 'translate(-' + per + '%,0%)';
                tro_bo.style.transform = 'translate( ' + per + '%,0%)';
                deu_bo.style.transform = 'translate(-' + per + '%,0%)';
                une_bo.style.transform = 'translate( ' + per + '%,0%)';
                per = per + 1;

            }
        }
    }

    function gauche_main() {
        son = document.getElementById("main");
        son.load();
        son.play();
        document.getElementById("qui_a_la_main").innerHTML = 'D';
        document.getElementById("m_quatre").innerHTML = 'D';
        document.getElementById("m_troise").innerHTML = 'G';
        document.getElementById("m_deuxes").innerHTML = 'D';
        document.getElementById("m_unesss").innerHTML = 'G';
        var per = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                qua.style.transform = 'translate( ' + per + '%,0%)';
                tro.style.transform = 'translate(-' + per + '%,0%)';
                deu.style.transform = 'translate( ' + per + '%,0%)';
                une.style.transform = 'translate(-' + per + '%,0%)';

                qua_bg.style.transform = 'translate( ' + per + '%,0%)';
                tro_bg.style.transform = 'translate(-' + per + '%,0%)';
                deu_bg.style.transform = 'translate( ' + per + '%,0%)';
                une_bg.style.transform = 'translate(-' + per + '%,0%)';

                qua_bo.style.transform = 'translate( ' + per + '%,0%)';
                tro_bo.style.transform = 'translate(-' + per + '%,0%)';
                deu_bo.style.transform = 'translate( ' + per + '%,0%)';
                une_bo.style.transform = 'translate(-' + per + '%,0%)';
                per = per + 1;
            }
        }
    }

    function passe_droite(element) {
        var ele = document.getElementById(element);
        var ele_bg = document.getElementById(element + '_bg');
        var ele_bo = document.getElementById(element + '_bo');
        document.getElementById("m_" + element).innerHTML = 'D';
        document.getElementById("qui_a_la_main").innerHTML = 'D';
        var tam = 0;
        var per = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                tam = -45 + 2 * per;
                ele.style.transform = 'translate( ' + tam + '%,0%)';
                ele_bg.style.transform = 'translate( ' + tam + '%,0%)';
                ele_bo.style.transform = 'translate( ' + tam + '%,0%)';
                per = per + 1;
            }
        }
    }

    function passe_gauche(element) {
        var ele = document.getElementById(element);
        var ele_bg = document.getElementById(element + '_bg');
        var ele_bo = document.getElementById(element + '_bo');
        document.getElementById("m_" + element).innerHTML = 'G';
        document.getElementById("qui_a_la_main").innerHTML = 'G';
        var tam = 0;
        var per = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (per > 45) {
                clearInterval(id);
            } else {
                tam = 45 - 2 * per;
                ele.style.transform = 'translate( ' + tam + '%,0%)'
                ele_bg.style.transform = 'translate( ' + tam + '%,0%)'
                ele_bo.style.transform = 'translate( ' + tam + '%,0%)'
                per = per + 1;
            }
        }
    }

    function reinitialiser() {
        qua.style.height = '22%';
        tro.style.height = '18%';
        deu.style.height = '12%';
        une.style.height = '8%';
        qua_bg.style.color = 'white';
        tro_bg.style.color = 'white';
        deu_bg.style.color = 'white';
        une_bg.style.color = 'white';
    }
    function lancer(initial) {
        var qua = document.getElementById("quatre");
        var tro = document.getElementById("troise");
        var deu = document.getElementById("deuxes");
        var une = document.getElementById("unesss");
        var qua_bg = document.getElementById("quatre_bg");
        var tro_bg = document.getElementById("troise_bg");
        var deu_bg = document.getElementById("deuxes_bg");
        var une_bg = document.getElementById("unesss_bg");
        if (initial == 0) {
            son = document.getElementById("tiktac");
            son.load();
            son.play();
        } else {
            son = document.getElementById("tiktac");
            son.play();
        }
        var per = initial;
        var id = setInterval(frame, 95);
        function frame() {
           socket.on('qui', function (etatbuzz) {
            if (etatbuzz=="droite" && document.getElementById("qui_a_la_main").innerHTML == 'G') {
                if (document.getElementById("buzzer_g").innerHTML == 1) {
                    buzz = document.getElementById("buzz");
                    buzz.load();
                    buzz.play();
                    document.getElementById("buzzer_g").innerHTML = 0;
                }
                document.getElementById("tiktac").pause();
                document.getElementById("log_timer").innerHTML = parseFloat(per);
                clearInterval(id);
                return;
            } else if (etatbuzz=="gauche" && document.getElementById("qui_a_la_main").innerHTML == 'D') {

                if (document.getElementById("buzzer_d").innerHTML == 1) {
                    buzz = document.getElementById("buzz");
                    buzz.load();
                    buzz.play();
                    document.getElementById("buzzer_d").innerHTML = 0;
                }
                document.getElementById("tiktac").pause();
                document.getElementById("log_timer").innerHTML = parseFloat(per);
                clearInterval(id);
                return;
            }
        });
           if (per > 300) {
            joue_ecoule();
            document.getElementById("log").innerHTML = 'FINI';
            clearInterval(id);
        } else {
            if (per < 110) {
                per = per + 1;
                qua.style.height = 22 - 0.2 * per + '%';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_quatre").innerHTML;
            } else if (per < 200) {
                per = per + 1;
                qua.style.height = '0%';
                tro.style.height = 18 - (0.2 * per - 22) + '%';
                qua_bg.style.color = 'red';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_troise").innerHTML;
            } else if (per < 260) {
                per = per + 1;
                qua.style.height = '0%';
                tro.style.height = '0%';
                deu.style.height = 12 - (0.2 * per - 40) + '%';
                tro_bg.style.color = 'red';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_deuxes").innerHTML;
            } else if (per < 300) {
                per = per + 1;
                qua.style.height = '0%';
                tro.style.height = '0%';
                deu.style.height = '0%';
                une.style.height = 8 - (0.2 * per - 52) + '%';
                deu_bg.style.color = 'red';
                document.getElementById("qui_a_la_main").innerHTML = document.getElementById("m_unesss").innerHTML;
            } else if (per == 300) {
                per = per + 1;
                joue_ecoule();
                une_bg.style.color = 'red';
                document.getElementById("log").innerHTML = 'FINI';
            }
            document.getElementById("log_timer").innerHTML = parseFloat(per);
        }
    }
}

$(document).on("keypress", function(event) {
    var x = event.which || event.keyCode;
    document.getElementById("log").innerHTML = x;
    if (event.keyCode == 112) {
        joue_son()
        document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 1;
    } else if (event.keyCode == 111) {
        joue_son()
        document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 2;
    } else if (event.keyCode == 105) {
        joue_son()
        document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 3;
    } else if (event.keyCode == 117) {
        joue_son()
        document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 4;
    } else if (event.keyCode == 97) {
        joue_son()
        document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 1;
    } else if (event.keyCode == 122) {
        joue_son()
        document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 2;
    } else if (event.keyCode == 101) {
        joue_son()
        document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 3;
    } else if (event.keyCode == 114) {
        joue_son()
        document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 4;
    } else if (event.keyCode == 109) {
        droite_main()
    } else if (event.keyCode == 113) {
        gauche_main()
    } else if (event.keyCode == 58) {
        document.getElementById("buzzer_g").innerHTML = 1
        document.getElementById("buzzer_d").innerHTML = 1
        lancer(0)
    } else if (event.keyCode == 48) {
        document.getElementById("buzzer_g").innerHTML = 1
        document.getElementById("buzzer_d").innerHTML = 1
        lancer(parseFloat(document.getElementById("log_timer").innerHTML))
    } else if (event.keyCode == 33) {
        reinitialiser()
    } else if (event.keyCode == 40) {
        passe_droite("quatre")
    } else if (event.keyCode == 45) {
        passe_gauche("quatre")

    } else if (event.keyCode == 116) {
        passe_droite("troise")
    } else if (event.keyCode == 121) {
        passe_gauche("troise")
    } else if (event.keyCode == 103) {
        passe_droite("deuxes")
    } else if (event.keyCode == 104) {
        passe_gauche("deuxes")

    } else if (event.keyCode == 110) {
        passe_droite("unesss")
    } else if (event.keyCode == 98) {
        passe_gauche("unesss")
    }

});

socket.on("gestion", function(action) {
    console.log(action);
    if (action == "gauche1") {
        console.log("1");
        joue_son()
        document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 1;
    } else if (action == "gauche2") {
       console.log("2");
       joue_son()
       document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 2;
   } else if (action == "gauche3") {
       console.log("3");
       joue_son()
       document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 3;
   } else if (action == "gauche4") {
       console.log("4");
       joue_son()
       document.getElementById("gauche").innerHTML = parseInt(document.getElementById("gauche").innerHTML) + 4;
   } else if (action == "droite1") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 1;
} else if (action == "droite2") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 2;
} else if (action == "droite3") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 3;
} else if (action == "droite4") {
    joue_son();
    document.getElementById("droite").innerHTML = parseInt(document.getElementById("droite").innerHTML) + 4;
} else if (action =="maindroite") {
    droite_main();
} else if (action =="maingauche") {
    gauche_main();
} else if (action =="gochrono") {
    console.log("lechrono");
    document.getElementById("buzzer_g").innerHTML = 1;
    document.getElementById("buzzer_d").innerHTML = 1;
    lancer(0);
} else if (action=="restartchrono") {
    document.getElementById("buzzer_g").innerHTML = 1;
    document.getElementById("buzzer_d").innerHTML = 1;
    lancer(parseFloat(document.getElementById("log_timer").innerHTML));
} else if (action=="reinit") {
    reinitialiser();
} else if (action == "timer4d") {
    passe_droite("quatre");
} else if (action == "timer4g") {
    passe_gauche("quatre");
} else if (action == "timer3d") {
    passe_droite("troise");
} else if (action == "timer3g") {
    passe_gauche("troise");
} else if (action == "timer2d") {
    passe_droite("deuxes");
} else if (action == "timer2g") {
    passe_gauche("deuxes");
} else if (action == "timer1d") {
    passe_droite("unesss");
} else if (action == "timer1g") {
    passe_gauche("unesss");
}
});
