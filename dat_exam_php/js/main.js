var  student = document.querySelector('span')
var msg = student.innerHTML;


/*listt of languages is probably not loaded, wait for it
if(window.speechSynthesis.getVoices().length == 0) {
	window.speechSynthesis.addEventListener('voiceschanged', function() {
		textToSpeech('bhargav');
	});
}
else {
	// languages list available, no need to wait
	textToSpeech(msg)
}
*/
function textToSpeech(msg) {
	// get all voices that browser offers
	var available_voices = window.speechSynthesis.getVoices();

	// this will hold an english voice
	var english_voice = '';

	// find voice by language locale "en-US"
	// if not then select the first voice
	for(var i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'en-US') {
			english_voice = available_voices[i];
			break;
		}
	}
	if(english_voice === '')
		english_voice = available_voices[0];

	// new SpeechSynthesisUtterance object
	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = msg;
	utter.voice = english_voice;

	/* event after text has been spoken
	utter.onend = function() {
		alert('Speech has finished');
	}
*/
	// speak
	window.speechSynthesis.speak(utter);
}
