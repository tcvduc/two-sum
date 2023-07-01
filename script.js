(() => {
  const classes = {
    inputTypeNumber1: "inputTypeNumber1",
    inputTypeNumber2: "inputTypeNumber2",
    buttonAdd: "buttonAdd",
    result: "result",
  };

  /**
   *
   * @param {HTMLInputElement} inputTypeNumber1
   * @param {HTMLInputElement} inputTypeNumber2
   * @param {HTMLButtonElement} buttonAdd
   * @param {HTMLSpanElement} result
   *
   */
  function addTwoNumber(inputTypeNumber1, inputTypeNumber2, buttonAdd, result) {
    buttonAdd.onclick = function () {
      const number1 = +inputTypeNumber1.value;
      const number2 = +inputTypeNumber2.value;

      const addResult = number1 + number2;
      result.innerHTML = `${addResult}`;

      inputTypeNumber1.value = "";
      inputTypeNumber2.value = "";
      inputTypeNumber1.focus();
    };

    window.onkeydown =
      /**
       *
       * @param {KeyboardEvent} event
       */
      function (event) {
        if (event.key === "Enter") {
          const number1 = +inputTypeNumber1.value;
          const number2 = +inputTypeNumber2.value;

          const addResult = number1 + number2;
          result.innerHTML = `${addResult}`;

          inputTypeNumber1.value = "";
          inputTypeNumber2.value = "";
          inputTypeNumber1.focus();
        }
      };
  }

  function main() {
    const inputTypeNumber1 = window.document.getElementsByClassName(
      classes.inputTypeNumber1
    )[0];
    const inputTypeNumber2 = window.document.getElementsByClassName(
      classes.inputTypeNumber2
    )[0];
    const buttonAdd = window.document.getElementsByClassName(
      classes.buttonAdd
    )[0];
    const result = window.document.getElementsByClassName(classes.result)[0];

    addTwoNumber(inputTypeNumber1, inputTypeNumber2, buttonAdd, result);
  }

  main();
})();
