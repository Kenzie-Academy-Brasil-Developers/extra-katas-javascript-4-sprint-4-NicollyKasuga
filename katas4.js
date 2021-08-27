const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];

const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(titulo, resultado) {
  const result = document.getElementById("resultKatas");

  const tituloKata = document.createElement("h2");
  const resultKata = document.createElement("li");

  const kataTitulo = document.createTextNode(titulo);
  tituloKata.appendChild(kataTitulo);
  const kataText = document.createTextNode(resultado);
  resultKata.appendChild(kataText);

  result.appendChild(tituloKata);
  result.appendChild(resultKata);
}

function kata1() {
  let title = "Kata 1";
  let result = gotCitiesCSV.split(",");

  showResults(title, result.join(", "));

  return result;
}

function kata2() {
  let title = "Kata 2";
  let result = bestThing.split(" ");

  showResults(title, result.join(", "));

  return result;
}

function kata3() {
  let title = "Kata 3";
  let result = gotCitiesCSV.split(",");

  showResults(title, result.join("; "));

  return result;
}

function kata4() {
  let title = "Kata 4";
  let result = lotrCitiesArray.join(", ");

  showResults(title, result);

  return result;
}

function kata5() {
  let title = "Kata 5";
  let result = lotrCitiesArray.slice(0, 5);

  showResults(title, result.join(", "));

  return result;
}

function kata6() {
  let title = "Kata 6";
  let result = lotrCitiesArray.slice(-5);

  showResults(title, result.join(", "));

  return result;
}

function kata7() {
  let title = "Kata 7";
  let result = lotrCitiesArray.slice(2, 5);
  let removed = result.splice(1, 1);

  showResults(title, result.join(", "));

  return result;
}

function kata8() {
  let title = "Kata 8";
  let result = lotrCitiesArray;
  let removed = result.splice(2, 1);

  showResults(title, result.join(", "));

  return result;
}

function kata9() {
  let title = "Kata 9";
  let result = lotrCitiesArray;
  let removed = result.splice(5);

  showResults(title, result.join(", "));

  return result;
}

function kata10() {
  let title = "Kata 10";
  let result = lotrCitiesArray;
  let add = result.splice(2, 0, "Rohan");

  showResults(title, result.join(", "));

  return result;
}

function kata11() {
  let title = "Kata 11";
  let result = lotrCitiesArray;
  let add = result.splice(5, 1, "Deadest Marshes");

  showResults(title, result.join(", "));

  return result;
}

function kata12() {
  let title = "Kata 12";
  let result = bestThing.slice(0, 14);

  showResults(title, result);

  return result;
}

function kata13() {
  let title = "Kata 13";
  let result = bestThing.slice(-12);

  showResults(title, result);

  return result;
}

function kata14() {
  let title = "Kata 14";
  let result = bestThing.slice(23, 38);

  showResults(title, result);

  return result;
}

function kata15() {
  let title = "Kata 15";
  let result = bestThing.substring(bestThing.length - 12);

  showResults(title, result);

  return result;
}

function kata16() {
  let title = "Kata 16";
  let result = bestThing.substring(23, 38);

  showResults(title, result);

  return result;
}

function kata17() {
  let title = "Kata 17";
  result = lotrCitiesArray;
  let removed = result.pop();

  showResults(title, result.join(", "));

  return result;
}

function kata18() {
  let title = "Kata 18";
  result = lotrCitiesArray;

  result.push("Harad");

  showResults(title, result.join(", "));

  return result;
}

function kata19() {
  let title = "Kata 19";
  result = lotrCitiesArray;
  let removed = result.shift();

  showResults(title, result.join(", "));

  return result;
}

function kata20() {
  let title = "Kata 20";
  result = lotrCitiesArray;
  let removed = result.unshift("Mordon");

  showResults(title, result.join(", "));

  return result;
}
