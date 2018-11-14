function validateForm() {
    let x = document.forms["checkAge"]["age"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
}