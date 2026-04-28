function getFormvalue() {
    event.preventDefault();

    let firstName = document.forms["form1"]["fname"].value.trim();
    let lastName = document.forms["form1"]["lname"].value.trim();

    alert(firstName + " " + lastName);
}