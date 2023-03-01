console.log('lets play a game how much you know me')
var readlineSync=require('readline-sync')
var score=0
var userUttar=readlineSync.question('whats your name?')
console.log('welcome '+userUttar)
function play(question,answer){
  var userUttar=readlineSync.question(question)
  if (userUttar===answer){score=score+1;console.log('correct ','score: '+score)}
  else{console.log('wrong')}
}
play('where do you live?','amethi')
play('what is my nicknae?','chotu')
play('which politician i like most?','modi')
play('best singer?','arijit singh')
play('best quality i have?','honesty')

