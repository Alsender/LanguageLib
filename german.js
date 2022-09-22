const irregs = {
    sein : {
        present : {
            firstSg : "bin",    firstPl : "sind",
            secondSg: "bist",   secondPl: "seid",
            thirdSg: "ist",    thirdPl : "sind",
        },
        preterit : {
            firstSg : "war",    firstPl : "waren",
            secondSg: "warst",  secondPl: "wart",
            thirdSg: "war",     thirdPl : "waren"
        }
    },
    haben : {
        present : {
            firstSg : "habe",   firstPl : "haben",
            secondSg: "hast",   secondPl: "habt",
            thirdSg: "hat",     thirdPl : "haben",
        },
        preterit : {
            firstSg : "hatte",      firstPl : "hatten",
            secondSg: "hattest",    secondPl: "hattet",
            thirdSg: "hatte",       thirdPl : "hatten",
        }
    },
    werden : {
        present : {
            firstSg : "werde",  firstPl : "werden",
            secondSg: "wirst",  secondPl: "werdet",
            thirdSg: "wird",    thirdPl : "werden",
        },
        preterit : {
            firstSg : "wurde",      firstPl : "wurden",
            secondSg: "wurdest",    secondPl: "wurdet",
            thirdSg: "wurde",       thirdPl : "wurden",
        }
    },
    verlassen : {preterit : {secondSg: "verließest,verließt"}},
    halten : {
        present : {thirdSg : "hält"},
        preterit : {secondSg: "hieltest,hieltst"}},
    können : {present : {
        firstPl : "können",
        secondPl: "könnt",
        thirdPl : "können"}},
    müssen : {present : {
        firstPl : "müssen",
        secondPl: "müsst",
        thirdPl : "müssen"}},
    wollen : {present : {
        firstPl : "wollen",
        secondPl: "wollt",
        thirdPl : "wollen"}},
    tun : {
        present : {firstPl: "tun"},
        preterit: {secondSg: "tatest,tatst" }},
    entscheiden : {preterit : {secondSg: "entschiedest,entschiedst"}},
    verstanden : {preterit : {secondSg: "verstandest,verstandst"}},
    finden : {preterit : {secondSg: "fandest,fandst"}},
    sitzen : {preterit : {secondSg: "saßest,saßt"}},
    heißen : {preterit: {secondSg: "hießest,hießt"}},
    fragen : {
        present : {
            secondSg: "fragst,frägst",
            thirdSg: "fragt,frägt"},
        preterit: {
            firstSg : "fragte,frug",   firstPl : "fragten,frugen",
            secondSg: "fragtest,frugst", secondPl: "fragtet,frugt",
            thirdSg : "fragte,frug",   thirdPl : "fragten,frugen"}},
    tanzen : {present : {secondSg: "tanzt"}},
    verbessern : {present : {firstSg: "verbessre,verbessere,verbesser"}},
    lächeln : {present : {firstSg : "lächle,lächele,lächel"}}, //need to look into present -en endings
}

var german = {}

