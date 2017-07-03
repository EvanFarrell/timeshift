var script = document.createElement('script');
script.src = '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {

    // process the form
    $('#form').submit(function(event) {

        var formData = {
            'item-name' : $('input[name=item-name]').val(),
        };

        $.ajax({
            type: 'POST',
            data: formData,
            dataType: 'json',
            encode: true
        })
            .done(function(data) {
               alert(data);
            });

        event.preventDefault();
    });

});
