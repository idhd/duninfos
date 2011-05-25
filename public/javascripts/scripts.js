$(document).ready(function () {
    

    
  // Initialise la carte
  $('#map').gmap3(
    {action: 'init',
      options:{
        center:[48.5820584, 7.7466488],
        zoom:16,
        mapTypeId: google.maps.MapTypeId.ROAD,
        /*disableDefaultUI: true,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        rotateControl: false,
        overviewMapControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false*/
      }
    }
  );
  /*
  // Positionne un marqueur
  $('#map').gmap3(
    { action: 'addMarker',
      address: "homme de fer, strasbourg"
    }
  );
  
  // Positionne un marqueur
  $('#map').gmap3(
    { action: 'addMarker',
      icon: 'http://code.google.com/intl/fr/apis/maps/documentation/javascript/examples/images/beachflag.png',
      address: "gallia, strasbourg"
    }
  );*/
  
  // Supprimer les marqueurs
  $('#map_remove').bind('tap', function() {
      $('#map').gmap3({
          action: 'clear'
      });
  });

  $('#accordion').hide();
  
  $('#bouton-parametres').bind('tap', function() {
    $('#accordion').toggle();
  });

	$('#accordion list-divider').bind('tap', function() {
		$(this).next().toggle();
		return false;
	}).next().hide();
       

});