const verbs = {
    //: {english: "", strength : "", thirdSgPres : "", pastStem : "", pastPart : "", pastSubj : "", aux : ""},
    sein: {english: "be", strength : "irregular", thirdSgPres : "ist", pastStem : "war", pastPart : "gewesen", pastSubj : "wäre", aux : "sein"},
    haben: {english: "have", strength : "irregular", thirdSgPres : "hat", pastStem : "hatte", pastPart : "gehabt", pastSubj : "hätte", aux : "haben"},
    werden : {english: "will", strength : "irregular", thirdSgPres : "wird", pastStem : "wurde", pastPart : "geworden", pastSubj : "worden", aux : "sein"},
    kommen : {english: "come", strength : "strong", thirdSgPres : "kommt", pastStem : "kam", pastPart : "gekommen", pastSubj : "käme", aux : "sein"},
    ankommen : {english: "arrive", strength : "strong", thirdSgPres : "kommt an", pastStem : "kam an", pastPart : "angekommen", pastSubj : "käme an", aux : "sein"},
    verlassen : {english: "leave", strength : "strong", thirdSgPres : "verlässt", pastStem : "verließ", pastPart : "verlassen", pastSubj : "verließe", aux : "haben"},
    fahren : {english: "go, drive", strength : "strong", thirdSgPres : "fährt", pastStem : "fuhr", pastPart : "gefahren", pastSubj : "führe", aux : "sein,haben"},
    halten : {english: "hold, stop", strength : "strong", thirdSgPres : "hält", pastStem : "hielt", pastPart : "gehalten", pastSubj : "hielte", aux : "haben"},
    schlafen : {english: "sleep", strength : "strong", thirdSgPres : "schläft", pastStem : "schlief", pastPart : "geschlafen", pastSubj : "schliefe", aux : "haben"},
    erhalten : {english: "recieve", strength : "strong", thirdSgPres : "erhält", pastStem : "erhielt", pastPart : "erhalten", pastSubj : "erhielte", aux : "haben"},
    fangen : {english: "catch", strength : "strong", thirdSgPres : "fängt", pastStem : "fing", pastPart : "gefangen", pastSubj : "finge", aux : "haben"},
    anfangen : {english: "begin", strength : "strong", thirdSgPres : "fängt an", pastStem : "fing an", pastPart : "angefangen", pastSubj : "finge an", aux : "haben, sein"},
    fallen : {english: "fall, drop", strength : "strong", thirdSgPres : "fällt", pastStem : "fiel", pastPart : "gefallen", pastSubj : "fiele", aux : "sein"},
    vergessen : {english: "forget", strength : "strong", thirdSgPres : "vergisst", pastStem : "vergaß", pastPart : "vergassen", pastSubj : "vergäße", aux : "haben"},
    essen : {english: "eat", strength : "strong", thirdSgPres : "isst", pastStem : "aß", pastPart : "gegessen", pastSubj : "äße", aux : "habe"},
    sterben : {english: "die", strength : "strong", thirdSgPres : "stirbt", pastStem : "starb", pastPart : "gestorben", pastSubj : "stürbe", aux : "sein"},
    nehmen : {english: "take", strength : "strong", thirdSgPres : "nimmt", pastStem : "nahm", pastPart : "genommen", pastSubj : "nähme", aux : "haben"},
    geschehen : {english: "occur, happen", strength : "strong", thirdSgPres : "geschieht", pastStem : "geschah", pastPart : "geschehen", pastSubj : "geschähe", aux : "sein"},
    helfen : {english: "help", strength : "strong", thirdSgPres : "hilft", pastStem : "half", pastPart : "geholfen", pastSubj : "hülfe", aux : "haben"},
    lesen : {english: "read", strength : "strong", thirdSgPres : "liest", pastStem : "las", pastPart : "gelesen", pastSubj : "läse", aux : "haben"},
    sprechen : {english: "speak", strength : "strong", thirdSgPres : "spricht", pastStem : "sprach", pastPart : "gesprochen", pastSubj : "spräche", aux : "haben"},
    geben : {english: "give", strength : "strong", thirdSgPres : "gibt", pastStem : "gab", pastPart : "gegeben", pastSubj : "gäbe", aux : "haben"},
    treffen : {english: "meet", strength : "strong", thirdSgPres : "trifft", pastStem : "traf", pastPart : "getroffen", pastSubj : "träfe", aux : "haben"},
    sehen : {english: "see", strength : "strong", thirdSgPres : "sieht", pastStem : "sah", pastPart : "gesehen", pastSubj : "sähe", aux : "haben"},
    können : {english: "can", strength : "prt-prs", thirdSgPres : "kann", pastStem : "konnte", pastPart : "gekonnt", pastSubj : "könnte", aux : "haben"},
    müssen : {english: "must", strength : "prt-prs", thirdSgPres : "muss", pastStem : "musste", pastPart : "gemusst", pastSubj : "müsste", aux : "haben"},
    wollen : {english: "want, wish", strength : "prt-prs", thirdSgPres : "will", pastStem : "wollte", pastPart : "gewollt", pastSubj : "wollte", aux : "haben"},
    wissen : {english: "know", strength : "prt-prs", thirdSgPres : "weiß", pastStem : "wusste", pastPart : "gewusst", pastSubj : "wüsste", aux : "haben"},
    tun : {english: "do", strength : "irregular", thirdSgPres : "tut", pastStem : "tat", pastPart : "getan", pastSubj : "täte", aux : "haben"},
    gehen : {english: "go, walk", strength : "strong", thirdSgPres : "geht", pastStem : "ging", pastPart : "gegangen", pastSubj : "ginge", aux : "sein"},
    schreiben : {english: "write", strength : "strong", thirdSgPres : "schreibt", pastStem : "schrieb", pastPart : "geschieben", pastSubj : "schriebe", aux : "haben"},
    erkennen : {english: "recognize", strength : "weak", thirdSgPres : "erkennt", pastStem : "erkannte", pastPart : "erkannt", pastSubj : "erkennte", aux : "haben"},
    beschreiben : {english: "describe", strength : "strong", thirdSgPres : "beschreibt", pastStem : "beschrieb", pastPart : "beschrieben", pastSubj : "schriebe", aux : "haben"},
    schreien : {english: "shout, yell", strength : "strong", thirdSgPres : "schreit", pastStem : "schrie", pastPart : "geschrien", pastSubj : "schrie", aux : "haben"},
    trinken : {english: "drink", strength : "strong", thirdSgPres : "trinkt", pastStem : "trank", pastPart : "getrunken", pastSubj : "tränke", aux : "haben"},
    denken : {english: "think", strength : "weak", thirdSgPres : "denkt", pastStem : "dachte", pastPart : "gedacht", pastSubj : "dächte", aux : "haben"},
    entscheiden : {english: "decide", strength : "strong", thirdSgPres : "entscheidet", pastStem : "entschied", pastPart : "entschieden", pastSubj : "entschiede", aux : "haben"},
    verstehen : {english: "understand", strength : "strong", thirdSgPres : "versteht", pastStem : "verstand", pastPart : "verstanden", pastSubj : "verstände", aux : "haben"},
    finden : {english: "find", strength : "strong", thirdSgPres : "findet", pastStem : "fand", pastPart : "gefunden", pastSubj : "fände", aux : "haben"},
    singen : {english: "sing", strength : "strong", thirdSgPres : "singt", pastStem : "sang", pastPart : "gesungen", pastSubj : "sänge", aux : "haben"},
    sitzen : {english: "sit", strength : "strong", thirdSgPres : "sitzt", pastStem : "saß", pastPart : "gesessen", pastSubj : "säße", aux : "haben"},
    lügen : {english: "lie", strength : "strong", thirdSgPres : "lügt", pastStem : "log", pastPart : "gelogen", pastSubj : "löge", aux : "haben"},
    anbieten : {english: "offer, provide", strength : "strong", thirdSgPres : "bietet an", pastStem : "bot an", pastPart : "angeboten", pastSubj : "böte an", aux : "haben"},
    bringen : {english: "bring", strength : "weak", thirdSgPres : "bringt", pastStem : "brachte", pastPart : "gebracht", pastSubj : "brächte", aux : "haben"},
    brennen : {english: "burn, light on fire", strength : "weak", thirdSgPres : "brennt", pastStem : "brannte", pastPart : "gebrannt", pastSubj : "brennte", aux : "haben"},
    schneiden : {english: "cut, carve, slice", strength : "strong", thirdSgPres : "schneidet", pastStem : "schnitt", pastPart : "geschnitten", pastSubj : "schnitte", aux : "haben"},
    beginnen : {english: "begin", strength : "strong", thirdSgPres : "beginnt", pastStem : "begann", pastPart : "begonnen", pastSubj : "begänne, begönne", aux : "haben"},
    gewinnen : {english: "win", strength : "strong", thirdSgPres : "gewinnt", pastStem : "gewann", pastPart : "gewonnen", pastSubj : "gewänne, gewönne", aux : "haben"},
    bleiben : {english: "remain, continue, stay", strength : "strong", thirdSgPres : "bleibt", pastStem : "blieb", pastPart : "geblieben", pastSubj : "bliebe", aux : "sein"},
    rennen : {english: "run", strength : "weak", thirdSgPres : "rennt", pastStem : "rannte", pastPart : "gerannt", pastSubj : "rennte", aux : "haben, sein"},
    verlieren : {english: "lose", strength : "strong", thirdSgPres : "verliert", pastStem : "verlor", pastPart : "verloren", pastSubj : "verlöre", aux : "haben"},
    rufen : {english: "call out, shout", strength : "strong", thirdSgPres : "ruft", pastStem : "rief", pastPart : "gerufen", pastSubj : "riefe", aux : "haben"},
    heißen : {english: "be named, be called", strength : "strong", thirdSgPres : "heißt", pastStem : "hieß", pastPart : "geheißen", pastSubj : "heiße", aux : "haben"},
    lernen : {english: "learn", strength : "weak", thirdSgPres : "lernt", pastStem : "lernte", pastPart : "gelernt", pastSubj : "haben", aux : "lernte"},
    machen : {english: "make", strength : "weak", thirdSgPres : "macht", pastStem : "machte", pastPart : "gemacht", pastSubj : "machte", aux : "haben"},
    besuchen : {english: "visit, see", strength : "weak", thirdSgPres : "besucht", pastStem : "besuchte", pastPart : "besucht", pastSubj : "besuchte", aux : "haben"},
    reisen : {english: "travel", strength : "weak", thirdSgPres : "reist", pastStem : "reiste", pastPart : "gereist", pastSubj : "reiste", aux : "sein"},
    brauchen : {english: "need", strength : "weak", thirdSgPres : "braucht", pastStem : "brauchte", pastPart : "begraucht", pastSubj : "brauchte, bräuchte", aux : "haben"},
    legen : {english: "lay, put, place", strength : "weak", thirdSgPres : "legt", pastStem : "legte", pastPart : "gelegt", pastSubj : "legte", aux : "haben"},
    zeigen : {english: "point at, demonstrate, show", strength : "weak", thirdSgPres : "zeigt", pastStem : "zeigte", pastPart : "gezeigt", pastSubj : "zeigte", aux : "haben"},
    hören : {english: "hear", strength : "weak", thirdSgPres : "hört", pastStem : "hörte", pastPart : "gehört", pastSubj : "hört", aux : "haben"},
    schauen : {english: "look at, watch, view", strength : "weak", thirdSgPres : "schaut", pastStem : "schaute", pastPart : "geschaut", pastSubj : "schaute", aux : "haben"},
    sagen : {english: "say, tell", strength : "weak", thirdSgPres : "sagt", pastStem : "sagte", pastPart : "gesagt", pastSubj : "sagte", aux : "haben"},
    erklären : {english: "explain", strength : "weak", thirdSgPres : "erklärt", pastStem : "erklärte", pastPart : "erklärt", pastSubj : "erklärte", aux : "haben"},
    erzählen : {english: "tell, narrate, recount", strength : "weak", thirdSgPres : "erzählt", pastStem : "erzählte", pastPart : "erzählt", pastSubj : "erzählte", aux : "haben"},
    fragen : {english: "ask", strength : "weak", thirdSgPres : "fragt", pastStem : "fragte", pastPart : "gefragt", pastSubj : "fragte,früge", aux : "haben"},
    reden : {english: "talk", strength : "weak", thirdSgPres : "redet", pastStem : "redete", pastPart : "geredet", pastSubj : "redete", aux : "haben"},
    wiederholen : {english: "repeat", strength : "weak", thirdSgPres : "wiederholt", pastStem : "wiederholte", pastPart : "wiederholt", pastSubj : "wiederholte", aux : "haben"},
    lehren : {english: "teach", strength : "weak", thirdSgPres : "lehrt", pastStem : "lehrte", pastPart : "gelehrt", pastSubj : "lehrte", aux : "haben"},
    studieren : {english: "study", strength : "weak", thirdSgPres : "studiert", pastStem : "studierte", pastPart : "studiert", pastSubj : "studierte", aux : "haben"},
    ausruhen : {english: "rest, recover", strength : "weak", thirdSgPres : "ruht aus", pastStem : "ruhte aus", pastPart : "ausgeruht", pastSubj : "ruhte aus", aux : "haben"},
    erlauben : {english: "allow, permit", strength : "weak", thirdSgPres : "erlaubt", pastStem : "erlaubte", pastPart : "erlaubt", pastSubj : "erlaubte", aux : "haben"},
    glauben : {english: "believe", strength : "weak", thirdSgPres : "glaubt", pastStem : "glaubte", pastPart : "geglaubt", pastSubj : "glaubte", aux : "haben"},
    hoffen : {english: "hope", strength : "weak", thirdSgPres : "hofft", pastStem : "hoffte", pastPart : "gehofft", pastSubj : "hoffte", aux : "haben"},
    tanzen : {english: "dance", strength : "weak", thirdSgPres : "tanzt", pastStem : "tanzte", pastPart : "getanzt", pastSubj : "tanzte", aux : "haben"},
    bewegen : {english: "motivate, persuade", strength : "strong", thirdSgPres : "bewegt", pastStem : "bewog", pastPart : "bewogen", pastSubj : "bewöge", aux : "haben"},
    kämpfen : {english: "fight, struggle", strength : "weak", thirdSgPres : "kämpft", pastStem : "kämpfte", pastPart : "gekämpft", pastSubj : "kämpfte", aux : "haben"},
    auswählen : {english: "choose, select, pick", strength : "weak", thirdSgPres : "wählt aus", pastStem : "wählte aus", pastPart : "ausgewählt", pastSubj : "wählte aus", aux : "haben"},
    hassen : {english: "hate", strength : "weak", thirdSgPres : "hasst", pastStem : "hasste", pastPart : "gehasst", pastSubj : "hasste", aux : "haben"},
    lieben : {english: "love", strength : "weak", thirdSgPres : "liebt", pastStem : "liebte", pastPart : "geliebt", pastSubj : "liebte", aux : "haben"},
    bevorzugen : {english: "favor, prefer", strength : "weak", thirdSgPres : "bevorzugt", pastStem : "bevorzugte", pastPart : "bevorzugt", pastSubj : "bevorzugte", aux : "haben"},
    lachen : {english: "laugh", strength : "weak", thirdSgPres : "lacht", pastStem : "lachte", pastPart : "gelacht", pastSubj : "lachte", aux : "haben"},
    weinen : {english: "cry, weep", strength : "weak", thirdSgPres : "weint", pastStem : "weinte", pastPart : "geweint", pastSubj : "weinte", aux : "haben"},
    versuchen : {english: "try, taste", strength : "weak", thirdSgPres : "versucht", pastStem : "versuchte", pastPart : "versucht", pastSubj : "versuchte", aux : "haben"},
    üben : {english: "practice", strength : "weak", thirdSgPres : "übt", pastStem : "übte", pastPart : "geübt", pastSubj : "übte", aux : "haben"},
    berühren : {english: "touch", strength : "weak", thirdSgPres : "berührt", pastStem : "berührte", pastPart : "berührt", pastSubj : "berührte", aux : "haben"},
    drücken : {english: "press, push", strength : "weak", thirdSgPres : "drückt", pastStem : "drückte", pastPart : "gedrückt", pastSubj : "drückte", aux : "haben"},
    leben : {english: "live", strength : "weak", thirdSgPres : "lebt", pastStem : "lebte", pastPart : "gelebt", pastSubj : "lebte", aux : "haben"},
    fühlen : {english: "feel", strength : "weak", thirdSgPres : "fühlt", pastStem : "fühlte", pastPart : "gefühlt", pastSubj : "fühlte", aux : "haben"},
    spielen : {english: "play", strength : "weak", thirdSgPres : "spielt", pastStem : "spielte", pastPart : "gespielt", pastSubj : "spielte", aux : "haben"},
    kaufen : {english: "buy, purchase", strength : "weak", thirdSgPres : "kauft", pastStem : "kaufte", pastPart : "gekauft", pastSubj : "kaufte", aux : "haben"},
    verkaufen : {english: "sell", strength : "weak", thirdSgPres : "verkauft", pastStem : "verkaufte", pastPart : "verkauft", pastSubj : "verkaufte", aux : "haben"},
    kosten : {english: "cost", strength : "weak", thirdSgPres : "kostet", pastStem : "kostete", pastPart : "gekostet", pastSubj : "kostete", aux : "haben"},
    benutzen : {english: "use", strength : "weak", thirdSgPres : "benutzt", pastStem : "benutzte", pastPart : "benutzt", pastSubj : "benutzte", aux : "haben"},
    handeln : {english: "act, take action", strength : "weak", thirdSgPres : "handelt", pastStem : "handelte", pastPart : "gehandelt", pastSubj : "handelte", aux : "haben"},
    verbessern : {english: "improve, make better", strength : "weak", thirdSgPres : "verbessert", pastStem : "verbesserte", pastPart : "verbessert", pastSubj : "verbesserte", aux : "haben"},
    lächeln : {english: "smile", strength : "weak", thirdSgPres : "lächelt", pastStem : "lächelte", pastPart : "gelächelt", pastSubj : "lächelte", aux : "haben"},
    arbeiten : {english: "work", strength : "weak", thirdSgPres : "arbeitet", pastStem : "arbeitete", pastPart : "gearbeitet", pastSubj : "arbeitet", aux : "haben"},
    antworten : {english: "answer, reply", strength : "weak", thirdSgPres : "antwortet", pastStem : "antwortete", pastPart : "geantwortet", pastSubj : "antwortete", aux : "haben"},
    schalten : {english: "switch", strength : "weak", thirdSgPres : "schaltet", pastStem : "schaltete", pastPart : "geschaltet", pastSubj : "schaltete", aux : "haben"}
}

