// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).bind("mobileinit", function(){
  $.mobile.ajaxEnabled = false;
  
  /*function getSegment(num) {
    var segments = window.location.pathname.toString();
    segments = segments.split('/');
    if (segments[num]) return segments[num];
    else return '';
  }*/
 /* 
	$.getJSON( window.location.pathname,
	  function(data) {
	    if (data.length>1)
	      $.each(data, function(key, val) {
	        alert("JSON Data: " + val.campus.nom + " (" + val.campus.longitude + ", " + val.campus.latitude + ")" );
        });
      else alert("JSON Data: " + data.batiment.nom + " (" + data.batiment.longitude + ", " + data.batiment.latitude + ")" );
    });*/
  
});
