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


$(document).ready(function() {
	updateAge();
	
	function updateAge ()
	{
		var date = new Date(1985, 1, 12)
		var diff = Date.now() - date.getTime();
		var age = new Date(diff); 
		var ageAffich = Math.abs(age.getUTCFullYear() - 1970);

		$("#valeurAge").text (ageAffich) ;
		console.log (ageAffich);
	}
});
