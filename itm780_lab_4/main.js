
alert("Hello World"); //this displays a hello world message alert

var message; //variable, message
message = "Hello!"; //storing value
alert(message); //display variable

function showMessage(){
    alert("Hello everyone");
}

//showMessage()

function changeText(word, iteration){
    for(var i=0; i<iteration; i++){
        alert("Hello "+ word + "!")
    }
}

//changeText("Canada", 3);
//changeText("World", 5);

//var age = prompt("How old are you?", 30);
//confirm("You are " + age + " years old!");



window.onload = function() {
    var maindiv = document.getElementById("main").innerHTML = "Text has changed!";
}
window.onload = function() {
    var maindiv = document.getElementById("main");
    maindiv.style.backgroundColor = "green";
}

