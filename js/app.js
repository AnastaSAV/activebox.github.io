$(function() {
    // Fixed header
    let header = $("#header");
    let introH;
    let intro = $("#intro");

    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");


    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        nav.removeClass("show");

        console.log(blockOffset);

        $("html, body").animate({
            scrollTop: blockOffset - 55
        }, 700);

    });

    // Nav
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    // Slider 
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });
});