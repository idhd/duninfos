$(document).ready(function () {

  var window_url = window.location.pathname.substr( 0, window.location.pathname.length-6 );
  var window_url_split = window_url.split('/');
  
	$.getJSON( window_url,
	  function(data) {
	    if (window_url_split.length == 4)
	      
	      $.each(data, function(key, val) {
          // Positionne un marqueur
          $('#map').gmap3(
            { action: 'addMarker',
              latLng: [val.batiment.latitude, val.batiment.longitude],
              infowindow:
              {
                options:{
                  content: 'Hello World !' + val.batiment.nom
                }
              }
            }
          );
	        //alert("Tous les batiments: " + val.batiment.nom + " (" + val.batiment.longitude + ", " + val.batiment.latitude + ")" );
        });
      else
      {
        $('#map').gmap3(
            { action: 'addMarker',
              latLng: [data.batiment.latitude, data.batiment.longitude],
              infowindow:
              {
                options:{
                  content: 'Hello World !' +  data.batiment.nom
                }
              }
            });
       //alert("Un batiment: " + data.batiment.nom + " (" + data.batiment.longitude + ", " + data.batiment.latitude + ")" );
      }
    });
    
});
