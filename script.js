const entries = {};
let currentDate = new Date();

function getEntryForDate(date) {

    // Convert date to YYYY-MM-DD format
    const dateKey = date.toISOString().slice(0, 10);

    // Return saved entry if exists
    if (entries[dateKey]) {
        return entries[dateKey];
    }

    // Otherwise generate new entry
    const entry = generateJournalEntry();

    // Save it
    entries[dateKey] = entry;

    return entry;
}


function updateJournalEntry() {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    document.getElementById("date").innerText = currentDate.toLocaleDateString('en-US', options);

    const entry = getEntryForDate(currentDate);
    document.getElementById("entry-text").innerText = entry;
}

updateJournalEntry(); // Initialize the first entry

//////////////////////////
// navigation buttons
//////////////////////////
document.getElementById("prev").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateJournalEntry();
});

document.getElementById("next").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateJournalEntry();
});

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft") {
        currentDate.setDate(currentDate.getDate() - 1);
        updateJournalEntry();
    }

    if (e.key === "ArrowRight") {
        currentDate.setDate(currentDate.getDate() + 1);
        updateJournalEntry();
    }

});


//////////////////////////
// generate entries
//////////////////////////

function generateJournalEntry() {
    const grammar = {
        "start": "$want",
        "want": "I want to $dothing.",
        "dothing": "write $a $poem",
        "a": "a | a $adj",
        "adj": RiTa.randomWord({ pos: "jj" }),
        "poem": "poem | song | letter | verse | book"
    };


    const loveGrammar = {
        "start": "$question | $declaration | $wondering",
        "question": "how do you know if $if ?",
        "if": "you love somebody | it's right | they're the one | this is the way it's $sup to feel",
        "sup": "supposed | meant",
        "you": "you | I",
    }



    const rg = RiTa.grammar(grammar);
    const lg = RiTa.grammar(loveGrammar);



    return rg.expand();
}


// TODO: replace a with an