$(document).ready(function(){
	// ---- HIDE MOBIL NAVBAR ON CLICK -----
	$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

	// ---- SAME HEIGHT BOXES ----------
	var set_height = function(){
		$('.same-height-container').each(function(){
      var highestBox = 0;
      $('.same-height', this).each(function(){

          if($(this).height() > highestBox)
             highestBox = $(this).height();
      });
      $('.same-height',this).height(highestBox);
		});
	};

	set_height();

	// ---- SMOOTH SCROOLLING -----------
	var $root = $('html, body');

  $('.a-scroll').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

	// ---- Carousel speed -------------------
	$('.carousel').carousel({
	  interval: 3000
	})

  // ---- MODAL CUSTOM MESSAGE -------------------
  $('#contactModal').on('show.bs.modal', function (event) {
  	var button = $(event.relatedTarget);
		if(button.data('message')){
			var message = button.data('message').replace(/<\/?[^>]+(>|$)/g, "");
		} else {
			var message = button.data('message');
		};


  	var modal = $(this);
  	modal.find('.modal-body textarea').text(message);
  })

  // ----- HIDE CAROUSEL BUTTONS IF ONLY ONE BANNER ----
  $('.carousel-inner').each(function() {
		if ($(this).children('div').length === 1) $(this).siblings('.carousel-control, .carousel-indicators').hide();
	});

	// ---- FULL SIZE SECTIONS FIX ON ZOOM -------------------
	// var scrollOffset = [0,0,0]
	var $win = $(window);
	// var $doc = $(document);
	//
	// $win
	// .on('scroll', function(){
	//     // this is needed because scroll is triggered when zooming before the zoom event
	//     scrollOffset[2] = scrollOffset[1];
	//     scrollOffset[1] = scrollOffset[0];
	//     scrollOffset[0] = 100 / $win.height() * $win.scrollTop();
	//     //console.log('scroll event', scrollOffset);
	// })
	// .on('resize', function(){
	//     // set back the history because of multiple zooming events
	//     scrollOffset[0] = scrollOffset[1];
	//     scrollOffset[1] = scrollOffset[2];
	//     scrollOffset[2] = 0;
	//     //console.log('zoom event', scrollOffset);
	//     window.scrollTo(0, scrollOffset[0] / 100 * $win.height());
	// })

	// ---- Scroll Magic for predigt page -------------------
	//initialize scroll magic
  var controller = new ScrollMagic.Controller();

  // scroll magic
  var pageheight = $("#predigt-page").height() - ($("#sticky-box").height() / 2)*3;

  var sidebarScene = new ScrollMagic.Scene({
      duration: pageheight,
      offset: 1
    })
    .setPin("#sticky-box", {pushFollowers: false});

	$win
	.on('scroll', function(){
	  if ($(window).width() > 767) {
	  	controller.addScene([
		    sidebarScene
		  ]);
	  } else {
	  	controller.removeScene([
		    sidebarScene
		  ]);
	  };
	})
	.on('resize', function(){
	  if ($(window).width() > 767) {
	  	controller.addScene([
		    sidebarScene
		  ]);
	  } else {
	  	controller.removeScene([
		    sidebarScene
		  ]);
	  };
	})


	// ---- PARALLAX EFFECT
	//$.stellar({
	//	horizontalScrolling: false
	//});
	//$(window).resize(function() {
  //  $.stellar('refresh');
	//});
})
