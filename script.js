/*pour creer un quiz il faut:
-selectionner le support sur lequel on prend les infos a tréter;
-creer un endroit ou stocker les infos pour les comparer au resultat(tableau)
-creer une maniere de stocker les donnees;
-trouver comment comparer les donnees avec les resultats*/

const res = require("express/lib/response");



//selectionner le formulaire
const form = document.querySelector(selecteur);
// creer une variable pour y ajouter un tableau pour y accueillir les resultats du quiz
let resultUser = [];
let resultQuiz =[a,b ,c , d, e, f];
let responses = []
/*creation de la fonction qui permet d'envoyer les reponses dans le tableau via l'evenement
on utilise une boucle for pour lire progressivement toute les reponses du quiz dans le but de les comparer plus tard
a une autre variable qui sera composée des rusultat*/


form.addEventListener(submit, (e)=> {
    e.preventDefault();

        for(i=1; i<6; i++){
            resultUser.push(document.querySelector(`input[name="q${i}"]:checked`).value)
        }

        //console.log(resultUser);

        function verifForm(resultUser);
        resultUser = [];

})

    function verifForm(resultUser){

        for (a=0; a<5; a++)
        {
            if(resultUser[a] === resultQuiz[a])
            {   responses.push(true);
                console.log('vous avez trouvé les reponses');
            }
            else{
                responses.push(false);
                console.log("désolé, vos reponses sont incorrectes il faut recommencer");
            }
        }

        responses = [];
    }