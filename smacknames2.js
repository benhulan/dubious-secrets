var data=[];
var data1=[];
var data2=[];
var data3=[];
var style=[];
var firstOfFirst, firstOfLast, lastOfLast = "";
var insultGenerator;

// remove click from markup
var clickListener = $("#caps").on("click", function(){capitalize();});

$.getJSON( "json/smacknames.json", function(data){
	data1.push(data.smacknames[0]);
	data2.push(data.smacknames[1]);
	data3.push(data.smacknames[2]);
});

insultGenerator = function(key1, key2, key3) {
	$("#result").html("Your new name is <strong>" + data1[0][firstOfFirst]  +" Mc" + data2[0][firstOfLast] + data3[0][lastOfLast] + "!</strong>");
};

var capitalize = function() {
	var myString = document.getElementById("input").value;
	var result = myString.toUpperCase();

	// find the character after the space and assign to firstOfLast
	if (result)
	for (var i=0;  i<result.length; i++) {
		if (result[i] === " ") {
			firstOfLast = result[i+1];
		}
	}
	firstOfFirst = result.slice(0,1);
	lastOfLast = result.slice(result.length-1,result.length);

	// currently validates only the three letters that make the nickname:
	if (data1[0][firstOfFirst] && data2[0][firstOfLast] && data3[0][lastOfLast]) {
		// here is the call to insultGenerator:
		insultGenerator(firstOfFirst, firstOfLast, lastOfLast);
	} else {
		$("#instructions").html("Please enter <strong>Firstname \[space\] Lastname</strong>.");
	}
};

$("#starmaker").click(function() {
	$("#result").html("");	
	$("#instructions").html("Type your name and hit &ldquo;Bring It!&rdquo; for a new <strong>SmackNames</strong> nickname.");
	$.getJSON( "json/porn.json", function(data){
		data1.splice(0, 26, data.porn[0]);
		data2.splice(0,26, data.porn[1]);
		data3.splice(0,26, data.porn[2]);
		insultGenerator = function(firstOfFirst, firstOfLast, lastOfLast) {
			$("#result").html("Your new name is <strong>" + data1[0][firstOfFirst]  +" Mc" + data2[0][firstOfLast] + data3[0][lastOfLast] + "!</strong>");
		};
	});
	$.get("css/style04.css", function(css) {
		$("#styler").html(css);
	});
	//$.getJSON("json/style01.json", function(data){
		//console.log(data.style01[0]);
		//$('#styler').html($(data.style01[0]));
	//});
});

$("#underpants").click(function() {
	$("#result").html("");
	$("#instructions").html("<strong>Professor Poopypants</strong> wants you to type your first and last name, Bub.");
	$.getJSON( "json/captainunderpants.json", function(data){
		data1.splice(0, 26, data.captainunderpants[0]);
		data2.splice(0,26, data.captainunderpants[1]);
		data3.splice(0, 26, data.captainunderpants[2]);
		insultGenerator = function(firstOfFirst, firstOfLast, lastOfLast) {
			$("#result").html("Your new name is <strong>" + data1[0][firstOfFirst]  + " " + data2[0][firstOfLast] + data3[0][lastOfLast] + "!</strong>");
		};
	});
	$.get("css/style02.css", function(css) {
		$("#styler").html(css);
	});
	//$.getJSON("json/style03.json", function(data){
		//console.log(data.style03[0]);
		//$('#styler').html($(data.style03[0]));
	//});
});

$("#fakespeare").click(function() {
	$("#result").html("");	
	$("#instructions").html("Typest thou thy name for thine <strong>Fakespearean</strong> sobriquet.");
	$.getJSON( "json/fakespeare.json", function(data){		
		data1.splice(0, 26, data.fakespeare[0]);
		data2.splice(0,26, data.fakespeare[1]);
		data3.splice(0,26, data.fakespeare[2]);
		insultGenerator = function(firstOfFirst, firstOfLast, lastOfLast) {
			$("#result").html("Thou art a <strong>" + data1[0][firstOfFirst]  + ", " + data2[0][firstOfLast] + " " + data3[0][lastOfLast] + "</strong>!");
		};
	});
	$.get("css/style03.css", function(css) {
		$("#styler").html(css);
	});	
	//$.getJSON("json/style02.json", function(data){
		//console.log(data.style02[0]);
		//$('#styler').html($(data.style02[0]));
	//});
});

$("#smacknames").click(function() {
	$("#result").html("");	
	$("#instructions").html("Type your name and hit &ldquo;Bring It!&rdquo; for a new <strong>SmackNames</strong> nickname.");
	$.getJSON( "json/smacknames.json", function(data){
		data1.splice(0, 26, data.smacknames[0]);
		data2.splice(0,26, data.smacknames[1]);
		data3.splice(0,26, data.smacknames[2]);
		insultGenerator = function(firstOfFirst, firstOfLast, lastOfLast) {
			$("#result").html("Your new name is <strong>" + data1[0][firstOfFirst]  +" Mc" + data2[0][firstOfLast] + data3[0][lastOfLast] + "!</strong>");
		};
	});
	$.get("css/style01.css", function(css) {
		$("#styler").html(css);
	});
	//$.getJSON("json/style01.json", function(data){
		//console.log(data.style01[0]);
		//$('#styler').html($(data.style01[0]));
	//});
});
