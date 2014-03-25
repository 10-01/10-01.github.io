//Define Bubbl Namespace
var bubblLanding = {}

//Set initial video
bubblLanding.current_bubbl_landing_page = "one";


function addUser(email){
    var userAdded = {};
    // Send the dimensions to Parse along with the 'search' event

    $("ul.username-error-list").hide();
    $(".spinner").show();
    var UserObject = Parse.Object.extend("PreRegUsers");

    var userObject = new UserObject();
    userObject.save({email: email}, {
        success: function(object) {
            bubblLanding.email = email;
            userAdded['status'] = "user added";
            $("#reserve_username_form").hide();
            $(".spinner").hide();
            $("#header_text").hide();
            $('#header_text').replaceWith ('<h1 id="header_text">STANDBY. GOOD BEER IS COMING.</h1>')
            $(".success").fadeIn();
            $("#social_share").fadeIn();
            $("#submit_video").fadeIn();


//                        Add to Mailchimp
            $.ajax({
                type: "GET",
                url:"http://us7.api.mailchimp.com/1.3/?method=listSubscribe&apikey=3be7aebdb44ee8c4e132b85343f14ba6-us7&id=9b1bb9a074&email_address="+email,
                success: function(e) {
                    console.log('sending MC')
                }
            });
            return false;

        },
        error: function(model, error) {
            $(".spinner").hide();
            $("ul.username-error-list").show();
        }
    });

    Parse.Analytics.track('signups', userAdded)
}
