var numOfColorsInGroup= 0;
var numOfColorsInList = 6;
var colorsArray = [];

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
            if(colorsArray.indexOf(ui.draggable) == -1)
            {
                colorsArray.push(ui.draggable);
                numOfColorsInGroup += 1;
                numOfColorsInList -= 1;
                showNumOfColors();
            }
           var dropped = ui.draggable;
           var droppedOn = $(this);
           
           $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });    
});

