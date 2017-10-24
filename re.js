var progress = 0;
function compte_a_rebours(){
    var compte_a_rebours = document.getElementById("compte_a_rebours");
  
    var date_debut = new Date("Oct 1 00:00:00 2017");
    var date_actuelle = new Date();
    var date_evenement = new Date("Oct 31 00:00:00 2017");
    var total_secondes = (date_evenement - date_actuelle) / 1000;

    if (total_secondes > 0){
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et";
        var mot_jour = "j";
        var mot_heure = "h";
        var mot_minute = "m";
        var mot_seconde = "s";

        if (jours == 0){
            jours = '';
            mot_jour = '';
        }
        else if (jours == 1){
            mot_jour = "jour,";
        }
        if (heures == 0){
            heures = '';
            mot_heure = '';
        }
        else if (heures == 1){
            mot_heure = "heure,";
        }
        if (minutes == 0){
            minutes = '';
            mot_minute = '';
        }
        else if (minutes == 1){
            mot_minute = "minute,";
        }
        if (secondes == 0){
            secondes = '';
            mot_seconde = '';
            et = '';
        }
        else if (secondes == 1){
                mot_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0){
            et = "";
        }

        compte_a_rebours.innerHTML = jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
    }
    else{
        compte_a_rebours.innerHTML = 'Project Realised!';
    }
    progress = Math.round(((date_actuelle.getDay() - date_debut.getDay()) + (date_evenement.getDay() - date_actuelle.getDay())) * 100 / jours);
    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();
