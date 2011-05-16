$(document).ready(function(){
  $(".all").hide();
  var choix = "";
    $("label[for='choix-campus']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".campus").show(); 
      $(".campus").attr('disabled', '');
      $(".campus-form").attr('disabled', '');     
      choix = "campus";
    });      
    $("label[for='choix-batiment']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".batiment").show(); 
      $(".batiment").attr('disabled', ''); 
      $(".batiment-form").attr('disabled', '');     
      choix = "batiment";
    });
    $("label[for='choix-salle']").click(function(){
      $(".all").hide();   
      $(".all").attr('disabled', 'disabled');
      $(".salle").show();   
      $(".salle").attr('disabled', '');
      $(".salle-form").attr('disabled', '');
      choix = "salle";
    });
    $("label[for='choix-entree']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".entree").show();      
      $(".entree").attr('disabled', '');
      $(".entree-form").attr('disabled', '');
      choix = "entree";
    });  
    $("label[for='choix-borne']").click(function(){
      $(".all").hide();  
      $(".all").attr('disabled', 'disabled');
      $(".borne").show();      
      $(".borne").attr('disabled', '');
      $(".borne-form").attr('disabled', '');
      choix = "borne";
    });
    $("label[for='choix-service']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".service").show();  
      $(".service").attr('disabled', '');    
      $(".service-form").attr('disabled', '');
      choix = "service";
    });
    $("label[for='choix-categorie']").click(function(){
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
      $("#select-campus").attr('disabled', 'disabled');
      var batiment_id = $("#select-batiment").attr('value');
      var campus_id =  $("#select-campus").attr('value');
      
      if(choix == "batiment") {
        $("#select-campus").attr('disabled', '');
        $("form").attr('action','campuses/'+campus_id+'/batiments');
        }
      else if(choix == "campus") {
        $("form").attr('action','campuses/');
        }
      else if(choix == "salle") {
        $("form").attr('action','campuses/'+campus_id+'/batiments/'+batiment_id+'/salles');
        }
      else if(choix == "entree") {
        $("form").attr('action','campuses/'+campus_id+'/batiments/'+batiment_id+'/entrees');
        }
      else if(choix == "borne") {
        $("form").attr('action','campuses/'+campus_id+'/batiments/'+batiment_id+'/bornes');
        }
      else if(choix == "service") {
        $("form").attr('action','campuses/'+campus_id+'/batiments/'+batiment_id+'/services');
        }
      else if(choix == "categorie") {
      }                                   
    });
    
    //function updatecities(selectedcitygroup){
    
    $("#select-campus").change(function() {
        var campuseslist=document.admin_form.campus_id;
        var campus_id =  $("#select-campus").attr('value');
        var batimentslist=document.admin_form.batiment_id;
        
        $.get("/campuses/"+campus_id+"/batiments.json", function(data) {
        batiments=eval(data);
        console.log(batiments);
        batimentslist.options.length=0;
        for (i=0; i<batiments.length; i++)
            batimentslist.options[batimentslist.options.length]=new Option(batiments[i].batiment.nom, batiments[i].batiment.id);         
        });
    });   
});
/* 
disabled

 $("#select-campus").change(function() {
$.get("/campus/"+campus.id+"/batiments.json", function(data) {
  batiments=eval(data);
  
});
});
 javascripts/dynamic_states.js.erb
function updatecities(selectedcitygroup){
citieslist.options.length=0
if (selectedcitygroup>0){
  for (i=0; i<cities[selectedcitygroup].length; i++)
    citieslist.options[citieslist.options.length]=new Option(cities[selectedcitygroup][i].split("|")[0], cities[selectedcitygroup][i].split("|")[1])
  }
}*/
