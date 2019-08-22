
$(document).ready(function() {
	
	$.getJSON('https://api.twitch.tv/kraken/channels/56985289?client_id=g6i4lxcedxo0ujc8hpmxhkx6ejd85j&callback=?', function(data) {
		console.log(data.views);
		console.log(data.status);
		$("#streamTitle").text (data.status);
		$("#nbVues").text (data.views);
	});
});
