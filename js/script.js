$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown()
    },
    function() {
        $(".sub_menu").stop().slideUp()
    }
);


var slide = $(".slide > img");
var sno = 0;
var eno = slide.length-1;
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $("slide[sno]").animate({
        left : "100%"
    }, 1000, function() {
        $(this).css({left : "-100%"})
    });
    sno++;
    if(sno > eno) sno = 0; 
    $("slide[sno]").animate({
        left : "0"
    }, 1000);
}


$(".tab").click(
    function() {
        $().hover
    },
)


