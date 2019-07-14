window.addEventListener('load',init);



let time=6;
let score=0;
let isplaying=false;

const showtime=document.getElementById('time')
const showscore=document.getElementById('score')
const currentword=document.getElementById('currentword')
const userinput=document.getElementById('userinput')
const message=document.getElementById('message')
const seconds=document.getElementById('seconds')

const words=["consider","minute","accord","evident","practice","intend","concern","commit","issue","approach","establish","conduct","utter","engage","obtain","scarce","policy","straight","stock","apparent","property","fancy","concept","court","appoint","passage","instance","commission","circumstances","constitute","campaign","convention"];

function init () {
	console.log("init")
	setInterval(countdown,1000);
	setInterval(status,50);

	// body...
    userinput.addEventListener('input',match);
	showWord(words);
	

}



	


function showWord(words){
	const ran=Math.floor(Math.random()*(words.length));
	currentword.innerHTML=words[ran];
}


function countdown(){
	if (time>0){
		time--;
	}else if(time===0){
		isplaying=false;
	}

	showtime.innerHTML=time;
}

function status(){
	if(!isplaying && time===0){
		message.innerHTML="Game Over!!!";
		score=0;

	}
	showscore.innerHTML=score;
}

function match(){
	if (userinput.value===currentword.innerHTML){
		isplaying=true;
		message.innerHTML="Correct!!!";
		score++;
		time=6;
		showWord(words);
		
		userinput.value='';

	}
	showscore.innerHTML=score;
}