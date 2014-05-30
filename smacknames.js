// var changeTheme = function() {
// 	add code here to swap var data1, data2, data3 with data from another file
// }

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
		$('p').html("Please enter Firstname \[space\] Lastname");
	}
};

// option to remove click from markup
// var clickListener = document.getElementById('caps').on('click', capitalize());

var insultGenerator = function(key1, key2, key3) {
	$('p').html("Your new name is <strong>" + data1[key1]  +" Mc" + data2[key2] + data3[key3] + '!</strong>');
};

var data1 = {
	'A': 'Antsy',
	'B': 'Bobo',
	'C': 'Chester',
	'D': 'Dooder',
	'E': 'Egghead',
	'F': 'Fluffy',
	'G': 'G',
	'H': 'Harpo',
	'I': 'Ichabod',
	'J': 'Jerky',
	'K': 'Kipper',
	'L': 'Limpy',
	'M': 'Moe',
	'N': 'Napster',
	'O': 'Ozone',
	'P': 'Piggy',
	'Q': 'Curly',
	'R': 'Rusty',
	'S': 'Slappy',
	'T': 'Tootsie',
	'U': 'Ugly',
	'V': 'Vixen',
	'W': 'Whoopsie',
	'X': 'Xylophone',
	'Y': 'Yappy',
	'Z': 'Zeppo',
};

var data2 = {
	'A': 'Antler',
	'B': 'Buggy',
	'C': 'Cheese',
	'D': 'Dingle',
	'E': 'Egg',
	'F': 'Fart',
	'G': 'Goober',
	'H': 'Hippo',
	'I': 'Icky',
	'J': 'Jelly',
	'K': 'Kissy',
	'L': 'Lazy',
	'M': 'Monkey',
	'N': 'Nut',
	'O': 'Odor',
	'P': 'Pickle',
	'Q': 'Quack',
	'R': 'Rascal',
	'S': 'Spanky',
	'T': 'Turkey',
	'U': 'Ugly',
	'V': 'Vixen',
	'W': 'Wombat',
	'X': 'Freckle',
	'Y': 'Yo-yo',
	'Z': 'Zippy',
};

var data3 = {
	'A': 'brains',
	'B': 'berry',
	'C': 'paste',
	'D': 'booty',
	'E': 'face',
	'F': 'hair',
	'G': 'burger',
	'H': 'breath',
	'I': 'nose',
	'J': 'licker',
	'K': 'kicker',
	'L': 'spanker',
	'M': 'bottom',
	'N': 'bucket',
	'O': 'whiz',
	'P': 'baster',
	'Q': 'tooter',
	'R': 'balls',
	'S': 'toaster',
	'T': 'sniffer',
	'U': 'spray',
	'V': 'smacker',
	'W': 'lips',
	'X': 'bear',
	'Y': 'zone',
	'Z': 'stank',
};

