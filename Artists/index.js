
// wait for document to load before running JS scripts
$( document ).ready(function() {
    
    //animate main image on hover
    $("#title-image").hover(function(){
        $(this).stop().animate({
            opacity: '0.4'}, 500, //scroll to bio section after animation
                function scroll_to(div){
                    $('html, body').stop().animate({
                        scrollTop: $(".bio").offset().top},400, 
                    );
                }
        );
    });

    //toggle highlight on hover over albums
    $(".fade-on-hover").hover(function(){
        $(this).stop().animate({ opacity: '0.4' }, 10);
    },
        function() {
        $(this).stop().animate({ opacity: '1.0' }, 10);

    })

    //append new comments to comments section
    $("#submit").click(function(){
        var name = $("#name").val()
        var commenttext = $("#comment-box").val()

        if ((name && commenttext) !== ''){
            $(".previous-comments").prepend($("<div class='previous-comment'><p>" + commenttext + "</p>" + "<p><i>Posted by " + name + ", " + Date().toLocaleString() + "</i></p></div>"));
            
            //clear comment box values
            $("#name").val('');
            $("#comment-box").val('');
        }
    })
});
