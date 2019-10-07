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

// const titleCased = tutorials.map(function (tutorial) {
//   let tutorials_split = tutorial.split(' ')
//   let capitalized_tutorials = tutorials_split.map(function (tutorial_split) {
//     tutorial_split.charAt(0).toUpperCase() + tutorial_split.slice(1)
//   let response = capitalized_tutorials.join(' ')
//   return response
//   }
// }

// const activatedRobots = robots.map(function (robot) {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}