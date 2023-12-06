function filterApiData(apiData, mandatoryKeys) {
  //filtert durch jedes Objekt in apiData
  return apiData.filter((obj) =>
    //every-Methode -> prüft ob jeder key im aktuellen objekt vorhanden ist
    mandatoryKeys.every((key) => Object.keys(obj).includes(key))
  );
}

//1. Parameter apiData = Array
//2. Parameter mandatoryKey = Array das alle Keys enthelt die ein Objekt (aus apidata haben sollte) um den filtertest zu bestehen
//3. Rückgabe des Arrays mit nur den Objekten die alles KEys aus dem mandatoryKeys-Array enthalten

// # Kata: Filter API Data

// Implement the `filterApiData` function in `filter-api-data.js` with the following requirements in mind.

// - The first parameter `apiData` will be an array that includes objects
// - The objects can have different keys
// - The second parameter `mandatoryKeys` is a array that includes all keys that an object (from the `apiData` array) should have to pass the filter test
// - Return an array with only the objects that include all keys from the `mandatoryKeys` array

// ## Filter Api Data Examples

const data1 = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData1 = filterApiData(data1, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]

const data2 = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData2 = filterApiData(data2, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
