window.addEventListener('keydown',function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; //若非敲擊指定按鍵則無反應
	audio.currentTime = 0; //讓按鍵可以在音效播放完畢前又replay
	audio.play(); //播放的 function
	key.classList.add('playing');
});

function removeTransition(e){
	if(e.propertyName !== "transform") return;
	this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key')

keys.forEach(function(key){
	key.addEventListener('transitionend', removeTransition)
    })