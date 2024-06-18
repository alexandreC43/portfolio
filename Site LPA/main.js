// Fonction executée lors de l'utilisation du clic droit.
$(document).bind("contextmenu",function()
{
// Si vous voulez ajouter un message d'alerte
alert('Merci de respecter le travail du webmaster en ne copiant pas le contenu sans autorisation');
// On indique au navigateur de ne pas réagir en cas de clic droit.
return false;
});