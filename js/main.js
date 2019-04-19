var numOfColorsInGroup= 0;
var numOfColorsInList = 6;

function showNumOfColors()
{
    document.getElementById("color-in-list").innerHTML = "Num of Colors:  " +numOfColorsInList; 
    document.getElementById("color-in-group").innerHTML = "Num of Colors:  "+numOfColorsInGroup;
}

$( function() 
{
    showNumOfColors();
    
    $(".draggable").draggable({revert: "invalid"}); 
    
    $(".group-obj").droppable(
    {  drop: function(event, ui) 
        {       
           var dropped = ui.draggable;
           var droppedOn = $(this);
           numOfColorsInGroup += 1;
           numOfColorsInList -= 1;
           showNumOfColors();
           $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });    
});

