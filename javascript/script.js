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


    console.log(wScroll);
    
    // barcode
    if(wScroll > 110 & wScroll < $("#footer").offset().top - 800) {
        $(".barcode-container").css("opacity", "1");
    } else {
        $(".barcode-container").css("opacity", "0");
    }
    

});


// home
setTimeout(function () {

    $("#home .container .show").each(function (i) {
        setTimeout(function () {
            $("#home .container .show").eq(i).css("transform", "translate(0,0)").css("opacity", "1");
        }, 300 * (i + 1));
    });

    $("#home .container .image img").css("transform", "translate(0, 0)");
    $("#home .container .image img").css("opacity", "1");

}, 100);


// ticket lightbox
$(".ticket-btn").click(function () {
    $(".ticket").addClass("lightbox");
    $("body").css("overflow", "hidden");
});

$(".close-btn").click(function () {
    $(".ticket").removeClass("lightbox");
    $("body").css("overflow", "auto");
});