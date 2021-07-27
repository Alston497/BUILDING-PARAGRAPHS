var FullPara1 = [];
var FullPara2 = [];

function DisplayFirstPara() {
    //document.getElementById("para1").innerHTML = "":""  
    for(var i = 1; i <= 6; i++)
    {
        if((document.getElementById("Line"+i).value)!="")
        {
            FullPara1.push(document.getElementById("Line" + i).value);
            FullPara1.join(". ");
            document.getElementById("para1").innerHTML = FullPara1.join(". ");
        }
    }
    
}

function DisplaySecondPara() {
    //document.getElementById("para2").innerHTML = "";
    for(var k = 1; k <= 6; k++)
    {
        if((document.getElementById("line"+k).value)!="")
        {
            FullPara2.push(document.getElementById("line" + k).value);
            FullPara2.join(". ");
            document.getElementById("para2").innerHTML = FullPara2.join(". ");
            
        }
    }
}