$(document).on('click','#signup_beta', function (e) {
        var email = $("input#inputEmail").val();
        var url = 'https://us3.api.mailchimp.com/2.0/lists/subscribe.json';
        var api = 'b2482c2712043b4a06234cfc17730b53-us3';
        var list_id = 'c3e91c9af8';
        var mc_package = {"apikey":api, "id":list_id, "email":{"email":email}};
            $.ajax({
                type: "POST",
                url: url,
                data: mc_package,
                success: function(e) {
                    $('.signup_form').html("<div id='message' class='col-xs-12 col-md-6 col-md-offset-2'></div>");
                    
                    $('#message').html("<h4>Thank you for joining our private beta!</h4>")
                            .append("<p>Check your email, confirm it, and we will be in touch soon.</p>")
                            .hide()
                            .fadeIn(1500, function() {
                                $('#message').append("<div></div>");
                            });
                    
                },
                error: function(e) {
                    $('.signup_form').html("<div id='message' class='col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3'></div>");
                    
                    $('#message').html("<h4>Thank you for joining our private beta!</h4>")
                            .append("<p>Check your email, confirm it, and we will be in touch soon.</p>")
                            .hide()
                            .fadeIn(1500, function() {
                                $('#message').append("<div></div>");
                            });
                    
                }
            });
});

