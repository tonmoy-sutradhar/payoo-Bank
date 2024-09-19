// console.log("Home added!!");

// Save Money by click save button
document
  .getElementById("save-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("Button click done.");
    const inputAddMoney = document.getElementById("input-add-money").value;
    console.log(inputAddMoney);
    const inputpinNumber = document.getElementById("pin-number").value;
    console.log(inputpinNumber);

    if (inputpinNumber === "888") {
      console.log("Adding your money in your account.");
      const Balance = document.getElementById("account-balance").innerText;
      console.log(Balance);

      // const newMoney = Balance + inputAddMoney;
      const AccountBalance = parseFloat(Balance);
      const InputBalance = parseFloat(inputAddMoney);
      // console.log(AmountBalance);
      const newBalance = AccountBalance + InputBalance;
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add Money!! please try again.");
    }
  });
