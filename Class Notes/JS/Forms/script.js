console.log("Script is running...");

function handleFormSubmit() {
  const formInputNames = [
    "eventName",
    "eventDetails",
    "eventEmail",
    "eventDate",
  ];
  const formData = formInputNames.map((inputName) => {
    const element = document.getElementById("event-form")[inputName];
    const inputValue = element.value;
    // if (inputName == "eventName" && inputValue.length == 0) {
    //   alert("Please type a name for your event!");
    //   return null;
    // }
    // // For the details, we want a length of more than 50 characters
    // if (inputName == "eventDetails" && inputValue.length < 10) {
    //   alert("Please add more details to your event!");
    //   return null;
    // }
    // // For the email, it should have an '@' symbol, and a .com or .org or .edu or .ca
    // if (inputName == "eventEmail" && !inputValue.includes("@")) {
    //   alert(
    //     "Please include the @ symbol and a terminating address to your email"
    //   );
    //   return null;
    // }
    // For the event Date, it needs to be in the future!
    // TODO: Fix Bug
    console.log(inputValue);
    console.log(Date.now());
    const now = new Date(Date.now());
    const month = now.getMonth();
    const date = now.getDate();
    const inputMonth = inputValue.split("-")[1];
    const inputDate = inputValue.split("-")[2];
    if (inputName == "eventDate" && !inputMonth >= month) {
      if (!inputDate >= date) {
        alert("Event must be in the future!!!");
      }
      return null;
    }
    return inputValue;
  });
  console.log(formData);
}

// TODO: Figure out how to include .com/.org etc.
// const symbolArray = [
//   ".com",
//   ".org",
//   ".ca",
//   ".edu",
//   ".gov",
//   ".io",
//   ".dev",
//   ".net",
// ];
// symbolArray.forEach((symbol) => {
//   if (
//     inputName == "eventEmail" &&
//     !inputValue.includes("@") &&
//     !inputValue.includes(symbol)
//   ) {
//     alert(
//       "Please include the @ symbol and a terminating address to your email"
//     );
//     return null;
//   }
// });