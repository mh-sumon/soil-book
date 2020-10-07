const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
//   Search bar
function myFunction() {
  var x = document.getElementById("search");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Icon Tooltip
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
// KNOW THE NATURE, SAVE THE EARTH
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "26px Verdana";
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("1", "white");
    ctx.strokeStyle = gradient;
    ctx.strokeText("Nurture  The  Nature ,  Save  The  Earth", 10, 70);
// Scroll to top 
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
        //  Breaking News
  $('#news-ticker').AcmeTicker({
    type:'vertical',/*vertical/horizontal/Marquee/type*/
    direction: 'down',/*up/down/left/right*/
		speed:1000,
});
        //  Calendar Section     
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var cnt = ["31","28","31","30","31","30","31","31","30","31","30","31"];
//cnt[1] = 29;
var time = new Date();
var month = months[time.getMonth()];
var year = time.getFullYear();
var day = time.getDay();
var date = time.getDate();
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;
var current = (day - date % 7 + 8) % 7 +1;
for(var i=1;i<=cnt[time.getMonth()];i++){
  if(current>35) current = 1;
  var str = "date"+(current);
  var val = i;
  if(i==date) val = '<div class="today">'+i+"</div>";
  document.getElementById(str).innerHTML = val;
  current+=1;
}
//  Load more Article & Gallery
$(document).ready(function(){
  $(".more-article").hide();
  $(".load-more").click(function(){
    $(".more-article").show(300);
    $(".load-more").hide();
  });
  $(".more-post").hide();
  $(".load-more-post").click(function(){
    $(".more-post").show(300);
    $(".load-more-post").hide();
  });
});
//  Related Article 
$(document).ready(function(){
  $("#in-science-item").hide();
  $(".in-science").removeClass("bg-danger");
  $(".in-science").click(function(){
    $("#in-science-item").show();
    $(".related-article-item").hide();
    $(".related-article").removeClass("bg-danger");
    $(".in-science").addClass("bg-danger");
  });
  $(".related-article").click(function(){
    $("#in-science-item").hide();
    $(".related-article-item").show();
    $(".in-science").removeClass("bg-danger");
    $(".related-article").addClass("bg-danger");
  });
});