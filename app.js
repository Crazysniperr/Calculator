let buttons = document.querySelectorAll(".button");
let display = document.getElementById("display");
let input = "";


Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", function(e) {
        value = e.target.innerHTML;
        if(value == "=" ) {
            input = eval(input);
            display.innerHTML = input;
        }
        else if(value == "C") {
            input = "";
            display.innerHTML = input;
        }
        else{
            input = input + value;
            display.innerHTML = input;

        }

    });
    button.addEventListener("keypress",function(e) {
        if(e.keyCode == 13){input = eval(input);
            display.innerHTML = input;
        console.log("this works")}
    }); 
    });




