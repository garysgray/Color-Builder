var colorsArray = [];
var numOfColorsInGroup= 0;
var numOfColorsInList = 6;

var colrDict = {
    "Blue"  : "00FFFF",
    "Yellow": "FFFF00",
    "Green" : "228B22",
    "Orange": "FF8C00",
    "Purple": "BA55D3",
    "Red"   : "B03060",
};

function showNumOfColors()
{
    document.getElementById("color-in-list").innerHTML = "Num of Colors:  " +numOfColorsInList; 
    document.getElementById("color-in-group").innerHTML = "Num of Colors:  "+numOfColorsInGroup;
    document.getElementById("current-color-list").innerHTML = getColorString();
}

function getColorString()
{
    var colorString = "";  
    for(var i in colorsArray)
    {
        colorString += colorsArray[i]+"="+colrDict[colorsArray[i]];
        if(i != colorsArray.length-1)
        {
            colorString+=", ";
        }
    }
    return colorString;
}

$( function() 
{
    showNumOfColors();
    $(".draggable").draggable({revert: "invalid"});   
    $("#group-obj").droppable(
    {  drop: function(event, ui) 
        {               
            var target_info = $(ui.draggable.context).attr("id");
            if(colorsArray.indexOf(target_info) == -1)
            {
                colorsArray.push(target_info);
                numOfColorsInGroup += 1;
                numOfColorsInList -= 1;
                showNumOfColors();
            }
            else
            {
                temp_value = colorsArray.indexOf(target_info);
                colorsArray.splice(temp_value,1);            
                colorsArray.push(target_info); 
                showNumOfColors();                
            }                       
           var dropped = ui.draggable;
           var droppedOn = $(this);
           $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
        }
    });    
});


//console.dir(ui.draggable) good trick to get info