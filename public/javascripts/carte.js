$(document).ready(function () {

  // On récupère l'adresse de la page (auquel on enlève le '/carte' de la fin)
  var url = window.location.pathname.substr( 0, window.location.pathname.length-6 );
  
  // On récupère l'objet JSON correspondant à l'adresse précédente
	$.getJSON( url, function(data) {
	  
    // Si l'objet JSON récupéré n'est pas un tableau de batiments, on le transforme en tableau
    if (!$.isArray(data)) data = new Array(data);
      
    // Pour chaque batiment du tableau
    $.each(data, function(key, val) {

      // On positionne un marqueur pour ce batiment
      $('#map').gmap3({
        action: 'addMarker',
        latLng: [val.batiment.latitude, val.batiment.longitude],
        infowindow:
        {
          options:
          {
            content: val.batiment.nom
          }
        }
      });
    });   
  });
});
