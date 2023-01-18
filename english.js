const en = {
    name: 'english',
    parts : {
        infinitve : '', presentParticiple : '', pastParticiple: ''
    },
    
    persons : {
        firstSg : 'I',
        secondSg: 'you',
        thirdSg : {masc: 'he', fem : 'she', neut: 'it'},
        firstPl : 'we',
        secondPl: 'you',
        thirdPl : 'they'
    },

    tenses : {

        /** SIMPLE */
    
        present : {
            one  : {
                phrase: '[prs] usually …',
                when: 'today, everyday',
                context: 'habitual, repeated actions'},
            two  : {
                phrase: '[prs] always …',
                when: 'always',
                context: 'generally/always true, facts'},
            three: {
                phrase: '[prs] … on Wednesday at noon',
                when: 'in the future',
                context: 'regular scheduled events'},
            four: {
                phrase: 'First something happens, and then [prs] …',
                when: 'now',
                context: 'short, quick, sequence of actions'},
            five : {
                phrase: 'Before [prs] … this will happen',
                when: 'now',
                context: 'after time words'},},
        preterit: {
            six  : {
                phrase: '[prs] … yesterday',
                when: 'yesterday',
                context: 'single completed action'},
            seven  : {
                phrase: 'First something happened, and then [prs] …',
                when: 'yesterday',
                context: 'short, quick, sequence of actions'},
            eight: {
                phrase: 'something was happening when [prs] …',
                when: 'yesterday',
                context: 'interrupting action of an ongoing action'}},
        futureWill  : {
            nine  : {
                phrase: '[prs] … … tomorrow',
                when: 'tomorrow',
                context: 'future facts'},
            ten  : {
                phrase: 'They think tomorrow [prs] … …',
                when: 'tomorrow',
                context: 'predictions, assumptions'},
            eleven: {
                phrase: 'They promise [prs] … …',
                when: 'tomorrow',
                context: 'promises, threats'},
            twelve : {
                phrase: 'They just decided, [prs] … …',
                when: 'tomorrow',
                context: 'spontaneous decisions'}},
        futureShall: {
            thirteen  : {
                phrase: '… [prs] …?',
                when: 'tomorrow',
                context: 'asking for opinons on offers and suggestions'},},
        futureGoing: {
            fourteen  : {
                phrase: '[prs] … … … … tomorrow',
                when: 'tomorrow',
                context: 'future plans, intentions'},
            fifteen  : {
                phrase: 'according to this, [prs] … … … … tomorrow',
                when: 'tomorrow',
                context: 'predictions with evidence'}
        },
    
        /** CONTINUOUS */
    
        presCont: {
            sixteen  : {
                phrase : '[prs] … … right now',
                when: 'right now',
                context: 'ongoing unfinished action'},
            seventeen  : {
                phrase: '[prs] … … at three',
                when: 'tomorrow',
                context: 'future intentions, arangements'},
            eighteen: {
                phrase : '[prs] … … nowadays',
                when: 'nowadays',
                context: 'temporary situations'},
            nineteen : {
                phrase : '[prs] … … these days',
                when: 'these days',
                context: 'longer actions happening over a period of time'},
            twenty : {
                phrase: '[prs] … always …',
                when: 'always',
                context: 'repeated annoying actions'}},
        pastCont: {
            twentyone  : {
                phrase : '[prs] … … yesterday at noon',
                when: 'yesterday',
                context: 'ongoing action at a certain time in the past'},
            twentytwo  : {
                phrase : '[prs] … … while something else was happening',
                when: 'in the past',
                context: 'two unconnected events happening in the past'},
            twentythree: {
                phrase : '[prs] … … for the whole day',
                when: 'the whole day yesterday',
                context: 'actions which happened for a while'},
            twentyfour : {
                phrase : '[prs] … constantly …',
                when: 'constantly, in the past',
                context: 'repeated annoying actions in the past'}},
        futCont : {
            twentyfive  : {
                phrase : '[prs] … … … when this happens tomorrow',
                when: 'tomorrow',
                context: 'overlapping actions in the future'},
            twentysix  : {
                phrase : 'should all go as planned, [prs] … … … tomorrow',
                when: 'tomorrow',
                context: 'actions that will happen should all go as expected'}
        },
    
        /** PERFECT SIMPLE */
    
        presPerf: {
            twentyseven  :{
                phrase : '[prs] … … since yesterday',
                when: 'since yesterday',
                context: 'unfinished actions continuing in the present'},
            twentyeight  : {
                phrase : '[prs] … … for a week',
                when: 'for a week',
                context: 'unfinished actions continuing in the present'},
            twentynine: {
                phrase : '[prs] … …',
                when: 'in this life',
                context: 'life experiences at an unspecified time'},
            thirty : {
                phrase : '[prs] … … this week',
                when: 'this week',
                context: 'completed actions in an incomplete time'}},
        pastPerf: {
            thirtyone  : {
                phrase : '[prs] … … yesterday before something else happened',
                when: 'yesterday',
                context: 'actions before another past action'},
            thirtytwo  : {
                phrase : '[prs] … … for a week when something else happened',
                when: 'for a week, in the past',
                context: 'completed (stative) actions which continued until a certain point'},},
        futPerf : {
            thirtythree  : {
                phrase : '[prs] … … … by this time tomorrow',
                when: 'tomorrow',
                context: 'completed actions by a certain time in the future'}
        },
    
        /** PERFECT CONTINUOUS */
    
        presPerfCont: {
            phrase : '[prs] … … … ',
            when: '',
            context: ''},
        pastPeftCont: {
            phrase : '[prs] … … … ',
            when: '',
            context: ''},
        futPerfCont : {
            phrase : '[prs] … … … … ',
            when: '',
            context: ''}
    },

    verbs : {
        //: {infintive: "", preterit: '', pastPart: ''},
        be: {infintive: "be'", preterit: 'was', pastPart: 'been'},
        have: {infintive: "ha've", preterit: 'had', pastPart: 'had'},
        will: {infintive: "wi'll", preterit: 'would', pastPart: ''},
        do: {infintive: "do'", preterit: 'did', pastPart: 'done'},
        say: {infintive: "sa'y", preterit: 'said', pastPart: 'said'},
        go: {infintive: "go'", preterit: 'went', pastPart: 'gone'},
        get: {infintive: "ge't", preterit: 'got', pastPart: 'gotten/got'},
        make: {infintive: "ma'ke", preterit: 'made', pastPart: 'made'},
        know: {infintive: "kno'w", preterit: 'knew', pastPart: 'known'},
        think: {infintive: "thi'nk", preterit: 'thought', pastPart: 'thought'},
        take: {infintive: "ta'ke", preterit: 'took', pastPart: 'taken'},
        see: {infintive: "see'", preterit: 'saw', pastPart: 'seen'},
        come: {infintive: "co'me", preterit: 'came', pastPart: 'come'},
        want: {infintive: "wa'nt", preterit: '', pastPart: ''},
        look: {infintive: "loo'k", preterit: '', pastPart: ''},
        use: {infintive: "u'se", preterit: '', pastPart: ''},
        find: {infintive: "f'ind", preterit: 'found', pastPart: 'found'},
        give: {infintive: "g'ive", preterit: 'gave', pastPart: 'given'},
        tell: {infintive: "te'll", preterit: 'told', pastPart: 'told'},
        work: {infintive: "wo'rk", preterit: '', pastPart: ''},
        call: {infintive: "ca'll", preterit: '', pastPart: ''},
        try: {infintive: "try'", preterit: '', pastPart: ''},
        ask: {infintive: "a'sk", preterit: '', pastPart: ''},
        need: {infintive: "nee'd", preterit: '', pastPart: ''},
        feel: {infintive: "fee'l", preterit: 'felt', pastPart: 'felt'},
        become: {infintive: "be'come", preterit: 'became', pastPart: 'become'},
        leave: {infintive: "lea've", preterit: 'left', pastPart: 'left'},
        put: {infintive: "pu't", preterit: 'put', pastPart: 'put'},
        mean: {infintive: "mea'n", preterit: 'meant', pastPart: 'meant'},
        keep: {infintive: "kee'p", preterit: 'kept', pastPart: 'kept'},
        let: {infintive: "le't", preterit: 'let', pastPart: 'let'},
        begin: {infintive: "begi'n", preterit: 'began', pastPart: 'begun'},
        seem: {infintive: "see'm", preterit: '', pastPart: ''},
        help: {infintive: "he'lp", preterit: '', pastPart: ''},
        talk: {infintive: "ta'lk", preterit: '', pastPart: ''},
        turn: {infintive: "tu'rn", preterit: '', pastPart: ''},
        start: {infintive: "sta'rt", preterit: '', pastPart: ''},
        show: {infintive: "sho'w", preterit: '', pastPart: 'shown'},
        hear: {infintive: "hea'r", preterit: 'heard', pastPart: 'heard'},
        play: {infintive: "pla'y", preterit: '', pastPart: ''},
        run: {infintive: "ru'n", preterit: 'ran', pastPart: 'run'},
        move: {infintive: "mo've", preterit: '', pastPart: ''},
        like: {infintive: "li'ke", preterit: '', pastPart: ''},
        live: {infintive: "li've", preterit: '', pastPart: ''},
        believe: {infintive: "be'lieve", preterit: '', pastPart: ''},
        hold: {infintive: "ho'ld", preterit: 'held', pastPart: 'held'},
        bring: {infintive: "bri'ng", preterit: 'brought', pastPart: 'brought'},
        happen: {infintive: "ha'ppen", preterit: '', pastPart: ''},
        write: {infintive: "wri'te", preterit: 'wrote', pastPart: 'written'},
        provide: {infintive: "pro'vide", preterit: '', pastPart: ''},
        sit: {infintive: "si't", preterit: 'sat', pastPart: 'sat'},
        stand: {infintive: "sta'nd", preterit: 'stood', pastPart: 'stood'},
        lose: {infintive: "lo'se", preterit: 'lost', pastPart: 'lost'},
        pay: {infintive: "pa'y", preterit: 'paid', pastPart: 'paid'},
        meet: {infintive: "mee't", preterit: 'met', pastPart: 'met'},
        include: {infintive: "i'nclude", preterit: '', pastPart: ''},
        continue: {infintive: "conti'nue", preterit: '', pastPart: ''},
        set: {infintive: "se't", preterit: 'set', pastPart: 'set'},
        learn: {infintive: "lea'rn", preterit: 'learned/learnt', pastPart: 'learned/learnt'},
        change: {infintive: "cha'nge", preterit: '', pastPart: ''},
        lead: {infintive: "lea'd", preterit: 'led', pastPart: 'led'},
        understand: {infintive: "u'nderstand", preterit: 'understood', pastPart: 'understood'},
        watch: {infintive: "wa'tch", preterit: '', pastPart: ''},
        follow: {infintive: "fo'llow", preterit: '', pastPart: ''},
        stop: {infintive: "sto'p", preterit: '', pastPart: ''},
        create: {infintive: "cre'ate", preterit: '', pastPart: ''},
        speak: {infintive: "spea'k", preterit: 'spoke', pastPart: 'spoke'},
        read: {infintive: "rea'd", preterit: 'read', pastPart: 'read'},
        allow: {infintive: "allo'w", preterit: '', pastPart: ''},
        add: {infintive: "a'dd", preterit: '', pastPart: ''},
        spend: {infintive: "spe'nd", preterit: 'spent', pastPart: 'spent'},
        grow: {infintive: "gro'w", preterit: 'grew', pastPart: 'grew'},
        open: {infintive: "o'pen", preterit: '', pastPart: ''},
        walk: {infintive: "wa'lk", preterit: '', pastPart: ''},
        win: {infintive: "wi'n", preterit: 'won', pastPart: 'won'},
        offer: {infintive: "o'ffer", preterit: '', pastPart: ''},
        remember: {infintive: "re'member", preterit: '', pastPart: ''},
        love: {infintive: "lo've", preterit: '', pastPart: ''},
        consider: {infintive: "co'nsider", preterit: '', pastPart: ''},
        appear: {infintive: "", preterit: '', pastPart: ''},
        buy: {infintive: "bu'y", preterit: 'bought', pastPart: 'bought'},
        wait: {infintive: "wai't", preterit: '', pastPart: ''},
        serve: {infintive: "se'rve", preterit: '', pastPart: ''},
        die: {infintive: "die'", preterit: 'died', pastPart: 'died'},
        send: {infintive: "se'nd", preterit: 'sent', pastPart: 'sent'},
        expect: {infintive: "expe'ct", preterit: '', pastPart: ''},
        build: {infintive: "bui'ld", preterit: 'built', pastPart: 'built'},
        stay: {infintive: "sta'y", preterit: '', pastPart: ''},
        fall: {infintive: "fa'll", preterit: 'fell', pastPart: 'fell'},
        cut: {infintive: "c'ut", preterit: 'cut', pastPart: 'cut'},
        reach: {infintive: "rea'ch", preterit: '', pastPart: ''},
        kill: {infintive: "ki'll", preterit: '', pastPart: ''},
        remain: {infintive: "remai'n", preterit: '', pastPart: ''},
        suggest: {infintive: "sugge'st", preterit: '', pastPart: ''},
        raise: {infintive: "rai'se", preterit: '', pastPart: ''},
        pass: {infintive: "pa'ss", preterit: '', pastPart: ''},
        sell: {infintive: "se'll", preterit: 'sold', pastPart: 'sold'},
        require: {infintive: "requi're", preterit: '', pastPart: ''},
        report: {infintive: "repo'rt", preterit: '', pastPart: ''},
        decide: {infintive: "de'cide", preterit: '', pastPart: ''},
        pull: {infintive: "pu'll", preterit: '', pastPart: ''},
        shop: {infinitive: "sho'p", preterit: '', pastPart: ''},
        refer: {infinitive: "refe'r", preterit: '', pastPart: ''},
        clarify: {infinitive: "cla'rify", preterit: '', pastPart: ''},
    },

    irregs : {
        be: {
            infinitve: "to be", presentParticiple : 'being', pastParticiple: 'been',
            present: {
                firstSg : 'am',     firstPl : 'are',
                secondSg: 'are',    secondPl: 'are',
                thirdSg : 'is',     thirdPl : 'are'},
            preterit: {
                firstSg : 'was',    firstPl : 'were',
                secondSg: 'were',   secondPl: 'were',
                thirdSg : 'was',    thirdPl : 'were'},},
        have : {
            present: {
                firstSg : 'have',   firstPl : 'have',
                secondSg: 'have',   secondPl: 'have',
                thirdSg : 'has',    thirdPl : 'have'},
            preterit: {
                firstSg : 'had',    firstPl : 'had',
                secondSg: 'had',    secondPl: 'had',
                thirdSg : 'had',    thirdPl : 'had'},},
        do : {present: {thirdSg : 'does'}},
        go : {present: {thirdSg : 'goes'}},
    },

    conjugate: function(inf, pret, pastPart, person, tense) {

        checkSilentE(inf)
        checkCVC(inf)
        checkCY(inf)
        checkIE(inf)
    
        toInf = formToInfinitive(inf)
        baseInf = formBareInfinitive(inf)
    
        presentParticple = formPresPart(baseInf)
        preterit = formPreterit(baseInf, pret)
        pastParticiple = formPastPart(baseInf, pastPart)
        spellingEnding = ''
    
        let conjugated = ""
        switch (tense) {
            case 'infinitve' : conjugated = baseInf; break
            case 'presentParticiple' : conjugated = presentParticple; break
            case 'pastParticiple' : conjugated = pastParticiple; break
    
            case 'present': switch (person) {case 'thirdSg' : conjugated = form3PPres(baseInf); break; default: conjugated = baseInf}; break
            case 'presCont': conjugated = en.irregs.be.present[person] + ' ' + presentParticple; break
            case 'presPerf': conjugated = en.irregs.have.present[person] + ' ' + pastParticiple; break
            case 'presPerfCont': conjugated = en.irregs.have.present[person] + ' ' + en.verbs.be.pastPart + ' ' + presentParticple; break
    
            case 'preterit': conjugated = preterit; break
            case 'pastCont': conjugated = en.irregs.be.preterit[person] + ' ' + presentParticple; break
            case 'pastPerf': conjugated = en.verbs.have.preterit + ' ' + pastParticiple; break
            case 'pastPeftCont': conjugated = en.verbs.have.preterit + ' ' + en.verbs.be.pastPart + ' ' + presentParticple; break
    
            case 'futureWill': conjugated = 'will '  + baseInf; break
            case 'futureShall': conjugated = 'shall ' + baseInf; break
            case 'futureGoing': conjugated = en.irregs.be.present[person] + ' going ' + toInf; break
            case 'futCont': conjugated = 'will be ' + presentParticple; break
            case 'futPerf': conjugated = 'will have ' + pastParticiple; break
            case 'futPerfCont': conjugated = 'will have ' + en.verbs.be.pastPart + ' ' + presentParticple; break
        }
        try {
            if (en.irregs[baseInf][tense][person] === undefined) {
                return conjugated
            } else
            conjugated = en.irregs[baseInf][tense][person]
            return conjugated
        } catch (e) {
            return conjugated
        }
    },

    conjugates : {
    },

    dissalloweds : [],

    getRandomVerb: function() {
        return Object.keys(en.verbs)[Math.floor(Math.random() * Object.keys(en.verbs).length)]
    },

    getRandomTense: function() {
        rand = 1 + Math.floor(Math.random() * 32)
        for (let t in en.tenses) {
            if (en.tenses[t][inWords(rand)] != undefined) return [t, inWords(rand)]
        }
    },

    getRandomPerson: function() {
        return Object.keys(de.persons)[Math.floor(Math.random() * Object.keys(de.persons).length)]
    }
}

