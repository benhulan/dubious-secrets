var capitalize = function() {
	// optional handle the case of clicking the button without entering text
	// if (document.getElementById("input").value === "") { var myString = "Chelsea Clinton";}

	var myString = document.getElementById("input").value;
	var result = myString.toUpperCase();

	// to validate full form do something like this after mystring.toUpperCase():
	// var x=result;
	// if (x==null || x<"A" || x>"Z")
	//   {
	//   alert("Illegal Character");
	//   return false;
	//   }
	// }

	// find the character after the space = first of last
	if (result)
	for (var i=0;  i<result.length; i++) {
		if (result[i] === ' ') {
			var firstOfLast = result[i+1];
		}
	}
	var firstOfFirst = result.slice(0,1);
	var lastOfLast = result.slice(result.length-1,result.length);

	// currently validates only the three letters that make the nickname
	if (data1[firstOfFirst] && data2[firstOfLast] && data3[lastOfLast]) {
		//create nickname
		insultGenerator(firstOfFirst, firstOfLast, lastOfLast);
	}
	else {
		alert('Illegal Character');
	}
};

// option to remove click from markup
// var clickListener = document.getElementById('caps').on('click', capitalize());

var insultGenerator = function(key1, key2, key3) {
	$('p').html("Your new name is <strong>" + data1[key1]  +" Mc" + data2[key2] + data3[key3] + '!</strong>');
};

// Names from "Captain Underpants and the Perilous Plot of Professor Poopypants" by Dav Pilkey

var data1 = {
	'A': 'Stinky',
	'B': 'Lumpy',
	'C': 'Buttercup',
	'D': 'Gidget',
	'E': 'Crusty',
	'F': 'Greasy',
	'G': 'Fluffy',
	'H': 'Cheeseball',
	'I': 'Chim-Chim',
	'J': 'Poopsie',
	'K': 'Flunky',
	'L': 'Booger',
	'M': 'Pinky',
	'N': 'Zippy',
	'O': 'Goober',
	'P': 'Doofus',
	'Q': 'Slimy',
	'R': 'Loopy',
	'S': 'Snotty',
	'T': 'Falafel',
	'U': 'Dorky',
	'V': 'Squeezit',
	'W': 'Oprah',
	'X': 'Skipper',
	'Y': 'Dinky',
	'Z': 'Zsa-Zsa',
	' ': 'Stuffy'
};

var data2 = {
	'A': 'Diaper',
	'B': 'Toilet',
	'C': 'Giggle',
	'D': 'Bubble',
	'E': 'Girdle',
	'F': 'Barf',
	'G': 'Lizard',
	'H': 'Waffle',
	'I': 'Cootie',
	'J': 'Monkey',
	'K': 'Potty',
	'L': 'Liver',
	'M': 'Banana',
	'N': 'Rhino',
	'O': 'Burger',
	'P': 'Hamster',
	'Q': 'Toad',
	'R': 'Gizzard',
	'S': 'Pizza',
	'T': 'Gerbil',
	'U': 'Chicken',
	'V': 'Pickle',
	'W': 'Chuckle',
	'X': 'Tofu',
	'Y': 'Gorilla',
	'Z': 'Stinker',
	' ': 'Cheesy'
};

var data3 = {
	'A': 'head',
	'B': 'mouth',
	'C': 'face',
	'D': 'nose',
	'E': 'tush',
	'F': 'breath',
	'G': 'pants',
	'H': 'shorts',
	'I': 'lips',
	'J': 'honker',
	'K': 'butt',
	'L': 'brain',
	'M': 'tushie',
	'N': 'chunks',
	'O': 'hiney',
	'P': 'biscuits',
	'Q': 'toes',
	'R': 'buns',
	'S': 'fanny',
	'T': 'sniffer',
	'U': 'sprinkels',
	'V': 'kisser',
	'W': 'squirt',
	'X': 'humperdink',
	'Y': 'brains',
	'Z': 'juice',
	' ': 'goose'
};

