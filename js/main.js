var colorsArray = [];
var numOfColorsInGroup= 0;
var numOfColorsInList = 6;

var colrDict = {
    "blue": 65535,
    "yellow": 16776960,
    "green": 2263842,
    "orange": 16747520,
    "purple": 12211667,
    "red": 11546720,
};

function showNumOfColors()
{
    document.getElementById("color-in-list").innerHTML = "Num of Colors:  " +numOfColorsInList; 
    document.getElementById("color-in-group").innerHTML = "Num of Colors:  "+numOfColorsInGroup;
    document.getElementById("current-color-list").innerHTML = "Colors in List: "+colorsArray;
}

$( function() 
{
    showNumOfColors();
    $(".draggable").draggable({revert: "invalid"});   
    $("#group-obj").droppable(
    {  drop: function(event, ui) 
        {    
            
            var target_info = $(ui.draggable.context).attr("id");
            
            console.log("the color is: "+target_info);
            
            if(colorsArray.indexOf(target_info) == -1)
            {
                colorsArray.push(target_info);
                numOfColorsInGroup += 1;
                numOfColorsInList -= 1;
                showNumOfColors();
                
                console.log("color value is: "+colrDict[target_info]);
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
           
           console.log(colorsArray);
        }
    });    
});


//console.dir(ui.draggable) good trick to get info