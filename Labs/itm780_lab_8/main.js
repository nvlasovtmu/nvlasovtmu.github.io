
function toggleColorblind(){
    
    var mainDivs = document.getElementsByTagName("div");

    for (let i = 0; i < mainDivs.length; i++){

        var currentBgColor = window.getComputedStyle(mainDivs[i]).backgroundColor;

        if (currentBgColor === "rgb(27, 51, 97)") { // #1b3361 in rgb
            mainDivs[i].style.backgroundColor = "#332288"; // Colorblind-friendly color

            document.getElementById("buttonSmall").style.backgroundColor="#CC6677";
            document.getElementById("buttonMed").style.backgroundColor="#CC6677";
            document.getElementById("buttonLarge").style.backgroundColor="#CC6677";
            document.getElementById("colorblindToggle").style.backgroundColor="#CC6677";

            
        } else {
            mainDivs[i].style.backgroundColor = "#1b3361"; // Original color

            document.getElementById("buttonSmall").style.backgroundColor="#a7d5fc";
            document.getElementById("buttonMed").style.backgroundColor="#a7d5fc";
            document.getElementById("buttonLarge").style.backgroundColor="#a7d5fc";
            document.getElementById("colorblindToggle").style.backgroundColor="#a7d5fc";
        }
    }
}

document.getElementById("colorblindToggle").addEventListener("click", toggleColorblind);


//Image Accessibility
function displayAltText(altText){
    alert("Image: " + altText);
}

document.getElementById("image1Button").addEventListener("click", function() {
    displayAltText(document.getElementById("image1").alt);
});

document.getElementById("image2Button").addEventListener("click", function() {
    displayAltText(document.getElementById("image2").alt);
});

document.getElementById("image3Button").addEventListener("click", function() {
    displayAltText(document.getElementById("image3").alt);
});
