const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( tutorial => {
    let words = tutorial.split(' ') //splits each title into individual words
    let tcWords = 
      words.map( word => word.charAt(0).toUpperCase() + word.slice(1)) //finds character with index 0. makes that uppercase
    let tcSentence = tcWords.join(' ')                              // the .slice method takes a start arg and optional end arg. so the "+ word.slice(1) means add the upper case char to the rest of the word that starts at 1 index(second letter) and isnt given an end arg so just goes to the end of the word
    return tcSentence
  })


  }

