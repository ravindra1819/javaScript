import buses from "./BusData.js";

// DOM Selection :

const fromInput = document.getElementById('fromCity');
const toInput = document.getElementById('toCity');
const searchBtn = document.getElementById('searchBtn');
const busResults = document.getElementById('busResults');
const searchSection = document.getElementById('searchSection');

console.log(buses);
// DOM manipulation : 

searchBtn.addEventListener("click",
  () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    console.log(from, to)

    // clearing search
    busResults.innerHTML = "";

    // valiadating search

    if (!from || !to) {
      console.log(`Please enter your From and To address`);
      return;
    }
  }
)

