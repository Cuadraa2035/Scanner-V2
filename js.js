
function Attendence(){
    var whatever = document.getElementById("whatever").value;
var changed = parseInt(whatever);
switch(changed){
    case 41735:
    document.getElementById("AC").innerHTML = " Attended";
    if (changed = 41735)
    alert("Signed In!");
    break;
    
    case 42526:
    document.getElementById("EP").innerHTML = " Attended";
    alert("Signed In!");

    break;
    case 42166:
    document.getElementById("JP").innerHTML = " Attended";
    alert("Signed In!");    

    break;
    case 41792:
    document.getElementById("KF").innerHTML = " Attended";
    alert("Signed In!");    

    break;
    case 44060:
    document.getElementById("JRD").innerHTML = " Attended";
    alert("Signed In!");    

    break;
    case 44781:
    document.getElementById("OK").innerHTML = " Attended";
    alert("Signed In!");    

    default:
    alert("Member is not regestered!")
    break;
    }
    
 }
