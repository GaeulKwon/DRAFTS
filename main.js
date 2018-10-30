function madLibs() {

  var mystory = document.getElementById("mystory");
  var noun1 = document.getElementById("noun1").value;
  var title = document.getElementById("title").value;
  var adjective = document.getElementById("adjective").value;
  var noun2 = document.getElementById("noun2").value;

  
document.write(noun1 + " saw " + noun2 + " stealing " + title + " from someone else's backpack " 
	+ adjective + ".");
}