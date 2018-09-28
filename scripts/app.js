//document ready for jQuery
$( document ).ready(function() {
    console.log( "ready!" );
});

//show nav on hamburger click
$(".fa-bars").on("click", showNav);

function showNav() {
	//show nav for small screens 
	$(".nav-links").toggleClass("nav-small");
    $(".nav-links").toggleClass("nav-hide");
    $(".fa-times").toggleClass("close-show");
    $(".fa-times").attr("id", " ");
	$(".fa-bars").toggle("#hamburger-hide");
	//slide nav down
}

//close nav on X click
$(".fa-times").on("click", closeNav);

function closeNav() {
	$(".nav-links").toggleClass("nav-small");
    $(".nav-links").toggleClass("nav-hide");
    $(".fa-times").toggleClass("close-show");
    $(".fa-times").attr("id", "close-hide");
    $(".fa-bars").toggle("#hamburger-hide");
    //slide nav up
}


	

//add id "test-hide" to class testimonial-1, -2, -3 to hide
//fade testimonials in/out

//is there a better way to show/hide than use id to hide?