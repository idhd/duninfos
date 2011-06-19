$(document).ready(function(){    
    document.form.batiment_id.options.length=0;
    document.form.salle_id.options.length=0;
    var mybatiment = $("select#select-batiment");
    var mysalle = $("select#select-salle");
    mybatiment.selectmenu("refresh");
    mysalle.selectmenu("refresh");
    
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
        var salle_id = $("#select-salle option:selected").val();
        
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles/'+salle_id+'/edit');
        $(".kikoo").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles/'+salle_id);

    });   
    

    function update(){
        var batimentslist=document.form.batiment_id;
        var batiment_id = $("select#select-batiment").attr('value');
        var campus_id = $("#select-campus option:selected").val();
        var salleslist=document.form.salle_id;
        var myselect = $("select#select-salle");
              
        $.getJSON('/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles.json', function(data) {
        salles=eval(data);
        //console.log(batiments);
        salleslist.options.length=0;
        if (salles.length != 0) {   
            for (i=0; i<salles.length; i++)
                    salleslist.options[salleslist.options.length]=new Option(salles[i].salle.nom, salles[i].salle.id);
        }
        else
        {
            salleslist.options[0]=new Option("Pas de salles dans ce batiment");
        }
        myselect.selectmenu("refresh");
        });

        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();
        var salle_id = $("#select-salle option:selected").val();
        
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles/'+salle_id+'/edit');
        $(".kikoo").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles/'+salle_id);
    }
    
    $("#select-batiment").change(function() {
        update();
    });

    $("#test").click(function(e) {
        e.preventDefault;
        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();
        var salle_id = $("#select-salle option:selected").val();
        
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles/'+salle_id+'/edit');
        $(".kikoo").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/salles/'+salle_id);
        e.default;
    });

});

