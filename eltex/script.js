function getRandomChar() {
  const chars = "ABDEFGHIJKLMNOQRTUVWYZ0123456789+-_$~";
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

function generateRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomChar();
  }
  return result;
}

function generateAndProcessString() {
  let N = parseInt(document.getElementById("lengthInput").value, 10);
  let randomString = generateRandomString(N);

  document.getElementById("generatedString").innerText =
    "Сгенерированная строка: " + randomString;

  let firstChar = document.getElementById("firstCharInput").value;
  let step2String = "";
  for (let i = 0; i < randomString.length; i++) {
    let char = randomString[i];
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      step2String += firstChar;
    } else {
      step2String += char;
    }
  }
  document.getElementById("step2String").innerText =
    "Строка после замены всех букв: " + step2String;

  let secondChar = document.getElementById("secondCharInput").value;
  let finalString = "";
  for (let i = 0; i < step2String.length; i++) {
    let char = step2String[i];
    if (char >= "0" && char <= "9") {
      finalString += secondChar;
    } else {
      finalString += char;
    }
  }
  document.getElementById("finalString").innerText =
    "Строка после замены всех цифр: " + finalString;

  let firstCharCount = 0;
  let secondCharCount = 0;
  let unchangedCount = 0;

  for (let i = 0; i < finalString.length; i++) {
    let char = finalString[i];
    if (char === firstChar) {
      firstCharCount++;
    } else if (char === secondChar) {
      secondCharCount++;
    } else {
      unchangedCount++;
    }
  }
  document.getElementById("firstCharCount").innerText =
    "Количество повторов первого символа: " + firstCharCount;
  document.getElementById("secondCharCount").innerText =
    "Количество повторов второго символа: " + secondCharCount;
  document.getElementById("unchangedCount").innerText =
    "Количество неизмененных символов: " + unchangedCount;
}
