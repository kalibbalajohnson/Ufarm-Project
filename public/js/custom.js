function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();


function show(){
  document.getElementById('bigcard1').style.display ='block';
  document.getElementById('bigcard2').style.display ='block';
  document.getElementById('bigcard3').style.display ='block';
  // document.getElementById('button1').style.backgroundColor="green"
  // document.getElementById('button2').style.backgroundColor="white"
  // document.getElementById('button3').style.backgroundColor="white"
  // document.getElementById('button4').style.backgroundColor="white"
}
function show1(){
  document.getElementById('bigcard1').style.display ='block';
  document.getElementById('bigcard2').style.display ='none';
  document.getElementById('bigcard3').style.display ='none';
  // document.getElementById('button2').style.backgroundColor="green"
  // document.getElementById('button1').style.backgroundColor="white"
  // document.getElementById('button3').style.backgroundColor="white"
  // document.getElementById('button4').style.backgroundColor="white"  
}
function show2(){
  document.getElementById('bigcard2').style.display ='block';
  document.getElementById('bigcard1').style.display ='none';
  document.getElementById('bigcard3').style.display ='none';
  // document.getElementById('button3').style.backgroundColor="green"
  // document.getElementById('button2').style.backgroundColor="white"
  // document.getElementById('button1').style.backgroundColor="white"
  // document.getElementById('button4').style.backgroundColor="white"
}
function show3(){
  document.getElementById('bigcard3').style.display ='block';
  document.getElementById('bigcard1').style.display ='none';
  document.getElementById('bigcard2').style.display ='none';
  // document.getElementById('button4').style.backgroundColor="green"
  // document.getElementById('button2').style.backgroundColor="white"
  // document.getElementById('button3').style.backgroundColor="white"
  // document.getElementById('button1').style.backgroundColor="white"
}

function showalert(){
  document.querySelector("#alert").innerHTML= 'Succesfully Confirmed! Your order is onthe way';
  document.getElementById('alert').style.color="green";
}
