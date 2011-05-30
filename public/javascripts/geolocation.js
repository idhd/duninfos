$(function () {
  $(".localize_me").bind('tap', function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        $('.latitude').val(position.coords.latitude);
        $('.longitude').val(position.coords.longitude);
        if($('.adresse')) {
          console.log("adres")
          $('.adresse').gmap3({
            action: 'getAddress',
        		latLng: [position.coords.latitude, position.coords.longitude],
        		callback: function(results) {
        		  $('.adresse').text("Vous vous situez aux alentours de : "+results[0].formatted_address);
      		  }
      		});
        }
      });
    } else {
      // Pas de GPS ou refuse l'accès
    }
  });
});