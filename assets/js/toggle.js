function darkLightMode(){
    if(document.getElementById("dn").checked){
        document.body.style.color = "#121212";
        document.querySelector(".sidebar a").style.color = "#121212";
        document.querySelector(".sidebar .closebtn").style.color = "#121212";
    }
    else
        document.body.style.color = "#FFF";
        document.querySelector(".sidebar .closebtn").style.color = "#FFF";
}