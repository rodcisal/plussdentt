export const QuizData = [
  {
    number: 1,
    title: "¿Consume usted azúcar en alguna/s de estas comidas?",
    options: [
      {option: "Desayuno", value: 1},
      {option: "Merienda", value: 1},
      {option: "Almuerzo", value: 1},
      {option: "Once", value: 1},
      {option: "Comida", value: 1}
    ],
    type: "checkbox",
    max: 3,
    factors: {
      "caries": 0.1,
      "periodoncia": 0.05
    }
  },
  {
    number: 2,
    title: "¿Cuántas veces a día se cepilla usted los dientes?",
    type: "multiple",
    options: [
      {option: "Nunca", value: 3},
      {option: "1 a 2", value: 2},
      {option: "3 o más", value: 1}
    ],
    factors: {
      "caries": 0.1,
      "periodoncia": 0.05
    }
  },
  {
    number: 3,
    title: "Al cepillarse los dientes ¿Usa usted la seda dental?",
    type: "multiple",
    options: [
      {option: "Nunca", value: 3},
      {option: "A veces", value: 2},
      {option: "Diariamente", value: 1}
    ],
    factors: {
      "caries": 0.1,
      "periodoncia": 0.05
    }
  },
  {
    number: 4,
    title: "¿Cada cuanto tiempo se realiza Limpiezas Dentales?",
    type: "multiple",
    options: [
      {option: "Nunca", value: 3},
      {option: "1 vez al año", value: 2},
      {option: "Cada 6 meses", value: 1}
    ],
    factors: {
      "periodoncia": 0.05
    }
  },
  {
    number: 5,
    title: "¿Sabe cuantas tapaduras posee usted en la actualidad?",
    type: "multiple",
    options: [
      {option: "Mas de 3", value: 3},
      {option: "1 a 3", value: 2},
      {option: "Ninguna", value: 1}
    ],
    factors: {
      "caries": 0.1
    }
  },
  {
    number: 6,
    title: "¿Siente o sentido dolor en sus dientes últimamente?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 2}
    ],
    factors: {
      "caries": 0.1
    }
  },
  {
    number: 7,
    title: "¿Tienes usted los dientes chuecos?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "caries": 0.1,
      "periodoncia": 0.05,
      "ortodoncia": 0.5,
      "bruxismo": 0.1
    }
  },
  {
    number: 8,
    title: "¿Tiene usted los dientes amarillos o manchados?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "caries": 0.1,
      "blanqueamiento": 0.5,
    }
  },
  {
    number: 9,
    title: "¿Cuándo fue la última vez que se realizó un control con un dentista?",
    type: "multiple",
    options: [
      {option: "Menos de 6 meses", value: 1},
      {option: "Entre 6 meses y 1 año", value: 2},
      {option: "Mas de un año", value: 3}
    ],
    factors: {
      "caries": 0.1,
      "periodoncia": 0.05
    }
  },
  {
    number: 10,
    title: "¿Tiene usted sensación de boca seca a menudo?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "caries": 0.05,
    }
  },
  {
    number: 11,
    title: "¿Ha perdido piezas dentarias?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "ortodoncia": 0.1,
      "implantes-protesis": 1
    }
  },
  {
    number: 12,
    title: "Si contestó que si en la pregunta anterior ¿Conoce usted la razón porqué las perdió?",
    type: "checkbox",
    options: [
      {option: "Caries", value: 3, default: 1, factors: {"caries": 0.1 }},
      {option: "Periodoncia", value: 3, default: 1, factors: { "periodoncia" : 0.1 }}
    ]
  },
  {
    number: 13,
    title: "¿Tiene usted los dientes sueltos?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "periodoncia": 0.1,
      "bruxismo": 0.1
    }
  },
  {
    number: 14,
    title: "¿Le sangran frecuentemente las encías?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "periodoncia": 0.1,
    }
  },
  {
    number: 15,
    title: "¿Ha notado usted un alargamiento de sus dientes?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "periodoncia": 0.1,
    }
  },
  {
    number: 16,
    title: "¿Ha notado usted un desgaste en sus dientes?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "ortodoncia": 0.1,
      "bruxismo": 0.5
    }
  },
  {
    number: 17,
    title: "¿Ha notado que se le han movido los dientes?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "periodoncia": 0.05
    }
  },
  {
    number: 18,
    title: "¿Cuánto Fuma al día?",
    type: "multiple",
    options: [
      {option: "Niguno", value: 1},
      {option: "Menos de 10", value: 2},
      {option: "Mas de 10", value: 3}
    ],
    factors: {
      "periodoncia": 0.05
    }
  },
  {
    number: 19,
    title: "¿Posee alguna de las siguientes condiciones?",
    options: [
      {option: "Diabetes", value: 3, default: 1, factors: { "periodoncia" : 0.05 }},
      {option: "Pubertad", value: 3, default: 1, factors: { "caries": 0.03, "periodoncia": 0.03 } },
      {option: "Embarazo", value: 3, default: 1, factors: { "caries": 0.03, "periodoncia": 0.05 } },
      {option: "Menopausia", value: 3, default: 1, factors: { "periodoncia": 0.03 } }
    ],
    type: "checkbox"
  },
  {
    number: 20,
    title: "¿En su familia, hay historial de pérdida de piezas dentarias?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "periodoncia": 0.05
    }
  },
  {
    number: 21,
    title: "¿Sufre usted de mal aliento?",
    type: "multiple",
    options: [
      {option: "Si", value: 3},
      {option: "No", value: 1}
    ],
    factors: {
      "caries": 0.05,
      "periodoncia": 0.05
    }
  },
  {
    number: 22,
    title: "Luego de dormir ¿Amanece con dolor?",
    options: [
      {option: "Cuello", value: 3, default: 1, factors: { "ortodoncia": 0.1, "bruxismo": 0.1 } },
      {option: "Cara", value: 3, default: 1, factors: { "ortodoncia": 0.1, "bruxismo": 0.1 } },
      {option: "Cabeza", value: 3, default: 1, factors: { "ortodoncia": 0.1, "bruxismo": 0.1 } }
    ],
    type: "checkbox"
  },
  {
    number: 23,
    title: "¿Siente usted que tiene una mala mordida?",
    type: "multiple",
    options: [
      {option: "Si", value: 0},
      {option: "No", value: 0}
    ]
  }
]