const dissalloweds = [
    'sein perfect',
    'sein pluperfect',
    'haben perfect',
    'haben pluperfect',
    'können perfect',
    'können pluperfect',
    'müssen perfect',
    'müssen pluperfect',
    'wollen perfect',
    'wollen pluperfect',
    'vergessen preterit'
]

const persons = {
    firstSg : "ich",
    secondSg : "du",
    thirdSg : {masc: "er", fem : "sie", neut: "es"},
    firstPl : "wir",
    secondPl : "ihr",
    thirdPl : {fm: "Sie", infm: "sie"}
  }
  
const tenses = {
    present : ["[prs] … jetzt","jetzt",""],
    preterit : ["[prs] … gestern","gestern", "geschrieben"],
    perfect : ["[prs] … gestern …", "gestern", "gesprochen"],
    pluperfect : ["[prs] … gestern zuerst …, dann ist noch was passiert","gestern vor etwas anderem",""],
    future : ["morgen … [prs] vielleicht …","morgen",""],
    futurePerfect : ["morgen … [prs] wohl vor Mittag … …","morgen vor Mittag",""]
 }

 function conjugate(inf, english, strength, thirdSgPres, pastStem, pastPart, pastSubj, aux, pers, ten) {
    var verbArray = thirdSgPres.split(" ")
    var prep = verbArray[1]
    if (inf.startsWith(prep)) {
        var preplessInf = inf.replace(prep, "")
    } else preplessInf = inf
    if (preplessInf.endsWith("en")) {
        var stem = preplessInf.substring(0, preplessInf.length - 2)
    }
    else {
        var stem = preplessInf.substring(0, preplessInf.length - 1)
    }
    var irregStem = verbArray[0]
    if (strength != "prt-prs") {irregStem = irregStem.substring(0, irregStem.length - 1)}
    if (prep === undefined) {
        prep = ""
    }
    pastStem = pastStem.split(" ")[0]

    let conjugated = ""
    switch (ten) {
        case 'present' : conjugated = conjugatePRS(preplessInf, stem, strength, irregStem, prep, pers); break
        case 'preterit' : conjugated = conjugatePRT(prep, strength, pastStem, pers); break
        case 'perfect' : conjugated = conjugatePRF(pastPart, aux, pers); break
        case 'pluperfect' : conjugated = conjugatePPRF(pastPart, aux, pers); break
        case 'future' : conjugated = conjugateFUTI(inf, pers); break
        case 'futurePerfect' :  conjugated = conjugateFUTII(pastPart, aux, pers); break
    }
    try {
        if (irregs[inf][ten][pers] === undefined) {
            return conjugated
        } else
        conjugated = irregs[inf][ten][pers]
        return conjugated
    } catch (e) {
        switch (conjugated) {
            case "erhältt" : return "erhält"
            case "vergissst" : return "vergisst"
            case "vergaßst" : return "vergaßt"
            case "issst" : return "isst"
            case "aßst" : return "aßt"
            case "liesst" : return "liest"
            case "lasst" : return "last"
            case "mussst" : return "musst"
            case "wießst" : return "wießt"
            case "heißst" : return "heißt"
            default : return conjugated
        }
    }
}

