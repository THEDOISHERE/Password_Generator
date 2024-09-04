function generatePass() {
  let Password = "";
  let charSet = "";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+{};~?,./";

  let length = parseInt(document.querySelector("#length").value);
  console.log(length);
  let useNumbers = document.querySelector("#numbers").checked;
  let useUpper = document.querySelector("#uppercase").checked;
  let useSymb = document.querySelector("#symbols").checked;

  charSet += lowerChars;
  if (useNumbers) {
    charSet += numberChars;
  }
  if (useUpper) {
    charSet += upperChars;
  }
  if (useSymb) {
    charSet += specialChars;
  }

  // if ((charSet += upperChars)) {
  //   charSet = +upperChars;
  // }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    Password += charSet[randomIndex];
  }

  document.getElementById("password").value = Password.slice(0, length);
  console.log(Password.length);

  // document.getElementById("generate").addEventListener("click", generatePass);
  console.log(Password);
}
