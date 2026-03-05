export const exercicesData = {
  1: [
    {
      id: "e1",
      title: "Exercice : HTML de base",
      content: "Quel element HTML est utilise pour creer un titre principal ?",
      answers: [
        { id: "a1", text: "<h1>", isCorrect: true },
        { id: "a2", text: "<p>", isCorrect: false },
        { id: "a3", text: "<div>", isCorrect: false },
        { id: "a4", text: "<span>", isCorrect: false },
      ],
    },
    {
      id: "e2",
      title: "Exercice : Liens HTML",
      content: "Quel attribut est utilise pour specifier l'URL d'un lien ?",
      answers: [
        { id: "b1", text: "src", isCorrect: false },
        { id: "b2", text: "href", isCorrect: true },
        { id: "b3", text: "alt", isCorrect: false },
        { id: "b4", text: "title", isCorrect: false },
      ],
    },
    {
      id: "e3",
      title: "Exercice : Images HTML",
      content: "Quel attribut definit la source d'une image ?",
      answers: [
        { id: "c1", text: "src", isCorrect: true },
        { id: "c2", text: "href", isCorrect: false },
        { id: "c3", text: "alt", isCorrect: false },
        { id: "c4", text: "link", isCorrect: false },
      ],
    },
    {
      id: "e4",
      title: "Exercice : Listes HTML",
      content: "Quel element HTML est utilise pour creer une liste non ordonnee ?",
      answers: [
        { id: "d1", text: "<ol>", isCorrect: false },
        { id: "d2", text: "<ul>", isCorrect: true },
        { id: "d3", text: "<li>", isCorrect: false },
        { id: "d4", text: "<dl>", isCorrect: false },
      ],
    },
  ],

  4: [
    {
      id: "g-1",
      title: "Adjectifs qualificatifs - Q1",
      content: "Elle est _____ et intelligente.",
      answers: [
        { id: "g1", text: "beau", isCorrect: false },
        { id: "g2", text: "belle", isCorrect: true },
        { id: "g3", text: "beaux", isCorrect: false },
        { id: "g4", text: "bel", isCorrect: false },
      ],
    },
    {
      id: "g-2",
      title: "Adjectifs qualificatifs - Q2",
      content: "Ces garcons sont _____.",
      answers: [
        { id: "g5", text: "sportif", isCorrect: false },
        { id: "g6", text: "sportive", isCorrect: false },
        { id: "g7", text: "sportifs", isCorrect: true },
        { id: "g8", text: "sportives", isCorrect: false },
      ],
    },
  ],

  5: [
    {
      id: "d-1",
      title: "Demonstratifs - Q1",
      content: "_____ maison est tres grande.",
      answers: [
        { id: "d1", text: "Ce", isCorrect: false },
        { id: "d2", text: "Cet", isCorrect: false },
        { id: "d3", text: "Cette", isCorrect: true },
        { id: "d4", text: "Ces", isCorrect: false },
      ],
    },
    {
      id: "d-2",
      title: "Demonstratifs - Q2",
      content: "_____ arbre est vieux.",
      answers: [
        { id: "d5", text: "Ce", isCorrect: false },
        { id: "d6", text: "Cet", isCorrect: true },
        { id: "d7", text: "Cette", isCorrect: false },
        { id: "d8", text: "Ces", isCorrect: false },
      ],
    },
  ],

  6: [
    {
      id: "p-1",
      title: "Possessifs - Q1",
      content: "C'est _____ cahier.",
      answers: [
        { id: "p1", text: "ma", isCorrect: false },
        { id: "p2", text: "mon", isCorrect: true },
        { id: "p3", text: "mes", isCorrect: false },
        { id: "p4", text: "ta", isCorrect: false },
      ],
    },
    {
      id: "p-2",
      title: "Possessifs - Q2",
      content: "Ce sont _____ chaussures.",
      answers: [
        { id: "p5", text: "mes", isCorrect: true },
        { id: "p6", text: "mon", isCorrect: false },
        { id: "p7", text: "ma", isCorrect: false },
        { id: "p8", text: "son", isCorrect: false },
      ],
    },
  ],

  7: [
    {
      id: "adv-ex-1",
      title: "Exercice 1 - Choisir le bon adverbe",
      type: "mcq",
      questions: [
        {
          id: "adv1-q1",
          prompt: "Il parle _____ en classe.",
          options: ["vite", "demain", "ici", "hier"],
          correctAnswer: "vite",
        },
        {
          id: "adv1-q2",
          prompt: "Nous irons au marche _____.",
          options: ["bien", "demain", "ici", "lentement"],
          correctAnswer: "demain",
        },
        {
          id: "adv1-q3",
          prompt: "Les enfants jouent _____.",
          options: ["ici", "demain", "mal", "hier"],
          correctAnswer: "ici",
        },
        {
          id: "adv1-q4",
          prompt: "Elle ecrit _____.",
          options: ["proprement", "demain", "ici", "hier"],
          correctAnswer: "proprement",
        },
        {
          id: "adv1-q5",
          prompt: "Ils sont arrives _____.",
          options: ["hier", "ici", "vite", "bien"],
          correctAnswer: "hier",
        },
      ],
    },
    {
      id: "adv-ex-2",
      title: "Exercice 2 - Complete avec un adjectif ou un adverbe",
      type: "input",
      questions: [
        {
          id: "adv2-q1",
          prompt: "Ce garcon est tres _____. (adjectif)",
          correctAnswer: "gentil",
        },
        {
          id: "adv2-q2",
          prompt: "Elle chante _____ . (adverbe)",
          correctAnswer: "bien",
        },
        {
          id: "adv2-q3",
          prompt: "La fille est _____ . (adjectif)",
          correctAnswer: "intelligente",
        },
        {
          id: "adv2-q4",
          prompt: "Il court _____ . (adverbe)",
          correctAnswer: "vite",
        },
        {
          id: "adv2-q5",
          prompt: "Nous arrivons _____ . (adverbe de temps)",
          correctAnswer: "demain",
        },
      ],
    },
    {
      id: "adv-ex-3",
      title: "Exercice 3 - 20 questions a completer",
      type: "input",
      questions: [
        { id: "adv3-q1", prompt: "Il parle _____ .", correctAnswer: "doucement" },
        { id: "adv3-q2", prompt: "Nous partons _____ .", correctAnswer: "demain" },
        { id: "adv3-q3", prompt: "Ils habitent _____ .", correctAnswer: "ici" },
        { id: "adv3-q4", prompt: "Elle ecrit _____ .", correctAnswer: "bien" },
        { id: "adv3-q5", prompt: "Le train arrive _____ .", correctAnswer: "maintenant" },
        { id: "adv3-q6", prompt: "Vous marchez _____ .", correctAnswer: "vite" },
        { id: "adv3-q7", prompt: "Je suis ne _____ .", correctAnswer: "hier" },
        { id: "adv3-q8", prompt: "Nous travaillons _____ .", correctAnswer: "serieusement" },
        { id: "adv3-q9", prompt: "Ils jouent _____ .", correctAnswer: "dehors" },
        { id: "adv3-q10", prompt: "Elle parle _____ au professeur.", correctAnswer: "poliment" },
        { id: "adv3-q11", prompt: "Je reviendrai _____ .", correctAnswer: "bientot" },
        { id: "adv3-q12", prompt: "Pose ton sac _____ .", correctAnswer: "ici" },
        { id: "adv3-q13", prompt: "Il mange _____ .", correctAnswer: "lentement" },
        { id: "adv3-q14", prompt: "Nous avons termine _____ .", correctAnswer: "tot" },
        { id: "adv3-q15", prompt: "Elles chantent _____ .", correctAnswer: "magnifiquement" },
        { id: "adv3-q16", prompt: "Je vais te repondre _____ .", correctAnswer: "apres" },
        { id: "adv3-q17", prompt: "Il travaille _____ en equipe.", correctAnswer: "bien" },
        { id: "adv3-q18", prompt: "On se retrouve _____ .", correctAnswer: "la-bas" },
        { id: "adv3-q19", prompt: "Le bus passe _____ .", correctAnswer: "souvent" },
        { id: "adv3-q20", prompt: "Ils ont fini _____ .", correctAnswer: "rapidement" },
      ],
    },
  ],

  8: [
    {
      id: "ph-1",
      title: "Description physique - Q1",
      content: "Ma mere est _____.",
      answers: [
        { id: "ph1", text: "brun", isCorrect: false },
        { id: "ph2", text: "brune", isCorrect: true },
        { id: "ph3", text: "bruns", isCorrect: false },
        { id: "ph4", text: "brunes", isCorrect: false },
      ],
    },
    {
      id: "ph-2",
      title: "Description physique - Q2",
      content: "Mon pere est _____.",
      answers: [
        { id: "ph5", text: "blonde", isCorrect: false },
        { id: "ph6", text: "blond", isCorrect: true },
        { id: "ph7", text: "blondes", isCorrect: false },
        { id: "ph8", text: "blonds", isCorrect: false },
      ],
    },
  ],
};
