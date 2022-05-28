

$(document).ready(function () { 

    $('#send_email').on('submit', function (submit) { 

        submit.preventDefault(); 

        $.ajax({ 

            method: 'POST',
            url: 'https://formsubmit.co/ajax/serlindipity@gmail.com', 
            dataType: 'json', 
            accepts: 'application/json', 

            data: {
                Email: $('input[name="Email"]').val(),
                Name: $('input[name="Name"]').val(),
                Subject: $('input[name="Subject"]').val(),
                Message: $('textarea[name="Message"]').val()
            },

            success: function () {
                $('#send_email').trigger('reset');
                $('#message').addClass('active');

                setTimeout(function () { $("#message").removeClass('active'); }, 5000);
            }
        });
    });

});