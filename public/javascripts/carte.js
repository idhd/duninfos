$(document).ready(function () {

  // On récupère l'adresse de la page (auquel on enlève le '/carte' de la fin)
  var url = window.location.pathname.substr( 0, window.location.pathname.length-6 );
  
  // On récupère l'objet JSON correspondant à l'adresse précédente
	$.getJSON( url + ".json", function(data) {
	  
    // Si l'objet JSON récupéré n'est pas un tableau de batiments, on le transforme en tableau
    if (!$.isArray(data)) data = new Array(data);

console.log(data);
      
    // Pour chaque batiment du tableau
    $.each(data, function(key, val) {

	// Si il n'y a pas d'entrées on renvoie vers le batiment 
	if (val.batiment.entrees[0]) premiereEntree = '/entrees/'+val.batiment.entrees[0].id;
	else premiereEntree = '';
    
    if(val.batiment.services.length > 0) {
        val.batiment.icon = "/images/categories/"+val.batiment.services[0].categorie_id+".png";
    }

      // On positionne un marqueur pour ce batiment
      $('#map').gmap3({
        action: 'addMarker',
        latLng: [val.batiment.latitude, val.batiment.longitude],
        map:{
          center: true,
        },
        

        marker: {
          data:'<div id="infoWindowHeader"><h3>'+val.batiment.nom+'</h3></div>'+
               		'<div id="infoWindowContent">'+
               		
				     	'<div id="infoBatiment">'+
				        '<p>'+val.batiment.adresse+'</p>'+
				        '<p>'+val.batiment.code_postal+' '+val.batiment.ville+'</p>'+
				        '<p>Horaires d\'ouvertures :</p><p>'+val.batiment.horaires+'</p>'+
				        '</div>'+
		           
		           		'<div id="imgBatiment">'+
		           		'<a href="/campuses/'+val.batiment.campus_id+
		           		'/batiments/'+val.batiment.id+premiereEntree+
		           		'"><img alt="liste des entrées" src="'+val.batiment.url_photo+'"></a>'+
		           		'</div>'+
		           		
               		'</div>'+
               	'<div id="infoSalles" class="ui-btn-active ui-state-persist ui-btn ui-btn-up-a">'+
               	'<a href="/campuses/'+val.batiment.campus_id+
               	'/batiments/'+val.batiment.id+'/salles"><h4>Liste des entrées</h4></a></div>',
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
