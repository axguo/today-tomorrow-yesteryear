let currentDate = new Date();

function updateJournalEntry() {
    document.getElementById("date").innerText = currentDate.toDateString();
    document.getElementById("entry-text").innerText = generateJournalEntry();
}

document.getElementById("prev").addEventListener("click", () => {
    console.log("click prev")
    currentDate.setDate(currentDate.getDate() - 1);
    updateJournalEntry();
});

document.getElementById("next").addEventListener("click", () => {
    console.log("click next")
    currentDate.setDate(currentDate.getDate() + 1);
    updateJournalEntry();
});

updateJournalEntry(); // Initialize the first entry


function generateJournalEntry() {
    const grammar = {
        "start": "Today I $activity",
        "activity": "went for a walk | read a book | cooked a meal | watched a movie"
    };

    const rg = RiTa.grammar(grammar);
    return rg.expand();
}