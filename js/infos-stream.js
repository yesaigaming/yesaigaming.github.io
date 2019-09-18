$(document).ready(function() {
	
	$.ajax({
	  url: "https://api.twitch.tv/helix/streams?user_login=tox_yesai",
	  dataType: 'json',
	  type: 'GET',
      beforeSend: function(xhr){xhr.setRequestHeader('Client-ID', 'g6i4lxcedxo0ujc8hpmxhkx6ejd85j');},
	  success: function (data) {
		    if (data.data.length > 0)
			{
				console.log(data.data[0].viewer_count);
				console.log(data.data[0].title);
				var status = data.data[0].title ;
				var nbVues = data.data[0].viewer_count ;
				$("#streamTitle").text (data.data[0].title);
				$("#nbVues").text (data.data[0].viewer_count);
			}
			else 
			{
				$("#streamTitle").text ("Stream offline");
				$.ajax({
				  url: "https://api.twitch.tv/helix/users?login=tox_yesai",
				  dataType: 'json',
				  type: 'GET',
				  beforeSend: function(xhr){xhr.setRequestHeader('Client-ID', 'g6i4lxcedxo0ujc8hpmxhkx6ejd85j');},
				  success: function (data) {
					  console.log(data.data[0].view_count);
					  $("#nbVues").text (data.data[0].view_count);
					}
				});
			}
		}
	});
});
