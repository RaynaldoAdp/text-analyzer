function getInput(){
	$('#js-form').submit(function(event){
		event.preventDefault();
		var textInput = $('#user-text').val();
		alert(textInput);
	});
}

$(document).ready(function() {
	getInput();
});

function getWords(wordsString) {
 	return wordsString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getCharacters(wordsString){
	return wordsString.toLowerCase().split(" ").filter(Boolean).sort();
}

function wordCount(wordsArray){
	return words.length;
}

function arrayToObject(wordsArray){
	var object = {};
	for(i = 0; i < wordsArray.length; i++){
		if([wordsArray[i]] in object){
			object[wordsArray[i]]++;
		}
		else{
			object[wordsArray[i]] = 1;
		}
	}
	return object;
}

function averageWordLength(wordsArray){
	var totalLength = 0;
	for(i = 0; i < wordsArray.length; i++){
		totalLength = totalLength + wordsArray[i].length;
	}
	return totalLength / wordsArray.length;
}

function UniqueWordCount(wordsObject){
	return Object.keys(wordsObject).length;
}
