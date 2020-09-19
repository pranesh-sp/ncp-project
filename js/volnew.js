function volnew(){


  if (document.register-form.fname.value == "") {
    alert("Please provide your First Name!");
    document.register-form.fname.focus();
    return false;
}

if (document.register-form.lname.value == "") {
    alert("Last name cant be empty!");
    document.conForm.lname.focus();
    return false;
}

if (document.register-form.email.value == "") {
    alert("Please provide a Email!");
    document.register-form.email.focus();
    return false;
}

if (document.register-form.birth_date.value == "") {
  alert("Please provide a birth_date!");
  document.register-form.birth_date.focus();
  return false;
}
  
return true;


}