//variale part start
let start = document.createElement("button");
let errorMessage = document.createElement("p");
let body = document.querySelector("body");
let $playerOneName = document.createElement("h2");
let $playerTwoName = document.createElement("h2");
let $playerThreeName = document.createElement("h2");
//variable part end
body.appendChild(start);
start.innerText = `Start`;
start.style = "color:green; font: 700 36px --roboto;";
start.addEventListener("click", () => {
  body.removeChild(start);
  //create element part
  let inputFrom = document.createElement("div");
  let input = document.createElement("input");
  let playerOneName = document.createElement("button");
  //append child part
  body.appendChild(inputFrom);
  inputFrom.appendChild(input);
  inputFrom.appendChild(playerOneName);
  //add class name or ID
  inputFrom.className = "inputFrom";
  input.className = "input";
  playerOneName.className = "playerOneName";
  // set attribut part
  input.setAttribute("placeholder", "Type player one name.");
  playerOneName.innerText = "Submit";
  playerOneName.addEventListener("click", () => {
    if (input.value !== "") {
      body.appendChild($playerOneName);
      $playerOneName.innerHTML = `Player one name: ${input.value}`;
      input.value = "";
      inputFrom.removeChild(playerOneName);
      let playerTwoName = document.createElement("button"); //creating the new button with the name of playerTwoName
      inputFrom.appendChild(playerTwoName); // appending the playerTwoName to the inputForm
      playerTwoName.innerText = "Submit"; // setting the innerText
      playerTwoName.className = "playerTwoName";
      input.setAttribute("placeholder", "Type player two name.");
      inputFrom.removeChild(errorMessage);
      playerTwoName.addEventListener("click", () => {
        if (input.value !== "") {
          body.appendChild($playerTwoName);
          $playerTwoName.innerHTML = `Player two name: ${input.value}`;
          input.value = "";
          inputFrom.removeChild(playerTwoName);
          let playerThreeName = document.createElement("button"); //creating the new button with the name of playerThreeName
          inputFrom.appendChild(playerThreeName); // appending the playerThreeName to the inputForm
          playerThreeName.innerText = "Submit"; // setting the innerText
          playerThreeName.className = "playerThreeName";
          input.setAttribute("placeholder", "Type player three name.");
          inputFrom.removeChild(errorMessage);
          playerThreeName.addEventListener("click", () => {
            if (input.value !== "") {
              body.appendChild($playerThreeName);
              $playerThreeName.innerHTML = `Player three name: ${input.value}`;
              input.value = "";
              body.removeChild(inputFrom);
              //new code will be added from here
            } else {
              inputFrom.appendChild(errorMessage);
              errorMessage.className = "errorMessage";
              errorMessage.innerHTML = "This field can't be blank.";
            }
          });
        } else {
          inputFrom.appendChild(errorMessage);
          errorMessage.className = "errorMessage";
          errorMessage.innerHTML = "This field can't be blank.";
        }
      });
    } else {
      inputFrom.appendChild(errorMessage);
      errorMessage.className = "errorMessage";
      errorMessage.innerHTML = "This field can't be blank.";
    }
  });
});
