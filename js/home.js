$(window).ready(function() {
    $("html, body").animate(
        {
            scrollTop: 0
        },
        // "slow"
        500
    );

    // return false;
});

$(".menu-item a").click(function(event) {
    event.preventDefault();

    var address = $(this).attr("href");

    $("html, body").animate(
        {
            scrollTop: $("div[id=" + address + "]").offset().top - 50
        },
        // "slow"
        500
    );

    // return false;
});

$(".menu-item li a").hover(function() {
    // $(this).css("color", "#fa3434");
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $(".main-nav").css("padding", "0");
    } else {
        $(".main-nav").css("padding", "20px 0");
    }

    if ($(this).scrollTop() < $("#section-1").offset().top -250) {
        // $(".main-menu li a").css("color", "#383838");
        $(".main-menu li").removeClass("item-selected");
    }

    if ($(this).scrollTop() >= $("#section-1").offset().top -250 &&
        $(this).scrollTop() < $("#section-2").offset().top -250) {
        // $(".main-menu li a").css("color", "#383838");
        // $(".main-menu li:nth-child(1) a").css("color", "#fa3434");
        $(".main-menu li:nth-child(1)").addClass("item-selected");
        $(".main-menu li:nth-child(1)").siblings().removeClass("item-selected");
    }

    if ($(this).scrollTop() >= $("#section-2").offset().top -250 &&
        $(this).scrollTop() < $("#section-3").offset().top -250) {
        // $(".main-menu li a").css("color", "#383838");
        // $(".main-menu li:nth-child(2) a").css("color", "#fa3434");
        $(".main-menu li:nth-child(2)").addClass("item-selected");
        $(".main-menu li:nth-child(2)").siblings().removeClass("item-selected");
    }

    if ($(this).scrollTop() >= $("#section-3").offset().top -250 &&
        $(this).scrollTop() < $("#section-4").offset().top -250) {
        // $(".main-menu li a").css("color", "#383838");
        // $(".main-menu li:nth-child(3) a").css("color", "#fa3434");
        $(".main-menu li:nth-child(3)").addClass("item-selected");
        $(".main-menu li:nth-child(3)").siblings().removeClass("item-selected");
    }

    if ($(this).scrollTop() >= $("#section-4").offset().top -250 &&
        $(this).scrollTop() < $("#footer").offset().top -250) {
        // $(".main-menu li a").css("color", "#383838");
        // $(".main-menu li:nth-child(4) a").css("color", "#fa3434");
        $(".main-menu li:nth-child(4)").addClass("item-selected");
        $(".main-menu li:nth-child(4)").siblings().removeClass("item-selected");
    }
});
