var addBehavior,showPic;

addBehavior = function(){
	var gallery = document.getElementById("gallery");
	var links = gallery.getElementsByTagName("a");

	for (var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			showPic(this);
			return false;
		}
	}
}

showPic = function(pic){
	var source = pic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");

	placeholder.setAttribute("src",source);

	var text = pic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

addBehavior();