function conjugatePRS(preplessInf, stem, strength, irregStem, prep, pers) {
    if (stem.endsWith("d") || stem.endsWith("t")) {
        var secondPlStem = stem + "e"
    } else secondPlStem = stem

    if (strength === "prt-prs") {return conjugateStrPRT(prep, irregStem, pers)}
    else switch (pers) {
        case 'firstSg' : return (stem + "e" + " " + prep).trim()
        case 'secondSg': return (irregStem + "st" + " " + prep).trim()
        case 'thirdSg' : return (irregStem + "t" + " " + prep).trim()
        case 'firstPl' : return (preplessInf + " " + prep).trim()
        case 'secondPl': return (secondPlStem + "t" + " " + prep).trim()
        case 'thirdPl' : return (preplessInf + " " + prep).trim()
    }
}

function conjugatePRT(prep, strength, pastStem, pers) {
    switch (strength) {
        case "weak" : return conjugateWeakPRT(prep, pastStem, pers)
        case "strong" : return conjugateStrPRT(prep, pastStem, pers)
        case "prt-prs" : return conjugateWeakPRT(prep, pastStem, pers)
    }
}

function conjugateWeakPRT(prep, pastStem, pers) {
    pastStem = pastStem.substring(0, pastStem.length - 2)
    switch (pers) {
        case 'firstSg' : return (pastStem + "te" + " " + prep).trim()
        case 'secondSg': return (pastStem + "test" + " " + prep).trim()
        case 'thirdSg' : return (pastStem + "te" + " " + prep).trim()
        case 'firstPl' : return (pastStem + "ten" + " " + prep).trim()
        case 'secondPl': return (pastStem + "tet" + " " + prep).trim()
        case 'thirdPl' : return (pastStem + "ten" + " " + prep).trim()
    }
}

