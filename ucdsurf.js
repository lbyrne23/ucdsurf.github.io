var sc_project=11110245; 
var sc_invisible=1; 
var sc_security="281ee02f"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript><div class="statcounter"><a title="counter for
tumblr" href="http://statcounter.com/tumblr/"
target="_blank"><img class="statcounter"
src="//c.statcounter.com/11110245/0/281ee02f/1/"
alt="counter for tumblr"></a></div></noscript>
<!-- End of StatCounter Code for Tumblr -->

<script>
$(document).ready(function(){
  //smooth scrolling to all links
  $("a, #landing a, footer a[href='#myPage']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if 
  });
})

$(document).ready(function () {

    $(".player").mb_YTPlayer();

});


var num = 650; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});