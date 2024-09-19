// console.log("Features Page!!!!!!!!!!!!");

// Show the Cash-Out form--------->>>
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    // console.log("Show cash out btn");
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    // console.log("Show add money btn");
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });
