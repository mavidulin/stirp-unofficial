

var funkcija = function(){

  var slova=["A","B","C","D","E","F","G","H","J","K","L"]; 

$.each(slova, function(index, value){
  $('#legend ul').append('<li id=' + value + '><img src="img/orange-arrow.png">' + value + '</li>');

  $('#izlazi').append('<div id="izlaz_' + value + '" class="hide"><img src="img/legend_' + value + '.png"></div>');


 $('#'+ value).on('mouseenter', function(){

    $('#izlaz_'+value).fadeIn().removeClass('hide').siblings('div').fadeOut();
  });


$('#lijevi').on('mouseleave', function(){

    $('#izlaz_'+value).not('.hide').hide();

  }); 
});


//desni div pomičan
$('#desni').draggable(); 

//div legend se pretvara u dialog box
// increase the default animation speed to exaggerate the effect
$.fx.speeds._default = 1000;
$(function() {
  $( "#legend" ).dialog({
      autoOpen: false,
      show: "blind",
      hide: "explode",
      height: 345,
      width: 100,
      draggable: false,
      resizable: false,
      closeOnEscape: true,
      position: "left"

    });

//button koji otvara legendu
$( "#opener" ).click(function() {
      $( "#legend" ).dialog( "open" );
      return false;
    });
  });


$(function() {
    $( "#radio" ).buttonset();
  });

$(function() {
    $( "#check" ).button();
    $( "#format_2" ).buttonset();
  });

$(function() {
    $( "#check" ).button();
    $( "#format" ).buttonset();
  });

$(function() {
    $( "input:submit, a, button", ".demo" ).button();
    $( "a", ".demo" ).click(function() { return false; });
  });
 
//pretvara div tabs u tabove  
$(function() {
    $( "#tabs" ).tabs();
  });

//css za buttone
$(".tools_button").css({'font-size' : '10', 'font-weight' : 'bolder'});
$(".layers_button").css({'font-size' : '13', 'font-weight' : 'bolder'});
$(".tab_button").css({'font-size' : '12', 'font-weight' : 'bolder'});
$("#radio").css({'margin-top':'10px'});
$("#format").css({'margin-top':'5px'});
 
}


