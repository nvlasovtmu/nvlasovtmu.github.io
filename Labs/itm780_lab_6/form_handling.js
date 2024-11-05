//This JSS defines local storage behaviour for the index html page

function storeFormLocally(event){ //Function called when forms are submitted
    //event.preventDefault(); //prevents form refresh for testing purposes
    
    //stores element submissions
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = document.querySelector('input[name="age"]:checked').value;
    var hiring = document.querySelector('input[name="Hiring"]:checked').value;
    var standouts = document.getElementById("standouts").value;
    var focusAreas = document.getElementById("focus areas").value;
    var colorChoice = document.getElementById("color choice").value;
    var rating = document.getElementById("rating").value;



    //stores checkbox element - only checked items
    const checkboxes = document.querySelectorAll('input[name="portfolio interaction"]:checked');
    let checkedBoxes = [];

    checkboxes.forEach(checkbox => {
            checkedBoxes.push(checkbox.id);
    });

    //save to local storage
    localStorage.setItem("gender", gender);
    localStorage.setItem("age", age);
    localStorage.setItem("hiring", hiring);
    localStorage.setItem("standouts", standouts);
    localStorage.setItem("checkedCheckboxes", checkedBoxes.join(',')); 
    localStorage.setItem("focus areas", focusAreas);
    localStorage.setItem("color choice", colorChoice);
    localStorage.setItem("rating", rating);


    //log to console for testing purposes
    console.log(localStorage.getItem("gender"));
    console.log(localStorage.getItem("age"));
    console.log(localStorage.getItem("hiring"));
    console.log(localStorage.getItem("standouts"));
    console.log(localStorage.getItem("checkedCheckboxes"));
    console.log(localStorage.getItem("focus areas"));
    console.log(localStorage.getItem("color choice"));
    console.log(localStorage.getItem("rating"));

}

function resetStorage(){
    localStorage.removeItem("gender");
    localStorage.removeItem("age");
    localStorage.removeItem("hiring");
    localStorage.removeItem("standouts");
    localStorage.removeItem("checkedCheckboxes");
    localStorage.removeItem("focus areas");
    localStorage.removeItem("color choice");
    localStorage.removeItem("rating");

    console.log("LocalStorage cleared.");

}


//event listeners to handle form submission and reset
document.getElementById('surveyForm').addEventListener('submit', storeFormLocally);
document.getElementById('surveyForm').addEventListener('reset', resetStorage);