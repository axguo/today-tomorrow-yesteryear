let manualEntries = [
    "i keep missing deadlines :(",
    "what would I be doing if i really cared about the things i said i did?", 
    "i must do the work.",
    "what if i became a witch?", // TODO more what if
    "depression checklist:\n1. is your area clean?\n2. have you had veggies/water?\n3. did you go outside?\n4. have you journaled?\n5. have you called a friend?\n6. have you moved your body?", 
    "my class seems to be going okay, so it's just the final paper.", 
    "i'm scared of having no results", // TODO scared
    "how am i feeling?",
    "when those little pockets of vulnerability hit - that's actual uncomfort. other pain, sadness. those are familiar and while unpleasant, not disturbing like this feeling.",
    "HOW UNSETTLING",
    "and i'm supposed to keep writing and writing and writing for a whole three minutes maybe?", // TODO writing and writing
    "will i have everything i've wanted?",
    "will my tv addiction end?",
    "if i do this continuously, will my creative energy be unblocked?",
    "i have so many loves that have been subdued.", // TODO
    "I worry about Y. our conversations don't feel symmetrical.", // TODO
    ":)) :) ))))",
    "i'm so nice to myself & understanding that my vices love me and yours do too.",
    "i'm his editor of apologies, but i'm terrible at them myself.",
    "i can imagine loving someone else, eventually.",
    "i cannot imagine not loving you.",
    "if i breathe deeply am i more integrated into this earth? i have touched more air?",
    "do i think he’s a fraud?",
    "i want to be intimate with a color.",
    "i want to write poems instead of just reading, i want to do research instead of just consuming.",
    "i want to create art instead of just being jealous.",
    "how awfully understandable. understandably awful.",
    "i can choose to turn my life around each day but really, it takes baby steps.",
    "i feel super overwhelmed and worried that i won't be able to be present when i'm with Y because i'll be thinking so much about work.",
    "i want slowness where everyday is full.",
    "it feels weird not to be surrounded by people anymore. i will definitely miss that.",
    "i keep forgetting to breathe.",
    "streams of consciousness are hard.",
    "i'm so fascinated by not being able to figure out how something works.",
    "i love that art is my choice, because it allows me to be interested in everything.",
    "more everything!!",
    "i'm so young. so so so young.",
    "i'm going to be the coolest old person i know.",
    "i want to absorb so much more of this world. sitting in the car on the way back, in that tightly packed car, i felt secure, safe, like we were in our own world, like i'd want to remember that moment forever.",
    "i'm reminded of zurich every time i see a large river, i'm reminded of china in certain cities.",
    "too much time together, i can’t take it i’m going crazy.",
    "D&D WAS SO FUN. i want to do it again.",
    "I feel very STUCK. I'm literally just frozen in time unable to do anything.",
    "The transition of seasons is really getting to me and I'm lost in time.",
    "it was hard to fall asleep last night and also hard to get up this morning.",
    "i'm so different from who i was starting out the year.",
    "i miss and don’t miss him.",
    "Ahh i'm feeling overwhelmed again and a little directionless?"


    
];


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

updateJournalEntry(); // initialize the first entry

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

    const todayGrammar = {
        "start": "$today | $intentions",
        "today": "today i'm feeling $feeling. | i'm feeling $feeling today.",
        "feeling": RiTa.randomWord({ pos: "jj" }),
        "intentions": "my intentions for the day are to $doathing.",
        "doathing": "love intensely | be present | $do more",
        "do": RiTa.randomWord({ pos: "vb" }),
        "do1": RiTa.randomWord({ pos: "vz" }),
        "do2": RiTa.randomWord({ pos: "vb" }),
        "thingsdone": "$do1 | $do2 and $do1"

    }

    const weatherGrammar = {
        "start":  ""
    }

    const grammar = {
        "start": "$want",
        "want": "i want to $dothing. (10) | i want $slowness.",
        "slowness": "slowness | to cry | something $tasty",
        "tasty": "tasty | homemade | homecooked | cooked by my mom | cooked by my self | yummy | really good.",
        "dothing": "write $a $poem | $verb | create art again | feel $feeling",
        "feeling": RiTa.randomWord({ pos: "jj" }),
        "verb": RiTa.randomWord({ pos: "vb" }),
        "a": "a | a $adj",
        "adj": RiTa.randomWord({ pos: "jj" }),
        "poem": "poem | song | letter | verse | book"
    };

    const dailyGrammar = {
        "start": ""
    }


    const loveGrammar = {
        "start": "$question | $declaration | $wondering",
        "question": "how do you know if $if?",
        "declaration": "i think i love Y! | this is it!!! | it feels right.",
        "wondering": "$context. $maybe Y was so $tired today.",
        "maybe": "maybe that's why | no wonder | hmm",
        "context": "it was a $weird day",
        "weird": RiTa.randomWord({ pos: "jj" }),
        "tired": "tired | cranky | sweet | distant | loving | $adj (20)",
        "adj": RiTa.randomWord({ pos: "jj" }),
        "if": "you love somebody | it's right | they're the one | this is the way it's $sup to feel",
        "sup": "supposed | meant",
        "you": "you | i",
    }

    const affimationGrammar = {
        "start": "there is so much love to give. | \
        I got this! | \
        Life is SO GOOD! | \
        "
        
    }

    // TODO SEASONAL

    const tg = RiTa.grammar(todayGrammar);
    const rg = RiTa.grammar(grammar);
    const lg = RiTa.grammar(loveGrammar);
    const ag = RiTa.grammar(affimationGrammar);


    const grammars = [
        { grammar: tg, weight: 0.5 },
        { grammar: rg, weight: 0.5 },
        { grammar: lg, weight: 0.5 },
        { grammar: ag, weight: 0.2 }
    ];

    function getRandomGrammar() {
        const index = Math.floor(Math.random() * grammars.length);
        return grammars[index];
    }

    function adjustArticles(text) {
        // Regular expression to find 'a' followed by a space and a vowel
        const regex = /\ba ([aeiou])/gi;
        // Replace 'a' with 'an' when it precedes a vowel
        return text.replace(regex, 'an $1');
    }



    let journal = "";


    for (let i = 0; i < Math.random() * 15; i ++) {
        let grammar = getRandomGrammar();
        console.log(grammar.weight)
        let rules = grammar.grammar;
        let prob = grammar.weight;
        if (Math.random() < prob) {
            journal += adjustArticles(rules.expand()) + " ";
        }

        const useManual = Math.random() < 0.02;
        if (useManual && manualEntries.length > 0) {
            // Get random manual entry
            const entry = manualEntries.splice(
                Math.floor(Math.random() * manualEntries.length),
                1
            )[0];

            journal += entry + "\n\n";
        }
    }


    return journal;
}





