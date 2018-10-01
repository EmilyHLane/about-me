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
}

//close nav on X click
$(".fa-times").on("click", closeNav);

function closeNav() {
 	$(".nav-links").toggleClass("nav-hide");
    $(".fa-times").toggleClass("close-show");
    $(".fa-times").attr("id", "close-hide");
    $(".nav-links").toggleClass("nav-small-slideUp");
    setTimeout(function () {
    	$(".nav-links").toggleClass("nav-small");
    	$(".fa-bars").toggle("#hamburger-hide");
    }, 1000);
}

//smooth scrolling for nav links
$(document).on("click", ".nav-links a", function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


//-----hightlight navlink when user scrolls to section------
//---working code for about container only----
$(window).on("scroll", function() {
	var elementTop = $(".about-container").offset().top;
	var elementBottom = elementTop + $(".about-container").outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	if (elementBottom > viewportTop && elementTop < viewportBottom) {
		//add class with font weight 700
		$(".nav-about").addClass("highlight");
		$(".nav-port").removeClass("highlight");
		$(".nav-test").removeClass("highlight");
		}	
})
	
$(window).on("scroll", function() {
	var elementTop = $(".carousel").offset().top;
	var elementBottom = elementTop + $(".carousel").outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop -50 + $(window).height();
	console.log(elementTop, viewportBottom);
	if (elementBottom > viewportTop && elementTop < viewportBottom) {
		//add class with font weight 700
		$(".nav-port").addClass("highlight");
		$(".nav-about").removeClass("highlight");
		$(".nav-test").removeClass("highlight");
		}	
})

$(window).on("scroll", function() {
	var elementTop = $(".test-container").offset().top;
	var elementBottom = elementTop + $(".test-container").outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	if (elementBottom > viewportTop && elementTop < viewportBottom) {
		//add class with font weight 700
		$(".nav-test").addClass("highlight");
		$(".nav-port").removeClass("highlight");
		}	
})

$(window).on("scroll", function() {
	var elementTop = $(".contact-container").offset().top;
	var elementBottom = elementTop + $(".contact-container").outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	if (elementBottom > viewportTop && elementTop < viewportBottom) {
		//add class with font weight 700
		$(".nav-contact").addClass("highlight");
		$(".nav-test").removeClass("highlight");
		}	
})


//combine with above function for nav highlight?		
//set listener for scroll and resize to check if testimonial section visible 
$(window).on("resize scroll", function() {
	var elementTop = $(".test-container").offset().top;
	var elementBottom = elementTop + $(".test-container").outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	//console.log(`EB ${elementBottom}, VT ${viewportTop}, ET ${elementTop}, VB ${viewportBottom}`);
	if (elementBottom > viewportTop && elementTop < viewportBottom) {
		fadeInOut();
	};
});

//working code to fade in and out and stop at last one
//how to make this better?

//fadeInOut function called if testimonial content area is in view
function fadeInOut() {
	//turns off scroll and resize event listener
	$(window).off("resize scroll");
	//fade in test-1, which is a p element
	setTimeout(function () {
	$(".test-1").fadeIn(500)}, 400);
	fadeOut1()
}

//fade out test-1 	
function fadeOut1() { 
	setTimeout(function () {
	$(".test-1").fadeOut(500)}, 3000);
	fadeIn2()
}

//fade in test-2 p element
function fadeIn2() {
	setTimeout(function () {
	$(".test-2").fadeIn(500)}, 4000);
	fadeOut2()
}

//fade out test-2	
function fadeOut2() { 
	setTimeout(function () {
	$(".test-2").fadeOut(500)}, 7000);
	fadeIn3()
}

//fade in test-3 p element
function fadeIn3() {
	setTimeout(function () {
	$(".test-3").fadeIn(500)}, 8000);
}

