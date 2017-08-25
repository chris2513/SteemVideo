
$(document).ready(function() {
    $('#videoButton').click(function() {
        var video = $('#videoURL').val();
        console.log(video);

        $('#video').append('<video src='+video+'></video>');
    });
});
