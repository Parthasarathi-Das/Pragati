var barDisplay = true;
var call1 = true;
function showSidebar(){
    const sbar= document.querySelector(".nav ul");
    if(sbar.style.display =="none")
        barDisplay = true;
    if(barDisplay){
        sbar.style.display ="block";
        barDisplay = false;
    }else{
        sbar.style.display ="none";
        barDisplay = true;
    }
}