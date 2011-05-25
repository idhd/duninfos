$(document).ready(function() {

  // On cache la liste des paramètres au départ
  //$('#accordion').hide();
  
  // On affiche la liste des paramètres lorsqu'on clique sur le bouton adéquat
  /*$('#bouton-parametres').bind('tap', function() {
    $('#accordion').toggle();
  });

	$('#accordion list-divider').bind('tap', function() {
		$(this).next().toggle();
		return false;
	}).next().hide();*/
  
  // On affiche la carte lorsqu'on clique sur le bouton adéquat
  $("#bouton-carte").bind('tap', function() {
  
    // On vérifie que l'url est au bon format
    if (window.location.pathname.match("^/campuses/[0-9]+/batiments(/[0-9]+)?$") != null)
    {
      // Si oui, on ajoute '/carte' à la fin de l'url
      window.location = window.location.pathname + '/carte';
    }
    else
    {
      // Sinon on désactive le bouton Carte
      $(this).attr("disabled", "disabled");
    }
  });
  
  $("#bouton-parametres").bind('tap', function() {
  
    // On vérifie qu'on est sur la carte
    if (window.location.pathname.match("^/campuses/[0-9]+/batiments(/[0-9]+)?/carte$") != null)
    {
      // Si oui, on ajoute '/parametres' à la fin de l'url
      window.location = window.location.pathname + '/parametres';
    }
    else if (window.location.pathname.match("^/campuses/[0-9]+/batiments(/[0-9]+)?/carte/parametres$") != null) {
      window.location = window.location.pathname.substr( 0, window.location.pathname.length-11 );
    }
    else
    {
      // Sinon on désactive le bouton Paramètres
      $(this).attr("disabled", "disabled");
    }
  });
  
  $("#bouton-rechercher").bind('tap', function() {
      window.location = '/search';
  });
});
