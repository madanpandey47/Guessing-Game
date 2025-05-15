    let result = document.querySelector("#mine");
    let gameResult = document.querySelector("#result");
    let btn = document.querySelector("#sub");

    btn.addEventListener("click", () => {
      let guessField = document.getElementById("guessField");
      let myguess = parseInt(guessField.value);
      let random = Math.round(Math.random() * 10);
      console.log(random);

      // Result element
      result.classList.remove("hidden");

      if (myguess === random) {
        result.innerText = `Your Guess is ${myguess}`;
        result.className = "text-xl mt-6 font-medium text-green-600";

        gameResult.innerHTML = `🎉 <span class="text-green-700 font-semibold">Congratulations!!! <br /> Guess matched: ${random}</span>`;
      } else {
        result.innerText = `Your Guess is ${myguess}`;
        result.className = "text-xl mt-6 font-medium text-red-600";

        gameResult.innerHTML = `❌ <span class="text-red-600 font-semibold">Better luck next time! <br />Computer guessed: ${random}</span>`;
      }

      guessField.value = "";
    });