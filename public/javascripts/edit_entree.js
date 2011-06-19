
$(document).ready(function(){    
    document.form.batiment_id.options.length=0;
    var myselect = $("select#select-batiment");
    myselect.selectmenu("refresh");
    
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
                batimentslist.options[batimentslist.options.length]=new Option(batiments[i].batiment.nom, batiments[i].batiment.id, true);
        }
        else
        {
            batimentslist.options[0]=new Option("Pas de batiments dans ce campus");
        }
            myselect.selectmenu("refresh");
        });
        
        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();

        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/entrees/edit');
    });   
    
    $("#test").click(function(e) {
        e.preventDefault;
        var campus_id = $("#select-campus option:selected").val();
        var batiment_id = $("#select-batiment option:selected").val();
//        alert($("#select-batiment option:selected").val());
        $(".lol").attr('href','/campuses/'+campus_id+'/batiments/'+batiment_id+'/entrees/edit');
        e.default;
    });
});


