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
	//$(".nav-links").toggleClass("nav-small");
 	$(".nav-links").toggleClass("nav-hide");
    $(".fa-times").toggleClass("close-show");
    $(".fa-times").attr("id", "close-hide");
    // $(".fa-bars").toggle("#hamburger-hide");
    //slide nav up--->before hiding, slide it up -->add delay to hide?
    $(".nav-links").toggleClass("nav-small-slideUp");
    setTimeout(function () {
    	$(".nav-links").toggleClass("nav-small");
    	$(".fa-bars").toggle("#hamburger-hide");
    }, 1000);
}


//smooth scrolling for nav links
$(document).on('click', '.nav-links a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



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
















// // <ul class="testimonial-list">
// // 		<li>First</li>
// // 		<li>Second</li>
// // 		<li>Third</li>
// // </ul>

// // function testingThis() { 
// // var testList = $(".testimonial-list").children();
// // testList.addClass("another-new-class");
// // //console.log(testList[0]);
// // for (var i = 0; i < testList.length; i++) {
// //  	console.log(testList[i]);
// //  	console.log(this);
// // 	}
// // }

// //
// function fadeInOut() {

// 	$(window).off("resize scroll");	
	
// 	function fadeIn() {
// 		var testList = $(".testimonial-list").children();
// 		for (var i = 0; i < testList.length; i++) {
// 			var x = testList[i];
// 			$(x).delay(800).fadeIn(900)
// 			};


// 		// console.log(x);
// 		// 	setTimeout(function () {
// 		// 	console.log(x);	
// 		// 		$(x).fadeIn(500)
// 		// 	}, 1000);
	

// 			// function fadeOut() { 
// 			// 	setTimeout(function () {
// 			// 	$(x).fadeOut(500)}, 1000, fadeIn())
// 		 //    }
// 	}

// 	fadeIn();
// }


//
//wrap in loop for each testimonial
// function fadeInOut() {
// 	$(window).off("resize scroll");
// 	setTimeout(function () {
// 	$(".test-1").fadeIn(500)}, 400);
// 	fadeItOut()
// }
	
// function fadeItOut() { 
// 	setTimeout(function () {
// 	$(".test-1").fadeOut(500)}, 3000)
// }
//wrap
