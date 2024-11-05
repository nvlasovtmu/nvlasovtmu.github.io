//JS File for Personal Website Created in Lab 2-3


function displayName(){ //function to take user name and display it on the website
        var fullName = prompt("Enter your full name.");
        if(fullName != null)
            {
                document.getElementById("name_display").innerHTML = "Your name is: " + fullName + "!";
                document.getElementById("name_display_button").style.display = none;
            }
    }

function dropdownOpen(){ //function for showing the dropdown menu
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) { //close dropdown if mouse leaves the menu
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
             }
        }
    }
}   

function mouseOver(){ //mouse hover function
    var id = event.target.id;
    document.getElementById(id).style.backgroundColor = "#2f2f94";
}


function mouseOut(){ //mouse hover function
    var id = event.target.id;
    document.getElementById(id).style.backgroundColor = "#3535a3";

}


function enlargePic(){
    var profilePic = document.getElementById("profile_pic");
    profilePic.style.padding = "20%";
}




