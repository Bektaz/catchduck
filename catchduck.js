$(document).ready(function(){
    $('#winner').hide();
    $('#gameover').hide();
    $('#explanation').hide();
    $('#replay').hide();
    $('#pause').hide();
    $('#continue').hide();
    $('#shoot').hide();
    var array = [$('#one'),$('#two'),$('#three'),$('#four'),$('#five'),$('#six'),$('#seven')];
    var induckpos = parseInt($("#duckindiv").position().top,10);
    var posoffire = Math.round(induckpos*0.444), i=0, k=0;

     $('#replay').click(function(){ 
        location.reload();
      });

     $('#start').click(function(){
        $('#start').hide();
        $('#shoot').show();
        $('#pause').show();     
        $("#bckaudio").trigger('play');
        scroll();   
      });

     $('#pause').click(function(){
        $('#pause').hide();
        $('#continue').show();     
        $("#bckaudio").trigger('pause');
        $('#duckindiv').stop(true);  
      });

     $('#continue').click(function(){
        $('#continue').hide();
        $('#pause').show();     
        $("#bckaudio").trigger('play');
        scroll();   
      });

     $('#rule').click(function(){
        $('#explanation').slideToggle('fast');  
      });

    $('#shoot').click(function(){
    $(array[i]).hide("explode",{pieces: 16 },500);
    i++;
    $("#shtaudio").trigger('play');
    var curduckpos = parseInt($("#duckindiv").position().top,10);    
    $("#fireindiv").css({left: '80px',opacity:1}).show();    
    $('#fireindiv').animate({left: '90%',opacity: 1},1000,function(){
            var dif = posoffire-curduckpos;
            if(i<=array.length){           
               if(dif<=posoffire-Math.round(induckpos*0.506) && dif>=posoffire-Math.round(induckpos*0.605)){
                  $("#bckaudio").trigger('pause');
                  $("#bckaudio").prop("currentTime",0);
                  $("#winneraudio").trigger('play');
                  $('#duckindiv').stop(true);
                  $("#duckindiv").effect('shake', { times: 3 }, 300);
                  $("#duckindiv").animate({top: '90%'}, 100).fadeOut();
                  $('#winner').show(); 
                  $('#shoot').hide();
                  $('#replay').show();
                  $('#start').hide();
                  $('#pause').hide();
                  $('#continue').hide();
                  k++;    
               }
            }
            if(i===array.length && k===0){                  
                  setTimeout(gover,500);
            }
        });    
        $('#fireindiv').fadeOut();//hide("explode",{pieces: 50 },200); 
      });         
    });
    
function scroll() {
    $('#duckindiv').animate({top: 0},1000);
    $("#duckindiv").animate({top: '90%'}, 1000, scroll);    
}

function gover(){
    $('#duckindiv').stop(true);                
    $('#gameover').show();
    $("#bckaudio").trigger('pause');
    $("#bckaudio").prop("currentTime",0);
    $("#gameoveraudio").trigger('play');
    $('#shoot').hide();
    $('#replay').show();
    $('#start').hide();
    $('#pause').hide();
    $('#continue').hide();
}



    
    

