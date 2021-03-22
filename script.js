var Question = ([
    {
        "id":"0001",
        "intituler":"Quand à été créer la liberté syndical ?",
        "RéponseA":"En 1886", "RéponseB":"En 1884", "RéponseC":"En 1885", "RéponseD":"En 1883",
        "Solution": 2
    },
    {
        "id":"0002",
        "intituler":"Quel droit social est aquis en 1906",
        "RéponseA":"La retraite ouvrière", "RéponseB":"L'indemnisation des accident de travail", "RéponseC":"L'ajout d'une journé de congé hebdomadaire","RéponseD":"Établisement de la Solidarité social   ",
        "Solution": 3
    },
    {
        "id":"0003",
        "intituler":"Quels est le nom des accord signé en 1936 par le front populaire ?",
        "RéponseA":"Les accord Matignon", "RéponseB":"Les accord de l'Élysée", "RéponseC":"Les accords du louvre","RéponseD":" Les Accord de Notre Dame",
        "Solution": 1
    },
    {
        "id":"0004",
        "intituler":"Quel est le nom du conseil qui a créer de la sécurité sociale ?",
        "RéponseA":"Le conseil des droits sociaux", "RéponseB":"Le conseil national de la réconstruction", "RéponseC":"Conseil National de la résistance","RéponseD":"Conseil de Charles de Gaules",
        "Solution": 3
    },
    {
        "id":"0005",
        "intituler":"Parmis ces réponse laquel n'a pas étez istituer ou rétablis après 1944 par un certain conseil ?",
        "RéponseA":"le SMIG", "RéponseB":"La Liberté syndicale", "RéponseC":"Le droit au travaille et au repos","RéponseD":"Le RSA",
        "Solution":4
    },
    {
        "id":"0006",
        "intituler":"Qu'est-ce que le RSA signifie ?",
        "RéponseA":"Revenu des salarié affamé", "RéponseB":"Restaurant syndicalement approuvé", "RéponseC":"Revenue de solidarité active","RéponseD":"Recette semestriel des ascociations",
        "Solution":3
    },
    {
        "id":"0007",
        "intituler":"Quelle ministère est creer en 1906 ?",
        "RéponseA":"Celui de la santé", "RéponseB":"Celui du Travail", "RéponseC":"Celui de l'éducation nationnal","RéponseD":"Celui de l'économie",
        "Solution":2
    }
])

var questionnum;
var fait = [0,7,8,9,10,11,12];
var i = fait.length;

function AddQuestion(Num){
    console.log("La Question est en train de se mettre")
    document.getElementById('question').innerHTML = Question[Num].intituler
    console.log("La Question est mise")
    questionnum = Num
}

function Addrep1(Num){
    console.log("La Réponse 1 est en train de se mettre")
    document.getElementById('Rep1').innerHTML = Question[Num].RéponseA
    console.log("La Réponse 1 est mise")
}
function Addrep2(Num){
    console.log("La Réponse 2 est en train de se mettre")
    document.getElementById('Rep2').innerHTML = Question[Num].RéponseB
    console.log("La Réponse 2 est mise")
}
function Addrep3(Num){
    console.log("La Réponse 3 est en train de se mettre")
    document.getElementById('Rep3').innerHTML = Question[Num].RéponseC
    console.log("La Réponse 3 est mise")
}
function Addrep4(Num){
    console.log("La Réponse 4 est en train de se mettre")
    document.getElementById('Rep4').innerHTML = Question[Num].RéponseD
    console.log("La Réponse 4 est mise")
}

function NewQuestion(){
    let Nouvelle = Math.floor(Math.random()*11);
    let Bool;
    for (x in fait) {
        if(fait[x] == Nouvelle){
                NewQuestion() 
            } 
    }
    
        window.onload = AddQuestion(Nouvelle) ;
        window.onload = Addrep1(Nouvelle) ; 
        window.onload = Addrep2(Nouvelle) ;
        window.onload = Addrep3(Nouvelle) ;
        window.onload = Addrep4(Nouvelle) ;
            
}
      

function Réponse(RepNum){
    console.log("Réponse récupérer")
    if (RepNum == Question[questionnum].Solution) {
        window.alert("la réponse est bonne !")
        fait.push(questionnum)
        NewQuestion()
    }
    else{
        window.alert("Raté !")
    }
}x