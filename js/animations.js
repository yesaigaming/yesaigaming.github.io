function masque_show(id){
	 $(id).animate({width: "toggle"});
}

function masque_showCal(id){
	 $(id).animate({width: "toggle"});
	 var filter = $("section").css("filter");
	 if (filter == "none")
	 {
		$("section").css('filter',"blur(2px)");
	 }
	 else 
	 {
		$("section").css('filter',"none");
	 }
}