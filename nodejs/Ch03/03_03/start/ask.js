var questions=[
'question a', 'question b', 'question c'];

var answers=[];

function ask(i){
	process.stdout.write(questions[i] + ': ');
	//process.stdout.write('Hello world \n\n');
}
process.stdin.on('data', function(data){
	//process.stdout.write('\n'+data.toString().trim() + '\n');
	answers.push(data.toString().trim());
	if(answers.length<questions.length){
		console.log('next to question', answers.length);
		ask(answers.length);
	}
	else{
		process.exit();
	}
});

process.on('exit', function(){
	console.log('All answers: ', answers);
	process.stdout.write('\n'+'Exiting');
});

ask(0);
console.log('???');
process.stdin.on('data', (data)=>console.log('Receive data', data.toString()));