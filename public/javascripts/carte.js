$(document).ready(function () {

  var url_complete = window.location.pathname;
  
  var categories = new Array();
  var categoriesTemp = new Array();

  if (navigator.geolocation)
    var watchId = navigator.geolocation.watchPosition(successCallback, null, {enableHighAccuracy:true});
  
  // On récupère les parametres
  $.getJSON( url_complete + "/parametres.json", function(data) {
    if (data) {
      $.each(data, function(key, val){
        categories.push(key);
      });
    }
  });  
  
  // On récupère l'adresse de la page (auquel on enlève le '/carte' de la fin)
  var url = window.location.pathname.substr( 0, window.location.pathname.length-6 );
  
    if(url.indexOf("entrees",0) == -1)
    {
    	// Initialise la carte (zoom: 16 / type: road)
  		$('#map').gmap3(
    	{
    	action: 'init',
      	options:{
        	center:[48.5820584, 7.7466488],
        	zoom:16,
        	mapTypeId: google.maps.MapTypeId.ROAD
      		}
    	});
    }
    else
    {
    	// Initialise la carte (zoom: 19 / type: satellite)
    	$('#map').gmap3(
    	{
        action: 'init',
        options:{
            center:[48.5820584, 7.7466488],
            zoom:19,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        	}
    	});
    }
    
    // On récupère l'objet JSON correspondant à l'adresse précédente
	$.getJSON( url + ".json", function(data) {
	  
    // Si l'objet JSON récupéré n'est pas un tableau de batiments, on le transforme en tableau
    if (!$.isArray(data)) data = new Array(data);
      
    // Pour chaque batiment du tableau
    $.each(data, function(key, val) 
    {
      
	    // On se charge de marquer les batiments
	    if(!val.entree)
	    {
	    	i = 0;
	    	
	      
	    	if (!$.isEmptyObject(val.batiment.categories)) {
	    	  
	      	// On fait une copie INDEPENDANTE categoriesTemp des catégories
	      	categoriesTemp = categories.slice();
	      	
	        $.each(val.batiment.categories, function(k, v) {
	          
	          
	          if($.inArray(String(v.id), categoriesTemp) != -1) {
	            
	            // On enlève la catégorie déjà placée sur la carte du tableau categoriesTemp
	            categoriesTemp.splice($.inArray(String(v.id), categoriesTemp), 1);
	          
		          // Si il n'y a pas d'entrées on renvoie vers le batiment 
		          if (val.batiment.entrees[0]) premiereEntree = '/entrees/'+val.batiment.entrees[0].id;
		          else premiereEntree = '';
		          
		          // On positionne un marqueur pour ce batiment
		          $('#map').gmap3({
			          action: 'addMarker',
			          latLng: [val.batiment.latitude + 0.0001*i, val.batiment.longitude + 0.0001*i],
			          map:{
			            center: true,
			          },

			          marker: {
			            options: {
				            icon: "/images/categories/" + val.batiment.categories[i].id + '/small/' + val.batiment.categories[i].icon_file_name
			            },
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
						          '"><img alt="liste des entrées" src="/images/batiments/' + val.batiment.id + '/small/' + val.batiment.photo_file_name + '"></a>'+
						          '</div>'+
						
						          '</div>'+
					          '<div id="infoSalles" class="ui-btn-active ui-state-persist ui-btn ui-btn-up-a">'+
					          '<a href="/campuses/'+val.batiment.campus_id+
					          '/batiments/'+val.batiment.id+'/salles"><h4>Liste des salles</h4></a></div>',
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
		        }  
		          
		        
		          
	          if($.inArray("bornes", categories) != -1) {
	            
	            bornes = val.batiment.bornes;
	            if (!$.isArray(bornes)) bornes = new Array(bornes);
	            
	            $.each(bornes, function(kb, vb) {

	              // On positionne un marqueur pour cette borne
	              $('#map').gmap3({
		              action: 'addMarker',
		              latLng: [vb.latitude, vb.longitude],
			            map:{
			              center: true,
			            },
		              marker: {
		                options: {
			                icon: "/images/categories/borne.png"
		                },
		                data:'<div id="infoWindowContent">'+
		                      '<img src="' + vb.url_photo + '" class="borne_photo">' +
					               '</div>',
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
	          }
		        i++;
		      });
		    }
		  }
		  else
		  {
			  // On ajoute le marker de l'entrée.
			  $('#map').gmap3(
			  {
			  action: 'addMarker',
			  latLng: [val.entree.latitude, val.entree.longitude],
			  map: {center: true},
        marker: 
        {
			    options: 
          {
				    icon: '/images/entrees/entrance.png'
			      }
          }
			  });
		  }
    });
  });
});

function successCallback(position)
{    
    $('#map').gmap3(
    {
          action: 'addMarker',
          latLng: [position.coords.latitude, position.coords.longitude],
          
          marker: 
          {
                options: 
                {
                    icon: '/images/position.png'
                }
           }          
    });
}
