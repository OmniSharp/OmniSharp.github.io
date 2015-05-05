/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
// The original function has been modified to provide support for page linking
// In modern browsers HTML5 History.pushState is used to update location
// in older browsers native behavior of location.hash is used and
// no animated scroll occurs. In effect the navigation is progressively
// enhanced with animations on supporting browsers.
$(function() {
    $(document.body).on('click', '.page-scroll a', function(event) {
        if(history.pushState) {
          var $anchor = $(this),
            hash = $anchor.attr('href');
          event.preventDefault();
          // avoid dups in history hash
          if(window.location.hash !== hash) {
            history.pushState(null, null, hash);
          }
          $('html, body').stop().animate({
              scrollTop: $(hash).offset().top
          }, 1500, 'easeInOutExpo');
        }
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
