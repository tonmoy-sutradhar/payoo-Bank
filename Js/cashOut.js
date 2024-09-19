// console.log("Home added!!");

// Save Money by click save button
document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("Button click done.");
    const inputAddMoney = document.getElementById("input-cashout-money").value;
    // console.log(inputAddMoney);
    const inputpinNumber = document.getElementById("cashout-pin-number").value;
    // console.log(inputpinNumber);

    if (inputpinNumber === "999") {
      console.log("Cutting your money in your account.");
      const Balance = document.getElementById("account-balance").innerText;
      // console.log(Balance);

      // const newMoney = Balance + inputAddMoney;
      const AccountBalance = parseFloat(Balance);
      const InputBalance = parseFloat(inputAddMoney);
      // console.log(AmountBalance);
      const newBalance = AccountBalance - InputBalance;
      // console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
      // inputAddMoney.value = "";
      // inputpinNumber.value = "";
    } else {
      alert("Failed to Cut Money!! please try again.");
    }
  });
