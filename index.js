console.log('lets play a game how much you know me')
var readlineSync=require('readline-sync')
var score=0
var userUttar=readlineSync.question('whats your name?')
console.log('welcome '+userUttar)
function play(question,answer){
  var userUttar=readlineSync.question(question)
  if (userUttar===answer){score=score+1;console.log('correct ','score: '+score)}
  else{console.log('wrong')}
  console.log('total score: '+score)
}
//play('where do you live?','amethi')
//play('what is my nickname?','chotu')
//play('which politician i like most?','modi')
//play('best singer?','arijit singh')
//play('best quality i have?','honesty')
var questionOne={question:'where do you live?',
              answer:'amethi'}
var questionTwo={question:'what is my nickname?',
              answer:'chotu'}
var questionThree={question:'which politician i like most?',
              answer:'modi'}
var questionFour={question:'best singer?',
              answer:'arijit singh'}
var questionFive={question:'best quality i have?',
              answer:'honesty'}
var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]
for(var i=0;i<5;i++){
  var currentData=questions[i]
  console.log(play(currentData.question,currentData.answer))
  
  
}

