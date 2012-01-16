// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require twitter/bootstrap
//= require galleria-1.2.6
//= require galleria.classic
//= require jquery.nivo.slider.pack
//= require jquery.nivo.slider
//= require jquery.nivo.gallery
//= require coin-slider
//= require jquery.orbit-1.2.3
//= require_tree .
//= require twitter/bootstrap
//= require jquery_ujs

$(document).ready(function(){
  $('a.lightbox').lightBox({
      fixedNavigation:true,
      imageLoading: "<%= asset_path 'lightbox-ico-loading.gif' %>",
      imageBtnPrev: "<%= asset_path 'lightbox-btn-prev.gif' %>",
      imageBtnNext: "<%= asset_path 'lightbox-btn-next.gif' %>",
      imageBtnClose: "<%= asset_path 'lightbox-btn-close.gif' %>",
      imageBlank: "<%= asset_path 'lightbox-blank.gif' %>",
  });
});

$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 3000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        directionNavHide: true, // Only show on hover
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel: false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav: true, // Use left & right arrows
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        captionOpacity: 0.8, // Universal caption opacity
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });
});

$(document).ready(function() {
    $('#gallery').nivoGallery();
});

$(document).ready(function() {
	$('#coin-slider').coinslider();
});

$(window).load(function() {
       $('#featured').orbit();
   });

   $('#gallery').galleria({
        width:500,
        height:500
    });
