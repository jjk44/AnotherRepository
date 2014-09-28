//Parse related keys
var PARSE_APP = "YbqfdEMgXlQmhSwEQv8zV5oPvCTOaJtza83dVYgv";
var PARSE_JS = "QdWMbK7SfOvdwRGpNH6IOFA6nqSIZokXFjbxTMqA";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);

	NoteObject = Parse.Object.extend("Monsters");

	function getNotes() {
		var query = new Parse.Query(NoteObject);

		query.find({
			success:function(results) {
				console.dir(results);
				var s = "";
				for(var i=0, len=results.length; i<len; i++) {
					var note = results[i];
					s += "<p>";
					s += "<b>"+note.get("Name")+"</b><br/>";
					s += "<b>Created on "+note.createdAt + "<br/>";
					s += "<b>HP</b>"+ note.get("HP")+"<br>";
					s += "<b>ATK</b>"+ note.get("ATK")+"<br>";
					s += "<b>DEF</b>"+ note.get("DEF")+"<br>";
					s += "<b>DEF</b>"+ note.get("Location")+"<br>";
					s += "</p>";
				}
				$("#notes").html(s);
			},
			error:function(error) {
				alert("Error when getting notes!");
			}
		});
	}

	//call getNotes immediately
	getNotes();

});