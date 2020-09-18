function conval() {

    if (document.conForm.fname.value == "") {
        alert("Please provide your First Name!");
        document.conForm.fname.focus();
        return false;
    }

    if (document.conForm.lname.value == "") {
        alert("Last name cant be empty!");
        document.conForm.lname.focus();
        return false;
    }

    if (document.conForm.email.value == "") {
        alert("Please provide a Email!");
        document.conForm.email.focus();
        return false;
    }

    if (document.conForm.subject.value == "") {
        alert("Please provide a Subject!");
        document.conForm.subject.focus();
        return false;
    }

    if (document.conForm.message.value == "") {
        alert("Please provide a Message!");
        document.conForm.message.focus();
        return false;
    }
    
    
    
    
    
    return true;
}
