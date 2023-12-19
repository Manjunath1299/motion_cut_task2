
function getEmailValue(){
    let emailInput=document.getElementById("email");
    let email=emailInput.value.toLowerCase();
    // console.log(email);
    if (!email) {
         alert("Please enter a vaild email");
      }
    
      // Split the email into local part and domain part
      const [localPart, domainPart] = email.split('@');
    
      // Check if there is a local part and a domain part after the @ symbol
      if (!localPart || !domainPart) {
        alert("Please enter a vaild email");
      }
    
      // Check if there is at least one dot in the domain part
      if (!domainPart.includes('.')) {
        alert("Please enter a vaild email");
      }
    
      // Check if the local part and domain part do not start or end with a dot
      if (localPart.startsWith('.') || localPart.endsWith('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
        alert("Please enter a vaild email");
      }
    
      // Check if there are no consecutive dots in the local part or domain part
      if (localPart.includes('..') || domainPart.includes('..')) {
        alert("Please enter a vaild email");
      }
      let phonenum=document.getElementById("pnumber");
      let pnumber=phonenum.value;
      // console.log(pnumber)
      if(pnumber.length!=10){
        alert("Please enter a number with 10 digits only")
      }
      let passwordcheck=document.getElementById("password");
      let password=passwordcheck.value;
      // console.log(password);
      let passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$&*]).{8,}$/;
      if (!password.match(passwordpattern)) {
       alert("Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character [@,#,$&,*], and be at least 8 characters long.");
    }
    window.location.href = "success_page.html";
  
}