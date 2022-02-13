$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    // navbar
    if (wScroll < 7) {
        $(".navbar").removeClass("navbar-dark bg-primary shadow-sm p-3").addClass("navbar-light nav-transform");
    } else {
        $(".navbar").removeClass("navbar-light").addClass("navbar-dark bg-primary shadow-sm p-3");
    }

    // our class
    if (wScroll > $("#our-class").offset().top - 600) {
        $("#our-class .container .thumb").each(function (i) {
            setTimeout(function () {
                $("#our-class .container .thumb").eq(i).addClass("show");
            }, 300 * (i + 1));
        });
    }

});