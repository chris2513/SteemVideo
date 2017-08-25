
$(document).ready(function() {
    $('#videoButton').click(function() {
        var video = $('#videoURL').val();
        console.log(video);
        location.href = video;
    });
});
