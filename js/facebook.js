//=== Facebook ================================================================

var FACEBOOK = new FACEBOOK_CLASS();

/**
 * post to facebook
 */
function FACEBOOK_CLASS() {
	var _self = this;

	//constructor - prepare
	this.init = function () {
		$("#facebook-post-dialog").dialog({
			autoOpen: false,
			modal: true,
			width: "600px"
		});

		var fbButtons = document.getElementsByClassName('post-to-facebook');
		for (var i = 0; i < fbButtons.length; ++i) {
			fbButtons[i].onclick = function(e) {
				e.preventDefault();

				var tempCanvas = document.createElement("canvas");
				var tempCtx = tempCanvas.getContext("2d");
				tempCanvas.width = WIDTH;
				tempCanvas.height = HEIGHT;
				
				//ask data
				LAYER.export_layers_to_canvas(tempCtx, 'JPG', false);

				var img = document.createElement("img");
				img.setAttribute('src', tempCanvas.toDataURL('image/jpeg', 1.0));

				$(img).watermark({
					text: 'https://mbrsh.com',
					textSize: 20,
					textWidth: 200,
					outputType: 'jpeg',
					done: function(imgURL) {
						this.src = imgURL;
						
						$('#facebook-post-image').attr("src", imgURL);
						$('#facebook-post-title').val("");
						$('#facebook-post-dialog').dialog("open");
					}
				});
			};
		}

		$('.facebook-post-button').click(function(e) {
			e.preventDefault();

			$(this).attr('disabled', 'disabled');
			FB.getLoginStatus(function(response) {
		      	_self.statusChangeCallback(response);
		    });
		});
	}();

	this.postImage = function(token) {
		$("#facebook-post-dialog").dialog("close");
		var data = $('#facebook-post-image').attr('src');
		var encodedJpg = data.substring(data.indexOf(',') + 1, data.length);
		$.ajax({
			method: 'POST',
			url: 'https://api.imgur.com/3/image',
			data: {
				image: encodedJpg
			},
			beforeSend: function(request) {
			    request.setRequestHeader("Authorization", 'Client-Id cabc2fb5c62a9f4');
			},
			success: function(data) {
				if (data && data.data && data.data.link) {
					FB.api('/me/feed', 'POST', {
						source: data.data.link,
						access_token: token,
						message: $('#facebook-post-title').val()
					}, function(response) {
						if (response)
						{
							$(this).removeAttr('disabled');
							if (response.error)
							{
								alert(response.error.message);
							}
							else
							{
								alert('The image is successfully posted');
							}
						}
					});
				}
			}
		});
	};

	this.statusChangeCallback = function(response) {
		FB.login(function(res) {
	        if (res.status === 'connected') {
	        	_self.postImage(res.authResponse.accessToken);
	        }
	    }, { scope: 'public_profile,email,publish_actions'} );
	};
}