var spellingEnding

function formToInfinitive(inf) {
    toInf = 'to ' + inf.split("'")[0] + inf.split("'")[1]
    return toInf
}

function formBareInfinitive(inf) {
    baseInf = inf.split("'")[0] + inf.split("'")[1]
    return baseInf
}

function formPresPart(inf) {
    switch (spellingEnding) {
        case 'silent e' : presentParticiple = inf.substring(0, inf.length - 1) + 'ing'; break
        case 'stressed CVC' : presentParticiple = inf + inf[inf.length - 1] + 'ing'; break
        case 'ending IE' : presentParticiple = inf.substring(0, inf.length - 2) + 'ying'; break
        default : presentParticiple = inf + 'ing'
    }
    return presentParticiple
}

function formPreterit(inf, pret) {
    if (pret === '') {
        switch (spellingEnding) {
            case 'silent e' : preterit = inf + 'd'; break
            case 'ending IE' : preterit = inf + 'd'; break
            case 'stressed CVC': preterit = inf + inf[inf.length - 1] + 'ed'; break
            case 'vowel Y' : preterit = inf.substring(0, inf.length - 1) + 'ied'; break
            default : preterit = inf + 'ed'
        }
    } else preterit = pret
    return preterit
}

function formPastPart(inf, pastPart) {
    if (pastPart === '') {
        switch (spellingEnding) {
            case 'silent e' : pastParticiple = inf + 'd'; break
            case 'ending IE' : pastParticiple = inf + 'd'; break
            case 'stressed CVC': pastParticiple = inf + inf[inf.length - 1] + 'ed'; break
            case 'vowel Y' : pastParticiple = inf.substring(0, inf.length - 1) + 'ied'; break
            default : pastParticiple = inf + 'ed'
        }
    } else pastParticiple = pastPart
    return pastParticiple
}

