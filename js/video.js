
$(document).ready(function() {
    $('#videoButton').click(function() {
        // Get URL from the HTML
        var video = $('#videoURL').val();

        // Clean the URL to work as an embedded player
        if($('video:contains("watch?v=")')) {
            video = video.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/" );
        }
        // Error checking
        console.log(video);

        // Inject the youtube player into the HTML
        $('#video').append('<iframe width="560" height="315" src='+video+' frameborder="0"></iframe>');
    });

});