function conjugateStrPRT(prep, pastStem, pers) {
    switch (pers) {
        case 'firstSg' : return (pastStem + " " + prep).trim()
        case 'secondSg': return (pastStem + "st" + " " + prep).trim()
        case 'thirdSg' : return (pastStem + " " + prep).trim()
        case 'firstPl' : return (pastStem + "en" + " " + prep).trim()
        case 'secondPl': return (pastStem + "t" + " " + prep).trim()
        case 'thirdPl' : return (pastStem + "en" + " " + prep).trim()
    }
}

const perfHelper = ["", ","]

function conjugatePRF (pastPart, aux, pers) {
    let it = 0
    let conjugatedPerfect = ""
    let pastParts = pastPart.split(",")
    let auxes = aux.split(",")
    for (indexPastParts = 0; indexPastParts <= pastParts.length - 1; indexPastParts++) {
        for (indexAuxes = 0; indexAuxes <= auxes.length - 1; indexAuxes++) {
            conjugatedPerfect = conjugatedPerfect + perfHelper[it++] + irregs[auxes[indexAuxes]].present[pers] + " " + pastParts[indexPastParts]
        }
    }
    return conjugatedPerfect
}

function conjugatePPRF (pastPart, aux, pers) {
    let it = 0
    let conjugatedPluPerfect = ""
    let pastParts = pastPart.split(",")
    let auxes = aux.split(",")
    for (indexPastParts = 0; indexPastParts <= pastParts.length - 1; indexPastParts++) {
        for (indexAuxes = 0; indexAuxes <= auxes.length - 1; indexAuxes++) {
            conjugatedPluPerfect = conjugatedPluPerfect + perfHelper[it++] + irregs[auxes[indexAuxes]].preterit[pers] + " " + pastParts[indexPastParts]
        }
    }
    return conjugatedPluPerfect
}

function conjugateFUTI (vrb, pers) {
    return irregs.werden.present[pers] + " " + vrb
}

function conjugateFUTII(pastPart, aux, pers) {
    let it =  0
    let conjugatedFutPerfect = ""
    let pastParts = pastPart.split(",")
    let auxes = aux.split(",")
    for (indexPastParts = 0; indexPastParts <= pastParts.length - 1; indexPastParts++) {
        for (indexAuxes = 0; indexAuxes <= auxes.length - 1; indexAuxes++) {
            conjugatedFutPerfect = conjugatedFutPerfect + perfHelper[it++] + irregs.werden.present[pers] + " " + pastParts[indexPastParts] + " " + auxes[indexAuxes]
        }
    }
    return conjugatedFutPerfect
}

function randomTense() {
    rand = Math.random() * 100
    if (rand < 27 ) {
        return 'present'
    } else if (26 < rand && rand < 43) {
        return 'preterit'
    } else if (42 < rand && rand < 65) {
        return 'perfect'
    } else if (64 < rand && rand < 75) {
        return 'pluperfect'
    } else if (74 < rand && rand < 91) {
        return 'future'
    } else {
        return 'futurePerfect'
    }
}