function getWords(wordsString) {
 	return wordsString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getCharacters(wordsString){
	return wordsString.toLowerCase().split(" ").filter(Boolean).sort();
}

function wordCount(wordsArray){
	return wordsArray.length;
}

function sentenceCount(wordsString){
	var lastCharacter = wordsString.slice(-1);
	if(lastCharacter === '.'|| lastCharacter === '!' || lastCharacter === '?'){
		return wordsString.split(/[.!?]+/).length - 1;
	} else{
		return wordsString.split(/[.!?]+/).length;
	}
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

// rendering to DOM functions

function renderWordCount(wordsString){
	var wordsArray = getWords(wordsString);
	var wordCountNumber = wordCount(wordsArray);
	$('.js-wordCount').html(wordCountNumber);
}

function renderUniqueWordCount(wordsString){
	var wordsArray = getWords(wordsString);
	var wordsObject =  arrayToObject(wordsArray);
	var uniqueWordCountNumber = UniqueWordCount(wordsObject);
	$('.js-uniqueWordCount').html(uniqueWordCountNumber);
}

function renderAverageWordLength(wordsString){
	var wordsCharacterArray = getCharacters(wordsString);
	var averageWordLengthNumber = averageWordLength(wordsCharacterArray);
	$('.js-averageWordLength').html(averageWordLengthNumber);
}

function renderAverageSentenceLength(wordsString){
	var wordsArray = getWords(wordsString);
	var wordCountNumber = wordCount(wordsArray);
	var sentenceCountNumber = sentenceCount(wordsString);
	var AverageSentenceLengthNumber = wordCountNumber / sentenceCountNumber;
	$('.js-averageSentenceLength').html(AverageSentenceLengthNumber);
}


// Event listeners
$(document).ready(function(){
	$('#js-form').submit(function(event){
		event.preventDefault();
		var wordsString = $('#user-text').val();
		renderWordCount(wordsString);
		renderUniqueWordCount(wordsString);
		renderAverageWordLength(wordsString);
		renderAverageSentenceLength(wordsString);
		$('dl').removeClass('hidden');
	})	
})

