const test = ['parler', 'choisir', 'perdre', 'rompre', 'traduire', 'écrire', 'craindre', 'mettre', 'apprendre', 'connaître', 'aller', 'être']
const fr = {
    name: 'french',
    parts: {
    },
    
    persons: {
        $1Sg: {je: 'je'},
        $2Sg: {tu: 'tu'},
        $3Sg: {masc: 'il', fem: 'elle', neut: 'on'},
        $1Pl: {nous: 'nous'},
        $2Pl: {vous: 'vous'},
        $3Pl: {masc: 'ils', fem: 'elles'}
    },

    tenses: {
        present: {
            one: {
                phrase: `${verbContext.prn} … en ce moment`,
                when: 'maintenant. en ce moment, chaque jour',
                context: 'general actions, habitual actions, ongoing actions'
            },
            two: {
                phrase: `${verbContext.prn} … généralement`,
                when: 'toujours. généralement, normalement',
                context: 'absolute or general truths'
            },
            three: {
                phrase: `${verbContext.prn} … demain`,
                when: 'plus tard, demain, ce soir',
                context: 'actions which are about to occur'
            }
        },
        /**
         * présent
         * Non-compound, finite, oratory, literary
         * one  : current actions or states of being
         *         Je travaille.       I'm working.
         *         Il est en retard.       He's late.
         * two  : habitual actions or states of being
         *         Oui, je travaille le dimanche.	 	Yes, I do work on Sundays.
         *         Il est toujours en retard.	 	He’s always late.
         * three: Actions which are about to occur
         *         Je travaille demain.	 	I’m working tomorrow.
         *         Il arrive sur-le-champ.	 	He’ll be right here.
         * four : Absolute or general truths
         *         Le soleil se lève à l’est.	 	The sun rises in the east.
         *         L’eau est essentielle à la vie.	 	Water is essential to life.
         * five : Conditions in likely situations (si clauses)
         *         Si tu veux, tu peux dîner avec moi.	 	If you want, you can have dinner with me.
         *         Je vais le renvoyer s’il est en retard demain.	 	I’m going to fire him if he’s late tomorrow.
         * six  : Historical narratives 
         */

        imperfect: {
            four: {
                phrase: `${verbContext.prn} … dans le passé`,
                when: 'tous les jours/chaque été/chaque anneé dans le passé',
                context: 'past habitual actions',
            },
            five: {
                phrase: `${verbContext.prn} … pendant que quelque chose d'autre s'est passé`,
                when: "pendent que/quand/tout à coup quelque chose d'autre s'est passé",
                context: 'past ongoing actions'
            }
        },
        /**
         * imparfait
         * non-compound, finite, oratory, literary
         * seven: Descriptions (age, feelings, health, time, weather…)
         *         Il pleuvait mais elle avait un parapluie.	 	It was raining but she had an umbrella.
         *         Quand j’avais 6 ans, j’étais souvent malade et je craignais les chiens.	 	When I was 6 years old, I was often sick and I was afraid of dogs.
         * eight: Habitual actions or states of being
         *         L’année dernière, nous allions au ciné chaque vendredi.	 	Last year, we went to the movies every Friday.
         *         Je m’ennuyais souvent.	 	I was often bored.
         * nine : Actions or states of being with unspecified endings
         *         J’allais au parc parce que je voulais me promener.	 	I was going to the park because I wanted to take a walk.
         *         Quand je travaillais, je m’ennuyais toujours.	 	When I worked, I was always bored.
         * ten  : Background information
         *         Où étais-tu quand tu as appris la nouvelle ?	 	Where were you when you heard the news?
         *         J’étais au bureau.	 	I was at the office.
         * eleven:Indirect speech
         *         Il m’a dit qu’il allait à la banque.	 	He told me he was going to the bank.
         * twelve:Most verbs followed by the infinitive
         *         a)	Aller
         *          	J’allais te téléphoner.	 	I was going to call you. 
         *         b)	Être en train de
         *          	J’étais en train de rénover le garage.	 	I was (in the process of) renovating the garage.
         *         c)	Venir de
         *          	Je venais de rentrer quand tu as appelé.	 	I had just gotten home when you called.
         *         d)	Vouloir (polite request)
         *          	Je voulais vous poser une question.	 	I wanted / I would like to ask you a question.
         */

        compoundPast: {
            six: {
                phrase: `${verbContext.prn} … … hier`,
                when: 'hier, dernière, il y a un/deux …',
                context: 'past completed actions',
            },
            seven: {
                phrase: `${verbContext.prn} … … plusieurs fois`,
                when: "beaucoup de/plusieurs fois",
                context: 'past repeated actions'
            },
            eight: {
                phrase: `${verbContext.prn} … … depuis hier`,
                when: "depuis (de) quelque temps dans le passé",
                context: 'actions started in the past and continuing now'
            },
            nine: {
                phrase: `${verbContext.prn} … jamais …`,
                when: "quelquefoi, jamais, toujours",
                context: 'past completed actions at unspecified time'
            }
        },
        /**
         * passé composé
         * compound, finite, oratory, informal literary
         * thirteen:Completed actions
         *         Oui, j’ai visité le Canada.	 	Yes, I did visit Canada.
         * fourteen:Repeated actions
         *         Je l’ai visité 3 fois.	 	I’ve visited it 3 times.
         * fifteen: Series of actions
         *         J’ai visité le Canada et puis je suis allé aux USA.	 	I visited Canadan and then I went to the US.
         * sixteen: Condition in likely situations (si clauses)
         *         Si tu as perdu, tu dois féliciter le gagnant.	 	If you lost, you have to congratulate the winner.
         */

        pastSimple: {
            ten: {
                phrase: `${verbContext.prn} … hier`,
                when: "hier, dernière, il y a un/deux …",
                context: 'past completed actions in literature'
            }
        },
        /**
         * passé simple
         * non-compound, finite, literary
         * seventeen:Completed actions
         *          Le maire et le président lui firent la première visite, et	 	The mayor and the president were the first to visit him, and 
         *          lui de son côté fit la première visite au général et au préfet.	 	he in turn first visited the general and the prefect.
        */

        pluperfect: {
            eleven: {
                phrase: `${verbContext.prn} … … avant qu'autre chose ne s'est passé`,
                when: "hier jusqu'à ce que/dès que/avant qu'une autre action",
                context: 'past completed actions before another past action'
            }
        },
        /**
         * plus-que-parfait
         * compound, finite, oratory, literary
         * eighteen:Completed actions before another completed action in the past
         *          Le soleil avait déjà commencé à se coucher quand je suis arrivé.	 	The sun had already started to set when I arrived.
         *          Elle avait fini tout le travail quand je suis parti.	 	She had finished all the work when I left.
         * nineteen:Condition in unlikely past situations (si clauses)
         *          Si j’avais fini le travail, je serais parti tôt.	 	If I had finished the work, I would have left early.
         *          Tu aurais réussi à l’examen si tu avais étudié.	 	You would have passed the test if you had studied.
         */
        
        anteriorPast: {
            twelve: {
                phrase: `${verbContext.prn} … … avant que ...`,
                when: "hier jusqu'à ce que/dès que/avant qu'une autre action",
                context: 'past completed actions before another past action in literature'
            }
        },
        /**
         * passé antérieur
         * compound, finite, literary
         * twenty : Completed actions before another completed action in the past
         *          Je partis dès qu’il eut terminé.	 	I left as soon as he (had) finished.
         *          Elle vivait en France après que son mari fut décédé.	 	She lived in France after her husband (had) passed away.
         */
        
        future: {
            thirteen: {
                phrase: `${verbContext.prn} … plus tard`,
                when: "demain, plus tard, après",
                context: 'actions yet to be completed'
            }
        },
        /**
         * futur
         * simple, finite, oratory, literary
         * twentyone : actions that will take place in the future.
         *          J’irai à la banque demain.	 	I’ll go to the bank tomorrow.
         *          Vous aurez ma résponse ce soir.	 	You’ll have my answer tonight.
         * twentytwo : apodisis in a conditional sentence
         *          Je t’appellerai si j’ai des nouvelles.	 	I’ll call you if I have any news.
         *          Si j’ai des nouvelles, je t’appellerai.	 	If I have any news, I’ll call you.
         *          Tu réussiras à l’examen si tu étudies.	 	You’ll pass the test if you study.
         * twentythree : Futuristic conjunctions; après que (after), aussitôt que (as soon as), dès que (as soon as),
         * lorsque (when), quand (when), une fois que (once)
         *          Dès que vous serez au lit, je vous raconterai une histoire.	 	As soon as you’re in bed, I’ll tell you a bedtime story.
         *          Appelle-moi quand tu te sentiras mieux.	 	Call me when you feel better.
         */
        
        futureAnterior: {
            fourteen: {
                phrase: `${verbContext.prn} … avant que ...`,
                when: "demain, quand/dès que/avant qu'une autre action",
                context: 'actions which will be completed by a certian time in the future'
            }
        },
        /**
         * futur antérieur
         * compound, finite, oratory, literary
         * twentytwo: actions that will be completed by some time in the future.
         *          J’aurai fini le travail quand vous arriverez.	 	I will have finished the work by the time you arrive.
         *          Si tu rentres tard, je me serai déjà couché.	 	If you come home late, I’ll already have gone to bed.
         * twentythree: After conjunctions and conjunctive phrases that introduce future actions: 
         *          après que (after), aussitôt que (as soon as), dès que (as soon as)
         *          lorsque (when), quand (when), une fois que (once)
         * 
         *          Dès que tu auras mangé, tu dois partir.	 	As soon as you eat / you’ve eaten, you need to leave.
         *          Je t’aiderai une fois que tu m’auras raconté l’histoire.	 	I’ll help you once you’ve told me the story.
         */

    },

    verbs: {
        //: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        aller: {eng: 'go', $1SgPres: 'vais', $1PlPres: 'allons', $3PlPres: '', $1SgFut: 'irai', $PastPart: 'allé', $1SgPret: 'allai', aux: 'être'},
        "s'asseoir": {eng: 'sit down', $1SgPres: "m'assieds", $1PlPres: "nous asseyons", $3PlPres: "s'asseyent", $1SgFut: "m'assiérai", $PastPart: "assis", $1SgPret: "m'assis", aux: 'être'},
        avoir: {eng: 'have', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'eu', $1SgPret: '', aux: ''},
        boire: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        choisir: {eng: 'choose', $1SgPres: '', $1PlPres: '', $3PlPres: 'choisissons', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        conduir: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        connaître: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        courir: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        craindre: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'craint', $1SgPret: '', aux: ''},
        croire: {eng: 'believe', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        devoir: {eng: 'must', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'dû', $1SgPret: '', aux: ''},
        dire: {eng: 'say', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'dit', $1SgPret: '', aux: ''},
        écrire: {eng: 'write', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'écrit', $1SgPret: '', aux: ''},
        être: {eng: 'be', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'été', $1SgPret: '', aux: ''},
        faire: {eng: 'do', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'fait', $1SgPret: '', aux: ''},
        falloir: {eng: 'need to', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        finir: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        joindre: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        lancer: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        lire: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        manger: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        manquer: {eng: 'miss', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        //mettre: {eng: 'put', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'mis', $1SgPret: '', aux: ''},
        naître: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        parler: {eng: 'speak', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        peindre: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        perdre: {eng: 'lose', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        pleuvoir: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        pouvoir: {eng: 'be able to', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'pu', $1SgPret: '', aux: ''},
        prendre: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'pris', $1SgPret: '', aux: ''},
        recevoir: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        rire: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        rompre: {eng: 'lose', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        savoir: {eng: 'know', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'su', $1SgPret: '', aux: ''},
        //tenir: {eng: 'hold', $1SgPres: 'tiens', $1PlPres: 'tenons', $3PlPres: 'tiennent', $1SgFut: 'tiendrai', $PastPart: 'tenu', $1SgPret: 'tins', aux: ''},
        valoir: {eng: '', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        //venir: {eng: '', $1SgPres: 'viens', $1PlPres: 'venons', $3PlPres: 'viennent', $1SgFut: 'viendrai', $PastPart: 'venu', $1SgPret: 'vins', aux: 'être'},
        vivre: {eng: 'live', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: '', $1SgPret: '', aux: ''},
        voir: {eng: 'see', $1SgPres: '', $1PlPres: '', $3PlPres: '', $1SgFut: '', $PastPart: 'vu', $1SgPret: '', aux: ''},
        vouloir: {eng: 'want', $1SgPres: 'veux', $1PlPres: 'voulons', $3PlPres: 'veulent', $1SgFut: 'vouldrai', $PastPart: 'voulu', $1SgPret: 'voulus', aux: ''}
    },

    irregs: {
        aller: {
            present: {
                $1Sg: 'vais',   $1Pl: 'allons',
                $2Sg: 'vas',    $2Pl: 'allez',
                $3Sg: 'va',     $3Pl: 'vont'
            },
            imperfect: {
                $1Sg: 'allais', $1Pl: 'allions',
                $2Sg: 'allais', $2Pl: 'alliez',
                $3Sg: 'allait', $3Pl: 'allaient'
            },
            pastSimple: {
                $1Sg: 'allai',  $1Pl: 'allâmes',
                $2Sg: 'allas',  $2Pl: 'allâtes',
                $3Sg: 'alla',   $3Pl: 'allèrent'
            },
            future: {
                $1Sg: 'irai',   $1Pl: 'irons',
                $2Sg: 'iras',   $2Pl: 'irez',
                $3Sg: 'ira',    $3Pl: 'iront'
            }
        },

        avoir: {
            present: {
                $1Sg: 'ai',     $1Pl: 'avons',
                $2Sg: 'as',     $2Pl: 'avez',
                $3Sg: 'a',      $3Pl: 'ont'
            },
            imperfect: {
                $1Sg: 'avais',  $1Pl: 'avions',
                $2Sg: 'avais',  $2Pl: 'aviez',
                $3Sg: 'avait',  $3Pl: 'avaient'
            },
            pastSimple: {
                $1Sg: 'eus',    $1Pl: 'eûmes',
                $2Sg: 'eus',    $2Pl: 'eûtes',
                $3Sg: 'eut',    $3Pl: 'eurent'
            },
            future: {
                $1Sg: 'aurai',   $1Pl: 'aurons',
                $2Sg: 'aurai',   $2Pl: 'aurez',
                $3Sg: 'aura',    $3Pl: 'auront'
            }
        },

        être: {
            present: {
                $1Sg: 'suis',   $1Pl: 'sommes',
                $2Sg: 'es',     $2Pl: 'êtes',
                $3Sg: 'est',    $3Pl: 'sont'
            },
            imperfect: {
                $1Sg: 'étais',  $1Pl: 'étions',
                $2Sg: 'étais',  $2Pl: 'étiez',
                $3Sg: 'était',  $3Pl: 'étaient'
            },
            pastSimple: {
                $1Sg: 'fus',    $1Pl: 'fûmes',
                $2Sg: 'fus',    $2Pl: 'tûtes',
                $3Sg: 'fut',    $3Pl: 'furent'
            },
            future: {
                $1Sg: 'serai',  $1Pl: 'serons',
                $2Sg: 'seras',  $2Pl: 'serez',
                $3Sg: 'sera',   $3Pl: 'seront'
            }
        },
    },

    irregPatterns: {
        enir: {regex: /enir$/, $1SgPres: 'iens', $1PlPres: 'enons', $3PlPres: 'iennent', $1SgPret: 'ins', $1SgFut: 'iendrai', $PastPart: 'enu', aux: ''},
        mettre: {regex: /mettre$/, $1SgPres: 'mets', $1PlPres: 'mettons', $3PlPres: 'mettent', $1SgPret: 'mis', $1SgFut: 'mettrai', $PastPart: 'mis', aux: ''},
    },
    frags: {
        cer: {
            present: {$1Pl: 'çons'},
            imperfect: {$1Sg: 'çais', $2Sg: 'çais', $3Sg: 'çait', $3Pl: 'çaient'},
            pastSimple: {$1Sg: 'çai', $1Pl: 'çâmes', $2Sg: 'ças', $2Pl: 'çâtes', $3Sg: 'ça'}},
        eler: {present: {$1Sg: 'elle', $2Sg: 'elles', $3Sg: 'elle', $3Pl: 'ellent'}},
        enir: {pastSimple: {$1Sg: 'ins', $1Pl: 'înmes', $2Sg: 'ins', $2Pl: 'întes', $3Sg: 'int', $3Pl: 'inrent'}},
        eter: {present: {$1Sg: 'ette', $2Sg: 'ettes', $3Sg: 'ette', $3Pl: 'ettent'}},
        ger: {
            present: {$1Pl: 'geons'},
            imperfect: {$1Sg: 'geais', $2Sg: 'geais', $3Sg: 'geait', $3Pl: 'geaient'},
            pastSimple: {$1Sg: 'geai', $1Pl: 'geâmes', $2Sg: 'geas', $2Pl: 'geâtes', $3Sg: 'gea'}},
        yer: {present: {$1Sg: 'ie', $2Sg: 'ies', $3Sg: 'ie', $3Pl: 'ient'}},
    },

    conjugate: function(inf, person, tense) {

        let stems = {}

        // check if the verb is already in the irregs object

        if (checkIrregs()) return checkIrregs();
        if (checkFrags()) return checkFrags();
        //if (checkIrregularStemPattern()) return checkIrregularStemPattern();
        get$Prefix();
        form$InfStem();

        // check the tense and switch to the appropriate function
        switch (tense) {
            case 'present' : form$1SgPresStem(); form$1PlPresStem(); form$3PlPresStem(); return conjugatePresent();
            case 'imperfect': form$1PlPresStem(); return conjugateImperfect();
            case 'compoundPast': form$PastPart(); get$Aux(); return conjugateCompoundPast();
            case 'pastSimple': form$Pret(); return conjugatePreterit();
            case 'pluperfect': form$PastPart(); get$Aux(); return conjugatePluperfect();
            case 'anteriorPast': form$PastPart(); get$Aux(); return conjugateAnteriorPast();
            case 'future': form$1SgFutStem(); return conjugateFuture();
            case 'futureAnterior': form$PastPart(); get$Aux(); return conjugateFutureAnterior();
        }

        function checkIrregs() {
            if (fr.irregs[inf]) if (fr.irregs[inf][tense]) if (fr.irregs[inf][tense][person]) {return fr.irregs[inf][tense][person]}
        }

        function checkFrags() {
            for (f in fr.frags) {
                if (inf.endsWith(f)) {
                    if (fr.frags[f][tense]) if (fr.frags[f][tense][person]) {
                        return inf.substring(0, inf.length - f.length) + fr.frags[f][tense][person];
                    }
                }
            }
        }

        function checkLibs(stem, numb, func) {

            // try to see if the verb exists in the library already.
            // if it does, use that verb's requisite entry.
            // if it does, but the verb doesn't have the required entry, use the build function.
            // if it doesn't, and the compiler throws an error because of that, use the build function.

            try {
                if (fr.verbs[inf][stem]) {
                    stems[stem] =  stems.$Prefix + (fr.verbs[inf][stem].substring(0, fr.verbs[inf][stem].length - numb))
                } else {
                    try {
                        if (fr.irregPatterns[inf][stem]) {
                            stems[stem] = stems.$Prefix + (fr.irregPatterns[inf][stem].substring(0, fr.irregPatterns[inf][stem].length - numb))
                        } else {stems[stem] = func()}
                    }
                    catch(error) {
                        stems[stem] = func()
                    }
                }
            }
            catch(error) {
                stems[stem] = func()
            }
        }

        function get$Prefix() {
            stems.$Prefix = ''
            for (v in fr.irregPatterns) {
                if (inf.endsWith(v)) {
                    stems.$Prefix = inf.substring(0, inf.length - v.length);
                    inf = v;
                    break;
                }
                
            }
        }

        function form$InfStem() {
            stems.$InfStem = stems.$Prefix + inf.substring(0, inf.length - 2)
        }

        function form$1SgPresStem() {

            checkLibs('$1SgPres', 1, build)

            function build() {
                switch (true) {
                    case /é[^AEIOUaeiou]{1,2}er$/.test(inf):
                        return stems.$InfStem.replace('é', 'è');

                    case /e[^AEIOUaeiou]{1,2}er$/.test(inf):
                        return stems.$InfStem.replace(/(e)(?!.*\1)/, 'è');

                    case /ir$/.test(inf):
                        return stems.$InfStem + 'i';

                    case /aindre$/.test(inf):
                    case /eindre$/.test(inf): 
                    case /oindre$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 1);

                    case /ttre$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 1);

                    case /aître$/.test(inf):
                        if (person === '$3Sg') {
                            return stems.$InfStem.substring(0, stems.$InfStem.length - 1);
                        } else return stems.$InfStem.substring(0, stems.$InfStem.length - 2) + 'i';

                    default:
                        return stems.$InfStem;
                }
            }
        }

        function form$1PlPresStem() {

            checkLibs('$1PlPres', 3, build)

            function build() {
                switch (true) {
                    case /ir$/.test(inf):
                        return stems.$InfStem + 'iss';

                    case /uire$/.test(inf): 
                    case /dire$/.test(inf): 
                    case /fire$/.test(inf): 
                    case /lire$/.test(inf):
                        return stems.$InfStem + 's';

                    case /crire$/.test(inf):
                        return stems.$InfStem + 'v';

                    case /aindre$/.test(inf):
                    case /eindre$/.test(inf): 
                    case /oindre$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 2) + 'gn';

                    case /prendre$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 1);

                    case /aître$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 2) + 'iss';

                    default:
                        return stems.$InfStem;
                }
            }
        }

        function form$3PlPresStem() {

            checkLibs('$3PlPres', 3, build)

            function build() {
                switch (true) {
                    // é_er --> è_ent
                    case /é[^AEIOUaeiou]{1,2}er$/.test(inf):
                        return stems.$InfStem.replace('é', 'è')
                    // e_er --> è_ent
                    case /e[^AEIOUaeiou]{1,2}er$/.test(inf):
                        if (tense === 'pastSimple') return stems.$InfStem
                        return stems.$InfStem.replace(/(e)(?!.*\1)/, 'è')

                    case /ir$/.test(inf):
                        return stems.$InfStem + 'iss';

                    case /uire$/.test(inf): 
                    case /dire$/.test(inf): 
                    case /fire$/.test(inf): 
                    case /lire$/.test(inf):
                        return stems.$InfStem + 's';

                    case /crire$/.test(inf):
                        return stems.$InfStem + 'v';

                    case /aindre$/.test(inf):
                    case /eindre$/.test(inf): 
                    case /oindre$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 2) + 'gn';

                    case /prendre$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 1);

                    case /aître$/.test(inf):
                        return stems.$InfStem.substring(0, stems.$InfStem.length - 2) + 'iss';

                    default: return stems.$InfStem;
                }
            }
        }

        function form$1SgFutStem() {

            checkLibs('$1SgFut', 2, build)

            function build() {
                switch (true) {
                    // é_er --> è_ent
                    case /é[^AEIOUaeiou]{1,2}er$/.test(inf):
                        return stems.$InfStem.replace('é', 'è')
                    // e_er --> è_ent
                    case /e[^AEIOUaeiou]{1,2}er$/.test(inf):
                        if (tense === 'pastSimple') return stems.$InfStem
                        return stems.$InfStem.replace(/(e)(?!.*\1)/, 'è')
                    case /re$/.test(inf): return inf.substring(0, inf.length - 1);
                    default: return inf;
                }
            }
        }

        function form$PastPart() {

            checkLibs('$PastPart', 0, build)

            function build() {
                switch (true) {
                    case /mettre$/.test(inf):
                    case /prendre$/.test(inf): return inf.substring(0, inf.length - 5) + 'is';
                    case /er$/.test(inf): return stems.$InfStem + 'é';
                    case /ir$/.test(inf): return stems.$InfStem + 'i';
                    case /re$/.test(inf): return stems.$InfStem + 'u';
                }
            }
        }

        function get$Aux() {

            checkLibs('$Aux', 0, build)

            function build() {
                return stems.$Aux = 'avoir'
            }
        }

        function form$Pret() {

            checkLibs('$1SgPret', 1, build)

            function build() {
                switch (true) {
                    case /mettre$/.test(inf):
                    case /prendre$/.test(inf):
                        return inf.substring(0, inf.length - 5);

                    default:
                        form$3PlPresStem();
                        return stems.$3PlPres;
                }
            }
        }

        function conjugatePresent() {

            switch (true) {
                case /er$/.test(inf) : 
                case /llir$/.test(inf) : 
                case /frir$/.test(inf): 
                case /vrir$/.test(inf): return er();
                case /ir$/.test(inf) : return irre();
                case /re$/.test(inf) : return testRE();
            }

            function er() {
                switch (person) {
                    case '$1Sg' : return stems.$1SgPres + 'e';
                    case '$2Sg' : return stems.$1SgPres + 'es';
                    case '$3Sg' : return stems.$1SgPres + 'e';
                    case '$1Pl' : return stems.$1PlPres + 'ons';
                    case '$2Pl' : return stems.$1PlPres + 'ez';
                    case '$3Pl' : return stems.$3PlPres + 'ent';
                }
            }

            function irre() {
                switch (person) {
                    case '$1Sg' : 
                    case '$2Sg' : return stems.$1SgPres + 's';
                    case '$3Sg' : return stems.$1SgPres;
                    case '$1Pl' : return stems.$1PlPres + 'ons';
                    case '$2Pl' : return stems.$1PlPres + 'ez';
                    case '$3Pl' : return stems.$3PlPres + 'ent';
                }
            }

            function testRE() {

                switch (true) {
                    case /rompre$/.test(inf):
                    case /uire$/.test(inf): 
                    case /dire$/.test(inf): 
                    case /fire$/.test(inf): 
                    case /lire$/.test(inf):
                    case /crire$/.test(inf):
                    case /aindre$/.test(inf):
                    case /eindre$/.test(inf): 
                    case /oindre$/.test(inf):
                    case /aître$/.test(inf): 
                        if (person === '$3Sg') {
                            return stems.$InfStem + 't';
                        } else return irre();
                    default: return irre();
                }
            }
        }

        function conjugateImperfect() {

            switch (person) {
                case '$1Sg' : return stems.$1PlPres + 'ais';
                case '$2Sg' : return stems.$1PlPres + 'ait';
                case '$3Sg' : return stems.$1PlPres + 'ait';
                case '$1Pl' : return stems.$1PlPres + 'ions';
                case '$2Pl' : return stems.$1PlPres + 'iez';
                case '$3Pl' : return stems.$1PlPres + 'ient';
            }
        }

        function conjugateCompoundPast() {

            return fr.conjugate(stems.$Aux, person, 'present') + ' ' + stems.$PastPart;

        }

        function conjugatePreterit() {

            switch (inf.slice(-2)) {
                case 'er' : return er();
                case 'ir' : 
                case 're' : return ir();
            }

            function er() {
                switch (person) {
                    case '$1Sg' : return stems.$1SgPret + 'ai';
                    case '$2Sg' : return stems.$1SgPret + 'as';
                    case '$3Sg' : return stems.$1SgPret + 'a';
                    case '$1Pl' : return stems.$1SgPret + 'âmes';
                    case '$2Pl' : return stems.$1SgPret + 'âtes';
                    case '$3Pl' : return stems.$1SgPret + 'èrent';
                }
            }

            function ir() {
                switch (person) {
                    case '$1Sg' : return stems.$1SgPret + 'is';
                    case '$2Sg' : return stems.$1SgPret + 'is';
                    case '$3Sg' : return stems.$1SgPret + 'it';
                    case '$1Pl' : return stems.$1SgPret + 'îmes';
                    case '$2Pl' : return stems.$1SgPret + 'îtes';
                    case '$3Pl' : return stems.$1SgPret + 'irent';
                }
            }
        }

        function conjugatePluperfect() {

            return fr.conjugate(stems.$Aux, person, 'imperfect') + ' ' + stems.$PastPart;

        }

        function conjugateAnteriorPast() {

            return fr.conjugate(stems.$Aux, person, 'pastSimple') + ' ' + stems.$PastPart;

        }

        function conjugateFuture() {

            switch (person) {
                case '$1Sg' : return stems.$1SgFut + 'ai';
                case '$2Sg' : return stems.$1SgFut + 'as';
                case '$3Sg' : return stems.$1SgFut + 'a';
                case '$1Pl' : return stems.$1SgFut + 'ons';
                case '$2Pl' : return stems.$1SgFut + 'ez';
                case '$3Pl' : return stems.$1SgFut + 'ont';
            }
        }

        function conjugateFutureAnterior() {

            return fr.conjugate(stems.$Aux, person, 'future') + ' ' + stems.$PastPart;

        }
    },

    conjugates: {
    },

    dissalloweds: [],

    // get random verbs, tenses, persons, and corresponding pronouns.

    getRandomVerb: function() {
        return Object.keys(fr.verbs)[Math.floor(Math.random() * Object.keys(fr.verbs).length)]
    },

    getRandomTense: function() {
        rand = 1 + Math.floor(Math.random() * 14)
        for (let t in fr.tenses) {
            if (fr.tenses[t][inWords(rand)] != undefined) return [t, inWords(rand)]
        }
    },

    getRandomPerson: function() {
        return Object.keys(fr.persons)[Math.floor(Math.random() * Object.keys(fr.persons).length)]
    },

    getPronoun: function(person) {
        if (fr.persons[person][0] === undefined) {
            return Object.values(fr.persons[person])[Math.floor(Math.random() * Object.keys(fr.persons[person]).length)]
        } else {
            return fr.persons[person]
        }
    },
}