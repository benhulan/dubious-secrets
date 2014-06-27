var capitalize = function() {
	// optional handle the case of clicking the button without entering text
	// if (document.getElementById("input").value === "") { var myString = "Chelsea Clinton";}

	var myString = document.getElementById("input").value;
	var result = myString.toUpperCase();

	// to validate full form do something like this (does not work as-is)...
	// var x=result;
	// if (x===null || x<"A" || x>"Z")
	//   {
	//   $('p').html("Please enter Firstname \[space\] Lastname");
	//   return false;
	//   }

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
		$('p').html("Please enter Firstname \[space\] Lastname");
	}
};

var insultGenerator = function(key1, key2, key3) {
	$("p").html("Your new name is <strong>" + data1[key1]  +" Mc" + data2[key2] + data3[key3] + "!</strong>");
};
var data1 = {
	"A": "Antsy",
	"B": "Bobo",
	"C": "Chester",
	"D": "Dooder",
	"E": "Egghead",
	"F": "Fluffy",
	"G": "G",
	"H": "Harpo",
	"I": "Ichabod",
	"J": "Jerky",
	"K": "Kipper",
	"L": "Limpy",
	"M": "Moe",
	"N": "Napster",
	"O": "Ozone",
	"P": "Piggy",
	"Q": "Curly",
	"R": "Rusty",
	"S": "Slappy",
	"T": "Tootsie",
	"U": "Ugly",
	"V": "Vixen",
	"W": "Whoopsie",
	"X": "Xylophone",
	"Y": "Yappy",
	"Z": "Zeppo"
};
var data2 = {
	"A": "Antler",
	"B": "Buggy",
	"C": "Cheese",
	"D": "Dingle",
	"E": "Egg",
	"F": "Fart",
	"G": "Goober",
	"H": "Hippo",
	"I": "Icky",
	"J": "Jelly",
	"K": "Kissy",
	"L": "Lazy",
	"M": "Monkey",
	"N": "Nut",
	"O": "Odor",
	"P": "Pickle",
	"Q": "Quack",
	"R": "Rascal",
	"S": "Spanky",
	"T": "Turkey",
	"U": "Ugly",
	"V": "Vixen",
	"W": "Wombat",
	"X": "Freckle",
	"Y": "Yo-yo",
	"Z": "Zippy"
};
var data3 = {
	"A": "brains",
	"B": "berry",
	"C": "paste",
	"D": "booty",
	"E": "face",
	"F": "hair",
	"G": "burger",
	"H": "breath",
	"I": "nose",
	"J": "licker",
	"K": "kicker",
	"L": "spanker",
	"M": "bottom",
	"N": "bucket",
	"O": "whiz",
	"P": "baster",
	"Q": "tooter",
	"R": "balls",
	"S": "toaster",
	"T": "sniffer",
	"U": "spray",
	"V": "smacker",
	"W": "lips",
	"X": "bear",
	"Y": "zone",
	"Z": "stank"
};

