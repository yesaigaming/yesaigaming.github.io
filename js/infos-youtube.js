$(document).ready(function() {
	var videosYoutube = [] ;
	var divListeYT = $("#listeYT");
	
	/* $.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UULYGnYm-wn38ZxaGrPM4_ug&key=AIzaSyBcheOgcFfFJ0i7gZ_n5mkieLuhCPZuinE&part=contentDetails,snippet&maxResults=5&callback=?', function(data) { */
	$.getJSON('https://www.googleapis.com/youtube/v3/search?type=video&order=date&channelId=UCLYGnYm-wn38ZxaGrPM4_ug&playlistId=UULYGnYm-wn38ZxaGrPM4_ug&key=AIzaSyBcheOgcFfFJ0i7gZ_n5mkieLuhCPZuinE&part=snippet&maxResults=5&callback=?', function(data) {
		$.each( data.items, function(key,item) {
			videoYT = [item.snippet.title, item.snippet.description, item.snippet.thumbnails.high.url, "https://www.youtube.com/watch?v="+item.id.videoId];
			var l = videosYoutube.push (videoYT) ;
		});
		
		for (var key in videosYoutube) 
		{ 
			creerElement (videosYoutube[key]);
		}
	});
	
	function creerElement (video)
	{
		divListeYT.append ("<div class='itemYT'><div class='containerImg'><img src='"+video[2]+"' alt='"+video[0]+"'/></div><div><h1><a href='"+video[3]+"'>"+video[0]+"</a></h1><p>"+video[1]+"</p></div></div>");
	}
});