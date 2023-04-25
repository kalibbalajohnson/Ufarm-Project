// // validation function
// const Validate = () => {
//   // picking input fields with their names
//   let email = document.login.username;
//   let password = document.login.password;
//   // pick error sections
//   let mailError = document.getElementById("userErr");
//   let passError = document.getElementById("passErr");

//   // email validations
//   const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (email.value == "") {
//     email.style.border = "2px solid red";
//     mailError.textContent = "Email is required";
//     mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

//     return false;
//   } else if (!email.value.match(emailregex)) {
//     email.style.border = "2px solid red"
//     mailError.textContent = "Please put in a correct email address";
//     mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";

//     return false;
//   } else {
//     email.style.border = "2px solid green"
//     mailError.textContent = "";
//     password.focus();
//   }

//   // password validation
//   if (password.value == "") {
//     password.style.border = "2px solid red"
//     passError.textContent = "Password is required";
//     passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     password.focus();
//     return false;
//   }
//   else if (password.value.length < 5) {
//     password.style.border = "2px solid red"
//     passError.textContent = "Please the password must be atleast 5 characters";
//     passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     password.focus();
//     return false;
//   } else if (password.value.length > 15) {
//     password.style.border = "2px solid red"
//     passError.textContent = "Please the password must not be more than 15 characters";
//     passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
//     password.focus();
//     return false;
//   }
//   else {
//     password.style.border = "2px solid green"
//     passError.textContent = "";
//   }
// }


