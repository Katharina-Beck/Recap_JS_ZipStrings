function extractClassName(sessionTitle) {
  // Erster Parameter ist ein String
  //Eingabestring in leerzeichen aufgeben
  const aspect = sessionTitle.split(" ");

  //Überprüfen ob Muster Class Year Month_Name vorliegt (ist eingabe String genau auf 4 teile aufgeteilt? Ist erster Teil Class?)
  const indexOfClass = aspect.indexOf("Class");

  if (indexOfClass != -1 && aspect.length > indexOfClass + 2) {
    const year = aspect[indexOfClass + 1]; // Year wird erwartet
    const monthName = aspect[indexOfClass + 2]; //Month wird erwartet

    // Monatsnamen auf zahlen mapen (nicht-umlaut und umlaut)
    const monthList = {
      januar: "01",
      februar: "02",
      märz: "03",
      maerz: "03",
      april: "04",
      mai: "05",
      juni: "06",
      juli: "07",
      august: "08",
      september: "09",
      oktober: "10",
      november: "11",
      dezember: "12",
    };

    // Konventiere den Monatsnamen in entsprechende zahl oder 00 wenn nicht gefunden

    const monthNumber = monthList[monthName.toLowerCase()] || "00";
    // Überprüfe Gültigkeit der Jahreszahl besteht aus ziffern und nicht mehr als 4 zeichen
    if (/^\d+$/.test(year) && year.length === 4) {
      //gib das Formatierte Ergebnis zurück = Template Literal für leicht lesbare und formatierte Strings, indem es Variablen und Ausdrücke innerhalb einer Zeichenkette einbettet
      return `${year}-${monthNumber}`;
    }
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
