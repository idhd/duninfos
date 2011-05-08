$(document).ready(function(){
  $(".all").hide();

    $("label[for='choix-campus']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".campus").show(); 
      $(".campus").attr('disabled', '');
      console.log($(".campus"));
      $(".campus").each(function(e) {
        e.attr('name','campus['+e.attr('name')+']');
      });

      //var id = $(".all").attr("id");
      //var name = $("").attr("name");

      //$("."+id).attr('name', id+'['+name+']');
    });      
    $("label[for='choix-batiment']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".batiment").show(); 
      $(".batiment").attr('disabled', '');     
    });
    $("label[for='choix-salle']").click(function(){
      $(".all").hide();   
      $(".all").attr('disabled', 'disabled');
      $(".salle").show();   
      $(".salle").attr('disabled', '');
    });
    $("label[for='choix-entree']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".entree").show();      
      $(".entree").attr('disabled', '');
    });  
    $("label[for='choix-borne']").click(function(){
      $(".all").hide();  
      $(".all").attr('disabled', 'disabled');
      $(".borne").show();      
      $(".borne").attr('disabled', '');
    });
    $("label[for='choix-service']").click(function(){
      $(".all").hide();
      $(".all").attr('disabled', 'disabled');
      $(".service").show();      
      $(".service").attr('disabled', '');
    });
    $("label[for='choix-categorie']").click(function(){
      $(".all").hide();   
      $(".all").attr('disabled', 'disabled');
      $(".categorie").show();
      $(".categorie").attr('disabled', '');
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
