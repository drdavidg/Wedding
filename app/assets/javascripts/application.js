// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//= require jquery-1.5.1.min
//= require jquery_ujs
//= require_tree .



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

});


