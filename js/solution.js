(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
})(jQuery); // End of use strict

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv;
var vid = { 'videoId': 'a57usBpZMkk', 'suggestedQuality': 'hd720' }

function onYouTubePlayerAPIReady() {
  tv = new YT.Player('tv', { 
    videoId: 'a57usBpZMkk',
    suggestedQuality: 'hd720',
    events: { 
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'enablejsapi': 1,
      'showinfo': 0,
      'rel': 0,
      'loop': 1,
      'iv_load_policy': 3,
      'modestbranding': 1
    },
  });
  videoDialogPlayer = new YT.Player('videoDialogPlayer', {
    videoId: 'a57usBpZMkk',
    suggestedQuality: 'hd1080',
    events: { 
      'onReady': onPlayerReady2 
    },
    playerVars: { 
      'autoplay': 1, 
      'controls': 1, 
      'enablejsapi': 1, 
      'showinfo': 0, 
      'rel': 0, 
      'iv_load_policy': 3,
      'modestbranding': 1

    },
  });
}
function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.ENDED) {
    tv.playVideo();
  }
}
function onPlayerReady2() {
  videoDialogPlayer.loadVideoById(vid);
  videoDialogPlayer.stopVideo();
}

function onPlayerReady() {
  tv.loadVideoById(vid);
  tv.mute();
}

var videoOverlay = document.getElementById('header-overlay');
var headerPlayBtn = document.getElementById('play-btn');
$('#vidoeDialog').on('show.bs.modal', function (e) {
  videoOverlay.style["opacity"] = 0.7;
  videoDialogPlayer.playVideo();
  tv.pauseVideo();
});
$('#vidoeDialog').on('hidden.bs.modal', function () {
  videoOverlay.style["opacity"] = 0.5;
  videoDialogPlayer.stopVideo();
  tv.playVideo();
});