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



for (let i = 1; i <= 4; i++) {
 console.log(       $(`#home .container .text:nth-child(${i})`));
}





function welcomeScreen() {

    for (let i = 1; i <= 4; i++) {
        setTimeout(function () {

            $(`#home .container .text:nth-child(${i})`).css("transform", "translate(0, 0)");
            $(`#home .container .text:nth-child(${i})`).css("opacity", "1");

        }, 300 + (i + 200));


    }




    // $("#home .container .text").each(function (i) {
    //     setTimeout(function () {
    //         for (let i = 1; i <= 4; i++) {
    //             $(`#home .container .text:nth-child(${i})`).eq(i).css("transform", "translate(0, 0)");
    //             $(`#home .container .text:nth-child(${i})`).eq(i).css("opacity", "1");
    //         }
    //     }, 300 + (i + 200));
    // });
}

setTimeout(function () {
    welcomeScreen();


    $("#home .container .image img").css("transform", "translate(0, 0)");
    $("#home .container .image img").css("opacity", "1");


}, 1000);