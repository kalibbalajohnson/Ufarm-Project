// validation function
const Validate = () => {
  // picking input fields with their names
  let email = document.register.email;
  let password = document.register.password;
  // pick error sections
  let mailError = document.getElementById("mailErr");
  let passError = document.getElementById("passErr");

  // email validations
  const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "") {
    email.style.border = "2px solid red";
    mailError.textContent = "Email is required";
    mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

    return false;
  } else if (!email.value.match(emailregex)) {
    email.style.border = "2px solid red"
    mailError.textContent = "Please put in a correct email address";
    mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

    return false;
  } else {
    email.style.border = "2px solid green"
    mailError.textContent = "";
    password.focus();
  }

  // password validation
  if (password.value == "") {
    password.style.border = "2px solid red"
    passError.textContent = "Password is required";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  }
  else if (password.value.length < 5) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must be atleast 5 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  } else if (password.value.length > 15) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must not be more than 15 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  }
  else {
    password.style.border = "2px solid green"
    passError.textContent = "";
  }
}


// validation function
const Validate4 = () => {
  // picking input fields with their names
  let password = document.register.password;
  let uniqueno = document.register.uniqueno
  // pick error sections
  let passError = document.getElementById("passErr");
  let uniquenoError = document.getElementById("uniquenoErr");

  // unique number validations
  const aoregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/
  if (uniqueno.value == "") {
    uniqueno.style.border = "2px solid red"
    uniquenoError.textContent = "Unique number is required";
    uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    uniqueno.focus();
    return false;
  } else if (!(uniqueno.value.match(aoregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
    uniqueno.style.border = "2px solid red"
    uniquenoError.textContent = "Unique number must follow this formart AO-000";
    uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    uniqueno.focus();
    return false;
  } else {
    uniqueno.style.border = "2px solid green"
    uniquenoError.textContent = "";
  }

  // password validation
  if (password.value == "") {
    password.style.border = "2px solid red"
    passError.textContent = "Password is required";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  }
  else if (password.value.length < 5) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must be atleast 5 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  } else if (password.value.length > 15) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must not be more than 15 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  }
  else {
    password.style.border = "2px solid green"
    passError.textContent = "";
  }
}




const Validate1 = (event) => {
  let error = 0
  // pick inputs
  let name = document.getElementById("name");
  let ward = document.getElementById("ward")
  let FOid = document.getElementById("FOid")
  let DOR = document.getElementById("DOR");
  let DOB = document.getElementById("DOB");
  let activities = document.getElementById("activities");
  let nin = document.getElementById("nin");
  let contact = document.getElementById("contact");
  let directions = document.getElementById("directions");
  let residence = document.getElementById("residence");
  let period = document.getElementById("period");
  let male = document.getElementById("male");
  let female = document.getElementById("female");





  // pick error sections
  let nameError = document.getElementById("nameErr")
  let wardError = document.getElementById("wardErr")
  let idError = document.getElementById("idErr")
  let dorError = document.getElementById("dorErr");
  let dobError = document.getElementById("dorErr");
  let activityError = document.getElementById("actErr");
  let ninError = document.getElementById("ninErr");
  let contactError = document.getElementById("contactErr");
  let dirError = document.getElementById("dirErr");
  let resError = document.getElementById("resErr");
  let periodError = document.getElementById("periodErr");
  let genderError = document.getElementById("genderErr");

  // validating first name input emptiness
  if (name.value == "") {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please first name can not be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (name.value.length < 5) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be atleast 3 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (name.value.length > 50) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be less than 11 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    name.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please last name can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (ward.value.length < 4) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be atleast 3 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (ward.value.length > 20) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be less than 11 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }


  // unique number validations
  const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/
  if (FOid.value == "") {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number must follow this formart AO-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    FOid.style.border = "2px solid green"
    idError.textContent = "";
  }

  // gender validations
  if (female.checked == false && male.checked == false) {
    // if(!(female.checked && male.checked)){
    genderError.textContent = "Please select gender";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   return false;
    error++
  } else {
    genderError.textContent = "";
  }

  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please last name can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 4) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be atleast 3 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 20) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be less than 11 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }



  // nin validations
  if (nin.value == "") {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please last name can not be empty"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length < 4) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be atleast 3 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length > 20) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be less than 11 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    nin.style.border = "1px solid green"
    ninError.textContent = "";
  }


  // activity validations
  if (activities.value == "") {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please last name can not be empty"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length < 4) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be atleast 3 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length > 20) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be less than 11 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    activities.style.border = "2px solid green"
    activityError.textContent = "";
  }


  // date of birth validations
  if (DOB.value == "") {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please last name can not be empty"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length < 4) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be atleast 3 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length > 20) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be less than 11 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOB.style.border = "2px solid green"
    dobError.textContent = "";
  }


  // date of registration validations
  if (DOR.value == "") {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please last name can not be empty"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length < 4) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be atleast 3 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length > 20) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be less than 11 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOR.style.border = "2px solid green"
    dorError.textContent = "";
  }


  // directions validations
  if (directions.value == "") {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please last name can not be empty"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (directions.value.length < 4) {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please the last name must be atleast 3 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (directions.value.length > 20) {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please the last name must be less than 11 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    directions.style.border = "2px solid green"
    dirError.textContent = "";
  }

  // validating period of stay input
  if (period.value == "") {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please last name can not be empty"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (period.value.length < 2) {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please the last name must be atleast 3 letters"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (period.value < 10) {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please the last name must be less than 11 letters"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++

  } else {
    period.style.border = "2px solid green"
    periodError.textContent = "";
  }


  // residence type validations
  if (residence.value == "") {
    residence.style.border = "2px solid red";
    resError.textContent = "Please select a role";
    resError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    residence.style.border = "2px solid green"
    resError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault()
  }
}


