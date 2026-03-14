var eye = document.querySelector("#eye-visibility");

eye.addEventListener("click", function() {
    var input = document.querySelector("#password");
    if (input.type === "password") {
        input.type = "text";
        eye.src = "assets/icons/eye-visibility-off.svg"; // Change to hidden eye icon
    }else{
        input.type = "password";
        eye.src = "assets/icons/eye-visibility.svg"; // Change back to visible eye icon
    }
})
