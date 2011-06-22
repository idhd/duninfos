$(document).ready(function(){
    document.admin_form.batiment_id.options.length=0;
    var myselect = $("select#select-batiment");
    myselect.selectmenu("refresh");

  $("#btn_geloc").hide();
  if(navigator.geolocation) {$("#btn_geloc").show();}

  $(".all").hide();
  var choix = "";
    $("label[for='choix-campus']").bind('tap', function() {
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".campus").show(); 
      $(".campus").attr('disabled', '');
      $(".campus-form").attr('disabled', '');     
      choix = "campus";
    });      
    $("label[for='choix-batiment']").bind('tap', function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".batiment").show(); 
      $(".batiment").attr('disabled', ''); 
      $(".batiment-form").attr('disabled', '');     
      choix = "batiment";
    });
    $("label[for='choix-salle']").bind('tap', function() {
      $(".all").hide();   
      $(".all").attr('disabled', 'disabled' );
      $(".salle").show();   
      $(".salle").attr('disabled', '');
      $(".salle-form").attr('disabled', '');
      choix = "salle";
    });
    $("label[for='choix-entree']").bind('tap', function() {
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".entree").show();      
      $(".entree").attr('disabled', '');
      $(".entree-form").attr('disabled', '');
      choix = "entree";
    });  
    $("label[for='choix-borne']").bind('tap', function() {
      $(".all").hide();  
      $(".all").attr('disabled', 'disabled');
      $(".borne").show();      
      $(".borne").attr('disabled', '');
      $(".borne-form").attr('disabled', '');
      choix = "borne";
    });
    $("label[for='choix-service']").bind('tap', function() {
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".service").show();  
      $(".service").attr('disabled', '');    
      $(".service-form").attr('disabled', '');
      choix = "service";
    });
    $("label[for='choix-categorie']").bind('tap', function() {
      $(".all").hide();   
      $(".all").attr('disabled', 'disabled');
      $(".categorie").show();
      $(".categorie").attr('disabled', '');
      $(".categorie-form").attr('disabled', '');
      choix = "categorie";
    });
    
    $("form").submit(function() {
      $("."+choix).each(function() {
        $(this).attr('name',choix+'['+$(this).attr('name')+']');
      });
      $("."+choix+'-form').each(function() {
        $(this).attr('name',choix+'['+$(this).attr('name')+']');
      });
      
      $("#select-campus").attr('disabled', 'disabled');
      var batiment_id = $("#select-batiment").attr('value');
      var campus_id =  $("#select-campus").attr('value');
      
      if(choix == "batiment") {
        $("#select-campus").attr('disabled', '');
        $("form").attr('action','/campuses/'+campus_id+'/batiments/');
        }
      else if(choix == "campus") {
        $("form").attr('action','/campuses/');
        }
      else if(choix == "salle") {
        $("form").attr('action','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles');
        }
      else if(choix == "entree") {
        $("form").attr('action','/campuses/'+campus_id+'/batiments/'+batiment_id+'/entrees');
        }
      else if(choix == "borne") {
        $("form").attr('action','/campuses/'+campus_id+'/batiments/'+batiment_id+'/bornes');
        }
      else if(choix == "service") {
        $("form").attr('action','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services');
        }
      else if(choix == "categorie") {
        $("form").attr('action','/categories/');
      }                                   
    });
    
    $("#select-campus").change(function() {
        var campuseslist=document.admin_form.campus_id;
        var campus_id =  $("#select-campus").attr('value');
        var batimentslist=document.admin_form.batiment_id;
        var myselect = $("select#select-batiment");
        
        $.get("/campuses/"+campus_id+"/batiments.json", function(data) {
            batiments=eval(data);
            //console.log(batiments);
            batimentslist.options.length=0;
            if (batiments.length != 0) {
                for (i=0; i<batiments.length; i++)
                    batimentslist.options[batimentslist.options.length]=new Option(batiments[i].batiment.nom, batiments[i].batiment.id);         
            }
            else
            {
                batimentslist.options[0]=new Option("Pas de batiments dans ce campus");
            }
            myselect.selectmenu("refresh");
        });
    });

    if(navigator.geolocation)
    {
	navigator.geolocation.getCurrentPosition(successfunction, errorfunction, {maximumAge:5000, timeout:5000});

    	$("#btn_geloc").click(function()
	{
		la = $('#latitude').val();
		if(la == "") { $('#latitude').val(latitude); }
		else { $('#latitude').val(""); }

		la = $('#longitude').val();
		if(la == "") { $('#longitude').val(longitude); }
		else { $('#longitude').val(""); }

		ad = $('#adresse').text();
		if(ad == "")
		{
			$('#adresse').gmap3({
          		action:'getAddress',
          		latLng:[latitude, longitude],
          		callback:function(results){ $('#adresse').text("Vous vous situez aux alentours de : "+results[0].formatted_address) }});
		}
		else { $('#adresse').text(""); }

		navigator.geolocation.getCurrentPosition(successfunction, errorfunction, {maximumAge:100, timeout:5000});
	});
    }
});

function errorfunction(error){
    switch(error.code) {
        case error.TIMEOUT:
		latitude = 'Erreur : Timeout';
		longitude = 'Erreur : Timeout';
		adresse = '';
        break;
    }
}

function successfunction(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
}
