export default [
  {
    id: 1,
    sentence:
      '¿Cuál de los siguientes NO es un tipo de datos primitivo en JavaScript?',
    options: [
      { answer: 'Object', isCorrect: true },
      { answer: 'Number', isCorrect: false },
      { answer: 'Boolean', isCorrect: false },
      { answer: 'String', isCorrect: false },
    ],
  },
  {
    id: 2,
    sentence:
      "¿Cuál de las siguientes declaraciones es cierta sobre 'let' en JavaScript?",
    options: [
      { answer: "'let' tiene ámbito de bloque", isCorrect: true },
      { answer: "'let' tiene ámbito global", isCorrect: false },
      {
        answer: "'let' solo puede declarar variables numéricas",
        isCorrect: false,
      },
      { answer: "'let' es obsoleto en JavaScript", isCorrect: false },
    ],
  },
  {
    id: 3,
    sentence:
      "¿Cuál es la salida de este código?\n```javascript\nconsole.log(2 + '2' - 1);\n```",
    options: [
      { answer: '21', isCorrect: false },
      { answer: '3', isCorrect: true },
      { answer: '22', isCorrect: false },
      { answer: 'NaN', isCorrect: false },
    ],
  },
  {
    id: 4,
    sentence:
      '¿Cuál de las siguientes NO es una forma de declarar una función en JavaScript?',
    options: [
      { answer: 'function myFunction() {}', isCorrect: false },
      { answer: 'let myFunction = function() {};', isCorrect: false },
      { answer: 'myFunction: () => {}', isCorrect: true },
      { answer: 'const myFunction = () => {}', isCorrect: false },
    ],
  },
  {
    id: 5,
    sentence:
      "¿Cuál de las siguientes declaraciones es verdadera sobre 'NaN' en JavaScript?",
    options: [
      { answer: "'NaN' significa 'Not a Number'", isCorrect: true },
      { answer: "'NaN' es igual a cero", isCorrect: false },
      { answer: "'NaN' es igual a infinito", isCorrect: false },
      {
        answer: "'NaN' es una abreviatura de 'Null and None'",
        isCorrect: false,
      },
    ],
  },
];
