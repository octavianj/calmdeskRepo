
/* Timer */

/*
$('.begin').click(function (){
	var bgnwrkt = document.getElementsByClassName('begin');
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");
	var totalSeconds = 0;

	if (bgnwrkt.innerHTML === 'Begin Workout')
	{
		$('.timer').toggle();
		bgnwrkt.innerHTML = 'Stop Workout';

		var handle = setInterval(setTime, 1000);
	
		function setTime() {
			++totalSeconds;
			secondsLabel.innerHTML = pad(totalSeconds % 60);
			minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
		}
		
		function pad(val) {
			var valString = val + "";
			if (valString.length < 2) {
			return "0" + valString;
			} else {
			return valString;
			}
			}

			
	}	else {
		$('.timer').toggle();
		bgnwrkt.innerHTML = 'Begin Workout';
		clearInterval(handle);
		handle = 0;
		}
			
});
*/

window.onload = () => {
	let minute = 0;
	let seconds = 0;
	let totalSeconds = 0;
	
	let intervalId = null;
	
	function startTimer() {
	  ++totalSeconds;
	  hour = Math.floor(totalSeconds /3600);
	  minute = Math.floor((totalSeconds - hour*3600)/60);
	  seconds = totalSeconds - (hour*3600 + minute*60);
  
	  document.getElementById("minutes").innerHTML =pad(parseInt(totalSeconds / 60));
	  document.getElementById("seconds").innerHTML =pad(totalSeconds % 60);
	}
  
	document.getElementById('start-btn').addEventListener('click', () => {
	  intervalId = setInterval(startTimer, 1000);
	})
	
	document.getElementById('stop-btn').addEventListener('click', () => {
	  if (intervalId)
		clearInterval(intervalId);
	});
	
	 
	document.getElementById('reset-btn').addEventListener('click', () => {
	   totalSeconds = 0;
	   document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds / 60));
	   document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
	});
  }

  function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
	return "0" + valString;
	} else {
	return valString;
	}
	}

function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
	
});

/*Exercise Randomize*/
var $exercises = $('.exercise .move');

function getRandomMove(){
    return $exercises.eq(Math.floor($exercises.length * Math.random()));
}

function randomMove(){
	var $outgoing = $exercises.filter(':visible');
	var $incoming = getRandomMove();
	

	$outgoing.fadeOut(500, 
		function(){
			$incoming.fadeIn(500).css("display", "flex")
		}
		);

}

/*Quote Randomize */
var $quotes = $('.quoteGroup .quote');

function getRandomQuote(){
    return $quotes.eq(Math.floor($quotes.length * Math.random()));
}

getRandomQuote().show();

setInterval(function(){ 
    var $outgoing = $quotes.filter(':visible');
    var $incoming = getRandomQuote();
    $outgoing.fadeOut(1000, function(){
        $incoming.fadeIn(1000);
    });
}, 10000);


/*Play Pause Breathing Button */
$('.animateBtn').click(function (){
	
	$('.orb').toggleClass('orb_1');
	$('.in').toggleClass('in_ani');
	$('.out').toggleClass('out_ani');

});

jQuery(window).load(function() {
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});