const Validate2 = (event) => {
  let error = 0
  // pick inputs
  let name = document.getElementById("name");
  let ward = document.getElementById("ward")
  let FOid = document.getElementById("FOid")
  let DOR = document.getElementById("DOR");
  let DOB = document.getElementById("DOB");
  let activities = document.getElementById("activities");
  let nin = document.getElementById("nin");
  let contact = document.getElementById("contact");
  let male = document.getElementById("male");
  let female = document.getElementById("female");



  // pick error sections
  let nameError = document.getElementById("nameErr")
  let wardError = document.getElementById("wardErr")
  let idError = document.getElementById("idErr")
  let dorError = document.getElementById("dorErr");
  let dobError = document.getElementById("dorErr");
  let activityError = document.getElementById("actErr");
  let ninError = document.getElementById("ninErr");
  let contactError = document.getElementById("contactErr");
  let genderError = document.getElementById("genderErr");



  // validating first name input emptiness
  if (name.value == "") {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please first name can not be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (name.value.length < 5) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be atleast 3 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (name.value.length > 50) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be less than 11 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    name.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please last name can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (ward.value.length < 4) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be atleast 3 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (ward.value.length > 20) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be less than 11 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }


  // unique number validations
  const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/
  if (FOid.value == "") {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number must follow this formart AO-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    FOid.style.border = "2px solid green"
    idError.textContent = "";
  }

  // gender validations
  if (female.checked == false && male.checked == false) {
    // if(!(female.checked && male.checked)){
    genderError.textContent = "Please select gender";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   return false;
    error++
  } else {
    genderError.textContent = "";
  }

  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please last name can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 4) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be atleast 3 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 20) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be less than 11 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }



  // nin validations
  if (nin.value == "") {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please last name can not be empty"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length < 4) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be atleast 3 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length > 20) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be less than 11 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    nin.style.border = "1px solid green"
    ninError.textContent = "";
  }


  // activity validations
  if (activities.value == "") {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please last name can not be empty"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length < 4) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be atleast 3 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length > 20) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be less than 11 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    activities.style.border = "2px solid green"
    activityError.textContent = "";
  }


  // date of birth validations
  if (DOB.value == "") {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please last name can not be empty"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length < 4) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be atleast 3 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length > 20) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be less than 11 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOB.style.border = "2px solid green"
    dobError.textContent = "";
  }


  // date of registration validations
  if (DOR.value == "") {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please last name can not be empty"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length < 4) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be atleast 3 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length > 20) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be less than 11 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOR.style.border = "2px solid green"
    dorError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault()
  }
}