$("button").click(function() {
	if(this.id !== "smacknames" && this.id == "underpants"){
		$("#instructions").html("<strong>Professor Poopypants</strong> wants you to type your first and last name, Bub.");

		// Names from "Captain Underpants and the Perilous Plot of Professor Poopypants" by Dav Pilkey
		insultGenerator = function(key1, key2, key3) {
			$('p').html("Your new name is <strong>" + data1[key1]  + data2[key2] + data3[key3] + '!</strong>');
		};

		data1 = {
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
			'Z': 'Zsa-Zsa'
		};

		data2 = {
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
			'Z': 'Stinker'
		};

		data3 = {
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
			'Z': 'juice'
		};

	}else if(this.id !== "smacknames" && this.id == "fakespeare"){
		$("#instructions").html("Type thy name to receivest thou thine <strong>Fakespearean</strong> nom de plum.");

		// Fake Shakespearean-sounding nickname data
		insultGenerator = function(key1, key2, key3) {
			$('p').html("Thy epitaph shall read: <strong>Thou " + data1[key1]  + data2[key2] + data3[key3] + '!</strong>');
		};

		data1 = {
			'A': 'Churlish',
			'B': 'Beslubbering',
			'C': 'Clay-brained',
			'D': 'Fusty',
			'E': 'Stale',
			'F': 'Frothy',
			'G': 'Beemish',
			'H': 'Fool-born',
			'I': 'Impudent',
			'J': 'Malmsey-nosed',
			'K': 'Stinking',
			'L': 'Lumpish',
			'M': 'Whining',
			'N': 'Beastliest',
			'O': 'Wayward',
			'P': 'Pestilent',
			'Q': 'Purblind',
			'R': 'Rank',
			'S': 'Swarthy',
			'T': 'Tedious',
			'U': 'Sinful',
			'V': 'Villainous',
			'W': 'Whoreson',
			'X': 'Whimpled',
			'Y': 'Vain',
			'Z': 'Wrathful'
		};

		data2 = {
			'A': 'Reeking',
			'B': 'Spur-galled',
			'C': 'Unwashed',
			'D': 'Dunnest',
			'E': 'Tottering',
			'F': 'Brainsickly',
			'G': 'Poisonous',
			'H': 'Lily-livered',
			'I': 'Idle-headed',
			'J': 'Brain-dead',
			'K': 'Fishified',
			'L': 'Dissembling',
			'M': 'Malecontent',
			'N': 'Bunch-backed',
			'O': 'Onion-eyed',
			'P': 'Worm-eaten',
			'Q': 'Fen-sucked',
			'R': 'Rump-fed',
			'S': 'Sinful',
			'T': 'Shard-born',
			'U': 'Treacherous',
			'V': 'Qualling',
			'W': 'Wool-sack',
			'X': 'Flesh mongering',
			'Y': 'Cowardly',
			'Z': 'Belching'
		};

		data3 = {
			'A': ' Infection',
			'B': ' Baggage',
			'C': ' Capon',
			'D': ' Maggot',
			'E': ' Canker-blossom',
			'F': ' Fool',
			'G': ' Gudgeon',
			'H': ' Harpy',
			'I': ' Gnat',
			'J': ' Jolt-head',
			'K': ' Rascal',
			'L': ' Minnow',
			'M': ' Malt-worm',
			'N': ' Bastard-son',
			'O': ' Pigeon-egg',
			'P': ' Pinpot',
			'Q': ' Butt-shaft',
			'R': ' Hugger-mugger',
			'S': ' Sour-face',
			'T': ' Tallow-catch',
			'U': ' Urchin',
			'V': ' Villain',
			'W': ' Moldwarp',
			'X': ' Wagtail',
			'Y': ' Coward',
			'Z': ' Wretch'
		};
	}else if(this.id == "smacknames"){
		$("#instructions").html("Enter your name to recieve a new <strong>SmackNames</strong> nickname.");

		insultGenerator = function(key1, key2, key3) {
			$("p").html("Your new name is <strong>" + data1[key1]  +" Mc" + data2[key2] + data3[key3] + "!</strong>");
		};

		data1 = {
			"A": "Antsy",
			"B": "Bobo",
			"C": "Chester",
			"D": "Dooder",
			"E": "Egghead",
			"F": "Fluffy",
			"G": "G",
			"H": "Harpo",
			"I": "Ichabod",
			"J": "Jerky",
			"K": "Kipper",
			"L": "Limpy",
			"M": "Moe",
			"N": "Napster",
			"O": "Ozone",
			"P": "Piggy",
			"Q": "Curly",
			"R": "Rusty",
			"S": "Slappy",
			"T": "Tootsie",
			"U": "Ugly",
			"V": "Vixen",
			"W": "Whoopsie",
			"X": "Xylophone",
			"Y": "Yappy",
			"Z": "Zeppo"
		};

		data2 = {
			"A": "Antler",
			"B": "Buggy",
			"C": "Cheese",
			"D": "Dingle",
			"E": "Egg",
			"F": "Fart",
			"G": "Goober",
			"H": "Hippo",
			"I": "Icky",
			"J": "Jelly",
			"K": "Kissy",
			"L": "Lazy",
			"M": "Monkey",
			"N": "Nut",
			"O": "Odor",
			"P": "Pickle",
			"Q": "Quack",
			"R": "Rascal",
			"S": "Spanky",
			"T": "Turkey",
			"U": "Ugly",
			"V": "Vixen",
			"W": "Wombat",
			"X": "Freckle",
			"Y": "Yo-yo",
			"Z": "Zippy"
		};

		data3 = {
			"A": "brains",
			"B": "berry",
			"C": "paste",
			"D": "booty",
			"E": "face",
			"F": "hair",
			"G": "burger",
			"H": "breath",
			"I": "nose",
			"J": "licker",
			"K": "kicker",
			"L": "spanker",
			"M": "bottom",
			"N": "bucket",
			"O": "whiz",
			"P": "baster",
			"Q": "tooter",
			"R": "balls",
			"S": "toaster",
			"T": "sniffer",
			"U": "spray",
			"V": "smacker",
			"W": "lips",
			"X": "bear",
			"Y": "zone",
			"Z": "stank"
		};
	}
});


// option to remove click from markup
// var clickListener = document.getElementById('caps').on('click', capitalize());
