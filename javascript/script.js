$(window).scroll(function () {
  const wScroll = $(this).scrollTop();

  // our class
  if (wScroll > $("#our-class").offset().top - 400) {
      $("#our-class .container .thumb").each(function(i) {
        setTimeout(function () {
            $("#our-class .container .thumb").eq(i).addClass("show");
      }, 300 * (i + 1));
    });
  }
  
    
  
  console.log(wScroll);
  if(wScroll < 5) {
      console.log("hello");
  }
});