const Validate5 = (event) => {
  let error = 0
  // pick inputs
  let product = document.getElementById("product");
  let ward = document.getElementById("ward")
  let date = document.getElementById("date")
  let price = document.getElementById("price");
  let quantity = document.getElementById("quantity");
  let pay = document.getElementById("pay");
  let dir = document.getElementById("dir");
  let delivery = document.getElementById("delivery");
  let type = document.getElementById("type");



  // pick error sections
  let nameError = document.getElementById("nameErr")
  let wardError = document.getElementById("wardErr")
  let payError = document.getElementById("payErr")
  let dateError = document.getElementById("dateErr");
  let priceError = document.getElementById("priceErr");
  let quantityError = document.getElementById("quantityErr");
  let dirError = document.getElementById("dirErr");
  let deliveryError = document.getElementById("delErr");
  let typeError = document.getElementById("typeErr");



  // validating first name input emptiness
  if (product.value == "") {
    product.style.border = "2px solid red"
    nameError.innerHTML = "Please first name can not be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (product.value.length < 5) {
    product.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be atleast 3 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (product.value.length > 50) {
    product.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be less than 11 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    product.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please last name can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (ward.value.length < 4) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be atleast 3 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (ward.value.length > 20) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be less than 11 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }

  // date  validations
  if (date.value == "") {
    date.style.border = "2px solid red"
    dateError.innerHTML = "Please last name can not be empty"
    dateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (date.value.length < 4) {
    date.style.border = "2px solid red"
    dateError.innerHTML = "Please the last name must be atleast 3 letters"
    dateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (date.value.length > 20) {
    date.style.border = "2px solid red"
    dateError.innerHTML = "Please the last name must be less than 11 letters"
    dateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    date.style.border = "2px solid green"
    dateError.textContent = "";
  }


  if (price.value == "") {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please last name can not be empty"
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (price.value.length < 4) {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please the last name must be atleast 3 letters"
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (price.value.length > 20) {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please the last name must be less than 11 letters"
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    price.style.border = "2px solid green"
    priceError.textContent = "";
  }


  if (quantity.value == "") {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please last name can not be empty"
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (quantity.value.length < 4) {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please the last name must be atleast 3 letters"
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (quantity.value.length > 20) {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please the last name must be less than 11 letters"
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    quantity.style.border = "2px solid green"
    quantityError.textContent = "";
  }

  // pay validations
  if (pay.value == "") {
    pay.style.border = "2px solid red";
    payError.textContent = "Please select a payment mode";
    payError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    pay.style.border = "2px solid green"
    payError.textContent = "";
  }

  // validating directions input emptiness
  if (dir.value == "") {
    dir.style.border = "2px solid red"
    dirError.innerHTML = "Please first name can not be empty"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating directions for minimum length
  else if (dir.value.length < 5) {
    dir.style.border = "2px solid red"
    dirError.innerHTML = "Please the first name must be atleast 3 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating directions for maximum length
  else if (dir.value.length > 50) {
    dir.style.border = "2px solid red"
    dirError.innerHTML = "Please the first name must be less than 11 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    dir.style.border = "2px solid green"
    dirError.innerHTML = ""
  }

  // pay type validations
  if (delivery.value == "") {
    delivery.style.border = "2px solid red";
    deliveryError.textContent = "Please select a role";
    deliveryError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    delivery.style.border = "2px solid green"
    deliveryError.textContent = "";
  }

  // type validations
  if (type.value == "") {
    type.style.border = "2px solid red";
    typeError.textContent = "Please select a role";
    typeError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    type.style.border = "2px solid green"
    typeError.textContent = "";
  }


  if (error > 0) {
    event.preventDefault()
  }
}


const Validate6 = (event) => {
  let error = 0
  // pick inputs
  let fullname = document.getElementById("fullname");
  let email = document.getElementById("email")
  let contact = document.getElementById("contact")
  let address = document.getElementById("address");
  let shipping = document.getElementById("shipping");
  let pay = document.getElementById("pay");
  let male = document.getElementById("male");
  let female = document.getElementById("female");




  // pick error sections
  let fullnameError = document.getElementById("fullnameerr")
  let emailError = document.getElementById("emailerr")
  let contactError = document.getElementById("contacterr")
  let addressError = document.getElementById("addresserr");
  let shippingError = document.getElementById("shippingerr");
  let payError = document.getElementById("payerr");
  let genderError = document.getElementById("gendererr");



  
  // validating first name input emptiness
  if (fullname.value == "") {
    fullname.style.border = "2px solid red"
    fullnameError.innerHTML = "Please first name can not be empty"
    fullnameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (fullname.value.length < 5) {
    fullname.style.border = "2px solid red"
    fullnameError.innerHTML = "Please the first name must be atleast 3 letters"
    fullnameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (fullname.value.length > 50) {
    fullname.style.border = "2px solid red"
    fullnameError.innerHTML = "Please the first name must be less than 11 letters"
    fullnameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    fullname.style.border = "2px solid green"
    fullnameError.innerHTML = ""
  }


// email validations
const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (email.value == "") {
  email.style.border = "2px solid red";
  emailError.textContent = "Email is required";
  emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  error++;
} else if (!email.value.match(emailregex)) {
  email.style.border = "2px solid red"
  emailError.textContent = "Please put in a correct email address";
  emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  error++;
} else {
  email.style.border = "2px solid green"
  emailError.textContent = "";

}

  // validating last name input emptiness
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please last name can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be atleast 3 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be less than 11 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }

  // date  validations
  if (address.value == "") {
    address.style.border = "2px solid red"
    addressError.innerHTML = "Please last name can not be empty"
    addressError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (address.value.length < 5) {
    address.style.border = "2px solid red"
    addressError.innerHTML = "Please the last name must be atleast 3 letters"
    addressError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (address.value.length > 20) {
    address.style.border = "2px solid red"
    addressError.innerHTML = "Please the last name must be less than 11 letters"
    addressError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    address.style.border = "2px solid green"
    addressError.textContent = "";
  }

   // pay type validations
   if (shipping.value == "") {
    shipping.style.border = "2px solid red";
    shippingError.textContent = "Please select a role";
    shippingError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    shipping.style.border = "2px solid green"
    shippingError.textContent = "";
  }

  // pay validations
  if (pay.value == "") {
    pay.style.border = "2px solid red";
    payError.textContent = "Please select a payment mode";
    payError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    pay.style.border = "2px solid green"
    payError.textContent = "";
  }

//  // gender validations
//  if (male.checked == false && female.checked == false) {
//   // if(!(female.checked && male.checked)){
//   genderError.textContent = "Please select gender";
//   genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//   //   return false;
//   error++
// } else {
//   genderError.textContent = "";
// }
  
  if (error > 0) {
    event.preventDefault()
  }
}




