function extractClassName(sessionTitle) {
  // Erster Parameter ist ein String
  //Eingabestring in leerzeichen aufgeben
  const aspect = sessionTitle.split(" ");
  //Überprüfen on Muster Class Year Month_Name vorliegt (ist eingabe String genau auf 4 teile aufgeteilt? Ist erster Teil Class?)
  if (aspect.length === 4 && aspect[0] === "Class") {
    const year = aspect[1]; // Year wird erwartet
    const monthName = aspect[3]; //Month wird erwartet

    // Monatsnamen auf zahlen mapen (nicht-umlaut und umlaut)
    const monthList = {
      Januar: "01",
      Februar: "02",
      März: "03",
      April: "04",
      Mai: "05",
      Juni: "06",
      Juli: "07",
      August: "08",
      September: "09",
      Oktober: "10",
      November: "11",
      Dezember: "12",
    };

    // Konventiere den Monatsnamen in entsprechende zahl oder 0 wenn nicht gefunden

    const monthNumber = monthList[monthName] || "00";

    //gib das Formatierte Ergebnis zurück = Template Literal für leicht lesbare und formatierte Strings, indem es Variablen und Ausdrücke innerhalb einer Zeichenkette einbettet
    return `${year}-${monthNumber}`;
  }

  return null;
}

// ## Extract Class Name

// - First `parameter` is a string

// - When the string contains the folling word pattern`Class YEAR MONTH_NAME` (e. g. Class 2023 August)
//   - Then return a new string with the year, an `-` as seperator and followed by the month converted to a number e. g. `Class 2022 September > 2023-09`
//   - Else return null
// - The month name could contain german umlauts or the alternative version. Both are valid. e. g. `Class 2022 März > 2023-03` === `Class 2022 Maerz > 2023-03`

// ### Extract Class Name Example

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
