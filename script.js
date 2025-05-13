let count = 0
let totalPassengers = 0

let countEl = document.getElementById("count-el")
let entriesEl = document.getElementById("entries-el")
let totalEl = document.getElementById("total-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count > 0) {
        entriesEl.textContent += count + " - "
        totalPassengers += count
        totalEl.textContent = "Total passengers: " + totalPassengers
        count = 0
        countEl.textContent = 0
    }
}

function reset() {
    count = 0
    totalPassengers = 0
    countEl.textContent = 0
    entriesEl.textContent = "Previous entries: "
    totalEl.textContent = "Total passengers: 0"
}