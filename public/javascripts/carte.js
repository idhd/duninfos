$(document).ready(function () {

  // On récupère l'adresse de la page (auquel on enlève le '/carte' de la fin)
  var url = window.location.pathname.substr( 0, window.location.pathname.length-6 );
  
  // On récupère l'objet JSON correspondant à l'adresse précédente
	$.getJSON( url + ".json", function(data) {
	  
    // Si l'objet JSON récupéré n'est pas un tableau de batiments, on le transforme en tableau
    if (!$.isArray(data)) data = new Array(data);
      
    // Pour chaque batiment du tableau
    $.each(data, function(key, val) {

      // On positionne un marqueur pour ce batiment
      $('#map').gmap3({
        action: 'addMarker',
        latLng: [val.batiment.latitude, val.batiment.longitude],
        map:{
          center: true,
        },
        marker: {
          data:'<div class="infoWindow"><h4>'+val.batiment.nom+'</h4></div>'+
               '<div id="infoBatiment">'+
               '<p>'+val.batiment.adresse+'</p>'+
               '<p>'+val.batiment.code_postal+' '+val.batiment.ville+'</p>'+
               '<p>Horaires d\'ouvertures: '+val.batiment.horaires+'<p>'+
               '</div>'+
               '<div id="imgBatiment">'+
               '<a href=""><img alt="liste des entrées" src="'+val.batiment.url_photo+'"></a>'+
               '</div>'+
               '<div id="infoSalles"><a href="">Liste des salles</a></div>',
          events: {
            click: function(marker, event, data) {
              var infowindow = $(this).gmap3({action:'get', name:'infowindow'})
              if(infowindow) {
                infowindow.setContent(data);
                infowindow.open(marker.map, marker);
              } else {
                $(this).gmap3({action:'addinfowindow', anchor:marker, options:{content: data}});
              }
            }
        }
        
        }
      });   
    });
  });
});
