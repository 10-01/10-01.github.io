/*
	Aerial 1.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Skel.
	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'css/style.css', lockViewport: true },
			'wide': { range: '-2660', href: 'css/style-wide.css' },
			'normal': { range: '-1280', href: 'css/style-normal.css' },
			'mobile': { range: '-640', href: 'css/style-mobile.css' },
			'mobilep': { range: '-360', href: 'css/style-mobilep.css' }
		}
	});

// Events (JS).
	
	// Remove "loading" class once the page has fully loaded.
		window.onload = function() {
			document.body.className = '';
		}

	// Prevent scrolling on touch.
		window.ontouchmove = function() {
			return false;
		}

	// Fix scroll position on orientation change.
		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}

$(document).ready(function() {
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});
$(document).on('click','#signup_beta', function (e) {
    var email = $("input#inputEmail").val();
    var url = 'https://us7.api.mailchimp.com/2.0/lists/subscribe.json';
    var api = 'ed69d1950c819476f294738534df4d6d-us7';
    var list_id = 'e725d18013';
    var mc_package = {"apikey":api, "id":list_id, "email":{"email":email}};
    $.ajax({
        type: "POST",
        url: url,
        data: mc_package,
        success: function(e) {
            $('.signup_form').html("<div id='message' class='col-xs-12 col-md-6 col-md-offset-2'></div>");

            $('#message').html("<h4>Thank you for joining our newsletter list!</h4>")
                .append("<h5>Check your email, confirm it, and you will start seeing exclusive deals and news.</h5>")
                .hide()
                .fadeIn(1500, function() {
                    $('#message').append("<div></div>");
                });

        },
        error: function(e) {
            $('.signup_form').html("<div id='message' class='col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3'></div>");

            $('#message').html("<h4>Thank you for joining our newsletter list!</h4>")
                .append("<h5>Check your email, confirm it, and you will start seeing exclusive deals and news.</h5>")
                .hide()
                .fadeIn(1500, function() {
                    $('#message').append("<div></div>");
                });

        }
    });
});
$(document).on('click','#mobile_signup_beta', function (e) {
    var email = $("input#mobile_inputEmail").val();
    var url = 'https://us7.api.mailchimp.com/2.0/lists/subscribe.json';
    var api = 'ed69d1950c819476f294738534df4d6d-us7';
    var list_id = 'e725d18013';
    var mc_package = {"apikey":api, "id":list_id, "email":{"email":email}};
    $.ajax({
        type: "POST",
        url: url,
        data: mc_package,
        success: function(e) {
            $('.mobile_signup_form').html("<div id='message' class='col-xs-12 col-md-6 col-md-offset-2'></div>");

            $('#message').html("<h4>Thank you for joining our newsletter list!</h4>")
                .append("<h5>Check your email, confirm it, and you will start seeing exclusive deals and news.</h5>")
                .hide()
                .fadeIn(1500, function() {
                    $('#message').append("<div></div>");
                });

        },
        error: function(e) {
            $('.mobile_signup_form').html("<div id='message' class='col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3'></div>");

            $('#message').html("<h4>Thank you for joining our newsletter list!</h4>")
                .append("<h5>Check your email, confirm it, and you will start seeing exclusive deals and news.</h5>")
                .hide()
                .fadeIn(1500, function() {
                    $('#message').append("<div></div>");
                });

        }
    });
});


/*

// Events (jQuery).
// Aerial doesn't need jQuery, but if you're going to use it anyway remove the
// block of JS events above and use the jQuery-based ones below instead.

	$(window)

		// Remove "loading" class once the page has fully loaded.
			.on('load', function() {
				$('body').removeClass('loading');
			})

		// Prevent scrolling on touch.
			.on('touchmove', function() {
				return false;
			})

		// Fix scroll position on orientation change.
			.on('orientationchange', function() {
				$('body').scrollTop(0);
			});

*/