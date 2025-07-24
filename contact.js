
const boutton =document.getElementById('submite')
boutton.onclick=()=>{
    let isValid = true;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
      document.getElementById("nameError").textContent = "Please enter your name";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("emailError").textContent = "Please enter your email";
      isValid = false;
    }

    if (message === "") {
      document.getElementById("messageError").textContent = "Please enter your message";
      isValid = false;
    }

    return isValid;
  }
