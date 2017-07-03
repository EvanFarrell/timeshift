$(document).ready(function() {

    $('#new-task-form').submit(function(event) {
        event.preventDefault();

        var formData = {
            'task-name' : $('input[name=task-name]').val(),
        };

        $.ajax({
            type: 'POST',
            url: event.currentTarget.action,
            data: formData,
            dataType: 'json',
            encode: true
        })
            .done(function(data) {
               alert(data);
            });


    });

});
