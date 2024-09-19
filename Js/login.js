// console.log("HI I am javascript");

// Form submit reloading the page
// step-1: set the event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step-2: Prevent default behaviour
    event.preventDefault();
    console.log("Login button click.");

    // step-2: Get the phone number
    const phoneNumber = document.getElementById("phn-num").value;
    const pinNumber = document.getElementById("pin-num").value;
    // console.log(phoneNumber, pinNumber);

    if (phoneNumber === "777" && pinNumber === "888") {
      console.log("You are Logged In");
      // window.location.href = "/home.html";
      window.location.href = "/home.html";
    } else {
      alert("Enter the valid Phone Number and PIN");
    }
  });
