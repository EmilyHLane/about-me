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

// function testPosition() {
// 	var tP = $(".test-container");
// 	var offset = tP.offset();
// 	console.log(offset);
// }

// testPosition();

//set listener for scroll and resize to check if testimonial section visible 
$(window).on("resize scroll", function() {
	var elementTop = $(".test-container").offset().top;
	var elementBottom = elementTop + $(".test-container").outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	console.log(`EB ${elementBottom}, VT ${viewportTop}, ET ${elementTop}, VB ${viewportBottom}`);
	if (elementBottom > viewportTop && elementTop < viewportBottom) {
		fadeInOut();
	};
});

//code to fade in/out here
function fadeInOut() {
	console.log("Fade Away");
	$(".is-visible").fadeOut(1200);
};

// $(".is-visible").on("click", function() {
// 	$(".is-visible").fadeOut("slow");
// });



	

//add id "test-hide" to class testimonial-1, -2, -3 to hide
//fade testimonials in/out

//is there a better way to show/hide than use id to hide?