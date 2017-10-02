//https://www.youtube.com/watch?v=x0YnVwAuNQI

$(document).ready(function() {
    var scrollLink = $(".scroll");

    //Smooth scrolling

    scrollLink.click(function(event) {
        event.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 800 );
    });

    //Active link switching

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 30;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })

    })

});