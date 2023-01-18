const de = {
    name: 'german',
    parts : {
    },

    persons : {
        firstSg : "ich",
        secondSg : "du",
        thirdSg : {masc: "er", fem : "sie", neut: "es"},
        firstPl : "wir",
        secondPl : "ihr",
        thirdPl : {fm: "Sie", infm: "sie"}
    },
      
    tenses : {
        present : {
            one: {
                phrase: "[prs] … jetzt",
                when: "jetzt",
                context: ""}},
        preterit : {
            two: {
                phrase: "[prs] … gestern",
                when: "gestern",
                context: "geschrieben"}},
        perfect : {
            three: {
                phrase: "[prs] … gestern …",
                when: "gestern",
                context: "gesprochen"}},
        pluperfect : {
            four: {
                phrase: "[prs] … gestern zuerst …, dann ist noch was passiert",
                when: "gestern vor etwas anderem",
                context: ""}},
        future : {
            five: {
                phrase: "morgen … [prs] vielleicht …",
                when: "morgen",
                context: ""}},
        futurePerfect : {
            six: {
                phrase: "morgen … [prs] wohl vor Mittag … …",
                when: "morgen vor Mittag",
                context: ""}}
    },

    verbs : {
        //: {english: "", strength : "", thirdSgPres : "", pastStem : "", pastPart : "", pastSubj : "", aux : ""},
        sein: {inf: "sein", english: "be", strength : "irregular", thirdSgPres : "ist", pastStem : "war", pastPart : "gewesen", pastSubj : "wäre", aux : "sein"},
        haben: {inf: "haben", english: "have", strength : "irregular", thirdSgPres : "hat", pastStem : "hatte", pastPart : "gehabt", pastSubj : "hätte", aux : "haben"},
        werden : {inf: "werden", english: "will", strength : "irregular", thirdSgPres : "wird", pastStem : "wurde", pastPart : "geworden", pastSubj : "worden", aux : "sein"},
        kommen : {inf: "kommen", english: "come", strength : "strong", thirdSgPres : "kommt", pastStem : "kam", pastPart : "gekommen", pastSubj : "käme", aux : "sein"},
        ankommen : {inf: "ankommen", english: "arrive", strength : "strong", thirdSgPres : "kommt an", pastStem : "kam an", pastPart : "angekommen", pastSubj : "käme an", aux : "sein"},
        verlassen : {inf: "verlassen", english: "leave", strength : "strong", thirdSgPres : "verlässt", pastStem : "verließ", pastPart : "verlassen", pastSubj : "verließe", aux : "haben"},
        fahren : {inf: "fahren", english: "go, drive", strength : "strong", thirdSgPres : "fährt", pastStem : "fuhr", pastPart : "gefahren", pastSubj : "führe", aux : "sein,haben"},
        halten : {inf: "halten", english: "hold, stop", strength : "strong", thirdSgPres : "hält", pastStem : "hielt", pastPart : "gehalten", pastSubj : "hielte", aux : "haben"},
        schlafen : {inf: "schlafen", english: "sleep", strength : "strong", thirdSgPres : "schläft", pastStem : "schlief", pastPart : "geschlafen", pastSubj : "schliefe", aux : "haben"},
        erhalten : {inf: "erhalten", english: "recieve", strength : "strong", thirdSgPres : "erhält", pastStem : "erhielt", pastPart : "erhalten", pastSubj : "erhielte", aux : "haben"},
        fangen : {inf: "fangen", english: "catch", strength : "strong", thirdSgPres : "fängt", pastStem : "fing", pastPart : "gefangen", pastSubj : "finge", aux : "haben"},
        anfangen : {inf: "anfangen", english: "begin", strength : "strong", thirdSgPres : "fängt an", pastStem : "fing an", pastPart : "angefangen", pastSubj : "finge an", aux : "haben, sein"},
        fallen : {inf: "fallen", english: "fall, drop", strength : "strong", thirdSgPres : "fällt", pastStem : "fiel", pastPart : "gefallen", pastSubj : "fiele", aux : "sein"},
        vergessen : {inf: "vergessen", english: "forget", strength : "strong", thirdSgPres : "vergisst", pastStem : "vergaß", pastPart : "vergassen", pastSubj : "vergäße", aux : "haben"},
        essen : {inf: "essen", english: "eat", strength : "strong", thirdSgPres : "isst", pastStem : "aß", pastPart : "gegessen", pastSubj : "äße", aux : "habe"},
        sterben : {inf: "sterben", english: "die", strength : "strong", thirdSgPres : "stirbt", pastStem : "starb", pastPart : "gestorben", pastSubj : "stürbe", aux : "sein"},
        nehmen : {inf: "nehmen", english: "take", strength : "strong", thirdSgPres : "nimmt", pastStem : "nahm", pastPart : "genommen", pastSubj : "nähme", aux : "haben"},
        geschehen : {inf: "geschehen", english: "occur, happen", strength : "strong", thirdSgPres : "geschieht", pastStem : "geschah", pastPart : "geschehen", pastSubj : "geschähe", aux : "sein"},
        helfen : {inf: "helfen", english: "help", strength : "strong", thirdSgPres : "hilft", pastStem : "half", pastPart : "geholfen", pastSubj : "hülfe", aux : "haben"},
        lesen : {inf: "lesen", english: "read", strength : "strong", thirdSgPres : "liest", pastStem : "las", pastPart : "gelesen", pastSubj : "läse", aux : "haben"},
        sprechen : {inf: "sprechen", english: "speak", strength : "strong", thirdSgPres : "spricht", pastStem : "sprach", pastPart : "gesprochen", pastSubj : "spräche", aux : "haben"},
        geben : {inf: "geben", english: "give", strength : "strong", thirdSgPres : "gibt", pastStem : "gab", pastPart : "gegeben", pastSubj : "gäbe", aux : "haben"},
        treffen : {inf: "treffen", english: "meet", strength : "strong", thirdSgPres : "trifft", pastStem : "traf", pastPart : "getroffen", pastSubj : "träfe", aux : "haben"},
        sehen : {inf: "sehen", english: "see", strength : "strong", thirdSgPres : "sieht", pastStem : "sah", pastPart : "gesehen", pastSubj : "sähe", aux : "haben"},
        können : {inf: "können", english: "can", strength : "prt-prs", thirdSgPres : "kann", pastStem : "konnte", pastPart : "gekonnt", pastSubj : "könnte", aux : "haben"},
        müssen : {inf: "müssen", english: "must", strength : "prt-prs", thirdSgPres : "muss", pastStem : "musste", pastPart : "gemusst", pastSubj : "müsste", aux : "haben"},
        wollen : {inf: "wollen", english: "want, wish", strength : "prt-prs", thirdSgPres : "will", pastStem : "wollte", pastPart : "gewollt", pastSubj : "wollte", aux : "haben"},
        wissen : {inf: "wissen", english: "know", strength : "prt-prs", thirdSgPres : "weiß", pastStem : "wusste", pastPart : "gewusst", pastSubj : "wüsste", aux : "haben"},
        tun : {inf: "tun", english: "do", strength : "irregular", thirdSgPres : "tut", pastStem : "tat", pastPart : "getan", pastSubj : "täte", aux : "haben"},
        gehen : {inf: "gehen", english: "go, walk", strength : "strong", thirdSgPres : "geht", pastStem : "ging", pastPart : "gegangen", pastSubj : "ginge", aux : "sein"},
        schreiben : {inf: "schreiben", english: "write", strength : "strong", thirdSgPres : "schreibt", pastStem : "schrieb", pastPart : "geschieben", pastSubj : "schriebe", aux : "haben"},
        erkennen : {inf: "erkennen", english: "recognize", strength : "weak", thirdSgPres : "erkennt", pastStem : "erkannte", pastPart : "erkannt", pastSubj : "erkennte", aux : "haben"},
        beschreiben : {inf: "beschreiben", english: "describe", strength : "strong", thirdSgPres : "beschreibt", pastStem : "beschrieb", pastPart : "beschrieben", pastSubj : "schriebe", aux : "haben"},
        schreien : {inf: "schreien", english: "shout, yell", strength : "strong", thirdSgPres : "schreit", pastStem : "schrie", pastPart : "geschrien", pastSubj : "schrie", aux : "haben"},
        trinken : {inf: "trinken", english: "drink", strength : "strong", thirdSgPres : "trinkt", pastStem : "trank", pastPart : "getrunken", pastSubj : "tränke", aux : "haben"},
        denken : {inf: "denken", english: "think", strength : "weak", thirdSgPres : "denkt", pastStem : "dachte", pastPart : "gedacht", pastSubj : "dächte", aux : "haben"},
        entscheiden : {inf: "entscheiden", english: "decide", strength : "strong", thirdSgPres : "entscheidet", pastStem : "entschied", pastPart : "entschieden", pastSubj : "entschiede", aux : "haben"},
        verstehen : {inf: "verstehen", english: "understand", strength : "strong", thirdSgPres : "versteht", pastStem : "verstand", pastPart : "verstanden", pastSubj : "verstände", aux : "haben"},
        finden : {inf: "finden", english: "find", strength : "strong", thirdSgPres : "findet", pastStem : "fand", pastPart : "gefunden", pastSubj : "fände", aux : "haben"},
        singen : {inf: "singen", english: "sing", strength : "strong", thirdSgPres : "singt", pastStem : "sang", pastPart : "gesungen", pastSubj : "sänge", aux : "haben"},
        sitzen : {inf: "sitzen", english: "sit", strength : "strong", thirdSgPres : "sitzt", pastStem : "saß", pastPart : "gesessen", pastSubj : "säße", aux : "haben"},
        lügen : {inf: "lügen", english: "lie", strength : "strong", thirdSgPres : "lügt", pastStem : "log", pastPart : "gelogen", pastSubj : "löge", aux : "haben"},
        anbieten : {inf: "anbieten", english: "offer, provide", strength : "strong", thirdSgPres : "bietet an", pastStem : "bot an", pastPart : "angeboten", pastSubj : "böte an", aux : "haben"},
        bringen : {inf: "bringen", english: "bring", strength : "weak", thirdSgPres : "bringt", pastStem : "brachte", pastPart : "gebracht", pastSubj : "brächte", aux : "haben"},
        brennen : {inf: "brennen", english: "burn, light on fire", strength : "weak", thirdSgPres : "brennt", pastStem : "brannte", pastPart : "gebrannt", pastSubj : "brennte", aux : "haben"},
        schneiden : {inf: "schneiden", english: "cut, carve, slice", strength : "strong", thirdSgPres : "schneidet", pastStem : "schnitt", pastPart : "geschnitten", pastSubj : "schnitte", aux : "haben"},
        beginnen : {inf: "beginnen", english: "begin", strength : "strong", thirdSgPres : "beginnt", pastStem : "begann", pastPart : "begonnen", pastSubj : "begänne, begönne", aux : "haben"},
        gewinnen : {inf: "gewinnen", english: "win", strength : "strong", thirdSgPres : "gewinnt", pastStem : "gewann", pastPart : "gewonnen", pastSubj : "gewänne, gewönne", aux : "haben"},
        bleiben : {inf: "bleiben", english: "remain, continue, stay", strength : "strong", thirdSgPres : "bleibt", pastStem : "blieb", pastPart : "geblieben", pastSubj : "bliebe", aux : "sein"},
        rennen : {inf: "rennen", english: "run", strength : "weak", thirdSgPres : "rennt", pastStem : "rannte", pastPart : "gerannt", pastSubj : "rennte", aux : "haben, sein"},
        verlieren : {inf: "verlieren", english: "lose", strength : "strong", thirdSgPres : "verliert", pastStem : "verlor", pastPart : "verloren", pastSubj : "verlöre", aux : "haben"},
        rufen : {inf: "rufen", english: "call out, shout", strength : "strong", thirdSgPres : "ruft", pastStem : "rief", pastPart : "gerufen", pastSubj : "riefe", aux : "haben"},
        heißen : {inf: "heißen", english: "be named, be called", strength : "strong", thirdSgPres : "heißt", pastStem : "hieß", pastPart : "geheißen", pastSubj : "heiße", aux : "haben"},
        lernen : {inf: "lernen", english: "learn", strength : "weak", thirdSgPres : "lernt", pastStem : "lernte", pastPart : "gelernt", pastSubj : "haben", aux : "lernte"},
        machen : {inf: "machen", english: "make", strength : "weak", thirdSgPres : "macht", pastStem : "machte", pastPart : "gemacht", pastSubj : "machte", aux : "haben"},
        besuchen : {inf: "besuchen", english: "visit, see", strength : "weak", thirdSgPres : "besucht", pastStem : "besuchte", pastPart : "besucht", pastSubj : "besuchte", aux : "haben"},
        reisen : {inf: "reisen", english: "travel", strength : "weak", thirdSgPres : "reist", pastStem : "reiste", pastPart : "gereist", pastSubj : "reiste", aux : "sein"},
        brauchen : {inf: "brauchen", english: "need", strength : "weak", thirdSgPres : "braucht", pastStem : "brauchte", pastPart : "begraucht", pastSubj : "brauchte, bräuchte", aux : "haben"},
        legen : {inf: "legen", english: "lay, put, place", strength : "weak", thirdSgPres : "legt", pastStem : "legte", pastPart : "gelegt", pastSubj : "legte", aux : "haben"},
        zeigen : {inf: "zeigen", english: "point at, demonstrate, show", strength : "weak", thirdSgPres : "zeigt", pastStem : "zeigte", pastPart : "gezeigt", pastSubj : "zeigte", aux : "haben"},
        hören : {inf: "hören", english: "hear", strength : "weak", thirdSgPres : "hört", pastStem : "hörte", pastPart : "gehört", pastSubj : "hört", aux : "haben"},
        schauen : {inf: "schauen", english: "look at, watch, view", strength : "weak", thirdSgPres : "schaut", pastStem : "schaute", pastPart : "geschaut", pastSubj : "schaute", aux : "haben"},
        sagen : {inf: "sagen", english: "say, tell", strength : "weak", thirdSgPres : "sagt", pastStem : "sagte", pastPart : "gesagt", pastSubj : "sagte", aux : "haben"},
        erklären : {inf: "erklären", english: "explain", strength : "weak", thirdSgPres : "erklärt", pastStem : "erklärte", pastPart : "erklärt", pastSubj : "erklärte", aux : "haben"},
        erzählen : {inf: "erzählen", english: "tell, narrate, recount", strength : "weak", thirdSgPres : "erzählt", pastStem : "erzählte", pastPart : "erzählt", pastSubj : "erzählte", aux : "haben"},
        fragen : {inf: "fragen", english: "ask", strength : "weak", thirdSgPres : "fragt", pastStem : "fragte", pastPart : "gefragt", pastSubj : "fragte,früge", aux : "haben"},
        reden : {inf: "reden", english: "talk", strength : "weak", thirdSgPres : "redet", pastStem : "redete", pastPart : "geredet", pastSubj : "redete", aux : "haben"},
        wiederholen : {inf: "wiederholen", english: "repeat", strength : "weak", thirdSgPres : "wiederholt", pastStem : "wiederholte", pastPart : "wiederholt", pastSubj : "wiederholte", aux : "haben"},
        lehren : {inf: "lehren", english: "teach", strength : "weak", thirdSgPres : "lehrt", pastStem : "lehrte", pastPart : "gelehrt", pastSubj : "lehrte", aux : "haben"},
        studieren : {inf: "studieren", english: "study", strength : "weak", thirdSgPres : "studiert", pastStem : "studierte", pastPart : "studiert", pastSubj : "studierte", aux : "haben"},
        ausruhen : {inf: "ausruhen", english: "rest, recover", strength : "weak", thirdSgPres : "ruht aus", pastStem : "ruhte aus", pastPart : "ausgeruht", pastSubj : "ruhte aus", aux : "haben"},
        erlauben : {inf: "erlauben", english: "allow, permit", strength : "weak", thirdSgPres : "erlaubt", pastStem : "erlaubte", pastPart : "erlaubt", pastSubj : "erlaubte", aux : "haben"},
        glauben : {inf: "glauben", english: "believe", strength : "weak", thirdSgPres : "glaubt", pastStem : "glaubte", pastPart : "geglaubt", pastSubj : "glaubte", aux : "haben"},
        hoffen : {inf: "hoffen", english: "hope", strength : "weak", thirdSgPres : "hofft", pastStem : "hoffte", pastPart : "gehofft", pastSubj : "hoffte", aux : "haben"},
        tanzen : {inf: "tanzen", english: "dance", strength : "weak", thirdSgPres : "tanzt", pastStem : "tanzte", pastPart : "getanzt", pastSubj : "tanzte", aux : "haben"},
        bewegen : {inf: "bewegen", english: "motivate, persuade", strength : "strong", thirdSgPres : "bewegt", pastStem : "bewog", pastPart : "bewogen", pastSubj : "bewöge", aux : "haben"},
        kämpfen : {inf: "kämpfen", english: "fight, struggle", strength : "weak", thirdSgPres : "kämpft", pastStem : "kämpfte", pastPart : "gekämpft", pastSubj : "kämpfte", aux : "haben"},
        auswählen : {inf: "auswählen", english: "choose, select, pick", strength : "weak", thirdSgPres : "wählt aus", pastStem : "wählte aus", pastPart : "ausgewählt", pastSubj : "wählte aus", aux : "haben"},
        hassen : {inf: "hassen", english: "hate", strength : "weak", thirdSgPres : "hasst", pastStem : "hasste", pastPart : "gehasst", pastSubj : "hasste", aux : "haben"},
        lieben : {inf: "lieben", english: "love", strength : "weak", thirdSgPres : "liebt", pastStem : "liebte", pastPart : "geliebt", pastSubj : "liebte", aux : "haben"},
        bevorzugen : {inf: "bevorzugen", english: "favor, prefer", strength : "weak", thirdSgPres : "bevorzugt", pastStem : "bevorzugte", pastPart : "bevorzugt", pastSubj : "bevorzugte", aux : "haben"},
        lachen : {inf: "lachen", english: "laugh", strength : "weak", thirdSgPres : "lacht", pastStem : "lachte", pastPart : "gelacht", pastSubj : "lachte", aux : "haben"},
        weinen : {inf: "weinen", english: "cry, weep", strength : "weak", thirdSgPres : "weint", pastStem : "weinte", pastPart : "geweint", pastSubj : "weinte", aux : "haben"},
        versuchen : {inf: "versuchen", english: "try, taste", strength : "weak", thirdSgPres : "versucht", pastStem : "versuchte", pastPart : "versucht", pastSubj : "versuchte", aux : "haben"},
        üben : {inf: "üben", english: "practice", strength : "weak", thirdSgPres : "übt", pastStem : "übte", pastPart : "geübt", pastSubj : "übte", aux : "haben"},
        berühren : {inf: "berühren", english: "touch", strength : "weak", thirdSgPres : "berührt", pastStem : "berührte", pastPart : "berührt", pastSubj : "berührte", aux : "haben"},
        drücken : {inf: "drücken", english: "press, push", strength : "weak", thirdSgPres : "drückt", pastStem : "drückte", pastPart : "gedrückt", pastSubj : "drückte", aux : "haben"},
        leben : {inf: "leben", english: "live", strength : "weak", thirdSgPres : "lebt", pastStem : "lebte", pastPart : "gelebt", pastSubj : "lebte", aux : "haben"},
        fühlen : {inf: "fühlen", english: "feel", strength : "weak", thirdSgPres : "fühlt", pastStem : "fühlte", pastPart : "gefühlt", pastSubj : "fühlte", aux : "haben"},
        spielen : {inf: "spielen", english: "play", strength : "weak", thirdSgPres : "spielt", pastStem : "spielte", pastPart : "gespielt", pastSubj : "spielte", aux : "haben"},
        kaufen : {inf: "kaufen", english: "buy, purchase", strength : "weak", thirdSgPres : "kauft", pastStem : "kaufte", pastPart : "gekauft", pastSubj : "kaufte", aux : "haben"},
        verkaufen : {inf: "verkaufen", english: "sell", strength : "weak", thirdSgPres : "verkauft", pastStem : "verkaufte", pastPart : "verkauft", pastSubj : "verkaufte", aux : "haben"},
        kosten : {inf: "kosten", english: "cost", strength : "weak", thirdSgPres : "kostet", pastStem : "kostete", pastPart : "gekostet", pastSubj : "kostete", aux : "haben"},
        benutzen : {inf: "benutzen", english: "use", strength : "weak", thirdSgPres : "benutzt", pastStem : "benutzte", pastPart : "benutzt", pastSubj : "benutzte", aux : "haben"},
        handeln : {inf: "handeln", english: "act, take action", strength : "weak", thirdSgPres : "handelt", pastStem : "handelte", pastPart : "gehandelt", pastSubj : "handelte", aux : "haben"},
        verbessern : {inf: "verbessern", english: "improve, make better", strength : "weak", thirdSgPres : "verbessert", pastStem : "verbesserte", pastPart : "verbessert", pastSubj : "verbesserte", aux : "haben"},
        lächeln : {inf: "lächeln", english: "smile", strength : "weak", thirdSgPres : "lächelt", pastStem : "lächelte", pastPart : "gelächelt", pastSubj : "lächelte", aux : "haben"},
        arbeiten : {inf: "arbeiten", english: "work", strength : "weak", thirdSgPres : "arbeitet", pastStem : "arbeitete", pastPart : "gearbeitet", pastSubj : "arbeitet", aux : "haben"},
        antworten : {inf: "antworten", english: "answer, reply", strength : "weak", thirdSgPres : "antwortet", pastStem : "antwortete", pastPart : "geantwortet", pastSubj : "antwortete", aux : "haben"},
        schalten : {inf: "schalten", english: "switch", strength : "weak", thirdSgPres : "schaltet", pastStem : "schaltete", pastPart : "geschaltet", pastSubj : "schaltete", aux : "haben"}
    },

    irregs : {
        sein : {
            present : {
                firstSg : "bin",    firstPl : "sind",
                secondSg: "bist",   secondPl: "seid",
                thirdSg: "ist",    thirdPl : "sind",},
            preterit : {
                firstSg : "war",    firstPl : "waren",
                secondSg: "warst",  secondPl: "wart",
                thirdSg: "war",     thirdPl : "waren"}},

        haben : {
            present : {
                firstSg : "habe",   firstPl : "haben",
                secondSg: "hast",   secondPl: "habt",
                thirdSg: "hat",     thirdPl : "haben",},
            preterit : {
                firstSg : "hatte",      firstPl : "hatten",
                secondSg: "hattest",    secondPl: "hattet",
                thirdSg: "hatte",       thirdPl : "hatten",}},

        werden : {
            present : {
                firstSg : "werde",  firstPl : "werden",
                secondSg: "wirst",  secondPl: "werdet",
                thirdSg: "wird",    thirdPl : "werden",},
            preterit : {
                firstSg : "wurde",      firstPl : "wurden",
                secondSg: "wurdest",    secondPl: "wurdet",
                thirdSg: "wurde",       thirdPl : "wurden",}},

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
    },

    conjugate: function(inf, english, strength, thirdSgPres, pastStem, pastPart, pastSubj, aux, pers, ten) {
        var irregStem = thirdSgPres.split(" ")[0]
        var prep = thirdSgPres.split(" ")[1]
        if (inf.startsWith(prep)) {
            var preplessInf = inf.replace(prep, "")
        } else preplessInf = inf
        if (preplessInf.endsWith("en")) {
            var stem = preplessInf.substring(0, preplessInf.length - 2)
        }
        else {
            var stem = preplessInf.substring(0, preplessInf.length - 1)
        }
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
            if (de.irregs[inf][ten][pers] === undefined) {
                return conjugated
            } else
            conjugated = de.irregs[inf][ten][pers]
            return conjugated
        } catch (e) {
            switch (conjugated) {
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
    },

    conjugateII : function(inf, thirdSgPres, pastStem) {
        var prep = thirdSgPres.split(' ')[1]
        if (prep === undefined) {prep = ''}
        var baseVerb = inf.replace(prep, '')
        var stem = formStem(baseVerb)

        var endsInDT = false
        var endsInSßXZ = false

        checkSpelling(stem)
        var stemIrreg = formStem(thirdSgPres.split(' ')[0])
        pastStem = pastStem.split(' ')[0]

        console.log("prep:", prep, '\n', "base verb:", baseVerb, '\n', "stem:", stem, '\n', "irregular stem:", stemIrreg)
    },

    conjugates : {
    },

    dissalloweds : [
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
    ],

    getRandomVerb: function() {
        return Object.keys(de.verbs)[Math.floor(Math.random() * Object.keys(de.verbs).length)]
    },

    getRandomTense: function() {
        rand = 1 + Math.floor(Math.random() * 5)
        for (let t in de.tenses) {
            if (de.tenses[t][inWords(rand)] != undefined) return [t, inWords(rand)]
        }
    },

    getRandomPerson: function() {
        return Object.keys(de.persons)[Math.floor(Math.random() * Object.keys(de.persons).length)]
    }
}

function formStem(form) {
    if (form.endsWith('en')) {return form.substring(0, form.length - 2)}
    else if (endsInDT) {return form}
    else {return form.substring(0, form.length - 1)}
}
function checkSpelling(form) {
    if (['d', 't'].some(char => form.endsWith(char))) {endsInDT = true}
    if (['s', 'ß', 'x', 'z'].some(char => form.endsWith(char))) {endsInSßXZ = true}
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
            conjugatedPerfect = conjugatedPerfect + perfHelper[it++] + de.irregs[auxes[indexAuxes]].present[pers] + " " + pastParts[indexPastParts]
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
            conjugatedPluPerfect = conjugatedPluPerfect + perfHelper[it++] + de.irregs[auxes[indexAuxes]].preterit[pers] + " " + pastParts[indexPastParts]
        }
    }
    return conjugatedPluPerfect
}

function conjugateFUTI (vrb, pers) {
    return de.irregs.werden.present[pers] + " " + vrb
}

function conjugateFUTII(pastPart, aux, pers) {
    let it =  0
    let conjugatedFutPerfect = ""
    let pastParts = pastPart.split(",")
    let auxes = aux.split(",")
    for (indexPastParts = 0; indexPastParts <= pastParts.length - 1; indexPastParts++) {
        for (indexAuxes = 0; indexAuxes <= auxes.length - 1; indexAuxes++) {
            conjugatedFutPerfect = conjugatedFutPerfect + perfHelper[it++] + de.irregs.werden.present[pers] + " " + pastParts[indexPastParts] + " " + auxes[indexAuxes]
        }
    }
    return conjugatedFutPerfect
}