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

function titleCased(){
  let a = tutorials.map(function(string){
    let s1 = string.split(" ");
    let s2 = s1.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let s3 = s2.join(" ");
    return s3;
  }
  );
  return a
}