function form3PPres(inf) {
    switch (spellingEnding) {
        case 'vowel Y' : thirdSg = inf.substring(0, inf.length - 1) + 'ies'; break
        default : thirdSg = inf + 's'
    }
    spellingEnding = ''
    return thirdSg
}

function checkSilentE(inf) {
    inf = inf.split("'")[0] + inf.split("'")[1]
    e = new RegExp("[aeiou][^aeiou]e\\b", "g")
    if (e.test(inf)) {
        spellingEnding = 'silent e'
    }
}
function checkCVC(inf) {
    doubleEnd = new RegExp("[^aeiou][aeiou]'[^aeiouwxy]\\b", "g")
    if (doubleEnd.test(inf)) {
        spellingEnding = 'stressed CVC'
    }
}
function checkCY(inf) {
    y = new RegExp("[^aeiou']y\\b", "g")
    if (y.test(inf)) {
        spellingEnding = 'vowel Y'
    }
}
function checkIE(inf) {
    ie = new RegExp("[^aeiou']ie\\b", "g")
    if (ie.test(inf)) {
        spellingEnding = 'ending IE'
    }
}

/**
function conjugate(inf, pret, pastPart, person, tense) {

    checkSilentE(inf)
    checkCVC(inf)
    checkCY(inf)
    checkIE(inf)
    console.log(spellingEnding)

    toInf = formToInfinitive(inf)
    baseInf = formBareInfinitive(inf)

    presentParticple = formPresPart(baseInf)
    preterit = formPreterit(baseInf, pret)
    pastParticiple = formPastPart(baseInf, pastPart)
    spellingEnding = ''

    let conjugated = ""
    switch (tense) {
        case 'infinitve' : conjugated = baseInf; break
        case 'presentParticiple' : conjugated = presentParticple; break
        case 'pastParticiple' : conjugated = pastParticiple; break

        case 'present': switch (person) {case 'thirdSg' : conjugated = form3PPres(baseInf); break; default: conjugated = baseInf}; break
        case 'presCont': conjugated = irregs.be.present[person] + ' ' + presentParticple; break
        case 'presPerf': conjugated = irregs.have.present[person] + ' ' + pastParticiple; break
        case 'presPerfCont': conjugated = irregs.have.present[person] + ' ' + verbs.be.pastPart + ' ' + presentParticple; break

        case 'preterit': conjugated = preterit; break
        case 'pastCont': conjugated = irregs.be.preterit[person] + ' ' + presentParticple; break
        case 'pastPerf': conjugated = verbs.have.preterit + ' ' + pastParticiple; break
        case 'pastPeftCont': conjugated = verbs.have.preterit + ' ' + verbs.be.pastPart + ' ' + presentParticple; break

        case 'futureWill': conjugated = 'will '  + baseInf; break
        case 'futureShall': conjugated = 'shall ' + baseInf; break
        case 'futureGoing': conjugated = irregs.be.present[person] + ' going ' + toInf; break
        case 'futCont': conjugated = 'will be ' + presentParticple; break
        case 'futPerf': conjugated = 'will have ' + pastParticiple; break
        case 'futPerfCont': conjugated = 'will have ' + verbs.be.pastPart + ' ' + presentParticple; break
    }
    try {
        if (irregs[baseInf][tense][person] === undefined) {
            return conjugated
        } else
        conjugated = irregs[baseInf][tense][person]
        return conjugated
    } catch (e) {
        return conjugated
    }
}
 */