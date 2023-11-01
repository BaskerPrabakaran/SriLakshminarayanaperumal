window.jQuery || document.write("<script src=\"js/lib/jquery-3.7.1.js\"><script>")

$(function(){
    $("li").click(function(){
        $("li.timeline-year-active").removeClass("timeline-year-active");
        $(this).addClass("timeline-year-active");
        $("div.timeline-details-active").removeClass("timeline-details-active");
        $("div."+$(this).attr("id")).addClass("timeline-details-active");
    });

    $("#menuicon").click(function(){
        if($("#navlinks").hasClass("nav-links-open"))
        {
            $("#navlinks").removeClass("nav-links-open");
        }
        else
        {
            $("#navlinks").addClass("nav-links-open");
        }
    });
});