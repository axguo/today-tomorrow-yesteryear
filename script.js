let manualEntries = [
    "I keep missing deadlines :(",
    "what would I be doing if I really cared about the things I said I did?",
    "I must do the work.",
    "what if I became a witch?", // TODO more what if
    "depression checklist:\n1. is your area clean?\n2. have you had veggies/water?\n3. did you go outside?\n4. have you journaled?\n5. have you called a friend?\n6. have you moved your body?",
    "my class seems to be going okay, so it's just the final paper.",
    "I'm scared of having no results", // TODO scared
    "how am I feeling?",
    "when those little pockets of vulnerability hit - that's actual uncomfort. other pain, sadness. those are familiar and while unpleasant, not disturbing like this feeling.",
    "HOW UNSETTLING",
    "and I'm supposed to keep writing and writing and writing for a whole three minutes maybe?", // TODO writing and writing
    "will I have everything I've wanted?",
    "will my tv addiction end?",
    "if I do this continuously, will my creative energy be unblocked?",
    "I have so many loves that have been subdued.", // TODO
    "I worry about Y. our conversations don't feel symmetrical.", // TODO
    ":)) :) ))))",
    "I'm so nice to myself & understanding that my vices love me and yours do too.",
    "I'm his editor of apologies, but I'm terrible at them myself.",
    "I can imagine loving someone else, eventually.",
    "I cannot imagine not loving you.",
    "if I breathe deeply am I more integrated into this earth? I have touched more air?",
    "do I think he’s a fraud?",
    "I want to be intimate with a color.",
    "I want to write poems instead of just reading, I want to do research instead of just consuming.",
    "I want to create art instead of just being jealous.",
    "how awfully understandable. understandably awful.",
    "I can choose to turn my life around each day but really, it takes baby steps.",
    "I feel super overwhelmed and worried that I won't be able to be present when I'm with Y because I'll be thinking so much about work.",
    "I want slowness where everyday is full.",
    "it feels weird not to be surrounded by people anymore. I will definitely miss that.",
    "I keep forgetting to breathe.",
    "streams of consciousness are hard.",
    "I'm so fascinated by not being able to figure out how something works.",
    "I love that art is my choice, because it allows me to be interested in everything.",
    "more everything!!",
    "I'm so young. so so so young.",
    "I'm going to be the coolest old person I know.",
    "I want to absorb so much more of this world. sitting in the car on the way back, in that tightly packed car, I felt secure, safe, like we were in our own world, like I'd want to remember that moment forever.",
    "I'm reminded of zurich every time I see a large river, I'm reminded of china in certain cities.",
    "too much time together, I can’t take it I’m going crazy.",
    "D&D WAS SO FUN. I want to do it again.",
    "I feel very STUCK. I'm literally just frozen in time unable to do anything.",
    "The transition of seasons is really getting to me and I'm lost in time.",
    "it was hard to fall asleep last night and also hard to get up this morning.",
    "I'm so different from who I was starting out the year.",
    "I miss and don’t miss him.",
    "Ahh I'm feeling overwhelmed again and a little directionless?"



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
        "start": "$today | $intentions | $think",
        "today": "today I'm feeling $feeling. | I'm feeling $feeling today.",
        "feeling": RiTa.randomWord({ pos: "jj" }),
        "intentions": "my intentions for the day are to $doathing.",
        "doathing": "love intensely | be present | $do more",
        "do": RiTa.randomWord({ pos: "vb" }),
        "do1": RiTa.randomWord({ pos: "vz" }),
        "do2": RiTa.randomWord({ pos: "vb" }),
        "thingsdone": "$do1 | $do2 and $do1",
        "think": "I think about $days.",
        "days": "$day and $day and $day",
        "day": "today | yesterday | tomorrow | yesteryear | now"
    }

    const grammar = {
        "start": "[ $want | $want | $want | $want $whatif ]",
        "want": "[ I want to $dothing2. (10) | I want to $dothing. how do I $dothing? It's been so long since I've felt like a beginner. | I want $slowness. ]",
        "slowness": "slowness | to cry | something $tasty",
        "tasty": "tasty | homemade | homecooked | cooked by my mom | cooked by my self | yummy | really good.",
        "dothing": "write $a $poem | $verb | create art again | feel $feeling",
        "dothing2": "write $a $poem | $verb2 | create art again | feel $feeling2",
        "feeling": RiTa.randomWord({ pos: "jj" }),
        "verb": RiTa.randomWord({ pos: "vb" }),
        "feeling2": RiTa.randomWord({ pos: "jj" }),
        "verb2": RiTa.randomWord({ pos: "vb" }),
        "a": "a | a $adj",
        "adj": RiTa.randomWord({ pos: "jj" }),
        "poem": "poem | song | letter | verse | book",
        "whatif": "what if I was $phrase.",
        "phrase": "$adj and $adj2 | $adv $adj",
        "adv": RiTa.randomWord({ pos: "rb" }),
        "adj": RiTa.randomWord({ pos: "jj" }),
        "adj2": RiTa.randomWord({ pos: "jj" }),
    };

    const onceGrammar = {
        "start": "[ $grocery. $cook. $friends. | $badday | $backtrack ]",
        "backtrack": "I felt my [$envy | $depression] every time I think it's good I'm reminded it's a constantly evolving process.",
        "envy": "envy today. if I pay attention to it, it's telling me this is something I really want. processed in private, gracious in public.",
        "depression": "sadness today.",
        "badday": "had a [saddening | distasteful | deflating | terrible | side character] day and i'm feeling $adj about everything that happened. going through the list of things that make me feel better: i'll try $happy.",
        "happy": "blasting music and wiggling | belting out songs terribly | a new recipe | calling mom | calling $letter",
        "letter": "A | Y | G | D | N | R | M",
        "adj": RiTa.randomWord({ pos: "jj" }),
        "friends": "$person is $friend. I love them so much",
        "friend": "starting love [again | all over] | wondering what they'll do with their life | in a stable place",
        "grocery": "picked up $foods [on the way home | walking back from school | on the way from the office | on my walk | when I got lost]",
        "cook": "[called $person | put on a show] while [making lunch | cooking | making dinner] (4) | ending up ordering in instead | not feeling it and decided to go out to eat",
        "person": "A | Y | G | D | N | R | M",
        "foods": "$food, $food, and $food | $food | $food and $food",
        "food": "milk | eggs | bread | butter | cheese | apples | bananas | oranges | tomatoes | a pear | carrots | potatoes | onions | garlic | chicken | beef | pasta | rice | olive oil | enoki | cheese | some hot pot mix | a little treat | a whole cake"
    }

    const dailyGrammar = {
        "start": "$bookday | $journal | $news | $heartbreak | $doubt",
        "doubt": "[doubt | fear | worry | anxiety] is [beginning | starting] to [creep | slide | wiggle its way] in. [what is it that they say? | what do they say? | what's the saying?] $saying.",
        "saying": "do it scared | swallow the big frog first | you just haven't had enough practice",
        "journal": "journaling because it's supposed to be good for me. remember The Artist's Way. it's a [neverending | forever | long] journey.",
        "bookday": "read another [chapter | $chapters chapters | page] of my book. I think of the [other | alternative] lives I could have [had | lived]. $altlife",
        "altlife": "what if I [ran away to | lived in] [the countryside | a European beach town | a mountain hut | a forest cottage] and [painted | loved | wrote] all day.",
        "heartbreak": "my heart breaks when I $break. it breaks when I $verb. it breaks when I see a poem on social media. every $noun breaks my heart.",
        "verb": RiTa.randomWord({ pos: "vb" }),
        "noun":  RiTa.randomWord({ pos: "nn" }),
        "break": "open my phone | turn on the TV | watch strangers pass by | drink milk | call my dad",
        "news": "I [read | saw] the news and it [breaks my heart. | gives me a little [bit of hope. | hope.] | makes me so angry.] I [always end crying | end up crying again] for [someone I don't know. | someone I could know. | someone who is so real.] [$poem | $social]",
        "poem": "every poem I've read this week has [broken my heart | left me in tears]. I think it's related.",
        "social": "can I be brave enough to share my opinion?",
        "chapters": "two | three | four",
    }


    const loveGrammar = {
        "start": "$question | $declaration | $wondering | $growup | $whenperson",
        "growup": "I find myself becoming more and more like my mom as I grow older - $superstition",
        "superstition": "I [avoid 4s | avoid mirrors in doors | wear more red than my mom | put luck on my door] and remind [her | N] to do the same.",
        "whenperson": "when did $person become a person to you?",
        "person": "your mom | your dad | your parents | your teachers | your sister | your brother | your advisors",
        "question": "how do you know if $if?",
        "declaration": "I think I love $love! | this is it!!! | it feels right.",
        "love": "A | Y",
        "letter": "A | Y | G | D | N | R | M",
        "wondering": "$context. $maybe $letter was so $tired today.",
        "maybe": "maybe that's why | no wonder | hmm",
        "context": "it was a $weird day",
        "weird": RiTa.randomWord({ pos: "jj" }),
        "tired": "tired | cranky | sweet | distant | loving | $adj (20)",
        "adj": RiTa.randomWord({ pos: "jj" }),
        "if": "you love somebody | it's right | they're the one | this is the way it's $sup to feel",
        "sup": "supposed | meant",
        "you": "you | I",
    }

    const affimationGrammar = {
        "start": "there is so much love to give. | \
        I got this! | \
        Life is SO GOOD! | \
        I bless others with my creativity. | \
        I haven't had enough practice $verbing. | \
        This too shall pass.",
        "verbing": RiTa.randomWord({ pos: "vbg" }),
    }

    // TODO SEASONAL

    const tg = RiTa.grammar(todayGrammar);
    const rg = RiTa.grammar(grammar);
    const lg = RiTa.grammar(loveGrammar);
    const dg = RiTa.grammar(dailyGrammar);
    const ag = RiTa.grammar(affimationGrammar);
    const og = RiTa.grammar(onceGrammar);


    const grammars = [
        { grammar: tg, weight: 0.7 },
        { grammar: rg, weight: 0.3 },
        { grammar: dg, weight: 0.5 },
        { grammar: lg, weight: 0.5 },
        { grammar: ag, weight: 0.2 },
        { grammar: og, weight: 0.3 }
    ];

    function getRandomGrammar() {
        const index = Math.floor(Math.random() * grammars.length);
        return grammars[index];
    }

    function adjustArticles(text) {
        // Regular expression to find lowercase 'a' followed by a space and a vowel
        const regex = /\ba ([aeiou])/g;
        // Replace 'a' with 'an' when it precedes a vowel
        return text.replace(regex, 'an $1');
    }



    let journal = "";


    for (let i = 0; i < Math.random() * 10 + 5 && journal.length < 600; i++) {
        let grammar = getRandomGrammar();
        let rules = grammar.grammar;
        let weight = grammar.weight;

        if (Math.random() < weight) {
            let newEntry = adjustArticles(rules.expand()) + " ";
            if (journal.length + newEntry.length > 600) break;
            journal += newEntry;
        }
        
        const useManual = Math.random() < 0.05;
        if (useManual && manualEntries.length > 0) {
            // Get random manual entry
            const entry = manualEntries.splice(
                Math.floor(Math.random() * manualEntries.length),
                1
            )[0];
            let newEntry = entry + "\n\n"; // Use the entry variable
            if (journal.length + newEntry.length > 600) break;
            journal += newEntry;
        }
    }

    return journal;
}