// validation function
const Validate4 = () => {
  // picking input fields with their names
  let password = document.login.password;
  let uniqueno = document.login.username;
  // pick error sections
  let passError = document.getElementById("passErr");
  let uniquenoError = document.getElementById("userErr");

  // unique number validations
  const aoregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/
  if (uniqueno.value == "") {
    uniqueno.style.border = "2px solid red"
    uniquenoError.textContent = "Unique ID is required";
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
  else if (password.value.length < 4) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must be atleast 4 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  } else if (password.value.length > 12) {
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
  let gender = document.getElementById("gender");






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
    nameError.innerHTML = "Please full name can not be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (name.value.length < 5) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please full name must be atleast 5 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (name.value.length > 50) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please full name must be less than 41 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    name.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please ward can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }


  // unique number validations
  // const unregex = /^AO-([0-9]{3})+$/;
  // const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/

  if (FOid.value == "") {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else if (!(FOid.value.match(foregex))) {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number must follow this formart FO-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    FOid.style.border = "2px solid green"
    idError.textContent = "";
  }

  // gender validations
  if (gender.value == "select") {
    gender.style.border = "2px solid red"
    genderError.textContent = "Gender is required";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    gender.style.border = "2px solid green"
    genderError.textContent = "";
  }

  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number must be atleast 10 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please contact must be less than 11 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }


  // nin validations
  if (nin.value == "") {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please nin cannot be empty"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length < 13) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please nin must be atleast 13 characters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length > 13) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please period must be less than 14 characters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    nin.style.border = "2px solid green"
    ninError.textContent = "";
  }


  // activity validations
  if (activities.value == "") {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please activities can not be empty"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length < 5) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please activities must be atleast 5 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length > 80) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please activities must be less than 81 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    activities.style.border = "2px solid green"
    activityError.textContent = "";
  }


  // date of birth validations
  if (DOB.value == "") {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please date of birth can not be empty"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length < 8) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please date of birth must be atleast 8 characters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length > 8) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please date of birth must be less than 9 characters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOB.style.border = "2px solid green"
    dobError.textContent = "";
  }


  // date of registration validations
  if (DOR.value == "") {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please date of registration can not be empty"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length < 4) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please date of registration must be atleast 8 characters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length > 20) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please date of registration must be less than 9 characters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOR.style.border = "2px solid green"
    dorError.textContent = "";
  }


  // directions validations
  if (directions.value == "") {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please directions can not be empty"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (directions.value.length < 10) {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please directions must be atleast 10 characters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (directions.value.length > 80) {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please directions must be less than 81 characters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    directions.style.border = "2px solid green"
    dirError.textContent = "";
  }

  // validating period of stay input
  if (period.value == "") {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please period of stay can not be empty"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (period.value < 10) {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please period of stay must be atleast 10 years"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++

  } else {
    period.style.border = "2px solid green"
    periodError.textContent = "";
  }


  // residence type validations
  if (residence.value == "") {
    residence.style.border = "2px solid red";
    resError.textContent = "Please select a type of residence";
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
  let gender = document.getElementById("gender");



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
    nameError.innerHTML = "Please name can not be empty"
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
    nameError.innerHTML = "Please the name must be less than 40 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    name.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please ward can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }


  // unique number validations
  // const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  // const foregex = /^FO-([0-9]{3})+$/
  if (FOid.value == "") {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
    // } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
  } else if (!(FOid.value.match(ufregex))) {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number must follow this formart UF-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    FOid.style.border = "2px solid green"
    idError.textContent = "";
  }

  // gender validations
  if (gender.value == "") {
    gender.style.border = "2px solid red"
    genderError.innerHTML = "Please gender can not be empty"
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    gender.style.border = "2px solid green"
    genderError.textContent = "";
  }

  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please contact can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number must be atleast 10 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number must be a maximum of 10 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }



  // nin validations
  if (nin.value == "") {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please nin cannot be empty"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length < 13) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the nin  must be atleast 13 characters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length > 13) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the nin must be less than 14 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    nin.style.border = "2px solid green"
    ninError.textContent = "";
  }


  // activity validations
  if (activities.value == "") {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please activities can not be empty"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length < 5) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please activities must be atleast 5 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length > 80) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please activities must be less than 80 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    activities.style.border = "2px solid green"
    activityError.textContent = "";
  }


  // date of birth validations
  if (DOB.value == "") {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please date of birth can not be empty"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length < 8) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the date of birth must be atleast 8 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length > 8) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the date of birth must be less than 9 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOB.style.border = "2px solid green"
    dobError.textContent = "";
  }


  // date of registration validations
  if (DOR.value == "") {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the date of registration can not be empty"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length < 8) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the date of registration must be atleast 3 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length > 8) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the date of registration must be less than 9 letters"
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
  let ward = document.getElementById("ward");
  let date = document.getElementById("date");
  let contact = document.getElementById("contact");
  let username = document.getElementById("username");
  let price = document.getElementById("price");
  let image = document.getElementById("image");
  let quantity = document.getElementById("quantity");
  let pay = document.getElementById("pay");
  let dir = document.getElementById("dir");
  let delivery = document.getElementById("delivery");
  let type = document.getElementById("type");
  let cat = document.getElementById("cat");



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
  let contactError = document.getElementById("contactErr");
  let imageError = document.getElementById("imageErr");
  let catError = document.getElementById("catErr");
  let userError = document.getElementById("usernameErr");


  const ufregex = /^UF-([0-9]{3})+$/;
  if (username.value == "") {
    username.style.border = "2px solid red"
    userError.innerHTML = "Unique number is required";
    userError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
    // } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
  } else if (!(username.value.match(ufregex))) {
    username.style.border = "2px solid red"
    userError.innerHTML = "Unique number must follow this formart UF-000";
    userError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    username.style.border = "2px solid green"
    userError.innerHTML = "";
  }


  if (image.value == "") {
    image.style.border = "2px solid red"
    imageError.innerHTML = "Please image can not be empty"
    imageError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++

  } else {
    image.style.border = "2px solid green"
    imageError.textContent = "";
  }

  // validating first name input emptiness
  if (product.value == "") {
    product.style.border = "2px solid red"
    nameError.innerHTML = "Please product name cannot be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (product.value.length < 5) {
    product.style.border = "2px solid red"
    nameError.innerHTML = "Please product name must be atleast 5 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (product.value.length > 12) {
    product.style.border = "2px solid red"
    nameError.innerHTML = "Please product name must be less than 13 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    product.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number must be atleast 10 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please phone number must be a maximum of 10 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }

  
  // date  validations
  if (date.value == "") {
    date.style.border = "2px solid red"
    dateError.innerHTML = "Please date cannot be empty"
    dateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (date.value.length < 4) {
    date.style.border = "2px solid red"
    dateError.innerHTML = "Please period must be atleast 3 letters"
    dateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (date.value.length > 20) {
    date.style.border = "2px solid red"
    dateError.innerHTML = "Please period must be less than 11 letters"
    dateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    date.style.border = "2px solid green"
    dateError.textContent = "";
  }


  if (price.value == "") {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please unit price cannot be empty"
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (price.value < 100) {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please unit price must be atleast ugx 100"
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    price.style.border = "2px solid green"
    priceError.textContent = "";
  }


  if (quantity.value == "") {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please quantity cannot be empty"
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (quantity.value < 1) {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please  quantity must be more than 1"
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

  if (ward.value == "") {
    ward.style.border = "2px solid red";
    wardError.textContent = "Please select a payment mode";
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }
  if (pay.value == "") {
    pay.style.border = "2px solid red";
    payError.textContent = "Please select a payment mode";
    payError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    pay.style.border = "2px solid green"
    payError.textContent = "";
  }

  if (cat.value == "") {
    cat.style.border = "2px solid red";
    catError.textContent = "Please select a payment mode";
    catError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    cat.style.border = "2px solid green"
    catError.textContent = "";
  }

  // validating directions input emptiness
  if (dir.value == "") {
    dir.style.border = "2px solid red"
    dirError.innerHTML = "Please directions cannot be empty"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating directions for minimum length
  else if (dir.value.length < 5) {
    dir.style.border = "2px solid red"
    dirError.innerHTML = "Please directions must be atleast 5 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating directions for maximum length
  else if (dir.value.length > 50) {
    dir.style.border = "2px solid red"
    dirError.innerHTML = "Please directions must be less than 11 letters"
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
  let id = document.getElementById("ID")
  let contact = document.getElementById("contact")
  let address = document.getElementById("address");
  let product = document.getElementById("product");
  // let shipping = document.getElementById("shipping");
  // let pay = document.getElementById("pay");
  let price = document.getElementById("price");
  let quantity = document.getElementById("quantity");
  let female = document.getElementById("female");
  let male = document.getElementById("male");



  // pick error sections
  let fullnameError = document.getElementById("fullnameerr")
  let idError = document.getElementById("IDerr")
  let contactError = document.getElementById("contacterr")
  let addressError = document.getElementById("addresserr");
  // let shippingError = document.getElementById("shippingerr");
  // let payError = document.getElementById("payerr");
  let productError = document.getElementById("producterr");
  let genderError = document.getElementById("gendererr");
  let quantityError = document.getElementById("quantityerr");
  let priceError = document.getElementById("priceerr");



  const ufregex = /^UF-([0-9]{3})+$/;
  if (id.value == "") {
    id.style.border = "2px solid red"
    idError.innerHTML = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
    // } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
  } else if (!(id.value.match(ufregex))) {
    id.style.border = "2px solid red"
    idError.innerHTML = "Unique number must follow this formart UF-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    id.style.border = "2px solid green"
    idError.innerHTML = "";
  }


  // validating full name input emptiness
  if (fullname.value == "") {
    fullname.style.border = "2px solid red"
    fullnameError.innerHTML = "Please full name can not be empty"
    fullnameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (fullname.value.length < 5) {
    fullname.style.border = "2px solid red"
    fullnameError.innerHTML = "Please full name must be atleast 5 letters"
    fullnameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (fullname.value.length > 50) {
    fullname.style.border = "2px solid red"
    fullnameError.innerHTML = "Please full name must be less than 41 letters"
    fullnameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    fullname.style.border = "2px solid green"
    fullnameError.innerHTML = ""
  }


  if (product.value == "") {
    product.style.border = "2px solid red"
    productError.innerHTML = "Please product can not be empty"
    productError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (product.value.length < 3) {
    product.style.border = "2px solid red"
    productError.innerHTML = "Please product must be atleast 3 letters"
    productError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (product.value.length > 20) {
    product.style.border = "2px solid red"
    productError.innerHTML = "Please product must be less than 21 letters"
    productError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    product.style.border = "2px solid green"
    productError.innerHTML = ""
  }


  if (quantity.value == "") {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please quantity cannot be empty"
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (quantity.value < 1) {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please quantity must be atleast 1 "
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (quantity.value.length > 1000) {
    quantity.style.border = "2px solid red"
    quantityError.innerHTML = "Please quantity must be less than 1001 letters"
    quantityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    quantity.style.border = "2px solid green"
    quantityError.innerHTML = ""
  }


  if (price.value == "") {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please price cannot be empty"
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (price.value < 100) {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please price must be atleast ugx 100 "
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (price.value > 500000) {
    price.style.border = "2px solid red"
    priceError.innerHTML = "Please price must be less than ugx 500,0001 "
    priceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    price.style.border = "2px solid green"
    priceError.innerHTML = ""
  }


  // // email validations
  // const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if (email.value == "") {
  //   email.style.border = "2px solid red";
  //   emailError.textContent = "Email is required";
  //   emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  //   error++;
  // } else if (!email.value.match(emailregex)) {
  //   email.style.border = "2px solid red"
  //   emailError.textContent = "Please put in a correct email address";
  //   emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  //   error++;
  // } else {
  //   email.style.border = "2px solid green"
  //   emailError.textContent = "";

  // }

  // validating last name input emptiness
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please contact can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please contact must be atleast 10 characters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 10) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please contact must be less than 11 characters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }

  // date  validations
  if (address.value == "") {
    address.style.border = "2px solid red"
    addressError.innerHTML = "Please address must not be empty"
    addressError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (address.value.length < 5) {
    address.style.border = "2px solid red"
    addressError.innerHTML = "Please address must be atleast 5 letters"
    addressError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (address.value.length > 30) {
    address.style.border = "2px solid red"
    addressError.innerHTML = "Please address must be less than 31 letters"
    addressError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    address.style.border = "2px solid green"
    addressError.textContent = "";
  }

  // pay type validations
  //  if (shipping.value == "") {
  //   shipping.style.border = "2px solid red";
  //   shippingError.textContent = "Please select a shipping method";
  //   shippingError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  //   error++
  // } else {
  //   shipping.style.border = "2px solid green"
  //   shippingError.textContent = "";
  // }

  // // pay validations
  // if (pay.value == "") {
  //   pay.style.border = "2px solid red";
  //   payError.textContent = "Please select a payment mode";
  //   payError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
  //   error++
  // } else {
  //   pay.style.border = "2px solid green"
  //   payError.textContent = "";
  // }

  // gender validations
  if (male.checked == false && female.checked == false) {
    // if(!(female.checked && male.checked)){
    genderError.textContent = "Please select a gender";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   return false;
    error++
  } else {
    genderError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault()
  }
}




