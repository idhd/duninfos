$(document).ready(function(){    
    document.form.batiment_id.options.length=0;
    document.form.service_id.options.length=0;
    var mybatiment = $("select#select-batiment");
    var myservice = $("select#select-service");
    mybatiment.selectmenu("refresh");
    myservice.selectmenu("refresh");
    
    $("#select-campus").change(function() {
        var campuseslist=document.form.campus_id;
        var campus_id =  $("#select-campus").attr('value');
        var batimentslist=document.form.batiment_id;
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
            update();
        });

        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();
        var service_id = $("#select-service option:selected").val();
        
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services/'+service_id+'/edit');
        $(".kikoo").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services/'+service_id);

    });   
    

    function update(){
        var batimentslist=document.form.batiment_id;
        var batiment_id = $("select#select-batiment").attr('value');
        var campus_id = $("#select-campus option:selected").val();
        var serviceslist=document.form.service_id;
        var myselect = $("select#select-service");
              
        $.getJSON('/campuses/'+campus_id+'/batiments/'+batiment_id+'/services.json', function(data) {
            services=eval(data);
            //console.log(batiments);
            serviceslist.options.length=0;
            if (services.length != 0) {   
                for (i=0; i<services.length; i++)
                        serviceslist.options[serviceslist.options.length]=new Option(services[i].service.nom, services[i].service.id);
            }
            else
            {
                servicesslist.options[0]=new Option("Pas de services dans ce campus");            
            }
            myselect.selectmenu("refresh");
        });

        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();
        var service_id = $("#select-service option:selected").val();
        
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services/'+service_id+'/edit');
        $(".kikoo").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services/'+service_id);
    }
    
    $("#select-batiment").change(function() {
        update();
    });

    $("#test").click(function(e) {
        e.preventDefault;
        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();
        var service_id = $("#select-service option:selected").val();
        
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services/'+service_id+'/edit');
        $(".kikoo").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/services/'+service_id);
        e.default;
    });

});

